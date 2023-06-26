import '../CSS/form.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputUsername = (event) => {
    setUsername(event.target.value);
  }
  
  const inputPassword = (event) => {
    setPassword(event.target.value);
  }
  
  const handleLogin = () => {
    // Kirim data ke server menggunakan fetch atau library lainnya
    fetch('http://192.168.100.145:3306/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        console.log('Login berhasil');
        alert(data.message);
        window.location.href = '/user-page?username=' + username;
      } else {
        console.log('Login gagal');
        alert(data.message);
      }
    })
    .catch(err => console.log(err));
  }  

  return (
    <div className='mainContainer'>
        <Header />
        <div className="FormBackground">
            <div className='FormContainer' id='LogIn'>
                <div>
                    <h2>Masuk Akun</h2>
                    <h3>Nama pengguna</h3>
                    <input className='inputUsername' placeholder='Isi nama disini' value={username} onChange={inputUsername}/>
                    <h3>Password</h3>
                    <input type='password' className='inputPass'placeholder='Isi password disini' value={password} onChange={inputPassword}/>
                    <button onClick={handleLogin}>Masuk akun</button>
                    <div className='centerContainer'>
                      <h3>Belum punya akun?, <a href='/sign-in-page/'>daftar akun</a></h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default LoginPage