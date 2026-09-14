'use client';

import { useEffect, useState } from 'react';

const keys = {
  saved: 'campus-saved',
  rsvps: 'campus-rsvps',
  followed: 'campus-followed-clubs',
  bookmarks: 'campus-bookmarked-resources',
  likes: 'campus-liked-posts',
};

function read(key: string): string[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}

function write(key: string, values: string[]) {
  localStorage.setItem(key, JSON.stringify(values));
  window.dispatchEvent(new Event('campus-store-change'));
}

export function useCampusToggle(key: keyof typeof keys, id: string) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const sync = () => setActive(read(keys[key]).includes(id));
    sync();
    window.addEventListener('campus-store-change', sync);
    return () => window.removeEventListener('campus-store-change', sync);
  }, [key, id]);
  const toggle = () => {
    const values = read(keys[key]);
    const next = values.includes(id) ? values.filter(v => v !== id) : [...values, id];
    write(keys[key], next);
    setActive(next.includes(id));
  };
  return [active, toggle] as const;
}

export function useCampusCount(key: keyof typeof keys) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const sync = () => setCount(read(keys[key]).length);
    sync();
    window.addEventListener('campus-store-change', sync);
    return () => window.removeEventListener('campus-store-change', sync);
  }, [key]);
  return count;
}
