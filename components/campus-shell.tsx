'use client';
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Bell,BookOpen,ChevronRight,Command,Compass,Home,LayoutGrid,Menu,MessageCircle,Search,Sparkles,Sun,Users,X,Zap} from 'lucide-react';
import {opportunities,clubs,resources,posts} from '@/lib/campus-data';
import CampusCopilot from '@/components/campus-copilot';
import styles from './campus-shell.module.css';

const nav=[['/','Overview',Home],['/discover','Discover',Compass],['/clubs','Clubs',Users],['/resources','Resources',BookOpen],['/community','Community',MessageCircle]] as const;
const notices=[{id:'n1'},{id:'n2'},{id:'n3'},{id:'n4'}];

export default function CampusShell({children}:{children:React.ReactNode}){
 const pathname=usePathname(); const [mobile,setMobile]=useState(false); const [palette,setPalette]=useState(false); const [dark,setDark]=useState(false); const [query,setQuery]=useState(''); const [selected,setSelected]=useState(0); const [unread,setUnread]=useState(0);
 const results=useMemo(()=>{const q=query.trim().toLowerCase();if(!q)return[];return [...opportunities.map(x=>({title:x.title,meta:x.type,href:`/discover/${x.id}`})),...clubs.map(x=>({title:x.name,meta:'Club',href:`/clubs/${x.id}`})),...resources.map(x=>({title:x.title,meta:x.type,href:`/resources/${x.id}`})),...posts.map(x=>({title:x.title,meta:'Community',href:'/community'}))].filter(x=>(x.title+' '+x.meta).toLowerCase().includes(q)).slice(0,6)},[query]);
 useEffect(()=>{const sync=()=>{try{const read=JSON.parse(localStorage.getItem('campus-read-notifications')||'[]');setUnread(notices.filter(n=>!read.includes(n.id)).length)}catch{setUnread(notices.length)}};sync();window.addEventListener('campus-store-change',sync);return()=>window.removeEventListener('campus-store-change',sync)},[]);
 useEffect(()=>setSelected(0),[query]);
 useEffect(()=>{const on=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setPalette(v=>!v);setQuery('');setSelected(0);return}if(e.key==='Escape'){setPalette(false);setMobile(false);return}if(!palette)return;if(e.key==='ArrowDown'){e.preventDefault();setSelected(v=>Math.min(v+1,Math.max(results.length-1,0)))}if(e.key==='ArrowUp'){e.preventDefault();setSelected(v=>Math.max(v-1,0))}if(e.key==='Enter'&&results[selected]){e.preventDefault();window.location.href=results[selected].href}};window.addEventListener('keydown',on);return()=>window.removeEventListener('keydown',on)},[palette,selected,results]);
 const openPalette=(nextQuery='')=>{setPalette(true);setQuery(nextQuery);setSelected(0)};
 return <div className={`${styles.app} ${dark?styles.dark:''}`}>
  <aside className={`${styles.sidebar} ${mobile?styles.mobileOpen:''}`}>
   <div className={styles.brand}><div className={styles.mark}>C</div><div><strong>Campus<span>OS</span></strong><small>STUDENT COMMAND</small></div><button className={styles.close} onClick={()=>setMobile(false)} aria-label="Close navigation"><X size={18}/></button></div>
   <div className={styles.campusBadge}><span className={styles.liveDot}/>CAMPUS · ONLINE</div>
   <nav className={styles.nav} aria-label="Primary navigation">{nav.map(([href,label,Icon])=><Link key={href} href={href} onClick={()=>setMobile(false)} className={pathname===href?styles.active:''}><Icon size={17}/><span>{label}</span>{label==='Discover'&&<b>5</b>}</Link>)}<Link href="/profile" onClick={()=>setMobile(false)} className={pathname==='/profile'?styles.active:''}><LayoutGrid size={17}/><span>Profile</span></Link></nav>
   <div className={styles.sideCard}><div className={styles.sideOrb}><Sparkles size={17}/></div><div><b>Campus Copilot</b><p>Ask about deadlines, clubs or this week.</p></div><button onClick={()=>openPalette()} aria-label="Open campus search"><Command size={14}/></button></div>
   <div className={styles.sideBottom}><div className={styles.miniAvatar}>S</div><div><b>Shivraj</b><small>Computer Engineering</small></div><span className={styles.streak}>12 day streak</span></div>
  </aside>
  {mobile&&<button className={styles.backdrop} onClick={()=>setMobile(false)} aria-label="Close menu"/>}
  <main className={styles.main}>
   <header className={styles.topbar}><button className={styles.menu} onClick={()=>setMobile(true)} aria-label="Open navigation"><Menu size={20}/></button><button className={styles.search} onClick={()=>openPalette()} aria-label="Search campus"><Search size={16}/><span>Search campus...</span><kbd>⌘ K</kbd></button><div className={styles.topActions}><button title="Toggle theme" aria-label="Toggle theme" onClick={()=>setDark(v=>!v)}><Sun size={17}/></button><Link href="/notifications" title="Notifications" aria-label={`Notifications${unread?`, ${unread} unread`:''}`}><Bell size={17}/>{unread>0&&<i/>}</Link><Link className={styles.profileDot} href="/profile" aria-label="Open profile">S</Link></div></header>
   {children}
  </main>
  <CampusCopilot/>
  {palette&&<div className={styles.overlay} onMouseDown={()=>setPalette(false)}><div className={styles.palette} role="dialog" aria-modal="true" aria-label="Campus search" onMouseDown={e=>e.stopPropagation()}><div className={styles.paletteInput}><Search size={18}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search people, opportunities, clubs..." aria-label="Search campus"/><kbd>ESC</kbd></div>{query? <div className={styles.results}>{results.length?results.map((r,i)=><Link key={r.title} href={r.href} aria-selected={i===selected} className={i===selected?styles.selectedResult:''} onMouseEnter={()=>setSelected(i)} onClick={()=>setPalette(false)}><span>{r.title}</span><small>{r.meta}<ChevronRight size={14}/></small></Link>):<div className={styles.empty}>No campus matches yet.</div>}</div>:<div className={styles.shortcuts}><button onClick={()=>setQuery('hackathon')}><Zap size={15}/> Find opportunities <kbd>↵</kbd></button><button onClick={()=>setQuery('club')}><Users size={15}/> Explore clubs <kbd>↵</kbd></button><button onClick={()=>setQuery('react')}><BookOpen size={15}/> Find resources <kbd>↵</kbd></button></div>}</div></div>}
 </div>
}
