import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './not-found.module.css';
export default function NotFound(){return <main className={styles.page}><span>404 · CAMPUS MAP</span><h1>That page isn't here.</h1><p>The route may have moved, or the campus item no longer exists in this demo.</p><Link href="/"><ArrowLeft size={16}/> Back to CampusOS</Link></main>}
