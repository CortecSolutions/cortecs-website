type Props = {
  className?: string;
  title?: string;
};

export function LogoIcon({ className, title = "Cortecs" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      role="img"
      aria-label={title}
      className={className}
    >
      <rect x="0" y="0" width="60" height="10" rx="1.5" fill="currentColor" />
      <rect x="0" y="22" width="60" height="18" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function LogoHorizontal({ className, title = "Cortecs" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      role="img"
      aria-label={title}
      className={className}
    >
      <rect x="10" y="20" width="60" height="10" rx="1.5" fill="currentColor" />
      <rect x="10" y="42" width="60" height="18" rx="1.5" fill="currentColor" />
      <text
        x="95"
        y="50"
        dominantBaseline="central"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="44"
        fontWeight="600"
        letterSpacing="-1"
        fill="currentColor"
      >
        cortecs
      </text>
    </svg>
  );
}
