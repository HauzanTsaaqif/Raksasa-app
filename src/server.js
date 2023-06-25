const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://default:fVv3H2yWrDoG@ep-tiny-limit-795119.us-east-1.postgres.vercel-storage.com:5432/verceldb",
  ssl: {
    rejectUnauthorized: false
  }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const searchSql = 'SELECT * FROM raksasa_db.data_account WHERE username = $1';
    const selectUser = [username];
  
    pool.query(searchSql, selectUser, (err, result) => {
      if (err) {
        console.error('Gagal mencari data:', err);
        res.status(500).json({ message: 'Gagal mencari data' });
      } else {
        if (result.rows.length > 0) {
          console.log('Akun ada');
          res.status(200).json({ success: true, message: 'Login berhasil' });
        } else {
          console.log('Akun tidak ada');
          res.status(200).json({ success: false, message: 'Nama pengguna atau password salah' });
        }
      }
    });
  });