'use client';
import Link from 'next/link';
import {ArrowRight,ArrowUpRight,Bookmark,CalendarDays,MapPin,Sparkles} from 'lucide-react';
import CampusShell from '@/components/campus-shell';
import {clubs,opportunities,posts,resources} from '@/lib/campus-data';
import {useCampusCount,useCampusToggle} from '@/lib/campus-store';
import styles from './home.module.css';

export default function Home(){
 const saved=useCampusCount('saved'); const rsvps=useCampusCount('rsvps'); const followed=useCampusCount('followed');
 const [featuredSaved,toggleFeatured]=useCampusToggle('saved','op1');
 const openCopilot=()=>window.dispatchEvent(new Event('campus-open-copilot'));
 return <CampusShell><main className={styles.page}>
  <section className={styles.hero}>
   <div className={styles.heroTop}><span>MONDAY / 15 SEPTEMBER 2026</span><span>STUDENT WORKSPACE / FRONTEND MODE</span></div>
   <div className={styles.heroGrid}>
    <div className={styles.heroCopy}><span className={styles.kicker}>CAMPUSOS / OVERVIEW</span><h1>See what is happening on campus.</h1><p className={styles.lede}>A practical place for opportunities, clubs, useful resources, and student conversations. Save what matters and come back when you are ready.</p><div className={styles.actions}><Link href="/discover" className={styles.primary}>Browse opportunities <ArrowUpRight size={14}/></Link><button className={styles.secondary} onClick={openCopilot}><Sparkles size={14}/> Ask Campus</button></div></div>
    <div className={styles.heroNote}><div className={styles.map}><span className={styles.mapLineOne}/><span className={styles.mapLineTwo}/><i className={styles.pinOne}/><i className={styles.pinTwo}/><i className={styles.pinThree}/><b>LOCAL INDEX</b></div><p>Built for the ordinary college day: deciding whether to join, attend, save, ask, or skip.</p></div>
   </div>
  </section>

  <section className={styles.today}><div className={styles.sectionLabel}>01 / TODAY</div><div className={styles.todayGrid}><div><h2>Start with what has a date.</h2><p>These are the campus items closest to you right now.</p></div><div className={styles.eventList}>{opportunities.slice(0,3).map((item)=><Link href={`/discover/${item.id}`} key={item.id} className={styles.event}><span className={styles.eventDate}>{item.date}</span><div><small>{item.type} / {item.deadline}</small><strong>{item.title}</strong><span><MapPin size={12}/> {item.place}</span></div><ArrowRight size={16}/></Link>)}</div></div></section>

  <section className={styles.feature}><div className={styles.sectionLabel}>02 / WORTH A LOOK</div><div className={styles.featureGrid}><div className={styles.featureIndex}><span>BUILD FOR BHARAT</span><strong>01</strong><p>Hackathon</p></div><div className={styles.featureCopy}><h2>{opportunities[0].title}</h2><p>{opportunities[0].reason}. Bring a team, a working idea, or a useful skill.</p><div className={styles.metaRow}><span><CalendarDays size={13}/> {opportunities[0].date}</span><span><MapPin size={13}/> {opportunities[0].place}</span></div><div className={styles.actions}><Link href="/discover/op1" className={styles.primary}>Read the brief <ArrowUpRight size={14}/></Link><button className={styles.secondary} onClick={toggleFeatured}><Bookmark size={14}/>{featuredSaved?'Saved':'Save for later'}</button></div></div></div></section>

  <section className={styles.people}><div className={styles.sectionLabel}>03 / AROUND YOU</div><div className={styles.peopleHead}><h2>Campus is people first.</h2><Link href="/community">Open community <ArrowUpRight size={14}/></Link></div><div className={styles.postGrid}>{posts.map((post)=><Link href="/community" className={styles.post} key={post.id}><span className={styles.postKind}>{post.kind}</span><h3>{post.title}</h3><p>{post.body}</p><small>{post.author}</small></Link>)}</div></section>

  <section className={styles.library}><div className={styles.sectionLabel}>04 / USEFUL MATERIAL</div><div className={styles.libraryGrid}><div><h2>Keep the good references close.</h2><p>Four starting points for classes, labs, interviews, and building on the web.</p><Link href="/resources" className={styles.textLink}>Browse resources <ArrowUpRight size={14}/></Link></div><div className={styles.resourceList}>{resources.map((resource)=><Link href={`/resources/${resource.id}`} key={resource.id}><span>{resource.type}</span><strong>{resource.title}</strong><small>{resource.meta}</small><ArrowUpRight size={14}/></Link>)}</div></div></section>

  <section className={styles.close}><span className={styles.kicker}>YOUR CAMPUS / YOUR SHORTLIST</span><h2>Come back to the things you chose.</h2><p>{saved||rsvps||followed?'Your saved activity is kept on this device.':'Save an opportunity, follow a club, or bookmark a useful resource. Your choices stay on this device.'}</p><div className={styles.closeActions}><Link href="/profile" className={styles.primary}>Open profile <ArrowUpRight size={14}/></Link><Link href="/clubs" className={styles.secondary}>Find a club <ArrowRight size={14}/></Link></div></section>
 </main></CampusShell>;
}
