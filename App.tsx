import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grade7 from './pages/Grade7';
import Grade8 from './pages/Grade8';
import Grade9 from './pages/Grade9';
import ChatWidget from './components/ChatWidget';
import { Page } from './types';
import { Construction } from 'lucide-react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
    <Construction size={64} className="text-amber-500" />
    <h2 className="text-3xl font-serif font-bold text-white">{title}</h2>
    <p className="text-slate-400 max-w-md">
      Materi ini sedang disusun oleh Pak Wawan. Silakan kembali lagi nanti atau cek Kelas 7 untuk demo lengkap.
    </p>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.GRADE_7:
        return <Grade7 />;
      case Page.GRADE_8:
        return <Grade8 />;
      case Page.GRADE_9:
        return <Grade9 />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 math-pattern selection:bg-amber-500 selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderContent()}
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Rinjani Bayan. Dikembangkan oleh 
                <span className="text-amber-500 ml-1">Wawan Andriawan, S.Pd. Gr</span>
            </p>
            <p className="text-slate-600 text-xs mt-2">SMP Negeri 5 Bayan</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;