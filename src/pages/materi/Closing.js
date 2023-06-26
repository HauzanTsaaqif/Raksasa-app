import '../../CSS/materi_page.css';

import elementBg from '../../assets/materi/element_bg.svg';

import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

function ClosingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [userId, setUserId] = useState('');
  const [nilai, setNilai] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const kelas = queryParams.get('kelas');
    const userId = queryParams.get('userId');
    const nilai = queryParams.get('nilai');

    setNama(name);
    setKelas(kelas);
    setUserId(userId);
    setNilai(nilai);
  }, [location.search]);

  const handleSubmit = () =>{
    setIsVisible(true);
    fetch('https://evanescent-evening-range.glitch.me/data-nilai', {
    method: 'POST',
    body: JSON.stringify({ nama, kelas, userId, nilai }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log('Data berhasil dimasukkan:', data);
    })
    .catch(err => console.log(err)); 
  }

  const Feedback = () => {
    if (nilai <= 50) {
      return 'Perbaiki kembali yaa';
    } else if (nilai <= 75) {
      return 'Bagus, tingkatkan kembali yaa';
    } else {
      return 'Sangat bagus, pertahankan yaa';
    }
  };
  
  
  return (
    <div className='clsContainer'>
      <img className='elementBgOp' src={elementBg} alt='Element Background'/>
      <div className='closeText'>
        {isVisible && 
        (<div><h1>Yeaay, selesai !!!</h1>
        <h1>Selamat {nama}</h1>
        <h1>Score : {nilai}</h1></div>)}
        {!isVisible &&
        <button className='btnFinnish' onClick={handleSubmit}>Selesai</button>}
        {isVisible && <h1>{Feedback()}</h1>}
      </div>
    </div>
  );
}

export default ClosingPage
