import Header from '../component/Header'
import Footer from '../component/Footer'
import '../CSS/user_page.css'
import React, { useEffect, useState } from 'react';

import blankProfil from '../assets/blank_profil_2.svg'

import { saveAs } from 'file-saver';


function UserPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const [isVisible, setIsVisible] = useState(true);
    const [numNote, setNumNote] = useState('');
    const [textNote, setTextNote] = useState('');
    const [data, setData] = useState([]);
    const [data_note, setDataNote] = useState([]);
    const [filterKelas, setFilterKelas] = useState('');

    const closeCurtain = () =>{setIsVisible(true);};
    
    const openCurtain = (numNote) =>{
        setIsVisible(false); 
        setNumNote(numNote)
        if(numNote === '1'){
            setTextNote(data_note[0].note_1);
        }if(numNote === '2'){
            setTextNote(data_note[0].note_2);
        }if(numNote === '3'){
            setTextNote(data_note[0].note_3);
        }if(numNote === '4'){
            setTextNote(data_note[0].note_4);
        } 
    };

    const FilterKelas = (filterKelas) =>{
        setFilterKelas(filterKelas);
        console.log(filterKelas)
    }

    const giveMateri= () =>{
        window.location.href = '/?username=' + username;
    };

    const inputTextNote = (event) =>{
        setTextNote(event.target.value);
    }

    useEffect(() => {
        let url = `http://192.168.100.145:8081/user-nilai-siswa?username=${username}`;

        if (filterKelas) {
            url += `&filterKelas=${filterKelas}`;
        }

        fetch(url)
          .then(res => res.json())
          .then(data => setData(data))
          .catch(err => console.log(err));
      }, [username, filterKelas]);

      useEffect(() => {
        fetch(`http://192.168.100.145:8081/user-note?username=${username}`)
          .then(res => res.json())
          .then(data_note => setDataNote(data_note))
          .catch(err => console.log(err));
      }, [username]);

      console.log(data_note);

      const generatePDF = () => {
        let url = `http://192.168.100.145:8081/user-pdf-make?username=${username}`;

        if (filterKelas) {
            url += `&filterKelas=${filterKelas}`;
        }
        fetch(url)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], 'data_nilai.pdf', { type: 'application/pdf' });
            saveAs(file);
          })
          .catch(err => console.log(err));
      };

      const saveNote = () => {
        const data = {
          username: username,
          numNote: numNote, 
          textNote: textNote 
        };
      
        fetch(`http://192.168.100.145:8081/input-user-note`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          window.location.href = '/user-page?username=' + username;
        })
        .catch(error => {
          console.error('Error:', error);
          alert('error, sedang gangguan, mohon maaf.');
        });
      }
      
    return (
    <div className='mainContainer'>
        <Header />
        <div className='ProfilContainer'>
            <div className='FotoProfilBorder'><img src={blankProfil} alt="Blank Foto Profil" /></div>
            <h1>{username}</h1>
        </div>
        <div className='CalenderContainer'>
            <h2>Catatan Guru</h2>
            <div className='ListNote'>
                <div className='Note' onClick={() => openCurtain('1')}>
                    <h1>Note 1</h1>
                    <p>{data_note.length > 0 ? (data_note[0].note_1 ? data_note[0].note_1.slice(0, 90) : 'Belum ada catatan..') : 'Belum ada catatan..'}</p>
                </div>
                <div className='Note' onClick={() => openCurtain('2')}>
                    <h1>Note 2</h1>
                    <p>{data_note.length > 0 ? (data_note[0].note_2 ? data_note[0].note_2 : 'Belum ada catatan..') : 'Belum ada catatan..'}</p>
                </div>
                <div className='Note' onClick={() => openCurtain('3')}>
                    <h1>Note 3</h1>
                    <p>{data_note.length > 0 ? (data_note[0].note_3 ? data_note[0].note_3 : 'Belum ada catatan..') : 'Belum ada catatan..'}</p>
                </div>
                <div className='Note' onClick={() => openCurtain('4')}>
                    <h1>Note 4</h1>
                    <p>{data_note.length > 0 ? (data_note[0].note_4 ? data_note[0].note_4 : 'Belum ada catatan..') : 'Belum ada catatan..'}</p>
                </div>
            </div>
            <button onClick={giveMateri}>Beri materi</button>
        </div>
        <div className='ReportContainer'>
            <h2>Daftar Nilai Siswa</h2>
            <select className="inputKelas" onChange={(e) => FilterKelas(e.target.value)}>
                <option value="">Kelas</option>
                <option value="10">Kelas 10</option>
                <option value="11">Kelas 11</option>
                <option value="12">Kelas 12</option>
            </select>
            <table>
                <thead>
                    <th>Nama</th>
                    <th>Nilai</th>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.nama}</td>
                            <td>{d.nilai}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
        <Footer />
        {!isVisible && (
        <div className='curtainContainer' id='curtainCntr'>
            <div className='inputNoteContainer'>
                <h1>Note {numNote}</h1>
                <textarea rows={4} maxLength={1000} placeholder="Masukkan catatan..." onChange={inputTextNote} value={textNote} defaultValue={textNote}></textarea>
                <div className='inputNoteButton'>
                <button onClick={closeCurtain} >Batalkan</button>
                <button onClick={saveNote}>Simpan</button>
                </div>
            </div>
        </div>)}
    </div>
    );
  };
  
  export default UserPage;