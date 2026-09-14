'use client';

import { useEffect, useMemo, useState } from 'react';
import { Heart, MessageCircle, Plus, Send, X } from 'lucide-react';
import { posts as seededPosts } from '@/lib/campus-data';
import { useCampusToggle } from '@/lib/campus-store';
import styles from './community-feed.module.css';

type Post = { id:string; author:string; mark:string; kind:string; title:string; body:string; likes:number; comments:number };
type Comment = { id:string; author:string; mark:string; body:string };
const postKey='campus-posts';
const commentKey='campus-comments';
const readPosts=():Post[]=>{try{const value=JSON.parse(localStorage.getItem(postKey)||'[]');return Array.isArray(value)?value:[]}catch{return[]}};
const readComments=():Record<string,Comment[]>=>{try{const value=JSON.parse(localStorage.getItem(commentKey)||'{}');return value&&typeof value==='object'?value:{}}catch{return{}}};
const seededComments:Record<string,Comment[]>={
 p1:[{id:'c1',author:'Riya Kapoor',mark:'RK',body:'I can help with the frontend if you still need someone.'},{id:'c2',author:'Arjun Singh',mark:'AS',body:'Would love to see the problem statement before joining.'}],
 p2:[{id:'c3',author:'Neha Jain',mark:'NJ',body:'This is a really thoughtful direction. The accessibility testing looks great.'}],
 p3:[{id:'c4',author:'Kabir Shah',mark:'KS',body:'Just registered — thanks for opening the seats again!'}],
};

function PostCard({ post, onComment }: { post: Post; onComment:(post:Post)=>void }) {
  const [liked, toggleLike] = useCampusToggle('likes', post.id);
  return <article className={styles.card}>
    <div className={styles.avatar}>{post.mark}</div>
    <div className={styles.content}>
      <div className={styles.meta}><strong>{post.author}</strong><span>{post.kind}</span></div>
      <h2>{post.title}</h2><p>{post.body}</p>
      <div className={styles.actions}><button className={liked ? styles.liked : ''} onClick={toggleLike}><Heart size={15} fill={liked ? 'currentColor' : 'none'} /> {post.likes + (liked ? 1 : 0)}</button><button onClick={() => onComment(post)}><MessageCircle size={15}/> {post.comments}</button></div>
    </div>
  </article>;
}

export default function CommunityFeed() {
  const [open, setOpen] = useState(false); const [title, setTitle] = useState(''); const [body, setBody] = useState('');
  const [tick,setTick]=useState(0); const [commentPost,setCommentPost]=useState<Post|null>(null); const [comments,setComments]=useState<Record<string,Comment[]>>({}); const [commentText,setCommentText]=useState('');
  useEffect(()=>setComments(readComments()),[]);
  const userPosts=useMemo(()=>{void tick; return readPosts()},[tick]);
  const allPosts:Post[]=[...userPosts,...seededPosts];
  const getComments=(post:Post)=>[...(seededComments[post.id]||[]),...(comments[post.id]||[])];
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!title.trim() || !body.trim()) return; const current=readPosts(); current.unshift({id:`post-${Date.now()}`,author:'Shivraj',mark:'S',kind:'Discussion',title:title.trim(),body:body.trim(),likes:0,comments:0}); localStorage.setItem(postKey,JSON.stringify(current)); window.dispatchEvent(new Event('campus-store-change')); setTitle(''); setBody(''); setOpen(false); setTick(v=>v+1); };
  const submitComment=(e:React.FormEvent)=>{e.preventDefault();if(!commentPost||!commentText.trim())return;const current=readComments();const next={id:`comment-${Date.now()}`,author:'Shivraj',mark:'S',body:commentText.trim()};current[commentPost.id]=[...(current[commentPost.id]||[]),next];localStorage.setItem(commentKey,JSON.stringify(current));setComments(current);setCommentText('');};
  const activeComments=commentPost?getComments(commentPost):[];
  return <section className={styles.wrap}><div className={styles.header}><div><span>LIVE CAMPUS FEED</span><h1>People are building.</h1><p>Ask, share, collaborate, and find your next teammate.</p></div><button onClick={() => setOpen(true)}><Plus size={16}/> Start a discussion</button></div><div className={styles.feed}>{allPosts.map(post => <PostCard key={post.id} post={post} onComment={setCommentPost}/>)}</div>{open&&<div className={styles.overlay}><form className={styles.modal} onSubmit={submit}><button type="button" className={styles.close} onClick={() => setOpen(false)}><X size={18}/></button><span>NEW DISCUSSION</span><h2>What are you thinking?</h2><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Give your post a clear title" autoFocus/><textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Share context, ask a question, or show what you built..." rows={6}/><button className={styles.publish} type="submit"><Send size={15}/> Publish to campus</button></form></div>}{commentPost&&<div className={styles.overlay} onMouseDown={()=>setCommentPost(null)}><aside className={styles.commentsPanel} onMouseDown={e=>e.stopPropagation()}><button className={styles.close} onClick={()=>setCommentPost(null)} aria-label="Close comments"><X size={18}/></button><span>DISCUSSION</span><h2>{commentPost.title}</h2><p className={styles.commentHint}>{activeComments.length} {activeComments.length===1?'reply':'replies'} · Join the conversation</p><div className={styles.commentList}>{activeComments.map(comment=><div className={styles.comment} key={comment.id}><div className={styles.avatar}>{comment.mark}</div><div><strong>{comment.author}</strong><p>{comment.body}</p></div></div>)}{!activeComments.length&&<div className={styles.noComments}>No replies yet. Be the first to add context.</div>}</div><form className={styles.commentForm} onSubmit={submitComment}><input value={commentText} onChange={e=>setCommentText(e.target.value)} placeholder="Add a reply..." autoFocus/><button type="submit" aria-label="Post reply"><Send size={15}/></button></form></aside></div>}</section>;
}
