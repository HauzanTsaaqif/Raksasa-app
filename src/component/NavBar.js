import '../CSS/header.css';

function NavBar() {
    const gotoComunication = () => {
        window.open('http://103.54.170.231:8501/', '_blank');
    }

    return (
    <nav>
        <ul>
            <li><a href="/">Beranda</a></li>
            <li onClick={gotoComunication}><a>Swacara</a></li>
            <li><a href="/log-in-page/">Log In</a></li>
        </ul>
    </nav>
    );
  };
  
  export default NavBar;