import { useTheme } from './providers/ThemeProvider';

import '@/app/styles/index.scss';
import cx from '@/shared/lib/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/widgets/PageLoader';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={cx('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
