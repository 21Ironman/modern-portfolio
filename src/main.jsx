import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? <Loader /> : <App />}
    </React.StrictMode>
  );
}

function Loader() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink text-paper">
      <div className="flex flex-col items-center gap-5" role="status" aria-live="polite">
        <div className="loader-ring" aria-hidden="true" />
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Loading portfolio</p>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
