import '../CSS/form.css'
import '../App.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react';

function SigninPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerified] = useState('');

    const inputUsername = (event) => {
        setUsername(event.target.value);
    }
    const inputPassword = (event) => {
        setPassword(event.target.value);
    }
    const inputVerified = (event) => {
        setVerified(event.target.value);
    }

    const handleSubmit = () => {
        if (username !== "" && password !== "" &&  password === verPassword){
        fetch('https://capable-bejewled-seahorse.glitch.me/data-account', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log('Data berhasil dimasukkan:', data);
            alert("Account berhasil dibuat");
            window.location.href = '/log-in-page/';
          })
          .catch(err => console.log(err));}
        else{
            alert("Verifikasi password salah, tolong periksa kembali password");
        }
      };
      

    return (
    <div className='mainContainer'>
        <Header />
        <div className="FormBackground">
            <div className='FormContainer' id='SignIn'>
                <div>
                    <h2>Daftar Akun</h2>
                    <h3>Nama pengguna</h3>
                    <input className='inputUsername' placeholder='Isi nama disini' value={username} onChange={inputUsername}/>
                    <h3>Password</h3>
                    <input type='password' className='inputPass'placeholder='Isi password disini' value={password} onChange={inputPassword}/>
                    <h3>Verifikasi password</h3>
                    <input type='password' className='verPass' placeholder='Masukkan kembali password' value={verPassword} onChange={inputVerified}/>
                    <button onClick={handleSubmit}>Buat akun</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
  };
  
  export default SigninPage;
