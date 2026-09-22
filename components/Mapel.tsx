import React from 'react';
import { Page } from '../types';
import { Calculator, Beaker, Book, Trophy, Palette, Laptop, Languages } from 'lucide-react';

interface MapelProps {
  setPage: (page: Page) => void;
  setSelectedMapel: (mapel: string) => void;
}

const Mapel: React.FC<MapelProps> = ({ setPage, setSelectedMapel }) => {
  const daftarMapel = [
    { id: 'mtk', nama: 'MATEMATIKA', ikon: Calculator, warna: 'from-amber-500 to-orange-600' },
   
    ];

  return (
    <div className="p-8 text-center min-h-screen bg-slate-950">
      <h1 className="text-4xl font-bold text-white mb-10">PILIH MATA PELAJARAN</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {daftarMapel.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setSelectedMapel(m.id);
              setPage(Page.SELECT_GRADE);
            }}
            className={`bg-gradient-to-br ${m.warna} p-12 rounded-3xl shadow-2xl hover:scale-105 transition-all text-white`}
          >
            <m.ikon size={64} className="mx-auto mb-4" />
            <span className="text-3xl font-black">{m.nama}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mapel;