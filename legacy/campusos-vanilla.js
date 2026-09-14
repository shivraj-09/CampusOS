// JavaScript compatibility layer for simple embeds or future micro-frontends.
export function formatCampusLabel(label) {
  return String(label).trim().replace(/\s+/g, ' ');
}
