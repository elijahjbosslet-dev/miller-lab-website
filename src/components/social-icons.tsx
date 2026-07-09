// Minimal brand marks for footer social links — lucide-react dropped all
// brand/logo icons in this major version, so these are drawn by hand.

type IconProps = { size?: number; className?: string };

export function LinkedInIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
    </svg>
  );
}

export function XIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.24 3H21l-6.4 7.31L22.14 21h-6.62l-5.18-6.78L4.4 21H1.62l6.85-7.83L1.86 3h6.78l4.68 6.2L18.24 3Zm-1.16 16.17h1.5L7.02 4.75H5.4l11.68 14.42Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.5 7.2s-.22-1.56-.9-2.24c-.86-.9-1.82-.9-2.26-.96C16.2 3.75 12 3.75 12 3.75h-.01s-4.2 0-7.34.25c-.44.06-1.4.06-2.26.96-.68.68-.9 2.24-.9 2.24S1.25 9 1.25 10.8v1.68c0 1.8.25 3.6.25 3.6s.22 1.56.9 2.24c.86.9 1.98.87 2.48.97 1.8.17 7.62.24 7.62.24s4.2-.01 7.34-.26c.44-.06 1.4-.06 2.26-.96.68-.68.9-2.24.9-2.24s.25-1.8.25-3.6V10.8c0-1.8-.25-3.6-.25-3.6ZM9.75 14.98v-6l6 3.01-6 2.99Z" />
    </svg>
  );
}
