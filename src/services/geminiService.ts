import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will be disabled.");
} else {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const generateSpeech = async (text: string): Promise<string | null> => {
  if (!ai) {
    alert("Google AI API 키가 설정되지 않아 AI 기능을 사용할 수 없습니다.");
    return null;
  }
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say with a professional and trustworthy tone: ${text}` }] }],
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: 'Kore' },
                },
            },
        },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
        return base64Audio;
    }
    return null;
  } catch (error) {
    console.error("Error generating speech:", error);
    alert("음성 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    return null;
  }
};
