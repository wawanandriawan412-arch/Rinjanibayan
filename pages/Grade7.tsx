import React from 'react';
import { Calculator, Variable, Layers, Milestone, Percent, Shapes, HelpCircle } from 'lucide-react';

const menuMateri = [
  { 
    id: 'bilangan', 
    title: 'Bilangan Bulat', 
    icon: Calculator, 
    color: 'from-amber-500 to-orange-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0nh6r1b5gekf45n',
    urlGame: 'https://link-game-bilangan.com',
    urlPanduan: '#' // Tambahkan link panduan di sini
  },
  { 
    id: 'aljabar', 
    title: 'Aljabar Dasar', 
    icon: Variable, 
    color: 'from-blue-500 to-indigo-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0ng9qvn73kre0hh',
    urlGame: 'https://link-game-aljabar.com',
    urlPanduan: 'https://link-panduan-bilangan.com' // Koma sudah diperbaiki
  },
  { 
    id: 'himpunan', 
    title: 'Himpunan', 
    icon: Layers, 
    color: 'from-purple-500 to-pink-700', 
    urlMateri: 'https://link-materi-himpunan.com',
    urlGame: '',
    urlPanduan: '#'
  },
  { 
    id: 'persamaan', 
    title: 'Persamaan Linear', 
    icon: Milestone, 
    color: 'from-emerald-500 to-teal-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0nfp3pp232q00c2',
    urlGame: 'https://link-game-persamaan.com',
    urlPanduan: '#'
  },
  { 
    id: 'rasio', 
    title: 'Perbandingan', 
    icon: Percent, 
    color: 'from-rose-500 to-red-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0n9fbkhvy95byqc',
    urlGame: '',
    urlPanduan: '#'
  },
  { 
    id: 'geometri', 
    title: 'Bangun Datar', 
    icon: Shapes, 
    color: 'from-cyan-500 to-blue-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0nc4ypzzxhxgvm1',
    urlGame: 'https://link-game-geometri.com',
    urlPanduan: '#'
  },
  { 
    id: 'bangun-ruang', 
    title: 'Bangun Ruang', 
    icon: Shapes, 
    color: 'from-cyan-500 to-blue-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0ndqtv0kk6xzz9n',
    urlGame: 'https://link-game-geometri.com',
    urlPanduan: '#'
  },
  { 
    id: 'menggunakan-data', 
    title: 'Menggunakan Data', 
    icon: Shapes, 
    color: 'from-cyan-500 to-blue-700', 
    urlMateri: 'https://media-prisma-segitiga.my.canva.site/c0nerw8wk16caqe6',
    urlGame: 'https://link-game-geometri.com',
    urlPanduan: '#'
  },
];

const Grade7: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700 bg-slate-950 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Kelas 7: Materi & Game
        </h1>
        <p className="text-slate-400">Pilih modul pembelajaran atau tantangan game di bawah ini</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuMateri.map((item) => (
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
              
              {/* Bagian Tombol Aksi - 3 Kolom */}
              <div className="grid grid-cols-3 gap-2">
                {/* Tombol 1: Materi */}
                <button 
                  onClick={() => window.open(item.urlMateri, '_blank')}
                  className="bg-white/5 hover:bg-white/10 text-white text-[10px] py-3 rounded-xl transition-all border border-white/10 font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-sm">📖</span>
                  <span>Materi</span>
                </button>

                {/* Tombol 2: Game Interaktif (Conditional) */}
                {item.urlGame ? (
                  <button 
                    onClick={() => window.open(item.urlGame, '_blank')}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] py-3 rounded-xl transition-all font-bold shadow-lg shadow-emerald-900/40 flex flex-col items-center justify-center gap-1"
                  >
                    <span className="text-sm">🎮</span>
                    <span>Interaktif</span>
                  </button>
                ) : (
                  <div className="bg-slate-800 text-slate-500 text-[10px] py-3 rounded-xl flex items-center justify-center italic font-medium">
                    Soon
                  </div>
                )}

                {/* Tombol 3: Game 3D (Selalu Muncul) */}
                <button
                  onClick={() => item.urlPanduan && item.urlPanduan !== '#' ? window.open(item.urlPanduan, '_blank') : alert('Panduan belum tersedia')}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-[10px] py-3 rounded-xl transition-all border border-blue-500/30 font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-sm">🎮</span>
                  <span>Game 3D</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grade7;