import React from 'react';

function Footer() {
  return (
    <footer style={{ marginTop: '2rem', borderTop: '1px solid #ccc', padding: '1rem' }}>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
}

export default Footer;
