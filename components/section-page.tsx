import Link from 'next/link';
import { ArrowUpRight, Bookmark, CalendarDays, MessageCircle, Users } from 'lucide-react';
import CampusShell from '@/components/campus-shell';
import { clubs, opportunities, posts, resources } from '@/lib/campus-data';
import styles from './section-page.module.css';

type Kind = 'opportunities' | 'clubs' | 'resources' | 'community';

export default function SectionPage({ kind, title, kicker, description }: { kind: Kind; title: string; kicker: string; description: string }) {
  const config = {
    opportunities: { items: opportunities, icon: CalendarDays, meta: (x: any) => `${x.type} · ${x.deadline}`, href: (x: any) => `/discover/${x.id}` },
    clubs: { items: clubs, icon: Users, meta: (x: any) => `${x.category} · ${x.members} members`, href: (x: any) => `/clubs/${x.id}` },
    resources: { items: resources, icon: Bookmark, meta: (x: any) => `${x.type} · ${x.meta}`, href: (x: any) => `/resources/${x.id}` },
    community: { items: posts, icon: MessageCircle, meta: (x: any) => `${x.kind} · ${x.comments} comments`, href: (_x: any) => '/community' },
  }[kind];
  const Icon = config.icon;

  return <CampusShell><div className={styles.page}>
    <div className={styles.intro}><span>{kicker}</span><h1>{title}</h1><p>{description}</p></div>
    <div className={styles.toolbar}><div className={styles.filter}>ALL</div><div className={styles.filter}>TRENDING</div><div className={styles.filter}>RECENT</div></div>
    <div className={styles.list}>{config.items.map((x: any) => <Link href={config.href(x)} key={x.id} className={styles.card}>
      <div className={styles.icon}><Icon size={18}/></div><div className={styles.body}><span>{config.meta(x)}</span><h2>{x.title || x.name}</h2><p>{x.body || x.activity || x.reason || x.meta}</p>{x.tags && <div className={styles.tags}>{x.tags.map((t: string) => <i key={t}>{t}</i>)}</div>}</div><ArrowUpRight className={styles.arrow} size={18}/>
    </Link>)}</div>
  </div></CampusShell>;
}
