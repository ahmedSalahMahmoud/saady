import { useState, useRef, useEffect } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative h-[70vh] md:h-[75vh] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/header_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-black/10 to-black/20" />
      </div>

      {/* Video Controls - Bottom Left */}
      <div className="absolute bottom-20 left-20 z-20 flex flex-col gap-3">
        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center text-white hover:bg-accent/20 transition-all duration-300 group"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          ) : (
            <Volume2 className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          )}
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={toggleVideo}
          className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center text-white hover:bg-accent/20 transition-all duration-300 group"
          aria-label={isPaused ? 'Play' : 'Pause'}
        >
          {isPaused ? (
            <Play className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          ) : (
            <Pause className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          )}
        </button>
      </div>

      {/* Scroll Indicator - Right side */}
      <div className="absolute bottom-20 right-10 z-10 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white" />
        <div className="w-2 h-2 rounded-full bg-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
