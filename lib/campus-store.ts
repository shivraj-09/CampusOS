'use client';

import { useCallback, useEffect, useState } from 'react';

type CampusKey = 'saved' | 'rsvps' | 'followed' | 'bookmarks' | 'likes';

const storageKeys: Record<CampusKey, string> = {
  saved: 'campus-saved',
  rsvps: 'campus-rsvps',
  followed: 'campus-followed-clubs',
  bookmarks: 'campus-bookmarked-resources',
  likes: 'campus-liked-posts',
};

const EVENT = 'campus-store-change';

function read(key: CampusKey): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const value = JSON.parse(localStorage.getItem(storageKeys[key]) || '[]');
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function write(key: CampusKey, values: string[]) {
  localStorage.setItem(storageKeys[key], JSON.stringify(values));
  window.dispatchEvent(new Event(EVENT));
}

export function useCampusToggle(key: CampusKey, id: string) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(read(key).includes(id));
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [key, id]);

  const toggle = useCallback(() => {
    const values = read(key);
    const next = values.includes(id)
      ? values.filter((value) => value !== id)
      : [...values, id];
    write(key, next);
    setActive(next.includes(id));
  }, [key, id]);

  return [active, toggle] as const;
}

export function useCampusCount(key: CampusKey) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(read(key).length);
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [key]);

  return count;
}
