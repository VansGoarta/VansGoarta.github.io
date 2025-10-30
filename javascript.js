document.getElementById("waForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = encodeURIComponent(e.target.nama.value);
  const email = encodeURIComponent(e.target.email.value);
  const judul = encodeURIComponent(e.target.judul.value);
  const pesan = encodeURIComponent(e.target.pesan.value);

  const waNumber = "6281297291817"; // nomor WA kamu tanpa 0 di depan
  const text = `Halo, saya ${nama} (${email})%0AJudul: ${judul}%0APesan: ${pesan}`;
  const url = `https://wa.me/${waNumber}?text=${text}`;

  window.open(url, "_blank");
});
 // 🔹 Ambil tombol
  const toTopBtn = document.getElementById("toTopBtn");

  // 🔹 Saat user scroll ke bawah 400px, tombol muncul
  window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };

  // 🔹 Klik tombol -> scroll ke atas halus
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });