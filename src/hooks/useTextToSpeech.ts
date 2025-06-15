
import { useState, useEffect, useCallback } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
        console.warn("Speech synthesis not supported.");
        return;
    }
    const synth = window.speechSynthesis;
    
    // Cancel any ongoing speech before starting a new one
    if (synth.speaking) {
      synth.cancel();
    }

    if (text) {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.onend = () => {
        setIsSpeaking(false);
      };
      utterThis.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        setIsSpeaking(false);
      };
      setIsSpeaking(true);
      synth.speak(utterThis);
    }
  }, []);

  useEffect(() => {
    const synth = window.speechSynthesis;
    return () => {
      // Clean up and cancel speech when the component unmounts
      if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, []);

  return { speak, isSpeaking };
};
