import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} MaxScale - Ativos Digitais. Todos os direitos reservados.
      </p>
    </footer>
  );
}
