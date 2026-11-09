export const SITE_TITLE = 'Stephen Breen';
export const SITE_DESCRIPTION = 'Tools for D&D tables and terminals, from Cork, Ireland.';
export const EMAIL = 'stephenjbreen@outlook.com';

export const formatDate = (date: Date, month: 'short' | 'long' = 'short') =>
  date.toLocaleDateString('en-IE', { day: 'numeric', month, year: 'numeric', timeZone: 'UTC' });
