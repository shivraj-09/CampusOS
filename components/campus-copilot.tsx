'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, ChevronRight, CornerDownLeft, Sparkles, X } from 'lucide-react';
import { opportunities } from '@/lib/campus-data';
import { useCampusCount } from '@/lib/campus-store';
import styles from './campus-copilot.module.css';

const prompts = ['What should I do this week?', 'What deadlines should I care about?', 'Which clubs fit me?'];
const OPEN_EVENT = 'campus-open-copilot';

export default function CampusCopilot(){
 const [open,setOpen]=useState(false); const [question,setQuestion]=useState(''); const [answer,setAnswer]=useState('');
 const inputRef=useRef<HTMLInputElement>(null);
 const saved=useCampusCount('saved'); const rsvps=useCampusCount('rsvps'); const followed=useCampusCount('followed');
 const context=useMemo(()=>({saved,rsvps,followed}),[saved,rsvps,followed]);
 useEffect(()=>{const handler=()=>setOpen(true);window.addEventListener(OPEN_EVENT,handler);return()=>window.removeEventListener(OPEN_EVENT,handler)},[]);
 useEffect(()=>{if(!open)return; const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)}; window.addEventListener('keydown',onKey); const timer=window.setTimeout(()=>inputRef.current?.focus(),220); return()=>{window.removeEventListener('keydown',onKey);window.clearTimeout(timer)}},[open]);
 function ask(q:string){
  const clean=q.trim(); if(!clean)return;
  setQuestion(clean); const lower=clean.toLowerCase();
  if(lower.includes('deadline')||lower.includes('due')) setAnswer(`You have ${opportunities.filter(o=>o.urgent).length} time-sensitive opportunities in the current campus feed. The Applied AI Systems Workshop is the closest deadline, while Build for Bharat is next.`);
  else if(lower.includes('club')||lower.includes('societ')) setAnswer(`Start with AI & Robotics Society or CodeCraft. You are currently following ${context.followed} club${context.followed===1?'':'s'}.`);
  else if(lower.includes('resource')||lower.includes('study')||lower.includes('learn')) setAnswer(`Open the resource library for the DSA Interview Roadmap, Web Technology Lab Pack, and Git & GitHub Field Guide. Pick one practical resource and turn it into a concrete task this week.`);
  else setAnswer(`Your week has ${context.rsvps} RSVP${context.rsvps===1?'':'s'}, ${context.saved} saved opportunit${context.saved===1?'y':'ies'}, and ${context.followed} followed club${context.followed===1?'':'s'}. I’d prioritize one urgent opportunity, then one community action.`);
 }
 function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();ask(question)}
 return <><button className={styles.fab} onClick={()=>setOpen(true)} aria-label="Open Campus Copilot"><Sparkles size={15}/> Copilot</button>{open&&<div className={styles.backdrop} onClick={()=>setOpen(false)}><aside className={styles.panel} onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Campus Copilot"><header><div><Bot size={17}/><span>CAMPUS COPILOT</span></div><button onClick={()=>setOpen(false)} aria-label="Close Copilot"><X size={17}/></button></header><div className={styles.intro}><span>CONTEXTUAL ASSISTANT // 01</span><h2>What are you trying to figure out?</h2><p>Use your campus activity as context. No prompt engineering required.</p></div><form className={styles.askForm} onSubmit={submit}><input ref={inputRef} value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask about your campus..." aria-label="Ask Campus Copilot" /><button type="submit" aria-label="Ask Copilot"><CornerDownLeft size={14}/></button></form><div className={styles.questions}>{prompts.map((p,i)=><button key={p} onClick={()=>ask(p)}><span><b>0{i+1}</b>{p}</span><ChevronRight size={15}/></button>)}</div>{answer&&<div className={styles.answer}><small>{question}</small><p>{answer}</p></div>}<div className={styles.footer}>CAMPUSOS · FRONTEND CONTEXT MODE · ESC TO CLOSE</div></aside></div>}</>;
}
