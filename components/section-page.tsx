'use client';

import Link from 'next/link';
import { ArrowUpRight, Bookmark, CalendarDays, MessageCircle, Search, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import CampusShell from '@/components/campus-shell';
import { clubs, opportunities, posts, resources } from '@/lib/campus-data';
import styles from './section-page.module.css';

type Kind = 'opportunities' | 'clubs' | 'resources' | 'community';
type Filter = 'ALL' | 'TRENDING' | 'RECENT';

export default function SectionPage({ kind, title, kicker, description }: { kind: Kind; title: string; kicker: string; description: string }) {
  const [filter, setFilter] = useState<Filter>('ALL');
  const [query, setQuery] = useState('');
  const config = {
    opportunities: { items: opportunities, icon: CalendarDays, meta: (x: any) => `${x.type} · ${x.deadline}`, href: (x: any) => `/discover/${x.id}` },
    clubs: { items: clubs, icon: Users, meta: (x: any) => `${x.category} · ${x.members} members`, href: (x: any) => `/clubs/${x.id}` },
    resources: { items: resources, icon: Bookmark, meta: (x: any) => `${x.type} · ${x.meta}`, href: (x: any) => `/resources/${x.id}` },
    community: { items: posts, icon: MessageCircle, meta: (x: any) => `${x.kind} · ${x.comments} comments`, href: (_x: any) => '/community' },
  }[kind];
  const Icon = config.icon;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = [...config.items] as any[];
    if (filter === 'TRENDING') items = items.sort((a, b) => (b.likes ?? b.members ?? 0) - (a.likes ?? a.members ?? 0));
    if (filter === 'RECENT') items = items.reverse();
    if (q) items = items.filter(x => `${x.title ?? x.name} ${x.type ?? ''} ${x.category ?? ''} ${x.body ?? ''} ${x.activity ?? ''} ${(x.tags ?? []).join(' ')}`.toLowerCase().includes(q));
    return items;
  }, [config.items, filter, query]);

  return <CampusShell><div className={styles.page}>
    <div className={styles.intro}><span>{kicker}</span><h1>{title}</h1><p>{description}</p></div>
    <div className={styles.toolbar}>
      <div className={styles.search}><Search size={15}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder={`Search ${kind}...`} aria-label={`Search ${kind}`}/></div>
      {(['ALL', 'TRENDING', 'RECENT'] as Filter[]).map(item => <button key={item} onClick={() => setFilter(item)} className={`${styles.filter} ${filter === item ? styles.selected : ''}`}>{item}</button>)}
    </div>
    <div className={styles.count}>{filtered.length} {kind === 'community' ? 'conversations' : kind}</div>
    <div className={styles.list}>{filtered.map((x: any) => <Link href={config.href(x)} key={x.id} className={styles.card}>
      <div className={styles.icon}><Icon size={18}/></div><div className={styles.body}><span>{config.meta(x)}</span><h2>{x.title || x.name}</h2><p>{x.body || x.activity || x.reason || x.meta}</p>{x.tags && <div className={styles.tags}>{x.tags.map((t: string) => <i key={t}>{t}</i>)}</div>}</div><ArrowUpRight className={styles.arrow} size={18}/>
    </Link>)}</div>
    {!filtered.length && <div className={styles.empty}>Nothing matches that search. Try a broader phrase.</div>}
  </div></CampusShell>;
}
