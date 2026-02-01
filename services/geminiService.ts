
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_API_KEY;

// Initialize the client only if the key exists to prevent immediate runtime errors on load
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (history: string[], newMessage: string): Promise<string> => {
  if (!ai) {
    return "Maaf, fitur chat belum dikonfigurasi dengan API Key. Silakan hubungi Administrator (Pak Wawan).";
  }

  try {
    const model = ai.models;
    
    // Construct the prompt with context
    const systemInstruction = `
      Anda adalah "Rinjani" (Ruang Interaktif Jaminan Nilai), asisten AI pendidikan dari SMPN 5 Bayan.
      Pembuat anda adalah Pak Wawan Andriawan, S.Pd. Gr.
      Tugas anda adalah membantu siswa SMP belajar Matematika dengan bahasa yang ramah, memotivasi, dan mudah dipahami.
      Jawablah pertanyaan seputar matematika, kurikulum SMP, atau motivasi belajar.
      Jangan memberikan jawaban langsung untuk PR, tapi bimbinglah siswa menemukan jawabannya.
    `;

    const contents = [
      { role: 'user', parts: [{ text: `System Instruction: ${systemInstruction}` }] },
      ...history.map(msg => ({ role: 'user', parts: [{ text: msg }] })), // Simplified history for this example
      { role: 'user', parts: [{ text: newMessage }] }
    ];

    // Using generateContent for a single turn based on cumulative history state managed by UI
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
          role: 'user',
          parts: [{ text: systemInstruction + "\n\nUser: " + newMessage }]
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan saat ini.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Terjadi kesalahan saat menghubungi server Rinjani. Coba lagi nanti.";
  }
};