import React, { useState } from 'react';
import SlideViewer from '../components/SlideViewer';
import Quiz from '../components/Quiz';
import { Slide, QuizQuestion } from '../types';
import { Play, Gamepad2, BrainCircuit, ExternalLink } from 'lucide-react';

const Grade7: React.FC = () => {
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');

  // Materi Bilangan Bulat
  const slides: Slide[] = [
    {
      id: 1,
      title: "Pengertian Bilangan Bulat",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Bilangan bulat</strong> adalah himpunan bilangan yang terdiri dari bilangan bulat negatif, nol, dan bilangan bulat positif.
          </p>
          <div className="bg-slate-900 p-4 rounded-lg border-l-4 border-amber-500 my-4">
            <p className="font-mono text-center text-lg">B = {`{..., -3, -2, -1, 0, 1, 2, 3, ...}`}</p>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Bilangan Bulat Positif:</strong> Terletak di sebelah kanan nol (1, 2, 3, ...).</li>
            <li><strong>Nol:</strong> Bilangan netral, bukan positif maupun negatif.</li>
            <li><strong>Bilangan Bulat Negatif:</strong> Terletak di sebelah kiri nol (-1, -2, -3, ...).</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: "Garis Bilangan",
      content: (
        <div className="space-y-4">
          <p>Garis bilangan membantu kita memvisualisasikan posisi bilangan bulat.</p>
          <div className="py-8 relative h-24 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-1 bg-white"></div>
            {/* Simple tick marks visualization */}
            {[-3, -2, -1, 0, 1, 2, 3].map((num) => (
                <div key={num} className="absolute flex flex-col items-center" style={{ left: `${50 + num * 12}%` }}>
                    <div className="h-3 w-1 bg-amber-500"></div>
                    <span className="mt-2 text-sm text-slate-300">{num}</span>
                </div>
            ))}
          </div>
          <p className="text-sm italic text-slate-400 text-center">
            Semakin ke kanan nilainya semakin besar, semakin ke kiri nilainya semakin kecil.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Penjumlahan & Pengurangan",
      content: (
        <div className="space-y-4">
          <h3 className="font-bold text-amber-400">Aturan Tanda:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold border-b border-slate-500 pb-2 mb-2">Penjumlahan</h4>
                <p>Jika tandanya sama, jumlahkan angkanya.</p>
                <p>Jika tandanya beda, cari selisihnya.</p>
                <p className="mt-2 font-mono text-sm bg-slate-900 p-2 rounded">
                    (-5) + (-3) = -8<br/>
                    (-5) + 3 = -2
                </p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold border-b border-slate-500 pb-2 mb-2">Pengurangan</h4>
                <p>Mengurangi sama dengan menjumlahkan dengan lawan bilangan.</p>
                <p className="mt-2 font-mono text-sm bg-slate-900 p-2 rounded">
                    a - b = a + (-b)<br/>
                    5 - (-3) = 5 + 3 = 8
                </p>
            </div>
          </div>
        </div>
      )
    },
    {
        id: 4,
        title: "Perkalian & Pembagian",
        content: (
          <div className="space-y-4">
            <p>Aturan tanda pada perkalian dan pembagian lebih sederhana:</p>
            <table className="w-full text-left border-collapse border border-slate-600">
                <thead>
                    <tr className="bg-slate-700">
                        <th className="p-2 border border-slate-600">Bilangan 1</th>
                        <th className="p-2 border border-slate-600">Bilangan 2</th>
                        <th className="p-2 border border-slate-600">Hasil</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2 border border-slate-600 text-green-400">(+)</td>
                        <td className="p-2 border border-slate-600 text-green-400">(+)</td>
                        <td className="p-2 border border-slate-600 text-green-400">Positif (+)</td>
                    </tr>
                    <tr>
                        <td className="p-2 border border-slate-600 text-red-400">(-)</td>
                        <td className="p-2 border border-slate-600 text-red-400">(-)</td>
                        <td className="p-2 border border-slate-600 text-green-400">Positif (+)</td>
                    </tr>
                    <tr>
                        <td className="p-2 border border-slate-600 text-green-400">(+)</td>
                        <td className="p-2 border border-slate-600 text-red-400">(-)</td>
                        <td className="p-2 border border-slate-600 text-red-400">Negatif (-)</td>
                    </tr>
                </tbody>
            </table>
            <p className="font-mono text-center bg-slate-900 p-2 rounded text-amber-300">
                "Sapu tangan" (Sama Positif, Beda Negatif)
            </p>
          </div>
        )
      },
      {
        id: 5,
        title: "Operasi Hitung Campuran",
        content: (
          <div className="space-y-4">
            <p>Urutan pengerjaan operasi hitung (Kabataku):</p>
            <ol className="list-decimal pl-6 space-y-2">
                <li>Operasi dalam <strong>Kurung ( )</strong> dikerjakan pertama.</li>
                <li><strong>Kali (x)</strong> dan <strong>Bagi (:)</strong> sama kuat, kerjakan dari kiri.</li>
                <li><strong>Tambah (+)</strong> dan <strong>Kurang (-)</strong> sama kuat, kerjakan dari kiri.</li>
            </ol>
            <div className="bg-slate-900 p-4 rounded-lg mt-2">
                <p className="font-bold text-amber-400">Contoh:</p>
                <p className="font-mono">
                    10 + (-4) x 5<br/>
                    = 10 + (-20)<br/>
                    = -10
                </p>
            </div>
          </div>
        )
      }
  ];

  const quizData: QuizQuestion[] = [
    {
      id: 1,
      question: "Suhu ruangan pendingin mula-mula -5°C, kemudian diturunkan lagi 3°C. Suhu ruangan sekarang adalah...",
      options: ["-2°C", "-8°C", "2°C", "8°C"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Hasil dari -12 + 7 - (-5) adalah...",
      options: ["0", "-10", "-24", "10"],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "Nilai dari (-4) x 6 : (-2) adalah...",
      options: ["12", "-12", "6", "-6"],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Bilangan bulat yang terletak 5 satuan di sebelah kiri -2 adalah...",
      options: ["3", "-3", "-7", "7"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Hitunglah: 20 + (-5) x 4 = ...",
      options: ["60", "0", "-60", "100"],
      correctAnswer: 1
    }
  ];

  const handleSimulasiClick = () => {
    window.open('https://phet.colorado.edu/sims/html/number-line-integers/latest/number-line-integers_all.html', '_blank');
  };

  return (
    <div className="space-y-8">
        <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Bilangan Bulat</h1>
            <p className="text-amber-400 font-medium">Matematika Kelas 7 / Semester 1</p>
        </div>

      {mode === 'learn' ? (
        <>
            <SlideViewer slides={slides} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <button 
                    onClick={handleSimulasiClick}
                    className="flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1"
                >
                    <ExternalLink size={24} className="mr-3" />
                    <div className="text-left">
                        <div className="font-bold">Mulai Simulasi</div>
                        <div className="text-xs opacity-75">PhET Interactive</div>
                    </div>
                </button>

                <button 
                    onClick={() => setMode('quiz')}
                    className="flex items-center justify-center p-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg shadow-amber-900/50 transition-all transform hover:-translate-y-1"
                >
                    <BrainCircuit size={24} className="mr-3" />
                    <div className="text-left">
                        <div className="font-bold">Kuis Interaktif</div>
                        <div className="text-xs opacity-75">Uji Pemahamanmu</div>
                    </div>
                </button>

                <button 
                    className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg shadow-purple-900/50 transition-all transform hover:-translate-y-1"
                    onClick={() => alert("Fitur Game Edukasi akan segera hadir di update Rinjani v2.0!")}
                >
                    <Gamepad2 size={24} className="mr-3" />
                    <div className="text-left">
                        <div className="font-bold">Mainkan Game</div>
                        <div className="text-xs opacity-75">Belajar sambil bermain</div>
                    </div>
                </button>
            </div>
        </>
      ) : (
        <Quiz questions={quizData} onClose={() => setMode('learn')} />
      )}
    </div>
  );
};

export default Grade7;