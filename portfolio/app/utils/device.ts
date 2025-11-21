export function isAndroid() {
  if (typeof window === 'undefined') {
    return false;
  }
  return /Android/i.test(navigator.userAgent);
}
