import React, { useEffect, useRef } from "react";

interface VideoTagShape {
  muted?: boolean;
  mediaStream: MediaStream;
  profileImageUrl?: string;
}

const Video = ({ muted, mediaStream, profileImageUrl }: VideoTagShape) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.srcObject = mediaStream ?? null;
  }, [mediaStream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted={muted}
      poster={profileImageUrl ?? "/profiles/default.png"}
    />
  );
};

export default Video;
