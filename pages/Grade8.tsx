import React from 'react';
import { Calculator, Variable, Layers, Milestone, Shapes, TrendingUp, BarChart, Zap } from 'lucide-react';

// 1. Data Materi Kelas 8
const menuMateriKls8 = [
  { 
    id: 'Menyederhanakan Bentuk Aljabar', 
    title: 'Menyederhanakan Bentuk Aljabar', 
    icon: TrendingUp, 
    color: 'from-blue-500 to-indigo-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0r41gxm2xh1d4b1',
    urlGame: 'https://link-game-pola.com' 
  },
  { 
    id: 'SPLDV', 
    title: 'SPLDV', 
    icon: Shapes, 
    color: 'from-purple-500 to-pink-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0r88zy8b0x2edsw',
    urlGame: '' 
  },
  { 
    id: 'fungsi linier', 
    title: 'Fungsi Linier', 
    icon: Layers, 
    color: 'from-amber-500 to-orange-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0r95s0xdsjvd6j2',
    urlGame: 'https://link-game-fungsi.com' 
  },
  { 
    id: 'persamaan-garis', 
    title: 'Persamaan Garis Lurus', 
    icon: Milestone, 
    color: 'from-emerald-500 to-teal-700', 
    urlMateri: 'https://link-materi-pgl.com',
    urlGame: 'https://link-game-pgl.com' 
  },
  { 
    id: 'spldv', 
    title: 'SPLDV', 
    icon: Variable, 
    color: 'from-rose-500 to-red-700', 
    urlMateri: 'https://link-materi-spldv.com',
    urlGame: '' 
  },
  { 
    id: 'teorema-pythagoras', 
    title: 'Teorema Pythagoras', 
    icon: Zap, 
    color: 'from-cyan-500 to-blue-700', 
    urlMateri: 'https://link-materi-pythagoras.com',
    urlGame: 'https://link-game-pythagoras.com' 
  },
  { 
    id: 'lingkaran', 
    title: 'Lingkaran', 
    icon: Calculator, 
    color: 'from-violet-500 to-purple-800', 
    urlMateri: 'https://link-materi-lingkaran.com',
    urlGame: '' 
  },
  { 
    id: 'statistika-8', 
    title: 'Statistika', 
    icon: BarChart, 
    color: 'from-green-500 to-emerald-800', 
    urlMateri: 'https://link-materi-statistika.com',
    urlGame: '' 
  },
];

const Grade8: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Kelas 8: Materi & Game
        </h1>
        <p className="text-slate-400">Silakan pilih topik matematika untuk mulai belajar secara interaktif.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuMateriKls8.map((item) => (
          <div 
            key={item.id} 
            className={`group p-1 bg-gradient-to-br ${item.color} rounded-3xl transition-all hover:scale-[1.02] shadow-xl`}
          >
            <div className="bg-slate-900 p-6 rounded-[22px] h-full flex flex-col justify-between">
              <div>
                <item.icon className="text-white opacity-80 mb-4 group-hover:rotate-12 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs mb-6">Tingkatkan pemahamanmu dengan materi interaktif dan game seru.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => window.open(item.urlMateri, '_blank')}
                  className="bg-white/5 hover:bg-white/10 text-white text-[11px] py-3 rounded-xl transition-all border border-white/10 font-semibold"
                >
                  📖 Materi
                </button>

                {item.urlGame ? (
                  <button 
                    onClick={() => window.open(item.urlGame, '_blank')}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] py-3 rounded-xl transition-all font-bold shadow-lg shadow-emerald-900/40"
                  >
                    🎮 Play Game
                  </button>
                ) : (
                  <div className="bg-slate-800 text-slate-500 text-[10px] py-3 rounded-xl flex items-center justify-center italic">
                    Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grade8;