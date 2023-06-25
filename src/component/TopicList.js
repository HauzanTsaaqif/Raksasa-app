import '../CSS/topic_list.css';
import React, {useState} from 'react';

import logoIpa from '../assets/topic_logo/IPA_logo.png';
import logoIng from '../assets/topic_logo/ING_logo.png';
import logoMtk from '../assets/topic_logo/math_logo.png';
import WordLimit from './WorldLimit';

function TopicList( {username} ) {
    const [isVisible, setIsVisible] = useState(true);

    const func = () =>{
        setIsVisible(true);
    };

    const func1 = () =>{
        setIsVisible(!isVisible);
    };

    const copyLink = () => {
        const link = 'http://10.10.13.45:3000/materi-page?username=' + username;
      
        // Buat elemen input tersembunyi
        const input = document.createElement('input');
        input.value = link;
        document.body.appendChild(input);
      
        // Pilih dan salin teks dari input
        input.select();
        input.setSelectionRange(0, input.value.length);
        document.execCommand('copy');
      
        // Hapus elemen input
        document.body.removeChild(input);
      
        console.log('Link berhasil disalin');
      };

    const startLink = () => {
        window.location.href = '/materi-page?username=' + username;
    }

    return (
    <>
        <div className='TopicListContainer'>
            <div className='TopicContainer' id='btn_materi_1' onClick={func1}>
            <img src={logoMtk} alt="Math Logo" />
                <div className='TopicTittle'>
                    <h3>Matematika</h3>
                    <WordLimit text='Waktu itu ada apa aja sih?' letterLimit={26}/>
                    <p>Kelas 10</p>
                </div>
            </div>
            <div className='TopicContainer'>
                <img src={logoIng} alt='ikon bahasa inggris'/>
                <div className='TopicTittle'>
                    <h3>Bahasa Inggris</h3>
                    <WordLimit text='Mengenal Warna dalam Bahasa Inggris' letterLimit={26}/>
                    <p>Kelas 10</p>
                </div>
            </div>
            <div className='TopicContainer'>
                <img src={logoMtk} alt='Ikon Matematika' />
                <div className='TopicTittle'>
                    <h3>Matematika</h3>
                    <WordLimit text='Pengenalan Konsep Pecahan' letterLimit={26}/>
                    <p>Kelas 11</p>
                </div>
            </div>
            <div className='TopicContainer'>
                <img src={logoIpa} alt='Ikon IPA'/>
                <div className='TopicTittle'>
                    <h3>Ilmu Pengetahuan Alam</h3>
                    <WordLimit text='Sistem Pernapasan pada Manusia' letterLimit={26}/>
                    <p>Kelas 10</p>
                </div>
            </div>
        </div>
        {!isVisible && (
        <div className='curtainContainer' id='curtainCntr' onClick={func}>
            <div className='btnContainer'>
                <button id='linkBtn' onClick={copyLink}>Salin Link</button>
                <button id='startBtn' onClick={startLink}>Mulai Belajar</button>
            </div>
        </div>)}
    </>
    );
  };
  
  export default TopicList;