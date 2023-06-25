import '../../CSS/materi_page.css';
import ClockItem from '../../component/Clock';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import prevBtn from '../../assets/materi/prev_btn.svg';
import nextBtn from '../../assets/materi/next_btn.svg';
import floatBtn from '../../assets/materi/floatBtnComunication.svg';
import imgClockTwo from '../../assets/materi/clock_two.svg';
import imgClockSeven from '../../assets/materi/clock_seven.svg';

function LatihanSoal() {
  const location = useLocation();
  const [queryParam, setQueryParam] = useState('');
  
  let nilai = 0;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    setQueryParam(queryParams);
  }, [location.search]);

  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [selectedHour1, setSelectedHour1] = useState(0);
  const [selectedHour2, setSelectedHour2] = useState(0);

  const handleChange1 = (event) => {
    const input = event.target.value;
  
    const formattedInput = input.replace(/\D/g, '');
  
    let formattedTime = '';
    if (formattedInput.length <= 2) {
      formattedTime = formattedInput;
    } else if (formattedInput.length > 2 && formattedInput.length <= 4) {
      formattedTime = formattedInput.slice(0, 2) + '.' + formattedInput.slice(2);
    }
  
    setTime1(formattedTime);
  };
  
  const handleChange2 = (event) => {
    const input = event.target.value;
  
    const formattedInput = input.replace(/\D/g, '');
  
    let formattedTime = '';
    if (formattedInput.length <= 2) {
      formattedTime = formattedInput;
    } else if (formattedInput.length > 2 && formattedInput.length <= 4) {
      formattedTime = formattedInput.slice(0, 2) + '.' + formattedInput.slice(2);
    }
  
    setTime2(formattedTime);
  };

  const gotoComunication = () => {
      window.open('http://103.54.170.231:8501/', '_blank');
  }

  const nextPage = () => {
    const result = window.confirm('apakah sudah yakin?');
    if (result) {
      console.log('Pengguna mengkonfirmasi');
      if (selectedHour1 === 8) {nilai += 25;}
      if (selectedHour2 === 4) {nilai += 25;}
      if (time1 === "07.00") {nilai += 25;}
      if (time2 === "02.00") {nilai += 25;}

      queryParam.set('nilai', nilai);

      const url = `/materi-page/closing-page?${queryParam.toString()}`;
      window.location.href = url;
    } else {
      console.log('Pengguna membatalkan');
      alert("Oke, periksa lagi yaa");
    }
  }

  const prevPage = () => {
    window.location.href = '/materi-page/video-materi/';
  } 

  const handleHourChange1 = (hour) => {
    setSelectedHour1(hour);
  };

  const handleHourChange2 = (hour) => {
    setSelectedHour2(hour);
  };

  return (
    <div className='latihanContainer'>
        <div className='navBarPrev' onClick={prevPage}>
            <img src={prevBtn} alt="" />
            <h3>Kembali</h3>
        </div>

        <div className='titleContainer'>
          <h1>Latihan soal</h1>
        </div>

        <div className='questContainer'>
            <h3>Soal pertama</h3>
            <h2>jarum harus di gerakkan dan menunjukkan jam 08.00</h2>
        </div>

        <ClockItem selectedHour={selectedHour1} onHourChange={handleHourChange1} />

        <div className='breakClock'/>

        <div className='questContainer'>
            <h3>Soal kedua</h3>
            <h2>jarum harus di gerakkan dan menunjukkan jam 04.00</h2>
        </div>
        
        <ClockItem selectedHour={selectedHour2} onHourChange={handleHourChange2} />

        <div className='breakClock'/>

        <div className='questContainer'>
            <h3>Soal ketiga</h3>
            <img src={imgClockSeven} alt="" />
        </div>

        <div className='answContainer'>
          <h3>Jawaban</h3>
          <input type="text" value={time1} onChange={handleChange1} maxLength={5}/>
        </div>

        <div className='questContainer'>
            <h3>Soal keempat</h3>
            <img src={imgClockTwo} alt="" />
        </div>

        <div className='answContainer'>
          <h3>Jawaban</h3>
          <input type="text" value={time2} onChange={handleChange2} maxLength={5}/>
        </div>

        <div className='navBarNext' onClick={nextPage}>
            <img src={nextBtn} alt="" />
            <h3>Selesai</h3>
        </div>
        <img className='floatButton' src={floatBtn} alt="float button" onClick={gotoComunication} />
    </div>
  );
}

export default LatihanSoal