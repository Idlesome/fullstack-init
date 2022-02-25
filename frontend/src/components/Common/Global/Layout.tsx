import * as React from 'react';
import Container from 'react-bootstrap/Container';
import { Header } from './Header';

/**
 * Re-usable layout for pages
 */
export function Layout({ children }) {
  return (
    <div className="standard-layout">
      <header>
        <Header />
      </header>

      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
