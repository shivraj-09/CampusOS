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
              <span className={styles.eyebrow}><i /> 01 / DISPATCH · CAMPUS · LIVE SYS 09</span>
              <h1>Your campus is<br /><em>already moving.</em></h1>
              <p>CampusOS helps you move with it. A living command center connecting high-leverage opportunities, builders, technical societies, and ongoing laboratory conversations around you.</p>
              <div className={styles.introMeta}>
                <span>MONDAY · SEP 14, 2026</span>
                <span>{saved} SAVED · {rsvps} RSVP{rsvps === 1 ? '' : 'S'} · {followed} FOLLOWING</span>
              </div>
              <div className={styles.introMeta}>
                <Link href="/discover" className={styles.darkButton}>Explore campus <ArrowUpRight size={13} /></Link>
                <Link href="/copilot" className={styles.darkButton}>Ask Campus Copilot <Sparkles size={13} /></Link>
              </div>
            </div>
            <div className={styles.introOrb} aria-label="Campus network telemetry visual"><div className={styles.orbCore}><Sparkles size={18} /><span>34 ACTIVE NODES</span></div></div>
          </div>
          <a className={styles.scrollCue} href="#momentum">See what is moving <ArrowDownRight size={14} /></a>
        </section>

        <section className={styles.statement} id="momentum">
          <div className={styles.statementRail}><span>01</span><span>LIVE PULSE [05 CHANNELS]</span></div>
          <div className={styles.statementMain}>
            <h2>There is always something happening. <em>The hard part is knowing what matters to you.</em></h2>
            <div className={styles.momentumLine}>
              {[
                [urgent.length, 'urgent opportunities'],
                [rsvps, 'upcoming RSVPs'],
                [followed, 'clubs followed'],
                [12, 'day momentum streak'],
              ].map(([value, label], i) => <div key={i}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className={styles.opportunityScene}>
          <div className={styles.sceneHeading}>
            <div><span className={styles.eyebrow}>02 / FEATURED CALL FOR BUILDERS</span><h2>Build for Bharat<br /><em>Hackathon.</em></h2></div>
            <Link href="/discover">All dispatches <ArrowUpRight size={14} /></Link>
          </div>
          <div className={styles.featuredOpp}>
            <div className={styles.featuredTop}><span>HACKATHON · 4 DAYS LEFT</span><span>SELECTION DEADLINE IMMINENT</span></div>
            <div className={styles.featuredTitle}><span>01</span><h3>{urgent[0]?.title ?? 'Build for Bharat Hackathon'}</h3></div>
            <div className={styles.featuredBottom}>
              <div><MapPin size={13} /> {urgent[0]?.place ?? 'Innovation Lab'}</div>
              <div>{(urgent[0]?.tags ?? ['React', 'AI', 'Team']).map((tag) => <span key={tag}>{tag}</span>)}<span>{urgent[0]?.reason ?? 'MATCHES 3 OF YOUR SKILLS'}</span></div>
              <Link href={`/discover/${urgent[0]?.id ?? 'op1'}`}>View opportunity <ArrowUpRight size={14} /></Link>
            </div>
          </div>
          <div className={styles.opportunityList}>
            {opportunities.slice(1, 4).map((item, index) => <Link href={`/discover/${item.id}`} key={item.id} className={styles.miniOpp}>
              <span>0{index + 2}</span><div><small>{item.type} · {item.deadline}</small><strong>{item.title}</strong></div><ArrowUpRight size={16} />
            </Link>)}
          </div>
        </section>

        <section className={styles.buildScene}>
          <div className={styles.buildVisual}><div className={styles.buildLabel}>03 / ACTIVE VOICES</div><div className={styles.signal}><span /><span /><span /><span /><span /><span /></div><div className={styles.buildQuote}>People are<br /><em>building.</em></div></div>
          <div className={styles.buildCopy}>
            <span className={styles.eyebrow}>CAMPUS COMMUNITY</span>
            <h2>People are<br /><em>building.</em></h2>
            <p>Projects, questions, teams and late-night ideas are already happening around you. Find the conversation you can add to.</p>
            <div className={styles.feedPreview}>{posts.slice(0, 2).map((post) => <Link href="/community" key={post.id}><div className={styles.avatar}>{post.mark}</div><div><small>{post.kind} · {post.author}</small><strong>{post.title}</strong><span><Heart size={11} /> {post.likes} · <MessageCircle size={11} /> {post.comments}</span></div><ChevronRight size={15} /></Link>)}</div>
            <Link className={styles.textLink} href="/community">Enter the community <ArrowUpRight size={14} /></Link>
          </div>
        </section>

        <section className={styles.clubScene}>
          <div className={styles.sceneHeading}><div><span className={styles.eyebrow}>04 / GUILDS & SOCIETIES</span><h2>Find your<br /><em>people.</em></h2></div><Link href="/clubs">Directory [24] <ArrowUpRight size={14} /></Link></div>
          <div className={styles.clubMarquee}>{clubs.map((club, index) => <Link href={`/clubs/${club.id}`} className={styles.clubTile} key={club.id}><span className={styles.clubNumber}>0{index + 1}</span><span className={styles.clubMark}>{club.mark}</span><div><small>{club.category} · {club.members} MEMBERS</small><h3>{club.name}</h3><p>{club.activity}</p></div><ArrowUpRight size={17} /></Link>)}</div>
        </section>

        <section className={styles.resourceScene}>
          <div className={styles.resourceCopy}><span className={styles.eyebrow}>05 / ACADEMIC ARSENAL</span><h2>Hand-curated<br />for what&apos;s <em>next.</em></h2><p>Roadmaps, lab packs and practical guides — curated for the work you actually want to do.</p><Link className={styles.darkButton} href="/resources">Browse the library <ArrowUpRight size={14} /></Link></div>
          <div className={styles.resourceStack}>{resources.map((resource, index) => <Link href={`/resources/${resource.id}`} key={resource.id} className={styles.resourceCard}><span>0{index + 1}</span><div><small>{resource.type}</small><strong>{resource.title}</strong><p>{resource.meta}</p></div><Bookmark size={15} /></Link>)}</div>
        </section>

        <section className={styles.copilotScene}>
          <div className={styles.copilotGrid}><div><span className={styles.eyebrow}>06 / NEURAL CAMPUS INDEX</span><h2>Ask your<br /><em>campus.</em></h2><p>You do not need to know where to start. Ask CampusOS about deadlines, clubs, opportunities or your week.</p></div><div className={styles.copilotWindow}><div className={styles.copilotBar}><span><Sparkles size={13} /> CAMPUS COPILOT</span><i>LIVE</i></div><div className={styles.question}>What should I do this week?</div><div className={styles.answer}><div className={styles.bot}><Sparkles size={13} /></div><p>Prioritize the <b>Build for Bharat Hackathon</b>, then make one community move. You have {rsvps} RSVP{rsvps === 1 ? '' : 's'} and {saved} saved opportunit{saved === 1 ? 'y' : 'ies'} waiting.</p></div><button onClick={toggleMomentumRsvp}><Zap size={13} /> {momentumRsvp ? 'Added to your week' : 'Add the next move'}</button></div></div>
        </section>

        <section className={styles.finalScene}>
          <div className={styles.finalNumber}>END OF BROADCAST · CAMPUSOS 2024</div><h2>Find your next<br /><em>thing.</em></h2><p>Everything relevant happening on campus indexed into a unified workspace. Stop missing crucial registrations and start shipping alongside the best builders.</p><Link className={styles.finalButton} href="/discover">Explore campus <ArrowUpRight size={14} /></Link><div className={styles.finalStats}><span><Flame size={13} /> 12 day streak</span><span><CalendarDays size={13} /> {urgent.length} urgent</span><span><Users size={13} /> {followed} following</span><span><Clock3 size={13} /> Always moving</span></div>
        </section>
      </main>
    </CampusShell>
  );
}
