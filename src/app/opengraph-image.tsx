import { ImageResponse } from 'next/og';

export const size = {
  height: 630,
  width: 1200,
};

export const alt = 'React Auth UI';

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'black',
          color: 'white',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-shield-icon lucide-shield"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <g></g>
          </svg>
          <svg
            style={{ marginLeft: '-170px' }}
            width="88.8"
            height="73.1"
            viewBox="0 0 88.8 73.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill-rule="evenodd"
              stroke="#fff"
              stroke-width="0.25mm"
              fill="#fff"
            >
              <path d="M 46.5 43.3 L 46.5 0 L 59.95 0 L 59.95 43.3 Q 59.95 49.75 57.875 55.225 Q 55.8 60.7 51.9 64.675 Q 48 68.65 42.45 70.875 Q 36.9 73.1 29.95 73.1 Q 23 73.1 17.45 70.875 Q 11.9 68.65 8.025 64.675 Q 4.15 60.7 2.075 55.225 Q 0 49.75 0 43.3 L 0 0 L 13.45 0 L 13.45 43.25 Q 13.45 47.4 14.575 50.75 Q 15.7 54.1 17.8 56.475 Q 19.9 58.85 22.975 60.15 Q 26.05 61.45 29.95 61.45 Q 33.85 61.45 36.925 60.15 Q 40 58.85 42.125 56.5 Q 44.25 54.15 45.375 50.8 Q 46.5 47.45 46.5 43.3 Z M 88.8 0 L 88.8 72.3 L 75.3 72.3 L 75.3 0 L 88.8 0 Z" />
            </g>
          </svg>
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, marginLeft: 100 }}>
          REACT AUTH UI
        </div>
      </div>
    ),
  );
}
