'use client';
import { useState } from 'react';
import { Bell, CheckCheck, ChevronRight } from 'lucide-react';
import CampusShell from '@/components/campus-shell';
import styles from './notifications.module.css';

const initial=[
 {id:'n1',title:'Applied AI Systems is almost full',body:'The workshop has seats available now. RSVP if you want to attend.',time:'12 min ago',unread:true},
 {id:'n2',title:'Build for Bharat deadline is approaching',body:'You have 4 days left to submit your team.',time:'2 hr ago',unread:true},
 {id:'n3',title:'CodeCraft posted a new activity',body:'Competitive programming jam is happening this week.',time:'Yesterday',unread:false},
];
export default function Notifications(){const [items,setItems]=useState(initial);const unread=items.filter(x=>x.unread).length;return <CampusShell><main className={styles.page}><div className={styles.head}><div><span>ACTIVITY · INBOX</span><h1>Notifications.</h1><p>Small signals that keep your campus week moving.</p></div><button onClick={()=>setItems(v=>v.map(x=>({...x,unread:false})))}><CheckCheck size={15}/> Mark all read</button></div><div className={styles.count}>{unread} unread</div><div className={styles.list}>{items.map(item=><article className={item.unread?styles.unread:styles.item} key={item.id}><div className={styles.icon}><Bell size={16}/></div><div><div className={styles.row}><h2>{item.title}</h2><small>{item.time}</small></div><p>{item.body}</p></div><ChevronRight size={16}/></article>)}</div></main></CampusShell>}
