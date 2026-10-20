# Cashflow App Launcher & Developer Portfolio

Website portofolio & peluncuran aplikasi murni **HTML5 + Modern CSS + Vanilla JavaScript**.
**Tanpa NPM, tanpa Node.js, tanpa build step, 100% instan dan ringan!**

---

## 📁 Struktur Folder

```text
d:\portfolio\
├── index.html               # Halaman utama portofolio & app launcher
├── style.css                # Styling modern responsif (desktop, tablet, mobile)
├── script.js                # Interaktivitas (QR Code, switch screenshot, accordion FAQ, salin link)
├── downloads/
│   └── CashflowApp.apk      # File APK rilis resmi Android (1.6 MB)
├── screenshots/
│   ├── phone_current.png    # Screenshot layar dashboard
│   ├── cashflow_screen.png  # Screenshot analisis arus kas
│   └── app_verified_screen.png # Screenshot verifikasi keamanan
└── version.json             # Endpoint versi untuk in-app auto updates
```

---

## 🚀 Cara Menjalankan Secara Lokal

**Sangat mudah:**
Cukup **klik ganda (double-click)** file `index.html` di file explorer Anda!
Halaman website langsung terbuka di browser Anda (Chrome, Edge, Firefox, dll) tanpa perlu terminal atau perintah apapun.

---

## 🔄 Cara Melakukan Update Aplikasi di Masa Depan

1. **Ganti file APK:**
   Copy file APK versi baru dari Android Studio dan timpa file di:
   `d:\portfolio\downloads\CashflowApp.apk`

2. **Perbarui nomor versi & changelog di HTML:**
   Buka file `index.html` dengan text editor (VS Code, Notepad, dll), cari teks `v2.0.1` lalu ubah ke nomor versi baru (misal `v2.0.2`), serta perbarui poin catatannya.

3. **Selesai!**

---

## 🌐 Cara Deploy ke Web Hosting (100% Gratis)

* **Opsi GitHub Pages (Paling Populer & Mudah):**
  1. Buat repository baru di GitHub.
  2. Upload semua file dari folder `d:\portfolio` ini ke repository tersebut.
  3. Buka menu **Settings > Pages**, pada *Branch* pilih `main` / `root`, lalu klik **Save**.
  4. Website Anda langsung online di `https://username.github.io/portfolio`!

* **Opsi Vercel / Netlify:**
  Tinggal *drag-and-drop* folder `d:\portfolio` ke dashboard Vercel / Netlify, website langsung aktif dalam hitungan detik.
