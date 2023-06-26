// server/handleLogin.js

const { Pool } = require('pg');

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Menggunakan variabel lingkungan DATABASE_URL dari Vercel
  ssl: {
    rejectUnauthorized: false // Mengabaikan sertifikat SSL jika digunakan
  }
});

const handleLogin = (req, res) => {
  const { username, password } = req.body;

  // Query untuk mendapatkan data pengguna dari tabel data_account
  const query = {
    text: 'SELECT * FROM data_account WHERE username = $1 AND password = $2',
    values: [username, password]
  };

  // Eksekusi query
  pool.query(query)
    .then(result => {
      if (result.rowCount > 0) {
        res.status(200).json({ success: true, message: 'Login berhasil' });
      } else {
        res.status(401).json({ success: false, message: 'Login gagal' });
      }
    })
    .catch(error => {
      console.error('Error executing query', error);
      res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server' });
    });
};

module.exports = handleLogin;
