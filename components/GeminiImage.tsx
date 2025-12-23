import React, { useState, useEffect } from 'react';
import { generateIndustrialImage } from '../services/geminiService';

interface GeminiImageProps {
  prompt: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const GeminiImage: React.FC<GeminiImageProps> = ({ 
  prompt, 
  fallbackSrc, 
  alt, 
  className = "",
}) => {
  const [imageSrc, setImageSrc] = useState<string>(fallbackSrc);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      // Check if we have a cached version in session storage to save API calls during navigation
      const cacheKey = `gemini-img-${prompt}`;
      const cached = sessionStorage.getItem(cacheKey);

      if (cached) {
        if (isMounted) {
          setImageSrc(cached);
          setIsGenerated(true);
          setIsLoading(false);
        }
        return;
      }

      // If API key exists, try to generate
      if (process.env.API_KEY) {
        try {
          const generatedUrl = await generateIndustrialImage(prompt);
          if (generatedUrl && isMounted) {
            setImageSrc(generatedUrl);
            setIsGenerated(true);
            sessionStorage.setItem(cacheKey, generatedUrl);
          }
        } catch (e) {
          // Silent fail to fallback
        }
      }
      
      if (isMounted) setIsLoading(false);
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10 animate-pulse">
          <span className="text-slate-400 text-sm font-medium">Loading Visual...</span>
        </div>
      )}
      
      <img 
        src={imageSrc} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
      />
      
      {/* Badge to show if it's AI generated (Optional cool factor for the client) */}
      {isGenerated && (
        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">
          AI Generated
        </div>
      )}
    </div>
  );
};