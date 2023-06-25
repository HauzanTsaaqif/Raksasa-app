import '../CSS/cover.css';

function SlideImage() {
    return (
        <>
        <div className="slideImageContainer">
            <div id="slideset1">
                <div id="container" className="img1">
                </div>
                <div id="container" className="img2">
                </div>
                <div id="container" className="img3">
                </div>
            </div>
        </div>
        <div className='textContainer'>
            <div className='backgroundText'>
                <h1>Selamat datang di Raksasa</h1>
                <p>Revolusi Anak Berkebutuhan Khusus dengan Sistem dan Aplikasi Pendidikan Adaptif dan Responsif.</p>
                <p>Buat atau masuk Akun Guru untuk mengakses fitur monitoring nilai siswa.</p>
            </div>
            <a href="/sign-in-page/" className="signInBtn">Daftar Sekarang</a>
        </div>
        </>
    );
};

export default SlideImage;