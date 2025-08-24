type Props = {
  size?: number;
  className?: string;
};

function Logo({ size = 32, className }: Props) {
  return (
    <svg
      role="img"
      aria-label="[title]"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 74.865 91.501"
      width={size}
      height={size}
      className={className}
    >
      <title>Logo</title>
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        transform="matrix(4.15918 0 0 4.15918 -12.478 -4.172)"
      />
      <text
        xmlSpace="preserve"
        x={87.019}
        y={191.448}
        style={{
          fontStyle: 'italic',
          fontWeight: 900,
          fontSize: '35.2778px',
          fontFamily: '&quot',
          textAlign: 'start',
          direction: 'ltr',
          textAnchor: 'start',
          fill: 'currentColor',
          stroke: 'currentColor',
          userSelect: 'none',
          strokeWidth: 0,
        }}
        transform="translate(-67.745 -133.085)"
      >
        <tspan
          x={87.019}
          y={191.448}
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 700,
            fontStretch: 'normal',
            fontSize: '35.2778px',
            fontFamily: 'Lato',
            strokeWidth: 0,
          }}
        >
          {'UI'}
        </tspan>
      </text>
    </svg>
  );
}
export { Logo };
