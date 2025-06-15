
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
        // We'll try to autoplay, but browsers may prevent it until user interaction.
        audioRef.current.play().catch(() => {
            console.warn("Audio autoplay was prevented by the browser.");
        });
        
        // Sync state if browser forces mute
        if (audioRef.current.muted) {
            setIsMuted(true);
        }
    }
  }, []);

  const toggleMute = () => {
      if(audioRef.current) {
          const newMutedState = !audioRef.current.muted;
          audioRef.current.muted = newMutedState;
          setIsMuted(newMutedState);

          // If audio was paused by the browser, try playing again on user interaction
          if (audioRef.current.paused) {
            audioRef.current.play().catch(e => console.warn("Playback failed on toggle.", e));
          }
      }
  }

  return (
    <div className="flex items-center">
        <audio ref={audioRef} src={src} autoPlay loop playsInline/>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={toggleMute} variant="ghost" size="icon">
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    <span className="sr-only">Toggle sound</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{isMuted ? 'Unmute' : 'Mute'}</p>
            </TooltipContent>
        </Tooltip>
    </div>
  );
};

export default AudioPlayer;
