'use client';

import { useEffect, useMemo, useState } from 'react';
import { Bot, ChevronRight, Sparkles, X } from 'lucide-react';
import { opportunities } from '@/lib/campus-data';
import { useCampusCount } from '@/lib/campus-store';
import styles from './campus-copilot.module.css';

const prompts = ['What should I do this week?', 'What deadlines should I care about?', 'Which clubs fit me?'];
const OPEN_EVENT = 'campus-open-copilot';

export default function CampusCopilot(){
 const [open,setOpen]=useState(false); const [question,setQuestion]=useState(''); const [answer,setAnswer]=useState('');
 const saved=useCampusCount('saved'); const rsvps=useCampusCount('rsvps'); const followed=useCampusCount('followed');
 const context=useMemo(()=>({saved,rsvps,followed}),[saved,rsvps,followed]);
 useEffect(()=>{const handler=()=>setOpen(true);window.addEventListener(OPEN_EVENT,handler);return()=>window.removeEventListener(OPEN_EVENT,handler)},[]);
 function ask(q:string){
  setQuestion(q); const lower=q.toLowerCase();
  if(lower.includes('deadline')) setAnswer(`You have ${opportunities.filter(o=>o.urgent).length} time-sensitive opportunities in the current campus feed. The Applied AI Systems Workshop is the closest deadline, while Build for Bharat is next.`);
  else if(lower.includes('club')) setAnswer(`Start with AI & Robotics Society or CodeCraft. You are currently following ${context.followed} club${context.followed===1?'':'s'}.`);
  else setAnswer(`Your week has ${context.rsvps} RSVP${context.rsvps===1?'':'s'}, ${context.saved} saved opportunit${context.saved===1?'y':'ies'}, and ${context.followed} followed club${context.followed===1?'':'s'}. I’d prioritize one urgent opportunity, then one community action.`);
 }
 return <><button className={styles.fab} onClick={()=>setOpen(true)} aria-label="Open Campus Copilot"><Sparkles size={15}/> Copilot</button>{open&&<div className={styles.backdrop} onClick={()=>setOpen(false)}><aside className={styles.panel} onClick={e=>e.stopPropagation()}><header><div><Bot size={17}/><span>CAMPUS COPILOT</span></div><button onClick={()=>setOpen(false)} aria-label="Close Copilot"><X size={17}/></button></header><div className={styles.intro}><span>CONTEXTUAL ASSISTANT // 01</span><h2>What are you trying to figure out?</h2><p>Use your campus activity as context. No prompt engineering required.</p></div><div className={styles.questions}>{prompts.map((p,i)=><button key={p} onClick={()=>ask(p)}><span><b>0{i+1}</b>{p}</span><ChevronRight size={15}/></button>)}</div>{answer&&<div className={styles.answer}><small>{question}</small><p>{answer}</p></div>}<div className={styles.footer}>CAMPUSOS · FRONTEND CONTEXT MODE</div></aside></div>}</>;
}
