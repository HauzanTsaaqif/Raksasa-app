import { useRef, useEffect } from 'react';
import { Hands } from '@mediapipe/hands';

function Communication() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      startVideo();
    }
  }, []);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          initMediaPipe();
        }
      })
      .catch((error) => {
        console.log('Error accessing camera:', error);
      });
  };

  const initMediaPipe = () => {
    const hands = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });
    hands.setOptions({
      maxNumHands: 1, // Jumlah tangan yang ingin dideteksi (dalam contoh ini, 1 tangan)
    });
    hands.onResults(handleHandResults);

    if (videoRef.current && canvasRef.current) {
      hands.initialize().then(() => {
        hands.start(videoRef.current, canvasRef.current);
      });
    }
  };

  const handleHandResults = (results) => {
    // Proses hasil deteksi tangan di sini
    console.log(results);
  };

  return (
    <>
      <video ref={videoRef} width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" />
    </>
  );
}

export default Communication;
