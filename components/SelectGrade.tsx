import React from 'react';
import { Page } from '../types';

interface SelectGradeProps {
  setPage: (page: Page) => void;
  selectedMapel: string;
}

const SelectGrade: React.FC<SelectGradeProps> = ({ setPage, selectedMapel }) => {
  
  const handleGradeClick = (grade: number) => {
    if (selectedMapel === 'mtk') {
      if (grade === 7) setPage(Page.GRADE_7);
      if (grade === 8) setPage(Page.GRADE_8);
      if (grade === 9) setPage(Page.GRADE_9);
    } else if (selectedMapel === 'ipa') {
      if (grade === 7) setPage(Page.IPA_7);
      // Untuk kelas 8 & 9 IPA bisa ditambah nanti
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 py-20">
      <h1 className="text-3xl font-bold text-white mb-10 uppercase">
        KELAS - {selectedMapel === 'mtk' ? 'MATEMATIKA' : 'IPA'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleGradeClick(num)}
            className="bg-slate-800 border-2 border-slate-700 p-10 rounded-3xl hover:border-amber-500 transition-all"
          >
            <span className="text-4xl font-black text-white">KELAS {num}</span>
          </button>
        ))}
      </div>
      <button onClick={() => setPage(Page.MAPEL)} className="mt-10 text-slate-400 underline">
        Kembali Pilih Mapel
      </button>
    </div>
  );
};

export default SelectGrade;