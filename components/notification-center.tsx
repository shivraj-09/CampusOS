'use client';

import { Bell, CheckCheck, CalendarDays, MessageCircle, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './notification-center.module.css';

type Notice = { id: string; title: string; body: string; kind: 'opportunity' | 'community' | 'copilot'; time: string };

const seed: Notice[] = [
  { id: 'n1', title: 'Hackathon deadline is close', body: 'Build for Bharat closes in 4 days. You have already viewed it.', kind: 'opportunity', time: '2h' },
  { id: 'n2', title: 'Workshop seats opened', body: 'Applied AI Systems is accepting students again.', kind: 'opportunity', time: '5h' },
  { id: 'n3', title: 'Your campus is active', body: 'Aarav is looking for a backend teammate for the hackathon.', kind: 'community', time: '1d' },
  { id: 'n4', title: 'Copilot has a suggestion', body: 'There are 2 urgent opportunities worth checking this week.', kind: 'copilot', time: '1d' },
];

const key = 'campus-read-notifications';
const readIds = () => { try { return JSON.parse(localStorage.getItem(key) || '[]') as string[]; } catch { return []; } };

export default function NotificationCenter() {
  const [read, setRead] = useState<string[]>([]);
  const [dismissed, setDismissed] = useState<string[]>([]);
  useEffect(() => setRead(readIds()), []);
  const markRead = (id: string) => { const next = read.includes(id) ? read : [...read, id]; setRead(next); localStorage.setItem(key, JSON.stringify(next)); };
  const markAll = () => { const ids = seed.map(n => n.id); setRead(ids); localStorage.setItem(key, JSON.stringify(ids)); };
  const visible = seed.filter(n => !dismissed.includes(n.id));
  const icon = (kind: Notice['kind']) => kind === 'opportunity' ? <CalendarDays size={16} /> : kind === 'community' ? <MessageCircle size={16} /> : <Sparkles size={16} />;
  return <section className={styles.panel}>
    <div className={styles.head}><div><span>ACTIVITY CENTER</span><h1>Notifications</h1><p>{seed.length - read.length} things need your attention.</p></div><button onClick={markAll}><CheckCheck size={15}/> Mark all read</button></div>
    <div className={styles.list}>{visible.map(n => <article key={n.id} className={`${styles.item} ${read.includes(n.id) ? styles.read : ''}`} onClick={() => markRead(n.id)}><div className={styles.icon}>{icon(n.kind)}</div><div className={styles.copy}><div><h2>{n.title}</h2><time>{n.time}</time></div><p>{n.body}</p></div><button className={styles.dismiss} aria-label={`Dismiss ${n.title}`} onClick={e => { e.stopPropagation(); setDismissed(v => [...v, n.id]); }}><X size={14}/></button></article>)}</div>
  </section>;
}
