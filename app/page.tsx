'use client';

import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Bookmark, CalendarDays, ChevronRight, Clock3, Flame, Heart, MapPin, MessageCircle, Sparkles, Users, Zap } from 'lucide-react';
import CampusShell from '@/components/campus-shell';
import { clubs, opportunities, posts, resources } from '@/lib/campus-data';
import { useCampusCount, useCampusToggle } from '@/lib/campus-store';
import styles from './home.module.css';

export default function Home() {
  const urgent = opportunities.filter((item) => item.urgent);
  const saved = useCampusCount('saved');
  const rsvps = useCampusCount('rsvps');
  const followed = useCampusCount('followed');
  const [momentumRsvp, toggleMomentumRsvp] = useCampusToggle('rsvps', 'momentum-next');

  return (
    <CampusShell>
      <main className={styles.page}>
        <section className={styles.intro}>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <span className={styles.eyebrow}><i /> CAMPUSOS · 01</span>
              <h1>Your campus.<br /><em>Your momentum.</em></h1>
              <p>College moves fast. CampusOS turns the noise into the people, opportunities and next moves worth your attention.</p>
              <div className={styles.introMeta}>
                <span>MONDAY · SEP 14, 2026</span>
                <span>{saved} SAVED · {rsvps} RSVP{rsvps === 1 ? '' : 'S'} · {followed} FOLLOWING</span>
              </div>
            </div>
            <div className={styles.introOrb} aria-hidden="true"><div className={styles.orbCore}><Sparkles size={24} /><span>LIVE</span></div></div>
          </div>
          <a className={styles.scrollCue} href="#momentum">See what is moving <ArrowDownRight size={16} /></a>
        </section>

        <section className={styles.statement} id="momentum">
          <div className={styles.statementRail}><span>02</span><span>YOUR MOMENTUM</span></div>
          <div className={styles.statementMain}>
            <p className={styles.eyebrow}>RIGHT NOW</p>
            <h2>You&apos;re already<br /><em>moving.</em></h2>
            <p className={styles.statementLead}>CampusOS keeps the important pieces of college life in motion — and points you toward the next one.</p>
            <div className={styles.momentumLine}>
              <div><strong>{urgent.length}</strong><span>urgent opportunities</span></div>
              <div><strong>{rsvps}</strong><span>upcoming RSVPs</span></div>
              <div><strong>{followed}</strong><span>clubs followed</span></div>
              <div><strong>12</strong><span>day streak</span></div>
            </div>
          </div>
        </section>

        <section className={styles.opportunityScene}>
          <div className={styles.sceneHeading}>
            <div><span className={styles.eyebrow}>03 · OPPORTUNITIES</span><h2>Something worth<br /><em>building is happening.</em></h2></div>
            <Link href="/discover">Explore everything <ArrowUpRight size={16} /></Link>
          </div>
          <div className={styles.featuredOpp}>
            <div className={styles.featuredTop}><span>FEATURED NOW</span><span>{urgent[0]?.deadline ?? 'This week'}</span></div>
            <div className={styles.featuredTitle}><span>01</span><h3>{urgent[0]?.title ?? 'Build for Bharat Hackathon'}</h3></div>
            <div className={styles.featuredBottom}>
              <div><MapPin size={14} /> {urgent[0]?.location ?? 'Innovation Lab'}</div>
              <div>{(urgent[0]?.tags ?? ['React', 'AI', 'Team']).map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link href={`/discover/${urgent[0]?.id ?? 'op1'}`}>Open opportunity <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className={styles.opportunityList}>
            {opportunities.slice(1, 4).map((item, index) => <Link href={`/discover/${item.id}`} key={item.id} className={styles.miniOpp}>
              <span>0{index + 2}</span><div><small>{item.type} · {item.deadline}</small><strong>{item.title}</strong></div><ArrowUpRight size={17} />
            </Link>)}
          </div>
        </section>

        <section className={styles.buildScene}>
          <div className={styles.buildVisual}><div className={styles.buildLabel}>CAMPUS PULSE</div><div className={styles.signal}><span /><span /><span /><span /><span /><span /></div><div className={styles.buildQuote}>The campus<br /><em>is alive.</em></div></div>
          <div className={styles.buildCopy}>
            <span className={styles.eyebrow}>04 · PEOPLE</span>
            <h2>People are<br /><em>building.</em></h2>
            <p>Projects, questions, teams and late-night ideas are already happening around you. Find the conversation you can add to.</p>
            <div className={styles.feedPreview}>{posts.slice(0, 2).map((post) => <Link href="/community" key={post.id}><div className={styles.avatar}>{post.mark}</div><div><small>{post.kind} · {post.author}</small><strong>{post.title}</strong><span><Heart size={12} /> {post.likes} · <MessageCircle size={12} /> {post.comments}</span></div><ChevronRight size={16} /></Link>)}</div>
            <Link className={styles.textLink} href="/community">Enter the community <ArrowUpRight size={15} /></Link>
          </div>
        </section>

        <section className={styles.clubScene}>
          <div className={styles.sceneHeading}><div><span className={styles.eyebrow}>05 · YOUR PEOPLE</span><h2>Don&apos;t do college<br /><em>alone.</em></h2></div><Link href="/clubs">Meet the clubs <ArrowUpRight size={16} /></Link></div>
          <div className={styles.clubMarquee}>{clubs.map((club, index) => <Link href={`/clubs/${club.id}`} className={styles.clubTile} key={club.id}><span className={styles.clubNumber}>0{index + 1}</span><span className={styles.clubMark}>{club.mark}</span><div><small>{club.category} · {club.members} MEMBERS</small><h3>{club.name}</h3><p>{club.activity}</p></div><ArrowUpRight size={19} /></Link>)}</div>
        </section>

        <section className={styles.resourceScene}>
          <div className={styles.resourceCopy}><span className={styles.eyebrow}>06 · RESOURCES</span><h2>Everything you need<br />to build what&apos;s <em>next.</em></h2><p>Roadmaps, lab packs and practical guides — curated for the work you actually want to do.</p><Link className={styles.darkButton} href="/resources">Browse the library <ArrowUpRight size={15} /></Link></div>
          <div className={styles.resourceStack}>{resources.map((resource, index) => <Link href={`/resources/${resource.id}`} key={resource.id} className={styles.resourceCard}><span>0{index + 1}</span><div><small>{resource.type}</small><strong>{resource.title}</strong><p>{resource.meta}</p></div><Bookmark size={16} /></Link>)}</div>
        </section>

        <section className={styles.copilotScene}>
          <div className={styles.copilotGrid}><div><span className={styles.eyebrow}>07 · CAMPUS COPILOT</span><h2>You don&apos;t need to know<br /><em>where to start.</em></h2><p>Ask CampusOS about your deadlines, clubs or week. It uses the context you&apos;ve already built into the app.</p></div><div className={styles.copilotWindow}><div className={styles.copilotBar}><span><Sparkles size={14} /> CAMPUS COPILOT</span><i>LIVE</i></div><div className={styles.question}>What should I do this week?</div><div className={styles.answer}><div className={styles.bot}><Sparkles size={15} /></div><p>Prioritize the <b>Build for Bharat Hackathon</b>, then make one community move. You have {rsvps} RSVP{rsvps === 1 ? '' : 's'} and {saved} saved opportunit{saved === 1 ? 'y' : 'ies'} waiting.</p></div><button onClick={toggleMomentumRsvp}><Zap size={14} /> {momentumRsvp ? 'Added to your week' : 'Add the next move'}</button></div></div>
        </section>

        <section className={styles.finalScene}>
          <div className={styles.finalNumber}>08</div><h2>Your college.<br /><em>Your opportunities.</em><br />Your people.</h2><p>CampusOS keeps the important stuff moving — so you can keep moving too.</p><Link className={styles.finalButton} href="/discover">Find your next move <ArrowUpRight size={16} /></Link><div className={styles.finalStats}><span><Flame size={15} /> 12 day streak</span><span><CalendarDays size={15} /> {urgent.length} urgent</span><span><Users size={15} /> {followed} following</span><span><Clock3 size={15} /> Always moving</span></div>
        </section>
      </main>
    </CampusShell>
  );
}
