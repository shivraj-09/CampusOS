'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Plus, Send, X } from 'lucide-react';
import { posts as seededPosts } from '@/lib/campus-data';
import { useCampusToggle } from '@/lib/campus-store';
import styles from './community-feed.module.css';

function PostCard({ post }: { post: (typeof seededPosts)[number] }) {
  const [liked, toggleLike] = useCampusToggle('likes', post.id);
  return <article className={styles.card}>
    <div className={styles.avatar}>{post.mark}</div>
    <div className={styles.content}>
      <div className={styles.meta}><strong>{post.author}</strong><span>{post.kind}</span></div>
      <h2>{post.title}</h2><p>{post.body}</p>
      <div className={styles.actions}><button className={liked ? styles.liked : ''} onClick={toggleLike}><Heart size={15} fill={liked ? 'currentColor' : 'none'} /> {post.likes + (liked ? 1 : 0)}</button><button><MessageCircle size={15}/> {post.comments}</button></div>
    </div>
  </article>;
}

export default function CommunityFeed() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(''); const [body, setBody] = useState('');
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!title.trim() || !body.trim()) return; const current = JSON.parse(localStorage.getItem('campus-posts') || '[]'); current.unshift({ id: `post-${Date.now()}`, author: 'Shivraj', mark: 'S', kind: 'Discussion', title: title.trim(), body: body.trim(), likes: 0, comments: 0 }); localStorage.setItem('campus-posts', JSON.stringify(current)); window.dispatchEvent(new Event('campus-store-change')); setTitle(''); setBody(''); setOpen(false); };
  return <section className={styles.wrap}><div className={styles.header}><div><span>LIVE CAMPUS FEED</span><h1>People are building.</h1></div><button onClick={() => setOpen(true)}><Plus size={16}/> Start a discussion</button></div><div className={styles.feed}>{seededPosts.map(post => <PostCard key={post.id} post={post}/>)}</div>{open&&<div className={styles.overlay}><form className={styles.modal} onSubmit={submit}><button type="button" className={styles.close} onClick={() => setOpen(false)}><X size={18}/></button><span>NEW DISCUSSION</span><h2>What are you thinking?</h2><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Give your post a clear title" autoFocus/><textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Share context, ask a question, or show what you built..." rows={6}/><button className={styles.publish} type="submit"><Send size={15}/> Publish to campus</button></form></div>}</section>;
}
