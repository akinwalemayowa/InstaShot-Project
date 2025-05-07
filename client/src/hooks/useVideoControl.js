import { useEffect, useRef, useState } from "react";

export default function useVideoControl() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true)
    }
  }, [])
  return <div>useVideoControl</div>;
}
