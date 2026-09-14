'use client';

import { CheckCheck, CalendarDays, MessageCircle, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './notification-center.module.css';

type Notice = { id: string; title: string; body: string; kind: 'opportunity' | 'community' | 'copilot'; time: string };

const seed: Notice[] = [
  { id: 'n1', title: 'Hackathon deadline is close', body: 'Build for Bharat closes in 4 days. You have already viewed it.', kind: 'opportunity', time: '2h' },
  { id: 'n2', title: 'Workshop seats opened', body: 'Applied AI Systems is accepting students again.', kind: 'opportunity', time: '5h' },
  { id: 'n3', title: 'Your campus is active', body: 'Aarav is looking for a backend teammate for the hackathon.', kind: 'community', time: '1d' },
  { id: 'n4', title: 'Copilot has a suggestion', body: 'There are 2 urgent opportunities worth checking this week.', kind: 'copilot', time: '1d' },
];

const readKey = 'campus-read-notifications';
const dismissedKey = 'campus-dismissed-notifications';
const readIds = () => { try { const value = JSON.parse(localStorage.getItem(readKey) || '[]'); return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []; } catch { return []; } };
const dismissedIds = () => { try { const value = JSON.parse(localStorage.getItem(dismissedKey) || '[]'); return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []; } catch { return []; } };

export default function NotificationCenter() {
  const [read, setRead] = useState<string[]>([]);
  const [dismissed, setDismissed] = useState<string[]>([]);

  useEffect(() => {
    setRead(readIds());
    setDismissed(dismissedIds());
  }, []);

  const markRead = (id: string) => {
    const next = read.includes(id) ? read : [...read, id];
    setRead(next);
    localStorage.setItem(readKey, JSON.stringify(next));
    window.dispatchEvent(new Event('campus-store-change'));
  };

  const markAll = () => {
    const ids = seed.map((notice) => notice.id);
    setRead(ids);
    localStorage.setItem(readKey, JSON.stringify(ids));
    window.dispatchEvent(new Event('campus-store-change'));
  };

  const dismiss = (id: string) => {
    const next = dismissed.includes(id) ? dismissed : [...dismissed, id];
    setDismissed(next);
    localStorage.setItem(dismissedKey, JSON.stringify(next));
    window.dispatchEvent(new Event('campus-store-change'));
  };

  const visible = seed.filter((notice) => !dismissed.includes(notice.id));
  const unreadCount = seed.filter((notice) => !read.includes(notice.id)).length;
  const icon = (kind: Notice['kind']) => kind === 'opportunity' ? <CalendarDays size={16} /> : kind === 'community' ? <MessageCircle size={16} /> : <Sparkles size={16} />;

  return <section className={styles.panel}>
    <div className={styles.head}>
      <div><span>ACTIVITY CENTER</span><h1>Notifications</h1><p>{unreadCount} {unreadCount === 1 ? 'thing needs' : 'things need'} your attention.</p></div>
      <button onClick={markAll} disabled={!unreadCount} aria-label="Mark all notifications as read"><CheckCheck size={15}/> {unreadCount ? 'Mark all read' : 'All read'}</button>
    </div>
    <div className={styles.list}>
      {visible.map((notice) => <article key={notice.id} className={`${styles.item} ${read.includes(notice.id) ? styles.read : ''}`} onClick={() => markRead(notice.id)} role="button" tabIndex={0} aria-label={`${notice.title}. ${read.includes(notice.id) ? 'Read' : 'Unread'}`} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); markRead(notice.id); } }}>
        <div className={styles.icon}>{icon(notice.kind)}</div>
        <div className={styles.copy}><div><h2>{notice.title}</h2><time>{notice.time}</time></div><p>{notice.body}</p></div>
        <button className={styles.dismiss} aria-label={`Dismiss ${notice.title}`} onClick={(event) => { event.stopPropagation(); dismiss(notice.id); }}><X size={14}/></button>
      </article>)}
      {!visible.length && <div className={styles.empty}>You’re all caught up. New campus activity will appear here.</div>}
    </div>
  </section>;
}
