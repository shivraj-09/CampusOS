'use client';

import Link from 'next/link';
import { ArrowLeft, Bookmark, CalendarCheck, Check, Clock3, MapPin } from 'lucide-react';
import CampusShell from '@/components/campus-shell';
import { useCampusToggle } from '@/lib/campus-store';
import styles from './detail-page.module.css';

type Detail = { id:string; title:string; eyebrow:string; description:string; meta:string[]; tags:string[]; body:string[]; kind:'opportunity'|'club'|'resource'; };

export default function DetailPage({ detail }: { detail: Detail }) {
  const storeKey = detail.kind === 'opportunity' ? 'saved' : detail.kind === 'club' ? 'followed' : 'bookmarks';
  const [active, toggle] = useCampusToggle(storeKey, detail.id);
  const [rsvp, toggleRsvp] = useCampusToggle('rsvps', detail.id);
  const isOpportunity = detail.kind === 'opportunity';
  const label = detail.kind === 'club' ? (active ? 'Following' : 'Follow club') : detail.kind === 'resource' ? (active ? 'Saved' : 'Save resource') : (active ? 'Saved' : 'Save opportunity');

  return <CampusShell><main className={styles.wrap}>
    <Link href={detail.kind === 'opportunity' ? '/discover' : detail.kind === 'club' ? '/clubs' : '/resources'} className={styles.back}><ArrowLeft size={16}/> Back</Link>
    <section className={styles.hero}>
      <div className={styles.eyebrow}>{detail.eyebrow}</div>
      <h1>{detail.title}</h1>
      <p className={styles.lead}>{detail.description}</p>
      <div className={styles.meta}>{detail.meta.map((item,i)=><span key={i}>{i===0?<CalendarCheck size={16}/>:i===1?<MapPin size={16}/>:<Clock3 size={16}/>} {item}</span>)}</div>
      <div className={styles.actions}>
        <button onClick={toggle} className={active ? styles.primary : styles.secondary}>{active ? <Check size={17}/> : <Bookmark size={17}/>} {label}</button>
        {isOpportunity && <button onClick={toggleRsvp} className={rsvp ? styles.primary : styles.secondary}>{rsvp ? <Check size={17}/> : <CalendarCheck size={17}/>} {rsvp ? 'RSVP confirmed' : 'RSVP'}</button>}
      </div>
    </section>
    <section className={styles.content}>
      <article className={styles.article}>{detail.body.map((p,i)=><p key={i}>{p}</p>)}</article>
      <aside className={styles.side}>
        <div className={styles.sideCard}><span className={styles.sideLabel}>WHY IT MATTERS</span><h3>Built around your momentum.</h3><p>This detail page is part of CampusOS's personalized student layer. Your actions persist locally in the demo.</p></div>
        <div className={styles.tags}>{detail.tags.map(t=><span key={t}>{t}</span>)}</div>
      </aside>
    </section>
  </main></CampusShell>;
}
