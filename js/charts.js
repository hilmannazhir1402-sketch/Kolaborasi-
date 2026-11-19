/**
 * Visualisasi Data Kuesioner Hemat Energi (Chart.js)
 * Standar Web Profesional: Responsif, Jelas, & Informatif
 */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js belum siap.');
    return;
  }

  const dataSumber = window.DATA_KAMPANYE_ENERGI;
  if (!dataSumber) return;

  // Konfigurasi Global Chart.js
  Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = '#333333';
  Chart.defaults.responsive = true;
  Chart.defaults.maintainAspectRatio = false;

  // 1. Grafik Distribusi Kategori (Doughnut)
  const ctxKategori = document.getElementById('chartKategori');
  if (ctxKategori) {
    new Chart(ctxKategori, {
      type: 'doughnut',
      data: {
        labels: ['Sangat Baik (59.4%)', 'Baik (36.8%)', 'Cukup (3.6%)', 'Kurang (0.2%)'],
        datasets: [{
          data: [
            dataSumber.ringkasan.kategori['Sangat Baik'],
            dataSumber.ringkasan.kategori['Baik'],
            dataSumber.ringkasan.kategori['Cukup'],
            dataSumber.ringkasan.kategori['Kurang']
          ],
          backgroundColor: ['#10b981', '#0ea5e9', '#f59e0b', '#ef4444'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 15, font: { weight: '600' } }
          },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                const total = 636;
                const pct = ((ctx.parsed / total) * 100).toFixed(1);
                return ` ${ctx.label.split(' ')[0]}: ${ctx.parsed} siswa (${pct}%)`;
              }
            }
          }
        }
      }
    });
  }

  // 2. Grafik Rata-Rata 10 Butir (Bar Chart)
  const ctxButir = document.getElementById('chartButir');
  if (ctxButir) {
    const labels = dataSumber.per_butir.map(b => b.kode);
    const scores = dataSumber.per_butir.map(b => b.rata_rata);
    const colors = dataSumber.per_butir.map(b => {
      if (['P01', 'P02', 'P06'].includes(b.kode)) return '#10b981'; // Tertinggi
      if (['P04', 'P09', 'P05'].includes(b.kode)) return '#f59e0b'; // Area Perbaikan
      return '#059669';
    });

    new Chart(ctxButir, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Skor Rata-Rata (1.00 - 4.00)',
          data: scores,
          backgroundColor: colors,
          borderRadius: 4,
          maxBarThickness: 36
        }]
      },
      options: {
        scales: {
          y: {
            min: 2.5,
            max: 4.0,
            ticks: { stepSize: 0.25 },
            title: { display: true, text: 'Rata-Rata Skor' }
          },
          x: {
            grid: { display: false }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: items => {
                const b = dataSumber.per_butir[items[0].dataIndex];
                return `${b.kode}: ${b.label}`;
              },
              label: ctx => {
                const b = dataSumber.per_butir[ctx.dataIndex];
                return [
                  ` Skor: ${ctx.parsed.y.toFixed(2)} / 4.00`,
                  ` Kebiasaan Sering: ${b.persen_sering}%`
                ];
              }
            }
          }
        }
      }
    });
  }

  // 3. Grafik Skor per Jurusan (Horizontal Bar)
  const ctxJurusan = document.getElementById('chartJurusan');
  if (ctxJurusan) {
    new Chart(ctxJurusan, {
      type: 'bar',
      data: {
        labels: dataSumber.per_jurusan.map(j => `${j.nama} (${j.kode})`),
        datasets: [{
          label: 'Skor Rata-Rata',
          data: dataSumber.per_jurusan.map(j => j.rata_rata),
          backgroundColor: '#10b981',
          borderRadius: 4,
          maxBarThickness: 22
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            min: 2.8,
            max: 3.8,
            ticks: { stepSize: 0.2 },
            title: { display: true, text: 'Skor Rata-Rata Jurusan' }
          },
          y: {
            grid: { display: false }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => {
                const j = dataSumber.per_jurusan[ctx.dataIndex];
                return ` Skor: ${j.rata_rata} (Responden: ${j.responden} siswa)`;
              }
            }
          }
        }
      }
    });
  }
});
