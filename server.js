const express = require('express');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint Health Check untuk Koyeb
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Endpoint untuk menangani callback dari Tripay
app.post('/callback', (req, res) => {
    console.log('Callback Diterima:', req.body);

    // Respon sukses agar Tripay tahu request diterima
    res.json({ success: true });
});

// Gunakan PORT dari environment variable atau default 8000
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('Backend Topup Game Running!');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
