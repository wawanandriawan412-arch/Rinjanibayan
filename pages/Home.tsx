import React from 'react';
import { Page } from '../types';
import { ArrowRight, Star, Award, BookOpen } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <div className="text-center py-12">
        {/* Badge Atas */}
        <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Math Expert Platform</span>
        </div>
        
        {/* Judul Utama & Akronim */}
        <div className="space-y-6"> 
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Selamat Datang di <br/><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
              RINJANI BAYAN
            </span>
          </h1>
          
          {/* Perbaikan Font Akronim: Menggunakan font-sans, uppercase halus, dan tracking-widest */}
          <div className="flex flex-wrap justify-center gap-x-2 text-sm md:text-base font-sans text-slate-300 uppercase tracking-[0.2em]">
            <span>
              <span className="text-amber-500 font-black text-lg">R</span>uang
            </span>
            <span>
              <span className="text-amber-500 font-black text-lg">IN</span>teraktif
            </span>
            <span>
              <span className="text-amber-500 font-black text-lg">JA</span>minan
            </span>
            <span>
              <span className="text-amber-500 font-black text-lg">NI</span>lai
            </span>
            <span className="lowercase font-serif italic text-slate-500">dan</span>
            <span>
              <span className="text-amber-500 font-black text-lg">BA</span>ntuan
            </span>
            <span>
              la<span className="text-amber-500 font-black text-lg">YAN</span>an
            </span>
            <span>siswa</span>
          </div>
        </div>

        {/* Deskripsi Tambahan */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed pt-16">
          Media pembelajaran matematika yang inovatif untuk siswa 
          <br/>
          <span className="text-white font-bold text-2xl tracking-wider">SMPN 5 BAYAN</span>
        </p>

        {/* Tombol Aksi */}
        <div className="flex justify-center gap-4 pt-10">
            <button 
                onClick={() => setPage(Page.MAPEL)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center text-lg"
            >
                Mulai Belajar
                <ArrowRight size={22} className="ml-2" />
            </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all group">
            <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Materi Lengkap</h3>
            <p className="text-slate-400">Kurikulum terstruktur untuk Kelas 7, 8, dan 9 sesuai standar pendidikan nasional.</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all group">
            <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
                <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Kuis Interaktif</h3>
            <p className="text-slate-400">Uji kemampuanmu dengan kuis instan dan dapatkan umpan balik langsung.</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all group">
            <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
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
                <p className="text-slate-300 italic text-lg leading-relaxed">
                    "Setinggi Puncak Harapan, <br/> sedalam akar pengetahuan"
                </p>
                <div className="mt-6 text-sm text-slate-400">
                    Guru Matematika & Web Developer<br/>
                    <span className="text-slate-300 font-semibold">SMPN 5 Bayan</span>
                </div>
            </div>

            {/* Developer Photo */}
            <div className="h-48 w-48 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-2xl flex-shrink-0 mx-auto md:mx-0 bg-slate-800 relative group">
                <img 
                    src="./foto-wawan.jpg" 
                    onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Wawan+Andriawan&background=f59e0b&color=fff&size=256";
                    }}
                    alt="Wawan Andriawan" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;