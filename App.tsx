import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mapel from './components/Mapel';
import SelectGrade from './components/SelectGrade';
// Import Halaman Materi
import Grade7 from './pages/Grade7';       // File MTK 7
import Grade8 from './pages/Grade8';
import Grade9 from './pages/Grade9';
import Grade7Ipa from './pages/Grade7Ipa'; // File IPA 7

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedMapel, setSelectedMapel] = useState<string>('');

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.MAPEL:
        return <Mapel setPage={setCurrentPage} setSelectedMapel={setSelectedMapel} />;
      case Page.SELECT_GRADE:
        return <SelectGrade setPage={setCurrentPage} selectedMapel={selectedMapel} />;
      
      // Routing Materi
      case Page.GRADE_7: return <Grade7 />;
      case Page.GRADE_8: return <Grade8 />;
      case Page.GRADE_9: return <Grade9 />;
      case Page.IPA_7: return <Grade7Ipa />;
      
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar setPage={setCurrentPage} currentPage={currentPage} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;