import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LogIn';
import SigninPage from './pages/SignIn';
import UserPage from './pages/UserPage';
import MateriPage from './pages/materi/Opening';
import VideoMateri from './pages/materi/VideoMateri';
import LatihanSoal from './pages/materi/LatihanSoal';
import ClosingPage from './pages/materi/Closing';
import Communication from './pages/Communication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-in-page/" element={<LoginPage />} />
        <Route path="/sign-in-page/" element={<SigninPage />} />
        <Route path="/user-page/" element={<UserPage />} />
        <Route path="/materi-page/" element={<MateriPage />} />
        <Route path="/comm-page/" element={<Communication />} />
        <Route path="/materi-page/video-materi/" element={<VideoMateri/>} />
        <Route path="/materi-page/latihan-soal/" element={<LatihanSoal />} />
        <Route path="/materi-page/closing-page/" element={<ClosingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
