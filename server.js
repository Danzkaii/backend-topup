const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route utama
app.get("/", (req, res) => {
    res.send("Server berjalan...");
});

// Endpoint untuk menerima callback dari Tripay
app.post("/callback", (req, res) => {
    console.log("Callback diterima:", req.body);

    // Cek validitas data (bisa dicek signature jika perlu)
    const { merchant_ref, status, amount } = req.body;
    
    if (!merchant_ref || !status || !amount) {
        return res.status(400).json({ success: false, message: "Data tidak valid" });
    }

    // Simpan atau update status transaksi di database
    console.log(`Transaksi ${merchant_ref} berstatus: ${status}`);

    // Kirim response ke Tripay
    res.status(200).json({ success: true });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
