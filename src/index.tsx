import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

import '@/shared/config/i18n/i18n';
import { Suspense } from 'react';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { PageError } from './widgets/PageError';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Suspense fallback="">
    <BrowserRouter>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </Suspense>
);
