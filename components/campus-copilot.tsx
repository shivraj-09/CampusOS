'use client';

import { useMemo, useState } from 'react';
import { Bot, ChevronRight, Sparkles, X } from 'lucide-react';
import { opportunities, clubs } from '@/lib/campus-data';
import { useCampusCount } from '@/lib/campus-store';
import styles from './campus-copilot.module.css';

const prompts = ['What should I do this week?', 'What deadlines should I care about?', 'Which clubs fit me?'];
export default function CampusCopilot(){
 const [open,setOpen]=useState(false); const [question,setQuestion]=useState(''); const [answer,setAnswer]=useState('');
 const saved=useCampusCount('saved'); const rsvps=useCampusCount('rsvps'); const followed=useCampusCount('followed');
 const context=useMemo(()=>({saved,rsvps,followed}),[saved,rsvps,followed]);
 function ask(q:string){
  setQuestion(q); const lower=q.toLowerCase();
  if(lower.includes('deadline')) setAnswer(`You have ${opportunities.filter(o=>o.urgent).length} time-sensitive opportunities in the current campus feed. The Applied AI Systems Workshop is the closest deadline, while Build for Bharat is next.`);
  else if(lower.includes('club')) setAnswer(`Start with AI & Robotics Society or CodeCraft. You are currently following ${context.followed} club${context.followed===1?'':'s'}.`);
  else setAnswer(`Your week has ${context.rsvps} RSVP${context.rsvps===1?'':'s'}, ${context.saved} saved opportunit${context.saved===1?'y':'ies'}, and ${context.followed} followed club${context.followed===1?'':'s'}. I’d prioritize one urgent opportunity, then one community action.`);
 }
 return <><button className={styles.fab} onClick={()=>setOpen(true)} aria-label="Open Campus Copilot"><Sparkles size={17}/> Copilot</button>{open&&<div className={styles.backdrop} onClick={()=>setOpen(false)}><aside className={styles.panel} onClick={e=>e.stopPropagation()}><header><div><Bot size={18}/><span>Campus Copilot</span></div><button onClick={()=>setOpen(false)}><X size={18}/></button></header><div className={styles.intro}><span>CONTEXTUAL ASSISTANT</span><h2>What are you trying to figure out?</h2></div><div className={styles.questions}>{prompts.map(p=><button key={p} onClick={()=>ask(p)}>{p}<ChevronRight size={15}/></button>)}</div>{answer&&<div className={styles.answer}><small>{question}</small><p>{answer}</p></div>}</aside></div>}</>;
}
