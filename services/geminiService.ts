import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

/**
 * Generates an image using the Gemini Nano Banana (gemini-2.5-flash-image) model.
 * Returns a base64 data URL.
 */
export const generateIndustrialImage = async (prompt: string): Promise<string | null> => {
  if (!apiKey) {
    console.warn("API Key missing, skipping AI generation.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash-image (Nano Banana) as requested
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `Photorealistic, high quality, industrial photography, cinematic lighting, 8k resolution: ${prompt}`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    
    return null;

  } catch (error: any) {
    // Handle specific error codes gracefully
    // 429: Resource Exhausted / Quota Exceeded
    const isQuotaError = 
      error.status === 'RESOURCE_EXHAUSTED' || 
      error.code === 429 || 
      error?.error?.code === 429 ||
      (error.message && error.message.includes('429')) ||
      (error.message && error.message.includes('quota'));

    if (isQuotaError) {
      console.warn(`Gemini API Quota Exceeded for prompt "${prompt.substring(0, 20)}...". Using fallback image.`);
      return null;
    }

    console.error("Gemini Image Generation Error:", error);
    return null;
  }
};