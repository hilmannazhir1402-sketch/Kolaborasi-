/**
 * Dataset Kuesioner Perilaku Hemat Energi Siswa Kelas XI
 * Periode: 12 Oktober 2026 - 5 November 2026 (636 Responden)
 * Skala Likert 1-4
 */
const DATA_KAMPANYE_ENERGI = {
  meta: {
    judul: "Hasil Kuesioner Perilaku Hemat Energi Siswa Kelas XI",
    sumber: "Kuesioner - ENERGI XI (Perilaku) (Responses).xlsx",
    skala: "Likert 1-4 per butir (Total 10 butir: 10-40)",
    jumlah_responden: 636,
    jumlah_siswa_terdata: 639,
    persen_partisipasi: 99.4,
    tanggal_pengisian: { awal: "12 Okt 2026", akhir: "05 Nov 2026" }
  },
  ringkasan: {
    rata_rata_skor: 3.36,
    rata_rata_total: 33.62,
    persen_sering_rata_rata: 90.79,
    kategori: {
      "Sangat Baik": 378,
      "Baik": 234,
      "Cukup": 23,
      "Kurang": 1
    },
    kategori_persen: {
      "Sangat Baik": 59.4,
      "Baik": 36.8,
      "Cukup": 3.6,
      "Kurang": 0.2
    },
    sorotan: {
      tertinggi: [
        { kode: "P01", label: "Praktik hemat energi sehari-hari", skor: 3.51 },
        { kode: "P02", label: "Tindakan nyata di bengkel, lab, kelas, rumah", skor: 3.46 },
        { kode: "P06", label: "Cabut charger/steker setelah dipakai", skor: 3.45 }
      ],
      terendah: [
        { kode: "P04", label: "Batasi penggunaan gawai/laptop", skor: 3.22, persen_jarang: 13.7 },
        { kode: "P09", label: "Berani menegur rekan hemat listrik", skor: 3.22, persen_jarang: 13.2 },
        { kode: "P05", label: "Pilih transportasi/fasilitas hemat energi", skor: 3.30, persen_jarang: 13.4 }
      ]
    }
  },
  per_butir: [
    { kode: "P01", label: "Praktik harian hemat energi", rata_rata: 3.51, persen_sering: 98.6, persen_jarang: 1.4 },
    { kode: "P02", label: "Aksi nyata lab/kelas/rumah", rata_rata: 3.46, persen_sering: 95.4, persen_jarang: 4.6 },
    { kode: "P03", label: "Matikan lampu/AC kelas kosong", rata_rata: 3.37, persen_sering: 90.6, persen_jarang: 9.4 },
    { kode: "P04", label: "Batasi pemakaian gawai/laptop", rata_rata: 3.22, persen_sering: 86.3, persen_jarang: 13.7 },
    { kode: "P05", label: "Transportasi/fasilitas hemat energi", rata_rata: 3.30, persen_sering: 86.6, persen_jarang: 13.4 },
    { kode: "P06", label: "Cabut colokan/charger selesai pakai", rata_rata: 3.45, persen_sering: 92.0, persen_jarang: 8.0 },
    { kode: "P07", label: "Manfaatkan cahaya alami siang hari", rata_rata: 3.36, persen_sering: 89.5, persen_jarang: 10.5 },
    { kode: "P08", label: "Atur suhu AC/kipas proporsional", rata_rata: 3.31, persen_sering: 90.4, persen_jarang: 9.6 },
    { kode: "P09", label: "Menegur/mengajak teman berhemat", rata_rata: 3.22, persen_sering: 86.8, persen_jarang: 13.2 },
    { kode: "P10", label: "Cek peralatan mati sebelum pulang", rata_rata: 3.41, persen_sering: 91.7, persen_jarang: 8.3 }
  ],
  per_jurusan: [
    { kode: "PMN", nama: "Pemasaran", responden: 72, rata_rata: 3.51 },
    { kode: "HTL", nama: "Perhotelan", responden: 69, rata_rata: 3.46 },
    { kode: "KLN", nama: "Kuliner", responden: 71, rata_rata: 3.43 },
    { kode: "TJKT", nama: "Teknik Jaringan Komputer & Telko", responden: 104, rata_rata: 3.42 },
    { kode: "DKV", nama: "Desain Komunikasi Visual", responden: 107, rata_rata: 3.34 },
    { kode: "MPLB", nama: "Manajemen Perkantoran & Bisnis", responden: 37, rata_rata: 3.24 },
    { kode: "PPLG", nama: "Pengembangan Perangkat Lunak & Gim", responden: 176, rata_rata: 3.24 }
  ]
};

if (typeof window !== "undefined") {
  window.DATA_KAMPANYE_ENERGI = DATA_KAMPANYE_ENERGI;
}
