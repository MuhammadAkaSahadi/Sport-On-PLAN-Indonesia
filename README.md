<div align="center">

<img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />

<br />
<br />

# 🏅 Sport-On

**Platform E-Commerce Modern untuk Peralatan Olahraga Terbaikmu.**

[Demo](#) · [Dokumentasi](#) · [Laporan Bug](../../issues) · [Fitur Baru](../../issues)

</div>

---

## 📌 Tentang Proyek

**Sport-On** adalah platform e-commerce yang dirancang khusus untuk memfasilitasi kebutuhan perlengkapan olahraga pelanggan. Aplikasi ini melayani berbagai pengguna mulai dari pelanggan biasa (customer) hingga administrator sistem.

Dibangun dengan stack teknologi modern untuk menawarkan performa tinggi, pengalaman berbelanja yang interaktif, dan kemudahan manajemen produk serta transaksi secara efisien.

---

## ✨ Fitur Utama

### 🛒 Pengalaman Berbelanja
- Katalog produk olahraga dengan kategori yang terstruktur.
- Proses checkout yang mulus.
- Status pelacakan pesanan (*Order Status*).

### 💳 Transaksi & Pembayaran
- Manajemen informasi pembayaran dan perbankan yang aman.
- Riwayat transaksi terintegrasi.

### 👥 Dashboard Admin & Manajemen
- Manajemen Katalog Produk (Tambah, Edit, Hapus).
- Manajemen Kategori Produk.
- Manajemen Transaksi Pelanggan.
- Pengaturan Informasi Bank untuk penerimaan pembayaran.

---

## 👤 Peran Pengguna

| Peran | Akses |
|---|---|
| **Customer (Pelanggan)** | Menjelajahi katalog produk, melakukan pemesanan (checkout), melihat status pesanan, dan melakukan pembayaran. |
| **Admin** | Memantau lalu lintas transaksi, mengelola data produk dan kategori, serta mengatur informasi pembayaran bank. |

---

## 🛠️ Teknologi yang Digunakan

### Core
| Teknologi | Kegunaan |
|---|---|
| [Next.js](https://nextjs.org/) | Framework React full-stack dengan App Router terotomatisasi |
| [React](https://react.dev/) | Library antarmuka pengguna modern |
| [TypeScript](https://www.typescriptlang.org/) | Keamanan Type (Type safety) dan pencegahan *bug* |

### Styling & UI
| Teknologi | Kegunaan |
|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | Kerangka utilitas CSS supercepat dan fleksibel (v4) |
| [React Icons](https://react-icons.github.io/react-icons/) | Koleksi ikon yang lengkap |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | *Toast notifications* pop-up yang elegan |

### State & API Management
| Teknologi | Kegunaan |
|---|---|
| [Zustand](https://zustand-demo.pmnd.rs/) | Penyimpanan/manajemen state yang luar biasa simpel |
| [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | Pengelolaan pemanggilan API eksternal tersentralisasi |

### Backend & Database
| Teknologi | Kegunaan |
|---|---|
| [MongoDB](https://www.mongodb.com/) | Basis data NoSQL untuk skalabilitas tinggi dan fleksibilitas data |

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat

Pastikan kamu sudah menginstall:
- [Node.js](https://nodejs.org/) v18 atau versi lebih baru
- [npm](https://www.npmjs.com/) atau [pnpm](https://pnpm.io/)

### Instalasi

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/MuhammadAkaSahadi/Sport-On-PLAN-Indonesia.git
   cd sport-on
   ```

2. **Install dependensi**
   ```bash
   npm install
   ```

3. **Setup environment variables**

   Buat file `.env` dari contoh yang tersedia dan sesuaikan dengan URL API milikmu:
   ```env
   NEXT_PUBLIC_API_URL=your_api_base_url
   NEXT_PUBLIC_API_ROOT=your_api_root_url
   ```

4. **Jalankan local server**
   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser untuk memulai aplikasinya.

---

## 📁 Struktur Inti Direktori

```text
sport-on/
├── app/                    # Routing App Next.js
│   ├── (auth)/             # Autentikasi Admin
│   ├── (dashboard)/        # Area dashboard admin untuk manajemen (Produk, Kategori, Transaksi)
│   ├── (landing)/          # Halaman publik e-commerce (Produk, Checkout, Status Pesanan)
│   ├── lib/                # Konfigurasi Fetch API tersentralisasi
│   └── services/           # Logika pemanggilan layanan API (Auth, Bank, Kategori, Produk, Transaksi)
├── public/                 # Aset statis
└── tailwind.config.ts / postcss.config.mjs  # Konfigurasi Tailwind & PostCSS
```

---

## 🤝 Kontribusi

Kami sangat terbuka untuk kontribusi pengembangan yang lebih baik! Ikuti alur berikut:

1. Fork repositori ini
2. Buat branch fitur barumu (`git checkout -b feature/fitur-baru`)
3. Lakukan Commit (`git commit -m 'feat: menambahkan fitur X'`)
4. Push ke branch milikmu (`git push origin feature/fitur-baru`)
5. Kirimkan permintaan Pull (Pull Request)

---

<div align="center">

Dirancang dan dikembangkan dengan ❤️ untuk pengalaman berbelanja olahraga terbaik

</div>
