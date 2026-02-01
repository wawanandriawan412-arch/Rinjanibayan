import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Slide } from '../types';

interface SlideViewerProps {
  slides: Slide[];
}

const SlideViewer: React.FC<SlideViewerProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700 flex flex-col h-[500px]">
      {/* Slide Header */}
      <div className="bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-amber-500">
          <BookOpen size={20} />
          <span className="font-bold text-lg">Materi Pembelajaran</span>
        </div>
        <span className="text-slate-400 text-sm">
          Slide {currentIndex + 1} / {slides.length}
        </span>
      </div>

      {/* Slide Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-slate-800 text-slate-100 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-400 mb-6 border-b border-amber-500/30 pb-2">
            {slides[currentIndex].title}
            </h2>
            <div className="prose prose-invert prose-lg">
            {slides[currentIndex].content}
            </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-slate-900 p-4 border-t border-slate-700 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
            currentIndex === 0
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-slate-700 text-white hover:bg-slate-600'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          Sebelumnya
        </button>

        <div className="flex space-x-2">
            {slides.map((_, idx) => (
                <div 
                    key={idx}
                    className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-amber-500' : 'bg-slate-600'}`}
                />
            ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
            currentIndex === slides.length - 1
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          Selanjutnya
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default SlideViewer;