import React from 'react';
import { Calculator, Zap, Shapes, PieChart, Activity, Minimize2, Maximize2 } from 'lucide-react';

// 1. Data Materi Kelas 9
const menuMateriKls9 = [
  { 
    id: 'perpangkatan', 
    title: 'Perpangkatan & Akar', 
    icon: Zap, 
    color: 'from-yellow-500 to-orange-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: 'LINK_GAME_ANDA' 
  },
  { 
    id: 'persamaan-kuadrat', 
    title: 'Persamaan Kuadrat', 
    icon: Calculator, 
    color: 'from-blue-500 to-indigo-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '' 
  },
  { 
    id: 'fungsi-kuadrat', 
    title: 'Fungsi Kuadrat', 
    icon: Activity, 
    color: 'from-purple-500 to-pink-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '' 
  },
  { 
    id: 'transformasi', 
    title: 'Transformasi Geometri', 
    icon: Minimize2, 
    color: 'from-emerald-500 to-teal-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: 'LINK_GAME_ANDA' 
  },
  { 
    id: 'kesebangunan', 
    title: 'Kesebangunan', 
    icon: Maximize2, 
    color: 'from-rose-500 to-red-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '' 
  },
  { 
    id: 'bangun-ruang-sisi-lengkung', 
    title: 'BRSL', 
    icon: Shapes, 
    color: 'from-cyan-500 to-blue-700', 
    urlMateri: 'LINK_CANVA_ANDA',
    urlGame: '' 
  }
];

const Grade9: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Kelas 9: Materi & Game
        </h1>
        <p className="text-slate-400">Persiapan ujian dan pendalaman materi matematika kelas 9.</p>
      </div>

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

export default Grade9;