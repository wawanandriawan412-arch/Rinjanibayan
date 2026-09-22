import React from 'react';
import { Activity, Atom, Leaf, Microscope } from 'lucide-react';

const menuMateriIpa7 = [
  {
    id: 'makhluk-hidup',
    title: 'Klasifikasi Makhluk Hidup',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-700',
    urlMateri: '',
    urlGame: ''
  },
  {
    id: 'zat',
    title: 'Zat dan Perubahannya',
    icon: Atom,
    color: 'from-blue-500 to-indigo-700',
    urlMateri: '',
    urlGame: ''
  },
  {
    id: 'suhu',
    title: 'Suhu dan Kalor',
    icon: Activity,
    color: 'from-amber-500 to-orange-700',
    urlMateri: '',
    urlGame: ''
  },
  {
    id: 'mikroskop',
    title: 'Organisasi Kehidupan',
    icon: Microscope,
    color: 'from-purple-500 to-pink-700',
    urlMateri: '',
    urlGame: ''
  }
];

const openLink = (url: string, unavailableMessage: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  window.alert(unavailableMessage);
};

const Grade7Ipa: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700 bg-slate-950 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          IPA Kelas 7: Materi & Game
        </h1>
        <p className="text-slate-400">Pilih materi IPA untuk mulai belajar secara interaktif.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuMateriIpa7.map((item) => (
          <div
            key={item.id}
            className={`group p-1 bg-gradient-to-br ${item.color} rounded-3xl transition-all hover:scale-[1.02] shadow-xl`}
          >
            <div className="bg-slate-900 p-6 rounded-[22px] h-full flex flex-col justify-between">
              <div>
                <item.icon className="text-white opacity-80 mb-4 group-hover:rotate-12 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs mb-6">Materi IPA interaktif untuk memperkuat pemahamanmu.</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => openLink(item.urlMateri, 'Materi belum tersedia untuk topik ini')}
                  className="bg-white/5 hover:bg-white/10 text-white text-[10px] py-3 rounded-xl transition-all border border-white/10 font-semibold flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-sm">📖</span>
                  <span>Materi</span>
                </button>
                <button
                  type="button"
                  onClick={() => openLink(item.urlGame, 'Game belum tersedia untuk topik ini')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] py-3 rounded-xl transition-all font-bold shadow-lg shadow-emerald-900/40 flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-sm">🎮</span>
                  <span>Interaktif</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grade7Ipa;
