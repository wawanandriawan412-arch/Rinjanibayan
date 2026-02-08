import React from 'react';
import { Calculator, Zap, Shapes, Activity, Minimize2, Maximize2 } from 'lucide-react';

// 1. Data Materi Kelas 9 dengan 3 Link
const menuMateriKls9 = [
  { 
    id: 'perpangkatan', 
    title: 'Perpangkatan & Akar', 
    icon: Zap, 
    color: 'from-yellow-500 to-orange-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: 'LINK_GAME_ANDA',
    urlPanduan: '#' // Masukkan link Game 3D Roblox di sini
  },
  { 
    id: 'persamaan-kuadrat', 
    title: 'Persamaan Kuadrat', 
    icon: Calculator, 
    color: 'from-blue-500 to-indigo-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '', 
    urlPanduan: '#'
  },
  { 
    id: 'fungsi-kuadrat', 
    title: 'Fungsi Kuadrat', 
    icon: Activity, 
    color: 'from-purple-500 to-pink-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '', 
    urlPanduan: '#'
  },
  { 
    id: 'transformasi', 
    title: 'Transformasi Geometri', 
    icon: Minimize2, 
    color: 'from-emerald-500 to-teal-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: 'LINK_GAME_ANDA',
    urlPanduan: '#'
  },
  { 
    id: 'kesebangunan', 
    title: 'Kesebangunan', 
    icon: Maximize2, 
    color: 'from-rose-500 to-red-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '', 
    urlPanduan: '#'
  },
  { 
    id: 'brsl', 
    title: 'BRSL', 
    icon: Shapes, 
    color: 'from-cyan-500 to-blue-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '', 
    urlPanduan: '#'
  }
];

const Grade9: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700 bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Kelas 9: Materi & Game
        </h1>
        <p className="text-slate-400">Persiapan ujian dan pendalaman materi matematika kelas 9.</p>
      </div>

      {/* Grid Materi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuMateriKls9.map((item) => (
          <div 
            key={item.id} 
            className={`group p-1 bg-gradient-to-br ${item.color} rounded-3xl transition-all hover:scale-[1.02] shadow-xl`}
          >
            <div className="bg-slate-900 p-6 rounded-[22px] h-full flex flex-col justify-between">
              <div>
                <item.icon className="text-white opacity-80 mb-4 group-hover:rotate-12 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs mb-6">Materi interaktif untuk membantu persiapan kelulusanmu.</p>
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
                  <div className="bg-slate-800 text-slate-500 text-[10px] py-3 rounded-xl flex items-center justify-center italic font-medium text-center">
                    Soon
                  </div>
                )}

                {/* Tombol 3: Game 3D (Selalu Muncul) */}
                <button
                  onClick={() => item.urlPanduan && item.urlPanduan !== '#' ? window.open(item.urlPanduan, '_blank') : alert('Game 3D belum tersedia')}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-[10px] py-3 rounded-xl transition-all border border-blue-500/30 font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-sm">🚀</span>
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

export default Grade9;