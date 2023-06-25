import '../../CSS/materi_page.css';
import React, { useRef, useState } from 'react';

import prevBtn from '../../assets/materi/prev_btn.svg';
import nextBtn from '../../assets/materi/next_btn.svg';
import vidMtk1 from '../../assets/materi/video_materi_fix_validasi.mp4';
import floatBtn from '../../assets/materi/floatBtnComunication.svg';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function VideoMateri() {
  const location = useLocation();
  const [url, setUrl] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const url = `/materi-page/latihan-soal?${queryParams}`;
    setUrl(url);
  }, [location.search]);

    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    const playVideo = () => {
        videoRef.current.play();
      };

    const pauseVideo = () => {
        videoRef.current.pause();
    };

    const enterFullscreen = () => {
        const videoElement = videoRef.current;
    
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
      };

    const handleTimeChange = (event) => {
        const time = event.target.value;
        videoRef.current.currentTime = time;
        setCurrentTime(time);
      };

    const gotoComunication = () => {
        window.open('http://103.54.170.231:8501/', '_blank');
      }

    const NextPage = () => {
      window.location.href = url;
    }

    const prevPage = () => {
      window.location.href = '/materi-page/';
    }
  
  return (
    <div className='materiContainer'>
        <div className='navBarPrev' onClick={prevPage}>
            <img src={prevBtn} alt="" />
            <h3>Kembali</h3>
        </div>
        <video id="videoPlayer" width="100%" ref={videoRef} onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}>
            <source src={vidMtk1} type="video/mp4" />
        </video>
        <div className='containerBtn'>
            <button id="playButton" onClick={playVideo}>Play</button>
            <button id="pauseButton" onClick={pauseVideo}>Pause</button>
            <input className='barTime' type="range" min="0" max={videoRef.current ? videoRef.current.duration : 2} value={currentTime} onChange={handleTimeChange} />
            <button onClick={enterFullscreen}>Layar penuh</button>
        </div>
        <div className='containerRangkuman'>
          <h1 className='titleVid'>Waktu itu ada apa aja sih?</h1>
          <div className='subTitle'>
            <h2>Matematika</h2>
            <h2>Kelas 10</h2>
          </div>
          <hr className='blackLine'/>
          <p>
          Waktu adalah seluruh rangkaian ketika proses, perbuatan, atau keadaan berada atau berlangsung. Waktu sendiri terbagi menjadi 2, yaitu siang dan malam. Siang digunakan kita untuk beraktivitas, sedangkan malam digunakan oleh kita untuk beristirahat. Waktu siang dimulai pukul 06.00-18.00 sore,  sedangkan waktu malam dimulai pukul 18.00-06.00 pagi.
          </p>
        </div>
        <div className='navBarNext' onClick={NextPage}>
            <img src={nextBtn} alt="" />
            <h3>Lanjutkan</h3>
        </div>
        <img className='floatButton' src={floatBtn} alt="float button" onClick={gotoComunication} />
    </div>
  );
}

export default VideoMateri