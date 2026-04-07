import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Rayhan Touboui — Data & AI Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #09090b, #18181b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'rgba(167, 139, 250, 0.2)',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'rgba(56, 189, 248, 0.15)',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '80px',
            borderRadius: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          {/* Tag / Meta */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(167, 139, 250, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              color: '#a78bfa',
              padding: '12px 24px',
              borderRadius: '100px',
              fontSize: '24px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '40px',
            }}
          >
            Dossier Opérateur // 99-25
          </div>

          <h1
            style={{
              fontSize: '80px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.02em',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            Rayhan Touboui
          </h1>

          <h2
            style={{
              fontSize: '40px',
              fontWeight: 600,
              color: '#a1a1aa', // text-on-surface-variant equivalent
              margin: 0,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Engineering <span style={{ color: '#a78bfa', margin: '0 15px' }}>&times;</span> Data Science
          </h2>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
