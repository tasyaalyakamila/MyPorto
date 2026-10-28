# 🌿 Portofolio Web (React JS) - Tasya Alya Kamila

Website portofolio dengan konsep desain retro-editorial aesthetic (Forest Green `#263d2e`, Warm Mustard `#f2a922`, Terracotta `#cf633a`, dan Eggshell Cream `#f5eee6`).

Dibangun menggunakan **React JS + Vite + Tailwind CSS + Lucide Icons**.

---

## 📸 Desain & Fitur
- **Vintage Editorial Style:** Tipografi serif elegan (Playfair Display & Abril Fatface) berpadu dengan aksen teks outline emas (*text-stroke*).
- **Hero Banner:** Poster seni dengan aksen kartu terakota, bintang retro `✦`, dan tombol mengambang *Scroll down*.
- **About & Education:** Linimasa pendidikan dan profil personal.
- **Experience Box:** Kartu kontras kuning mustard (*solid yellow card*) dengan badge keahlian.
- **Visual Contact & Resume:** Kartu kontak hitam retro dengan watermark outline `RESUME`.
- **Skills, Language & Hobbies:** Grid software, keahlian lab sains, bahasa, dan minat personal.

---

## 💻 Cara Menjalankan di Terminal (Lokal)

### 1. Buka Terminal / PowerShell di Folder Proyek
Pastikan direktori aktif Anda berada di folder ini (`D:\SEMESTER 3\Project_Portofolio`).

### 2. Jalankan Server Development
Ketik perintah berikut:
```bash
npm run dev
```
Setelah dijalankan, terminal akan menampilkan tautan lokal, biasanya:
```
  VITE v5.4.10  ready in 200 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Klik tautan tersebut atau buka `http://localhost:5173/` di browser (Chrome / Edge / Firefox).

### 3. Membangun Versi Produksi (Build)
Jika ingin menghasilkan file statis untuk siap dipublikasikan ke hosting atau GitHub Pages:
```bash
npm run build
```
Hasil build akan tersimpan otomatis di folder `dist/`.

---

## 📁 Struktur Direktori
```text
Project_Portofolio/
├── src/
│   ├── App.jsx          # Komponen utama portofolio (isi teks, foto, layout)
│   ├── main.jsx         # Entry point React
│   └── index.css        # Konfigurasi Tailwind & utility outline text
├── index.html           # Template HTML & import Google Fonts
├── tailwind.config.js   # Konfigurasi tema warna & font kustom
├── vite.config.js       # Konfigurasi Vite
└── package.json         # Dependensi proyek
```

---
© 2026 Tasya Alya Kamila
