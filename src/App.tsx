import { Routes, Route } from 'react-router-dom';
import { AppShell } from './components/shell/AppShell';
import { HomePage } from './pages/HomePage';
import { ExplorerPage } from './pages/ExplorerPage';
import { SystemsPage } from './pages/SystemsPage';
import { SystemDetailPage } from './pages/SystemDetailPage';
import { BuilderPage } from './pages/BuilderPage';

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorer" element={<ExplorerPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/systems/:id" element={<SystemDetailPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
