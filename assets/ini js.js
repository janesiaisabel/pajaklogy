
const menubutton =document.querySelector(".menubutton")
const menu=document.querySelector(".menu")
const line1=document.querySelector(".line1")
const line2=document.querySelector(".line2")
const line3=document.querySelector(".line3")


menubutton.addEventListener('click', function () {
    menu.classList.toggle("menu-active")
    line1.classList.toggle("line1-close")
    line2.classList.toggle("line2-close")
    line3.classList.toggle("line3-close")
})

const nextBtn=document.querySelector("#nextbutton")
const prevBtn=document.querySelector('#prevbutton')
const frame = document.querySelector(".frame")
const pph = '<h3>Pajak Penghasilan</h3><p class="teks">Pajak Penghasilan (PPh) adalah pajak yang dikenakan kepada orang pribadi atau badan atas penghasilan yang diterima atau diperoleh dalam suatu tahun pajak. Objek pajak penghasilan adalah seluruh tambahan kemampuan ekonomis yang diterima atau diperoleh Wajib Pajak. Ada juga penghasilan yang tidak termasuk objek pajak yaitu sumbangan, warisan, hibah dari keluarga sedarah, natura, dll. Pajak penghasilan dapat dibedakan menjadi beberapa jenis :</p><ul class="teks"><li>PPh 21diberlakukan pada upah, gaji, tunjangan serta beberapa pembayaran lain</li><li>PPh 22 mengatur mengenai perdagangan ekspor dan impor</li><li>PPh 23 dikenakan pada penghasilan atas modal, penyerahan jasa, hadiah, atau penghargaan</li><li>PPh 29 adalah PPh Kurang Bayar (KB) yang tercantum pada SPT Tahunan</li><li>PPh Pasal 25 adalah pajak penghasilan yang pembayarannya dilakukan dengan sistem angsuran</li></ul><p class="teks">Tarif Pajak Penghasilan diatur dalam <a href="https://www.pajak.go.id/id/undang-undang-nomor-36-tahun-2008" style="color:#007483 ;" target="blank"> UU No. 36 Tahun 2008</a></p>'
const ppn = '<h3>Pajak Pertambahan Nilai</h3><p class="teks">Pajak Pertambahan Nilai atau PPN adalah pungutan yang dibebankan atas transaksi jual-beli barang dan jasa yang dilakukan oleh wajib pajak pribadi atau wajib pajak badan yang telah menjadi Pengusaha Kena Pajak (PKP). Suatu perusahaan atau seorang pengusaha ditetapkan sebagai PKP bila transaksi penjualannya melampaui jumlah Rp 4,8 miliar dalam setahun. Seorang PKP wajib menerbitkan faktur pajak sebagai bukti dirinya telah memungut pajak dari pembeli. Faktur pajak dapat dibuat menggunakan aplikasi e-Faktur.</p><ul class="teks"><li>Pajak keluaran ialah PPN yang dipungut ketika PKP menjual produknya </li><li>Pajak masukan ialah PPN yang dibayar ketika PKP membeli, memperoleh maupun membuat produknya</li></ul><p class="teks">Tarif PPN adalah 10% (sepuluh persen) dari harga produk/barang kena pajak.</p>'
const pbb = '<h3>Pajak Bumi dan Bangunan</h3><p class="teks">Pajak Bumi dan Bangunan (PBB) adalah pungutan atas tanah dan bangunan yang muncul karena adanya keuntungan dan/atau kedudukan sosial ekonomi bagi seseorang atau badan yang memiliki suatu hak atasnya, atau memperoleh manfaat dari padanya. Objek Pajak Bumi dan Bangunan adalah tanah, kebun, sawah, rumah ataupun gedung yang dimiliki subjek pajak. Yang tidak termasuk objek pajak adalah tempat ibadah, hutan dan kuburan.</p><p class="teks">Tarif pajak bumi dan bangunan yang berlaku adalah sebesar 0,5% dari NJKP (Nilai Jual Kena Pajak), sedangkan NJKP diperoleh 20% dari NJOP (Nilai Jual Objek Pajak).</p>'
const pkb = '<h3>Pajak Kendaraan Bermotor</h3><p class="teks">Pajak Kendaraan Bermotor (PKB) adalah pajak daerah yang dikenakan atas kendaraan bermotor (mobil maupun sepeda motor) yang dimiliki subjek pajak. Adapun kereta api, kendaraan pertahanan dan keamanan negara dan kendaraan untuk pameran tidak termasuk dalam objek pajak ini. Dasar pengenaan Pajak Kendaraan Bermotor adalah hasil perkalian dari 2 unsur pokok :</p><ul class="teks"><li>Nilai Jual Kendaraan Bermotor</li><li>Bobot yang mencerminkan secara relative tingkat kerusakan jalan dan/atau pencemaran lingkungan akibat penggunaan Kendaraan Bermotor.</li></ul><p class="teks">Tarif PKB orang pribadi untuk kepemilikan kendaraan bermotor pertama sebesar 2%,  untuk kepemilikan kendaraan bermotor kedua sebesar 2,5%, dan seterusnya bertambah 0,5%. Sedangkan tarif PKB untuk badan (perusahaan) adalah sebesar 2%.</p>'
const pajak=[pph,ppn,pbb,pkb]
let x=1

nextBtn.addEventListener('click',function next() {    
    if (x<pajak.length) {
        x=x+1
    } else {
        x=1
    }
    frame.innerHTML= pajak[x-1]
})

prevBtn.addEventListener("click",function previous() {
    if (x>1) {
        x=x-1
    } else {
        x=pajak.length
    }
    frame.innerHTML=pajak[x-1]
})
