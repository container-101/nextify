import { useCallback, useEffect, useState } from 'react'

interface UserMediaHookOptions {
  enableVideo?: boolean
  enableAudio?: boolean
}

export const useUserMedia = (options?: UserMediaHookOptions) => {
  const [mediaStream, setMediaStream] = useState<MediaStream>(null)

  const getMediaStream = useCallback(async () => {
    try {
      const media = await navigator.mediaDevices.getUserMedia({
        audio: options.enableAudio
          ? { sampleSize: 4, echoCancellation: true, noiseSuppression: true }
          : false,
        video: options.enableVideo ? { facingMode: 'user' } : false,
      })
      setMediaStream(media)
    } catch (err) {
      throw new Error('MediaStream is invalid in user browser')
    }
  }, [options.enableAudio, options.enableVideo])

  useEffect(() => {
    if (!mediaStream) {
      getMediaStream()
    } else {
      return () => {
        mediaStream.getTracks().forEach((track) => {
          track.stop()
        })
      }
    }
  }, [getMediaStream, mediaStream])

  return mediaStream
}
