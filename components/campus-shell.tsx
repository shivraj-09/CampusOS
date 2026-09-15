'use client';
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Bell,BookOpen,Compass,Home,LayoutGrid,Menu,MessageCircle,Search,Sparkles,Users,X} from 'lucide-react';
import {opportunities,clubs,resources,posts} from '@/lib/campus-data';
import CampusCopilot from '@/components/campus-copilot';
import styles from './campus-shell.module.css';

const nav=[['/','01','OVERVIEW',Home],['/discover','02','DISCOVER',Compass],['/clubs','03','CLUBS',Users],['/resources','04','RESOURCES',BookOpen],['/community','05','COMMUNITY',MessageCircle],['/profile','06','PROFILE',LayoutGrid]] as const;
const notices=['Applied AI Systems Workshop is tomorrow.','Build for Bharat Hackathon closes in four days.','Frontend Fellowship Night is listed in Discover.'];
const openCopilot=()=>window.dispatchEvent(new Event('campus-open-copilot'));

export default function CampusShell({children}:{children:React.ReactNode}){
 const pathname=usePathname();
 const [mobile,setMobile]=useState(false); const [palette,setPalette]=useState(false); const [query,setQuery]=useState(''); const [selected,setSelected]=useState(0); const [unread,setUnread]=useState(3);
 const results=useMemo(()=>{const q=query.trim().toLowerCase();if(!q)return[];return [...opportunities.map(x=>({title:x.title,meta:x.type,href:`/discover/${x.id}`})),...clubs.map(x=>({title:x.name,meta:'Club',href:`/clubs/${x.id}`})),...resources.map(x=>({title:x.title,meta:x.type,href:`/resources/${x.id}`})),...posts.map(x=>({title:x.title,meta:'Community',href:'/community'}))].filter(x=>(x.title+' '+x.meta).toLowerCase().includes(q)).slice(0,7)},[query]);
 useEffect(()=>{const sync=()=>{try{const read=JSON.parse(localStorage.getItem('campus-read-notifications')||'[]');setUnread(notices.length-read.filter((x:string)=>x.startsWith('n')).length)}catch{setUnread(notices.length)}};sync();window.addEventListener('campus-store-change',sync);return()=>window.removeEventListener('campus-store-change',sync)},[]);
 useEffect(()=>setSelected(0),[query]);
 useEffect(()=>{const on=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setPalette(v=>!v);setQuery('');return}if(e.key==='Escape'){setPalette(false);setMobile(false);return}if(!palette)return;if(e.key==='ArrowDown'){e.preventDefault();setSelected(v=>Math.min(v+1,Math.max(results.length-1,0)))}if(e.key==='ArrowUp'){e.preventDefault();setSelected(v=>Math.max(v-1,0))}if(e.key==='Enter'&&results[selected])window.location.href=results[selected].href};window.addEventListener('keydown',on);return()=>window.removeEventListener('keydown',on)},[palette,selected,results]);
 const isActive=(href:string)=>href==='/'?pathname==='/':pathname===href||pathname.startsWith(`${href}/`);
 const markRead=()=>{localStorage.setItem('campus-read-notifications',JSON.stringify(['n1','n2','n3']));setUnread(0);window.dispatchEvent(new Event('campus-store-change'))};
 return <div className={styles.app}>
  <aside className={`${styles.sidebar} ${mobile?styles.mobileOpen:''}`}>
   <div className={styles.brand}><Link href="/" className={styles.wordmark}>Campus<span>OS</span></Link><button className={styles.close} onClick={()=>setMobile(false)} aria-label="Close navigation"><X size={18}/></button><p>STUDENT WORKSPACE</p></div>
   <div className={styles.dateBlock}><span>MON 15 SEP 2026</span><b>LOCAL / FRONTEND MODE</b></div>
   <nav className={styles.nav} aria-label="Primary navigation">{nav.map(([href,num,label,Icon])=>{const active=isActive(href);return <Link key={href} href={href} onClick={()=>setMobile(false)} className={active?styles.active:''} aria-current={active?'page':undefined}><span className={styles.num}>{num}</span><Icon size={14}/><span>{label}</span></Link>})}</nav>
   <div className={styles.railNote}><span>THE IDEA</span><p>One place to notice what matters on campus and decide what to do next.</p><button onClick={openCopilot}><Sparkles size={13}/> Ask Campus</button></div>
   <div className={styles.sideBottom}><div className={styles.avatar}>S</div><div><b>Shivraj</b><small>Computer Engineering</small></div></div>
  </aside>
  {mobile&&<button className={styles.backdrop} onClick={()=>setMobile(false)} aria-label="Close menu"/>}
  <main className={styles.main}>
   <header className={styles.topbar}><button className={styles.menu} onClick={()=>setMobile(true)} aria-label="Open navigation"><Menu size={20}/></button><button className={styles.search} onClick={()=>setPalette(true)} aria-label="Search campus"><Search size={15}/><span>Search campus</span><kbd>⌘K</kbd></button><div className={styles.topActions}><button className={styles.askTop} onClick={openCopilot}><Sparkles size={14}/> ASK CAMPUS</button><div className={styles.noticeWrap}><button className={styles.iconButton} onClick={()=>setUnread(unread?0:3)} aria-label={`Notifications${unread?`, ${unread} unread`:''}`}><Bell size={17}/>{unread>0&&<i/>}</button>{unread>0&&<div className={styles.noticeMenu}><div><b>Campus notices</b><button onClick={markRead}>Mark read</button></div>{notices.map((n,i)=><p key={n}><span>0{i+1}</span>{n}</p>)}</div>}</div><Link className={styles.profileDot} href="/profile" aria-label="Open profile">S</Link></div></header>
   <div className={styles.pageTransition}>{children}</div>
  </main>
  <CampusCopilot/>
  {palette&&<div className={styles.overlay} onMouseDown={()=>setPalette(false)}><div className={styles.palette} role="dialog" aria-modal="true" aria-label="Search campus" onMouseDown={e=>e.stopPropagation()}><div className={styles.paletteInput}><Search size={18}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search opportunities, clubs, resources..."/><kbd>ESC</kbd></div>{query?<div className={styles.results}>{results.length?results.map((r,i)=><Link key={`${r.meta}-${r.title}`} href={r.href} className={i===selected?styles.selectedResult:''} onMouseEnter={()=>setSelected(i)} onClick={()=>setPalette(false)}><span>{r.title}</span><small>{r.meta}</small></Link>):<div className={styles.empty}>No matches in the campus index.</div>}</div>:<div className={styles.shortcuts}><button onClick={()=>setQuery('hackathon')}>Find an opportunity</button><button onClick={()=>setQuery('club')}>Find a club</button><button onClick={()=>setQuery('roadmap')}>Find a resource</button></div>}</div></div>}
 </div>
}
