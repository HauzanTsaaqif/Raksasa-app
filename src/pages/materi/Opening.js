import '../../CSS/materi_page.css';

import elementBg from '../../assets/materi/element_bg.svg';
import mtkBook from '../../assets/materi/mtk_book.svg';
import wlcmLabel from '../../assets/materi/welcome_label.svg';
import chatBox from '../../assets/materi/chat_box.svg';
import charaSayHai from '../../assets/materi/chara_sayhai.svg';

import { useState , useEffect} from 'react';

function MateriPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  const [name, setName] = useState('');
  const [kelas, setKelas] = useState('');
  const [userId, setUserId] = useState('');

  const inputNama = (event) => {
    setName(event.target.value);
  }

  const inputKelas = (event) => {
    setKelas(event.target.value);
  }

  useEffect(() => {
    fetch('http://192.168.100.145:8081/searchAccount', {
      method: 'POST',
      body: JSON.stringify({ username: username }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setUserId(data);
    })
    .catch(err => console.log(err));
  }, [username]);

  const handleSubmit = () => {
    if(name.length >0 && kelas.length >0){
    const queryParams = new URLSearchParams({
      name: name,
      kelas: kelas,
      userId: userId
    }).toString();
  
    const url = `/materi-page/video-materi?${queryParams}`;

    window.location.href = url;}
    else{
      alert("Nama atau kelas belum diisi");
    }
  };
  
  return (
    <div className='opContainer'>
      <img className='elementBgOp' src={elementBg} alt='Element Background'/>
      <img className='bookOp' src={mtkBook} alt='Element Book'/>
      <img className='labelOp' src={wlcmLabel} alt='Welcome Label'/>
      <img className='inputContainer' src={chatBox} alt='Chat Box'/>
      
      <div className='containerForm'>
        <h2>Hallo, siapa nama Kamu?</h2>
        <input className='inputUsername' placeholder='Isi nama disini' value={name} onChange={inputNama}/>
        <h2>kamu kelas berapa?</h2>
      <select className="inputKelas" value={kelas} onChange={inputKelas}>
        <option value="">Pilih Kelas</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      </div>

      <img className='elementChara' src={charaSayHai} alt='Element Character' />
      <button className='btnStart' onClick={handleSubmit}>Mulai</button>
    </div>
  );
}

export default MateriPage