import React from 'react';
import { Page } from '../types';
import { ArrowRight, Star, Award, BookOpen } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Math Expert Platform</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
          Selamat Datang di <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Rinjani Bayan</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Ruang Interaktif Jaminan Nilai dan Bantuan Layanan Siswa.
          Media pembelajaran matematika yang inovatif untuk siswa SMPN 5 Bayan.
        </p>
        <div className="flex justify-center gap-4 pt-4">
            <button 
                onClick={() => setPage(Page.GRADE_7)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 flex items-center"
            >
                Mulai Belajar
                <ArrowRight size={20} className="ml-2" />
            </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Materi Lengkap</h3>
            <p className="text-slate-400">Kurikulum terstruktur untuk Kelas 7, 8, dan 9 sesuai standar pendidikan nasional.</p>
        </div>
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Kuis Interaktif</h3>
            <p className="text-slate-400">Uji kemampuanmu dengan kuis instan dan dapatkan umpan balik langsung.</p>
        </div>
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-amber-500">
                <Star size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Asisten Cerdas</h3>
            <p className="text-slate-400">Tanya jawab soal matematika kapan saja dengan fitur chat "Hallo Rinjani".</p>
        </div>
      </div>

      {/* Teacher Profile Section */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-serif font-bold text-white mb-2">Tentang Pengembang</h2>
                <p className="text-amber-400 font-bold text-lg mb-4">Wawan Andriawan, S.Pd. Gr</p>
                <p className="text-slate-300 italic text-lg">
                    "Setinggi Puncak Harapan, sedalam akar pengetahuan"
                </p>
                <div className="mt-4 text-sm text-slate-400">
                    Guru Matematika & Web Developer<br/>
                    SMPN 5 Bayan
                </div>
            </div>
             {/* Developer Photo */}
            <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-2xl flex-shrink-0 mx-auto md:mx-0 bg-slate-800 relative group">
                {/* Pastikan file foto bernama 'foto-wawan.jpg' ada di folder public/root */}
                <img 
                    src="./foto-wawan.jpg" 
                    onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Wawan+Andriawan&background=f59e0b&color=fff&size=256";
                    }}
                    alt="Wawan Andriawan" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white text-center p-2 cursor-default">
                    Simpan foto Anda sbg 'foto-wawan.jpg'
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;