import React from 'react';

function Logo({ width = '220px' }) {
  return (
    <div
      style={{
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
        fontWeight: 700,
        fontSize: '2.2rem',
        letterSpacing: '0.08em',
        background: 'linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 2px 8px rgba(238,9,121,0.12)',
        userSelect: 'none',
      }}
      aria-label="Blogify logo"
    >
      Blogify
    </div>
  );
}

export default Logo;
