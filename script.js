const data = [
["busy","🖥️","🧑‍🦰","BOSS OMNIA","Bos","Ngawasin semua, bagi tugas."],
["idle","🖥️","👨‍💼","PM 1","Manager","Bagi tugas harian."],
["online","🖥️","👨‍💼","PM 2","Manager","Ngatur jadwal upload."],
["coding","🖥️","🧑‍💻","DEV 1","Developer","Ngoding website OMNIA."],
["coding","🖥️","🧑‍💻","DEV 2","Developer","Ngoding HTML kantor ini."],
["coding","🖥️","🧑‍💻","DEV 3","Developer","Bikin aplikasi kasir."],
["busy","🖥️","🧑‍💻","DEV 4","Developer","Bikin bot WhatsApp."],
["idle","🖥️","🧑‍💻","DEV 5","Developer","Perbaiki bug."],
["busy","🖥️","🎨","DESIGN 1","Designer","Bikin logo OMNIA."],
["busy","🖥️","🎨","DESIGN 2","Designer","Bikin gambar Budi si OB."],
["online","🖥️","🎨","DESIGN 3","Designer","Bikin thumbnail YouTube."],
["online","🖥️","📢","MARKETING 1","Marketing","Bikin naskah OB Part 2."],
["idle","🖥️","📢","MARKETING 2","Marketing","Bikin caption TikTok."],
["online","🖥️","📢","MARKETING 3","Marketing","Cari ide viral."],
["online","🖥️","🔍","QA 1","QA","Ngecek video."],
["idle","🖥️","🔍","QA 2","QA","Ngecek website."],
["online","🖥️","💬","CS 1","CS","Balesin WA customer."],
["busy","🖥️","💬","CS 2","CS","Balesin komen IG."],
["online","🖥️","💬","CS 3","CS","Follow up orderan."],
["online","🖥️","🎓","INTERN","Magang","Belajar + bantuin semua."]
];
let total = 0;
const grid = document.getElementById('grid');
data.forEach(a => {
  const d = document.createElement('div');
  d.className = 'desk';
  d.innerHTML = '<div class="bubble ' + a[0] + '">' + (a[0]==='online' ? '● online' : a[0]) + '</div><div class="monitor">' + a[1] + '</div><span class="person">' + a[2] + '</span><span class="chair">🪑</span><b>' + a[3] + '</b><small>' + a[4] + '</small>';
  d.onclick = function(){
    document.querySelectorAll('.desk').forEach(e=>e.classList.remove('active'));
    d.classList.add('active');
    document.getElementById('nama').innerText = '> ' + a[2] + ' ' + a[3] + ' - ' + a[4] + ' - Status: ' + a[0];
    document.getElementById('tugas').innerText = a[5] + ' | Update: ' + new Date().toLocaleTimeString('id-ID') + ' WIB';
  };
  grid.appendChild(d);
});
function semuaKerja(){
  document.getElementById('nama').innerText = '> 🚀 SEMUA 20 LAGI KERJA!';
  document.getElementById('tugas').innerText = 'Semua status jadi busy! PM bagi tugas • DEV ngoding • DESIGN bikin gambar • MARKETING bikin naskah • CS balesin chat!';
}
function jual(){
  total += 250000;
  document.getElementById('jual').innerText = 'Rp ' + total.toLocaleString('id-ID');
  document.getElementById('tugas').innerText = '💰 CS berhasil jual! Total hari ini Rp ' + total.toLocaleString('id-ID');
}
function budiMasuk(){
  document.getElementById('nama').innerText = '> 🧹 BUDI SI OB MASUK!';
  document.getElementById('tugas').innerText = 'Budi yang dulu dihina, sekarang diterima di OMNIA! Mulai dari OB, cita-citanya jadi Miliarder!';
}
setInterval(function(){
  const t = new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  document.getElementById('jam').innerText = t;
  document.getElementById('jam2').innerText = t + ' WIB';
},1000);