import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onClose }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(index);
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswerChecked(true);
    if (selectedOption === questions[currentQIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="bg-slate-800 rounded-xl p-8 text-center shadow-2xl border border-amber-500/20 max-w-lg mx-auto mt-10">
        <div className="inline-block p-4 bg-amber-500/20 rounded-full mb-4">
          <Trophy size={48} className="text-amber-400" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-white mb-2">Hasil Kuis</h2>
        <p className="text-slate-400 mb-6">Kamu telah menyelesaikan tantangan ini!</p>
        
        <div className="text-6xl font-bold text-amber-500 mb-4">{score}/{questions.length}</div>
        <p className="text-lg text-white mb-8">
            Nilai Kamu: <span className={percentage >= 70 ? "text-green-400" : "text-red-400"}>{percentage}</span>
        </p>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={resetQuiz}
            className="flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            <RefreshCw size={18} className="mr-2" />
            Coba Lagi
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
          >
            Selesai
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQIndex];

  return (
    <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700 max-w-2xl mx-auto mt-4">
      {/* Progress Bar */}
      <div className="bg-slate-900 h-2 w-full">
        <div 
          className="bg-amber-500 h-full transition-all duration-300" 
          style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-white">Soal {currentQIndex + 1}</h3>
            <span className="text-sm bg-slate-700 px-3 py-1 rounded-full text-amber-400">
                Skor: {score}
            </span>
        </div>
        
        <p className="text-lg text-slate-200 mb-8 leading-relaxed">
          {question.question}
        </p>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let btnClass = "w-full text-left p-4 rounded-lg border transition-all ";
            
            if (isAnswerChecked) {
              if (idx === question.correctAnswer) {
                btnClass += "bg-green-900/50 border-green-500 text-green-100";
              } else if (idx === selectedOption) {
                btnClass += "bg-red-900/50 border-red-500 text-red-100";
              } else {
                btnClass += "bg-slate-700 border-slate-600 text-slate-400 opacity-50";
              }
            } else {
              if (selectedOption === idx) {
                btnClass += "bg-amber-600 border-amber-500 text-white ring-2 ring-amber-400/30";
              } else {
                btnClass += "bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:border-slate-500";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswerChecked}
                className={btnClass}
              >
                <div className="flex justify-between items-center">
                  <span>{String.fromCharCode(65 + idx)}. {option}</span>
                  {isAnswerChecked && idx === question.correctAnswer && <CheckCircle size={20} className="text-green-400" />}
                  {isAnswerChecked && idx === selectedOption && idx !== question.correctAnswer && <XCircle size={20} className="text-red-400" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-700 flex justify-end">
        {!isAnswerChecked ? (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Kunci Jawaban
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium"
          >
            {currentQIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;