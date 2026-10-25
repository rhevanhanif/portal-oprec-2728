const STORAGE_KEY = 'portalRayaKarsaPasundan_v2';
const FIREBASE_CONFIG_KEY = 'portal_firebase_custom_config';

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSy_YOUR_API_KEY_HERE",
  authDomain: "portal-raya-karsa-pasundan.firebaseapp.com",
  projectId: "portal-raya-karsa-pasundan",
  storageBucket: "portal-raya-karsa-pasundan.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

const GROUPS_CONFIG = {
  1: { name: 'Kelompok 1 — SAWALA', shortName: 'SAWALA', facilitator: 'Muh Naufal Rifqi', password: 'INTEGRITAS24' },
  2: { name: 'Kelompok 2 — RANCAGE', shortName: 'RANCAGE', facilitator: 'Andini Hanum Ratna Duhita', password: 'NUSANTARA57' },
  3: { name: 'Kelompok 3 — INOHONG', shortName: 'INOHONG', facilitator: 'Radhwa Fadya Prameswari', password: 'KOLABORASI83' },
  4: { name: 'Kelompok 4 — WIDYA', shortName: 'WIDYA', facilitator: 'Khansa Angelina Athaya', password: 'PANCASILA46' },
  5: { name: 'Kelompok 5 — PANGESTU', shortName: 'PANGESTU', facilitator: 'Benafatin Wiradni Badawi', password: 'SOLIDARITAS79' },
  6: { name: 'Kelompok 6 — JAWARA', shortName: 'JAWARA', facilitator: 'Muhammad Dani', password: 'PATRIOTISME35' }
};

const ADMIN_PASSWORD = 'KARSA94ADMIN28';

const TIMELINE_DEFAULT = [
  { name: 'Pendaftaran & Perkenalan Awal', date: 'Coming Soon', status: 'active' },
  { name: 'Pra-Recruitment', date: 'Coming Soon', status: 'upcoming' },
  { name: 'Penugasan Pertama — Silih Asih', date: 'Coming Soon', status: 'upcoming' },
  { name: 'Penugasan Kedua — Silih Asah', date: 'Coming Soon', status: 'upcoming' },
  { name: 'Penugasan Terakhir — Silih Asuh', date: 'Coming Soon', status: 'upcoming' },
  { name: 'Evaluasi Tertulis', date: 'Coming Soon', status: 'upcoming' },
  { name: 'Sesi Wawancara', date: 'Coming Soon', status: 'upcoming' },
  { name: 'Pengumuman Akhir', date: '14 Desember 2026', status: 'upcoming' }
];

const GAME_THEMES = {
  1: {
    title: 'Kesehatan Mental & Academic Burnout Pelajar',
    desc: 'Manajemen stres akademik, adaptasi beban belajar, dan penguatan kesejahteraan emosional pelajar di lingkungan sekolah.'
  },
  2: {
    title: 'Etika Digital, Cyberbullying, & Fenomena Brainrot',
    desc: 'Literasi informasi kritis, pencegahan perundungan siber, dan navigasi konten digital yang sehat bagi remaja masa kini.'
  },
  3: {
    title: 'Krisis Sampah Plastik & Ekologi Lingkungan Sekolah',
    desc: 'Inovasi circular economy, sistem pemilahan sampah terintegrasi, dan pembiasaan budaya zero-waste di seluruh lingkungan Al Muslim.'
  },
  4: {
    title: 'Lunturnya Budaya Lokal & Nasional di Kalangan Gen-Z',
    desc: 'Revitalisasi kearifan lokal Sunda dan nilai Pancasila melalui pendekatan multimedia modern, fesyen, dan seni kontemporer.'
  },
  5: {
    title: 'Pencegahan Perundungan (Bullying) & Ruang Aman Sekolah',
    desc: 'Pembangunan mekanisme pelaporan aman, konseling sebaya yang suportif, dan edukasi empati kolektif tanpa diskriminasi.'
  },
  6: {
    title: 'Apatisme Siswa terhadap Organisasi & Regenerasi Kepemimpinan',
    desc: 'Reformasi partisipasi siswa, transparansi aspirasi, dan inkubator kepemimpinan transformatif OSIS yang inklusif.'
  }
};

const GAME_STAGE1 = {
  1: {
    intro: 'Menjelang agenda Pra-Recruitment, panitia perlu memastikan ketepatan jadwal pembagian ruang koordinasi agar seluruh sesi berjalan tertib. Empat divisi kepengurusan (Inti, Wirausaha, Humas, dan Kesenian) dijadwalkan menggunakan empat lokasi berbeda (Aula, Ruang Rapat, Lab, dan Lapangan) secara bergiliran pada pukul 13.00, 14.00, 15.00, serta 16.00 WIB. Cermati rangkaian catatan koordinasi berikut untuk mengonfirmasi jadwal yang tepat:',
    clues: [
      'Divisi Kesenian menggunakan Aula tepat satu jam setelah sesi Divisi Wirausaha selesai berlangsung.',
      'Sesi di Ruang Rapat dijadwalkan tepat pada pukul 15.00 WIB, dan ruangan ini dipastikan tidak digunakan oleh Divisi Humas maupun Divisi Wirausaha.',
      'Divisi Inti melaksanakan agendanya tepat satu jam sebelum Divisi Humas memulai kegiatan di Lapangan.',
      'Divisi Wirausaha tidak berkegiatan di Lapangan dan tidak memulai sesinya pada pukul 15.00 WIB.'
    ],
    question: 'Berdasarkan catatan di atas, pada pukul berapakah Divisi Inti melaksanakan kegiatan dan di ruangan manakah mereka berada? (Gunakan format: WAKTU-RUANGAN)',
    answer: '15.00-RUANG RAPAT'
  },
  2: {
    intro: 'Guna kelancaran sinkronisasi pekan kerja organisasi, panitia menyusun agenda harian untuk empat divisi (DPS, Rohis, Bela Negara, dan Humas). Setiap divisi memegang satu agenda khusus (Pengawasan, Sosialisasi, Rapat Pleno, dan Evaluasi) yang dilaksanakan bergantian dari hari Senin hingga Kamis. Identifikasi penugasan yang sesuai berdasarkan catatan operasional berikut:',
    clues: [
      'Divisi Humas bertugas membuka rangkaian kegiatan pekan ini dengan agenda Sosialisasi pada hari Senin.',
      'Agenda Rapat Pleno dijadwalkan tepat satu hari sebelum Divisi Rohis melaksanakan agenda Evaluasi.',
      'Divisi Bela Negara dijadwalkan bertugas pada hari Selasa, dan agenda yang mereka emban bukanlah Rapat Pleno.',
      'Divisi DPS melaksanakan tugasnya setelah hari penugasan Divisi Bela Negara, tetapi tidak dijadwalkan pada hari Kamis.'
    ],
    question: 'Berdasarkan catatan di atas, agenda apakah yang dilaksanakan oleh Divisi Bela Negara dan pada hari apa kegiatan tersebut berlangsung? (Gunakan format: AGENDA-HARI)',
    answer: 'PENGAWASAN-SELASA'
  },
  3: {
    intro: 'Dalam rangka penataan linimasa program kerja semester ganjil, pengurus merancang empat agenda unggulan (Bazar, Pentas Seni, LDKS, dan Class Meeting) yang dimotori oleh empat divisi berbeda (Kesenian, Wirausaha, Inti, dan Olahraga). Kegiatan-kegiatan ini dijadwalkan bergulir sepanjang bulan Agustus, September, Oktober, hingga November. Tentukan rincian program berdasarkan ketentuan koordinasi berikut:',
    clues: [
      'Divisi Olahraga mengawali kalender kegiatan dengan menyelenggarakan Class Meeting pada bulan Agustus.',
      'Program Bazar dijadwalkan berlangsung tepat satu bulan setelah perhelatan Pentas Seni yang dikelola oleh Divisi Kesenian.',
      'Divisi Inti bertanggung jawab penuh atas pelaksanaan LDKS pada bulan September.',
      'Divisi Wirausaha dipastikan tidak melaksanakan program utamanya pada bulan Oktober.'
    ],
    question: 'Berdasarkan catatan di atas, program kerja apakah yang dikelola oleh Divisi Wirausaha dan pada bulan apakah kegiatan tersebut dilaksanakan? (Gunakan format: PROGRAM-BULAN)',
    answer: 'BAZAR-NOVEMBER'
  },
  4: {
    intro: 'Menjelang rapat koordinasi akbar, sekretariat organisasi menata penempatan ruang kerja serta tanda pengenal bagi empat divisi kepengurusan (Rohis, Humas, DPS, dan Wirausaha). Keempat divisi ini berkantor di lantai yang berbeda (Lantai 1 hingga Lantai 4) dan mengenakan ID Card bertali warna khusus (Merah, Kuning, Hijau, dan Biru). Telusuri penempatan divisi berdasarkan catatan penugasan berikut:',
    clues: [
      'Ruang kerja di Lantai 4 diperuntukkan bagi divisi yang mengenakan tali ID Card Kuning, dan ruangan tersebut bukan milik Divisi Humas.',
      'Divisi DPS mengenakan tali ID Card Merah dan ruangannya terletak tepat satu lantai di bawah pengguna tali ID Card Kuning.',
      'Divisi Rohis menempati ruang kerja di Lantai 2 serta dipastikan tidak mengenakan tali ID Card Biru.',
      'Hak penempatan ruang koordinasi di lantai paling atas (Lantai 4) diberikan kepada Divisi Wirausaha.'
    ],
    question: 'Berdasarkan catatan di atas, apa warna tali ID Card yang dikenakan oleh Divisi Humas dan di lantai berapakah ruang kerja mereka berada? (Gunakan format: WARNA-LANTAI X)',
    answer: 'BIRU-LANTAI 1'
  },
  5: {
    intro: 'Tertib administrasi merupakan kunci akuntabilitas kepengurusan OSIS. Empat divisi (Inti, Bela Negara, Kesenian, dan Rohis) memiliki kewajiban menyerahkan kelengkapan berkas resmi yang berbeda (Proposal, LPJ, Surat Izin, dan Undangan). Batas waktu penyerahan diatur secara berkala setiap jam mulai pukul 09.00, 10.00, 11.00, hingga 12.00 WIB. Tentukan rincian berkas berdasarkan rekapitulasi sekretariat berikut:',
    clues: [
      'Tenggat waktu penyerahan Surat Izin ditetapkan paling awal, yaitu pada pukul 09.00 WIB oleh Divisi Inti.',
      'Divisi Bela Negara diwajibkan menyerahkan berkas LPJ tepat satu jam setelah Divisi Kesenian merampungkan penyerahan berkasnya.',
      'Batas penyerahan berkas Undangan dijadwalkan tepat pada pukul 12.00 WIB, dan dokumen ini tidak disusun oleh Divisi Kesenian.',
      'Divisi Rohis tidak memiliki jadwal penyerahan berkas pada pukul 11.00 WIB.'
    ],
    question: 'Berdasarkan catatan di atas, dokumen administrasi apakah yang disusun oleh Divisi Kesenian dan pada pukul berapakah batas akhir penyerahannya? (Gunakan format: DOKUMEN-WAKTU)',
    answer: 'PROPOSAL-10.00'
  },
  6: {
    intro: 'Dalam rangka menjaga relasi dan komunikasi lintas sektor, panitia membagi penugasan kemitraan kepada empat divisi (Humas, DPS, Wirausaha, dan Bela Negara). Masing-masing divisi menjalin komunikasi dengan mitra yang berbeda (Dewan Guru, Alumni, Pihak Sponsor, dan Perwakilan Siswa) melalui saluran resmi yang bervariasi (Rapat Tatap Muka, Zoom, Email, dan Telepon). Tentukan relasi kemitraan berdasarkan panduan komunikasi berikut:',
    clues: [
      'Divisi Humas diberi mandat untuk menjalin komunikasi dengan Pihak Sponsor, namun tidak memanfaatkan fasilitas Zoom maupun saluran Telepon.',
      'Divisi Bela Negara menjalankan tugas koordinasi via Telepon dengan mitra yang dipastikan bukan Alumni maupun Siswa.',
      'Divisi DPS ditugaskan menyelenggarakan agenda Rapat Tatap Muka secara langsung bersama Perwakilan Siswa.',
      'Divisi Wirausaha memiliki ketetapan operasional untuk tidak menggunakan media Email dalam pelaksanaan tugas komunikasinya.'
    ],
    question: 'Berdasarkan catatan di atas, siapakah mitra kerja yang dihubungi oleh Divisi Wirausaha dan media komunikasi resmi apakah yang mereka gunakan? (Gunakan format: MITRA-MEDIA)',
    answer: 'ALUMNI-ZOOM'
  }
};

const GAME_STAGE2_CODES = {
  1: { give: 'KUJANG14', receive: 'CANDI41', partner: 4 },
  2: { give: 'PASUNDAN25', receive: 'ANGKLUNG52', partner: 5 },
  3: { give: 'SILIWANGI36', receive: 'KARSA63', partner: 6 },
  4: { give: 'CANDI41', receive: 'KUJANG14', partner: 1 },
  5: { give: 'ANGKLUNG52', receive: 'PASUNDAN25', partner: 2 },
  6: { give: 'KARSA63', receive: 'SILIWANGI36', partner: 3 }
};

const SVG = {
  check: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  checkCircle: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  alertCircle: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
  alertTriangle: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  flame: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
  clock: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  lock: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
  unlock: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>',
  shield: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  plus: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  trash: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
  arrowRight: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
  send: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
  award: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  fileText: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>'
};

const MEDAL_SVGS = {
  1: '<svg class="icon-svg icon-svg-md" viewBox="0 0 24 24" fill="#D97706" stroke="#D97706" stroke-width="1.5"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>',
  2: '<svg class="icon-svg icon-svg-md" viewBox="0 0 24 24" fill="#64748B" stroke="#64748B" stroke-width="1.5"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>',
  3: '<svg class="icon-svg icon-svg-md" viewBox="0 0 24 24" fill="#B45309" stroke="#B45309" stroke-width="1.5"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>'
};

const EMPTY_STATE_SVG = '<svg class="empty-state-svg" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" fill="none"><ellipse cx="60" cy="65" rx="40" ry="18" fill="#BAE6FD" opacity="0.5"/><ellipse cx="35" cy="52" rx="24" ry="16" fill="#E0F2FE" opacity="0.7"/><ellipse cx="80" cy="52" rx="26" ry="17" fill="#E0F2FE" opacity="0.7"/><path d="M50 38 L60 18 L70 38" stroke="#0284C7" stroke-width="2" opacity="0.3"/><path d="M45 38 L60 10 L75 38" stroke="#0284C7" stroke-width="1.5" opacity="0.2"/><rect x="48" y="38" width="24" height="16" rx="2" stroke="#0284C7" stroke-width="1.5" opacity="0.3"/></svg>';

const TOAST_SVGS = {
  success: '<svg class="icon-svg icon-svg-md" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  error: '<svg class="icon-svg icon-svg-md" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
};

let currentUser = { type: null, groupId: null };
let firestoreDb = null;
let cloudSyncActive = false;
let cooldownIntervals = {};

function formatTimestamp(d) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalizeAnswer(str) {
  if (!str) return '';
  return String(str).trim().toUpperCase().replace(/\s+/g, ' ');
}

function createDefaultData() {
  const data = {
    announcement: '',
    driveUrl: 'https://drive.google.com/',
    timeline: JSON.parse(JSON.stringify(TIMELINE_DEFAULT)),
    brankasUnlocked: false,
    groups: {}
  };
  for (let i = 1; i <= 6; i++) {
    const sName = GROUPS_CONFIG[i].shortName;
    data.groups[String(i)] = {
      leader: '-',
      points: 100,
      members: [
        `Anggota ${sName} 1`,
        `Anggota ${sName} 2`,
        `Anggota ${sName} 3`,
        `Anggota ${sName} 4`,
        `Anggota ${sName} 5`
      ],
      history: [{ time: formatTimestamp(new Date()), reason: 'Modal Awal', amount: 100 }],
      gameProgress: { stage1: false, stage2: false, themeUnlocked: false },
      gameCooldown: { wrongCount: 0, lockedUntil: null }
    };
  }
  return data;
}

function initData() {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    const def = createDefaultData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
    return def;
  }
  try {
    const parsed = JSON.parse(existing);
    let updated = false;
    if (!parsed.groups) { parsed.groups = {}; updated = true; }
    if (parsed.bgImage === undefined) { parsed.bgImage = ''; updated = true; }
    if (parsed.brankasUnlocked === undefined) { parsed.brankasUnlocked = false; updated = true; }
    if (!parsed.timeline || !Array.isArray(parsed.timeline)) { parsed.timeline = JSON.parse(JSON.stringify(TIMELINE_DEFAULT)); updated = true; }
    for (let i = 1; i <= 6; i++) {
      const gid = String(i);
      if (!parsed.groups[gid]) {
        parsed.groups[gid] = {
          leader: '-',
          points: 100,
          members: [
            'Anggota ' + i + '-1',
            'Anggota ' + i + '-2',
            'Anggota ' + i + '-3',
            'Anggota ' + i + '-4',
            'Anggota ' + i + '-5'
          ],
          history: [{ time: formatTimestamp(new Date()), reason: 'Modal Awal', amount: 100 }],
          gameProgress: { stage1: false, stage2: false, themeUnlocked: false },
          gameCooldown: { wrongCount: 0, lockedUntil: null }
        };
        updated = true;
      } else {
        if (parsed.groups[gid].leader === undefined) { parsed.groups[gid].leader = '-'; updated = true; }
        if (!parsed.groups[gid].gameProgress) {
          parsed.groups[gid].gameProgress = { stage1: false, stage2: false, themeUnlocked: false };
          updated = true;
        }
        if (!parsed.groups[gid].gameCooldown) {
          parsed.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };
          updated = true;
        }
      }
    }
    if (updated) localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    return parsed;
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
    return initData();
  }
}

function getData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : initData();
  } catch (e) {
    return initData();
  }
}

function saveData(data, skipCloud) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    showToast('Gagal menyimpan ke penyimpanan lokal browser.', 'error');
  }

  if (!skipCloud && firestoreDb) {
    try {
      firestoreDb.collection('portal_oprec_2728').doc('state').set(data, { merge: true })
        .catch(() => {
          updateCloudStatusUI(false, 'Gagal Sinkronisasi Cloud');
        });
    } catch (e) {
      updateCloudStatusUI(false, 'Offline');
    }
  }
}



function getFirebaseConfig() {
  const custom = localStorage.getItem(FIREBASE_CONFIG_KEY);
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      if (parsed && parsed.apiKey && parsed.projectId) return parsed;
    } catch (e) {}
  }
  return DEFAULT_FIREBASE_CONFIG;
}

function initFirebase() {
  if (typeof firebase === 'undefined') {
    updateCloudStatusUI(false, 'Mode Lokal (SDK Terputus)');
    return;
  }

  const config = getFirebaseConfig();
  if (!config || !config.apiKey || config.apiKey.includes('YOUR_API_KEY')) {
    updateCloudStatusUI(false, 'Mode Lokal (Offline Ready)');
    return;
  }

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firestoreDb = firebase.firestore();
    const docRef = firestoreDb.collection('portal_oprec_2728').doc('state');

    docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const cloudData = doc.data();
        if (cloudData && cloudData.groups) {
          saveData(cloudData, true);
          applyBgFromData(cloudData);
          updateCloudStatusUI(true, 'Cloud Real-Time Aktif');
          refreshCurrentView();
        }
      } else {
        const initial = getData();
        docRef.set(initial, { merge: true }).catch(() => {});
        updateCloudStatusUI(true, 'Cloud Terhubung');
      }
    }, () => {
      updateCloudStatusUI(false, 'Mode Lokal (Offline)');
    });
  } catch (err) {
    updateCloudStatusUI(false, 'Mode Lokal');
  }
}

function updateCloudStatusUI(connected, label) {
  cloudSyncActive = connected;
  const badges = [document.getElementById('dash-cloud-badge'), document.getElementById('admin-cloud-badge')];
  badges.forEach(b => {
    if (!b) return;
    b.className = 'cloud-status-pill ' + (connected ? 'connected' : 'local');
    const txt = b.querySelector('.cloud-status-text');
    if (txt) txt.textContent = label || (connected ? 'Cloud Sync' : 'Lokal');
  });
}

function refreshCurrentView() {
  if (currentUser.type === 'group' && currentUser.groupId) {
    const pageDashboard = document.getElementById('page-dashboard');
    if (pageDashboard && pageDashboard.classList.contains('active')) {
      renderDashboard(currentUser.groupId);
    }
    const pageGame = document.getElementById('page-game');
    if (pageGame && pageGame.classList.contains('active')) {
      showGame(currentUser.groupId);
    }
  } else if (currentUser.type === 'admin') {
    const pageAdmin = document.getElementById('page-admin');
    if (pageAdmin && pageAdmin.classList.contains('active')) {
      renderAdmin();
    }
  }
}

function login(password) {
  if (!password) return false;
  const clean = password.trim().toUpperCase();
  const errBox = document.getElementById('login-error');

  if (clean === ADMIN_PASSWORD) {
    currentUser = { type: 'admin', groupId: null };
    if (errBox) errBox.style.display = 'none';
    renderAdmin();
    showPage('page-admin');
    showToast('Berhasil masuk ke Command Center Admin!', 'success');
    return true;
  }

  for (const [idStr, config] of Object.entries(GROUPS_CONFIG)) {
    if (clean === config.password.toUpperCase()) {
      const gId = parseInt(idStr, 10);
      currentUser = { type: 'group', groupId: gId };
      if (errBox) errBox.style.display = 'none';
      renderDashboard(gId);
      showPage('page-dashboard');
      showToast(`Selamat datang, ${config.name}!`, 'success');
      return true;
    }
  }

  if (errBox) errBox.style.display = 'flex';
  showToast('Kata sandi tidak valid!', 'error');
  return false;
}

function logout() {
  currentUser = { type: null, groupId: null };
  const pwd = document.getElementById('password-input');
  if (pwd) pwd.value = '';
  const errBox = document.getElementById('login-error');
  if (errBox) errBox.style.display = 'none';
  showPage('page-login');
  showToast('Anda telah keluar dari akun.', 'success');
}

function showPage(pageId) {
  const pages = ['page-login', 'page-dashboard', 'page-admin', 'page-game'];
  pages.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderDashboard(groupId) {
  const data = getData();
  const config = GROUPS_CONFIG[groupId];
  if (!config) return;

  const grp = data.groups[String(groupId)] || {};

  const nameEl = document.getElementById('dash-group-name');
  if (nameEl) nameEl.textContent = config.name;

  const facEl = document.getElementById('dash-facilitator');
  if (facEl) facEl.textContent = `Fasilitator: ${config.facilitator}`;

  const leaderEl = document.getElementById('dash-group-leader');
  if (leaderEl) leaderEl.textContent = grp.leader || '-';

  const facProfEl = document.getElementById('dash-facilitator-profile');
  if (facProfEl) facProfEl.textContent = config.facilitator;

  renderAnnouncement(data);
  renderCountdown();
  renderTimeline(data);
  renderLeaderboard(data);
  renderPointHistory(data, groupId);
  renderMembers(data, groupId);
  setupDriveLink(data);
}

function renderAnnouncement(data) {
  const container = document.getElementById('announcement-content');
  if (!container) return;

  if (data.announcement && data.announcement.trim() !== '') {
    container.innerHTML = `
      <div class="announcement-banner">
        <span class="announcement-badge">
          ${SVG.alertCircle}
          PENGUMUMAN RESMI AKTIF
        </span>
        <div class="announcement-text">${escapeHtml(data.announcement).replace(/\n/g, '<br>')}</div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="empty-state">
        ${EMPTY_STATE_SVG}
        <div class="empty-state-text">
          Belum ada pengumuman resmi terbaru dari Panitia saat ini. Tetap jaga kekompakan dan pantau jadwal kegiatan secara berkala.
        </div>
      </div>
    `;
  }
}

function renderCountdown() {
  const numEl = document.getElementById('countdown-days');
  if (!numEl) return;
  const target = new Date(2026, 11, 14);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  numEl.textContent = days > 0 ? days : 0;
}

function renderTimeline(data) {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  const timeline = data.timeline || TIMELINE_DEFAULT;

  let html = '<div class="timeline-track">';
  timeline.forEach((step, idx) => {
    const num = idx + 1;
    let badgeHtml = '';
    let nodeClass = 'timeline-node upcoming';

    if (step.status === 'done') {
      nodeClass = 'timeline-node done';
      badgeHtml = `<span class="timeline-step-status status-done">${SVG.check} Selesai</span>`;
    } else if (step.status === 'active') {
      nodeClass = 'timeline-node active';
      badgeHtml = `<span class="timeline-step-status status-active">${SVG.flame} Sedang Berlangsung</span>`;
    } else {
      badgeHtml = `<span class="timeline-step-status status-upcoming">${SVG.clock} ${escapeHtml(step.date || 'Coming Soon')}</span>`;
    }

    html += `
      <div class="timeline-step">
        <div class="${nodeClass}">${num}</div>
        ${num < timeline.length ? '<div class="timeline-connector"></div>' : ''}
        <div class="timeline-content">
          <div class="timeline-step-title">${escapeHtml(step.name)}</div>
          <div class="timeline-step-date">${escapeHtml(step.date || 'Coming Soon')}</div>
          ${badgeHtml}
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function renderLeaderboard(data) {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;

  const sorted = Object.entries(GROUPS_CONFIG).map(([idStr, cfg]) => {
    const id = parseInt(idStr, 10);
    const grp = data.groups[idStr] || { points: 100, leader: '-' };
    return {
      id,
      name: cfg.name,
      facilitator: cfg.facilitator,
      leader: grp.leader || '-',
      points: grp.points !== undefined ? grp.points : 100
    };
  }).sort((a, b) => b.points - a.points);

  let html = '';
  sorted.forEach((item, idx) => {
    const rank = idx + 1;
    let rankBadge = '';
    if (rank <= 3) {
      rankBadge = MEDAL_SVGS[rank];
    } else {
      rankBadge = `<span class="mono-font">${rank}</span>`;
    }

    const isRank1 = rank === 1;
    html += `
      <div class="leaderboard-item ${isRank1 ? 'rank-1-item' : ''}">
        <div class="leaderboard-rank rank-${rank <= 3 ? rank : 'other'}">
          ${rankBadge}
        </div>
        <div class="leaderboard-info">
          <div class="leaderboard-name">${escapeHtml(item.name)}</div>
          <div class="leaderboard-meta">
            <span>Fasilitator: <strong>${escapeHtml(item.facilitator)}</strong></span>
            <span>Ketua: <strong>${escapeHtml(item.leader)}</strong></span>
          </div>
        </div>
        <div class="leaderboard-points mono-font">${item.points} PTS</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderPointHistory(data, groupId) {
  const tbody = document.getElementById('point-history-body');
  if (!tbody) return;
  const grp = data.groups[String(groupId)] || {};
  const history = grp.history || [];

  if (history.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted" style="padding:20px;">Belum ada riwayat penyesuaian poin.</td></tr>';
    return;
  }

  let html = '';
  const reversed = [...history].reverse();
  reversed.forEach(item => {
    const isPos = item.amount >= 0;
    const sign = isPos ? '+' : '';
    const pointClass = isPos ? 'point-positive' : 'point-negative';
    html += `
      <tr>
        <td class="mono-font" style="white-space:nowrap;font-size:0.8rem;color:#64748B;">${escapeHtml(item.time)}</td>
        <td>${escapeHtml(item.reason)}</td>
        <td class="${pointClass}" style="white-space:nowrap;">${sign}${item.amount} PTS</td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function renderMembers(data, groupId) {
  const container = document.getElementById('members-list');
  const countBadge = document.getElementById('dash-member-count');
  if (!container) return;
  const grp = data.groups[String(groupId)] || {};
  const members = grp.members || [];

  if (countBadge) {
    countBadge.textContent = `${members.length} Siswa`;
  }

  if (members.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding:24px 12px; grid-column: 1 / -1;">
        <p class="empty-state-text">Belum ada daftar anggota yang diinputkan oleh Panitia.</p>
      </div>
    `;
    return;
  }

  let html = '';
  members.forEach((m, idx) => {
    const trimmed = m.trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    let initial = 'A';
    if (words.length >= 2) {
      initial = (words[0][0] + words[1][0]).toUpperCase();
    } else if (words.length === 1 && words[0].length > 0) {
      initial = words[0].substring(0, 2).toUpperCase();
    }
    html += `
      <div class="member-item">
        <div class="member-avatar">${escapeHtml(initial)}</div>
        <div class="member-info">
          <div class="member-name">${escapeHtml(trimmed)}</div>
          <div class="member-role">Anggota #${idx + 1}</div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function setupDriveLink(data) {
  const btn = document.getElementById('btn-drive-link');
  if (!btn) return;
  btn.href = data.driveUrl || 'https://drive.google.com/';
}

function renderAdmin() {
  const data = getData();

  const annInp = document.getElementById('admin-announcement-input');
  if (annInp) annInp.value = data.announcement || '';

  const drvInp = document.getElementById('admin-drive-input');
  if (drvInp) drvInp.value = data.driveUrl || 'https://drive.google.com/';

  const stageSel = document.getElementById('admin-stage-select');
  if (stageSel && data.timeline) {
    const activeIdx = data.timeline.findIndex(s => s.status === 'active');
    stageSel.value = activeIdx >= 0 ? String(activeIdx + 1) : '1';
  }

  updateAdminGroupDisplay();

  const memSel = document.getElementById('admin-members-group-select');
  if (memSel) {
    adminRenderMembersForGroup(memSel.value || '1');
  }

  renderAdminGameMonitor();
  updateAdminBrankasToggleUI(data);
}

function switchAdminTab(tabIndex) {
  const tabs = document.querySelectorAll('.admin-tab');
  const panels = document.querySelectorAll('.admin-panel');
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));

  const activeTab = document.querySelector(`.admin-tab[data-tab="${tabIndex}"]`);
  const activePanel = document.getElementById(`admin-panel-${tabIndex}`);
  if (activeTab) activeTab.classList.add('active');
  if (activePanel) activePanel.classList.add('active');
}

function updateAdminGroupDisplay() {
  const sel = document.getElementById('admin-select-group');
  const ptsEl = document.getElementById('admin-current-points');
  if (!sel || !ptsEl) return;
  const gid = sel.value;
  const data = getData();
  const grp = data.groups[gid];
  ptsEl.textContent = grp && grp.points !== undefined ? grp.points : 100;
}

function adminAddPoints(groupId, amount, reason) {
  if (isNaN(amount) || amount === 0) {
    showToast('Masukkan nominal poin yang valid!', 'error');
    return;
  }
  if (!reason || reason.trim() === '') {
    showToast('Alasan evaluasi wajib diisi untuk transparansi!', 'error');
    return;
  }

  const data = getData();
  const gid = String(groupId);
  if (!data.groups[gid]) {
    data.groups[gid] = { leader: '-', points: 100, members: [], history: [], gameProgress: {}, gameCooldown: { wrongCount: 0, lockedUntil: null } };
  }

  data.groups[gid].points = (data.groups[gid].points !== undefined ? data.groups[gid].points : 100) + amount;
  if (!Array.isArray(data.groups[gid].history)) data.groups[gid].history = [];

  data.groups[gid].history.push({
    time: formatTimestamp(new Date()),
    reason: reason.trim(),
    amount: amount
  });

  saveData(data);
  updateAdminGroupDisplay();
  showToast(`Poin ${GROUPS_CONFIG[groupId].name} berhasil diperbarui (${amount > 0 ? '+' : ''}${amount})!`, 'success');
}

function adminSaveAnnouncement() {
  const input = document.getElementById('admin-announcement-input');
  if (!input) return;
  const data = getData();
  data.announcement = input.value.trim();
  saveData(data);
  showToast('Pengumuman panitia berhasil disimpan dan disiarkan!', 'success');
}

function adminClearAnnouncement() {
  const input = document.getElementById('admin-announcement-input');
  if (input) input.value = '';
  const data = getData();
  data.announcement = '';
  saveData(data);
  showToast('Pengumuman dikosongkan. Kartu empty state aktif.', 'success');
}

function adminRenderMembersForGroup(groupId) {
  const container = document.getElementById('admin-members-container');
  const leaderInput = document.getElementById('admin-leader-input');
  if (!container) return;

  const data = getData();
  const grp = data.groups[String(groupId)] || {};
  const members = grp.members || [];

  if (leaderInput) {
    leaderInput.value = grp.leader && grp.leader !== '-' ? grp.leader : '';
  }

  let html = `
    <div class="members-header-bar">
      <div class="members-header-title">
        <span class="input-label" style="margin:0;">Daftar Anggota Kelompok</span>
        <span id="admin-member-count" class="badge badge-blue">${members.length} Siswa</span>
      </div>
      <button type="button" id="btn-add-member" class="btn btn-secondary btn-small">
        ${SVG.plus}
        <span>Tambah Anggota</span>
      </button>
    </div>
    <div id="admin-members-list" class="admin-members-list">
  `;

  if (members.length === 0) {
    html += `
      <div id="admin-members-empty" class="text-muted text-center" style="padding:16px 8px; font-size:0.85rem;">
        Belum ada anggota. Klik "Tambah Anggota" untuk menambahkan baris siswa.
      </div>
    `;
  } else {
    members.forEach((m, idx) => {
      html += `
        <div class="member-input-row">
          <span class="member-row-num">${idx + 1}</span>
          <input type="text" class="input-field admin-member-input" value="${escapeHtml(m)}" placeholder="Nama lengkap siswa...">
          <button type="button" class="btn-del-member" title="Hapus Anggota" aria-label="Hapus Anggota">
            ${SVG.trash}
          </button>
        </div>
      `;
    });
  }

  html += `
    </div>
    <button type="button" id="btn-add-member-bottom" class="btn btn-ghost w-full mb-2">
      ${SVG.plus}
      <span>Tambah Baris Anggota Baru</span>
    </button>
  `;

  container.innerHTML = html;
}

function adminAddMemberRow(name = '') {
  const list = document.getElementById('admin-members-list');
  if (!list) return;
  const emptyNotice = document.getElementById('admin-members-empty');
  if (emptyNotice) emptyNotice.remove();

  const rows = list.querySelectorAll('.member-input-row');
  const newIndex = rows.length + 1;
  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.innerHTML = `
    <span class="member-row-num">${newIndex}</span>
    <input type="text" class="input-field admin-member-input" value="${escapeHtml(name)}" placeholder="Nama lengkap siswa...">
    <button type="button" class="btn-del-member" title="Hapus Anggota" aria-label="Hapus Anggota">
      ${SVG.trash}
    </button>
  `;
  list.appendChild(row);
  updateAdminMemberCount();
  const inp = row.querySelector('.admin-member-input');
  if (inp) inp.focus();
}

function updateAdminMemberCount() {
  const list = document.getElementById('admin-members-list');
  if (!list) return;
  const rows = list.querySelectorAll('.member-input-row');
  rows.forEach((r, idx) => {
    const num = r.querySelector('.member-row-num');
    if (num) num.textContent = idx + 1;
  });
  const countBadge = document.getElementById('admin-member-count');
  if (countBadge) countBadge.textContent = `${rows.length} Siswa`;
}

function adminSaveMembers() {
  const sel = document.getElementById('admin-members-group-select');
  const leaderInp = document.getElementById('admin-leader-input');
  if (!sel) return;
  const gid = sel.value;
  const data = getData();
  if (!data.groups[gid]) {
    data.groups[gid] = {
      leader: '-',
      points: 100,
      members: [],
      history: [],
      gameProgress: {},
      gameCooldown: { wrongCount: 0, lockedUntil: null }
    };
  }

  const leaderVal = leaderInp ? leaderInp.value.trim() : '';
  data.groups[gid].leader = leaderVal !== '' ? leaderVal : '-';

  const inputs = document.querySelectorAll('.admin-member-input');
  const members = [];
  inputs.forEach(inp => {
    const val = inp.value.trim();
    if (val) members.push(val);
  });
  data.groups[gid].members = members;

  saveData(data);
  updateAdminMemberCount();
  if (currentUser.type === 'group' && String(currentUser.groupId) === String(gid)) {
    renderDashboard(gid);
  }
  showToast(`Data ${GROUPS_CONFIG[gid].name} (${members.length} anggota) berhasil disimpan!`, 'success');
}

function adminSaveTimeline() {
  const sel = document.getElementById('admin-stage-select');
  if (!sel) return;
  const activeStage = parseInt(sel.value, 10);
  const data = getData();
  if (!data.timeline) data.timeline = JSON.parse(JSON.stringify(TIMELINE_DEFAULT));

  data.timeline.forEach((step, idx) => {
    const stageNum = idx + 1;
    if (stageNum < activeStage) {
      step.status = 'done';
    } else if (stageNum === activeStage) {
      step.status = 'active';
    } else {
      step.status = 'upcoming';
    }
  });

  saveData(data);
  showToast(`Tahap aktif berhasil diatur ke Tahap ${activeStage}!`, 'success');
}

function adminSaveDriveUrl() {
  const input = document.getElementById('admin-drive-input');
  if (!input) return;
  const data = getData();
  data.driveUrl = input.value.trim() || 'https://drive.google.com/';
  saveData(data);
  showToast('Tautan Google Drive resmi berhasil disimpan!', 'success');
}







function updateAdminBrankasToggleUI(data) {
  const card = document.getElementById('admin-brankas-toggle-card');
  const label = document.getElementById('admin-brankas-status-label');
  const btn = document.getElementById('btn-toggle-brankas-access');
  if (!card || !label || !btn) return;

  const isUnlocked = !!data.brankasUnlocked;
  if (isUnlocked) {
    card.classList.add('access-open');
    label.textContent = 'Status Akses Brankas: Terbuka (Peserta Dapat Mengakses)';
    btn.className = 'btn btn-danger';
    btn.innerHTML = `${SVG.lock}<span>Kunci Kembali Akses Brankas</span>`;
  } else {
    card.classList.remove('access-open');
    label.textContent = 'Status Akses Brankas: Terkunci (Peserta Belum Dapat Mengakses)';
    btn.className = 'btn btn-primary';
    btn.innerHTML = `${SVG.unlock}<span>Buka Akses Brankas untuk Peserta</span>`;
  }
}

function adminToggleBrankasAccess() {
  const data = getData();
  data.brankasUnlocked = !data.brankasUnlocked;
  saveData(data);
  updateAdminBrankasToggleUI(data);
  if (data.brankasUnlocked) {
    showToast('Akses Brankas Resolusi Konflik berhasil DIBUKA untuk seluruh peserta!', 'success');
  } else {
    showToast('Akses Brankas Resolusi Konflik berhasil DIKUNCI kembali.', 'info');
  }
}

function renderAdminGameMonitor() {
  const tbody = document.getElementById('game-monitor-body');
  if (!tbody) return;
  const data = getData();
  let html = '';

  Object.keys(GROUPS_CONFIG).forEach(idStr => {
    const id = parseInt(idStr, 10);
    const grp = data.groups[idStr] || {};
    const gp = grp.gameProgress || { stage1: false, stage2: false, themeUnlocked: false };
    const cd = grp.gameCooldown || { wrongCount: 0, lockedUntil: null };

    const s1 = gp.stage1 ? '<span class="badge badge-green">Selesai</span>' : '<span class="badge badge-blue">Belum</span>';
    const s2 = gp.stage2 ? '<span class="badge badge-green">Selesai</span>' : '<span class="badge badge-blue">Belum</span>';
    const thm = gp.themeUnlocked ? '<span class="badge badge-gold">Terbuka</span>' : '<span class="badge badge-red">Terkunci</span>';

    const isLocked = cd.lockedUntil && cd.lockedUntil > Date.now();
    const cdBadge = isLocked ? '<span class="badge badge-red" style="margin-left:4px;">Cooldown 60s</span>' : '';

    html += `
      <tr>
        <td><strong>${escapeHtml(GROUPS_CONFIG[id].name)}</strong><br><small class="text-muted">${escapeHtml(GROUPS_CONFIG[id].facilitator)}</small></td>
        <td>${s1}</td>
        <td>${s2}</td>
        <td>${thm} ${cdBadge}</td>
        <td>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
            <button class="btn btn-primary btn-small btn-unlock-theme-manual" data-group="${id}" ${gp.themeUnlocked ? 'disabled style="opacity:0.6;cursor:not-allowed;"' : ''}>
              ${gp.themeUnlocked ? 'Sudah Terbuka' : 'Buka Paksa Tema'}
            </button>
            <button class="btn btn-danger btn-small btn-reset-group-theme" data-group="${id}" title="Reset progres tugas tema kelompok ini">
              Reset Progres
            </button>
            ${isLocked ? `<button class="btn btn-ghost btn-small btn-reset-group-cooldown" data-group="${id}" title="Hapus penalti cooldown">Reset Cooldown</button>` : ''}
          </div>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function adminUnlockGroupTheme(groupId) {
  const data = getData();
  const gid = String(groupId);
  if (!data.groups[gid]) data.groups[gid] = { leader: '-', points: 100, members: [], history: [], gameProgress: {}, gameCooldown: { wrongCount: 0, lockedUntil: null } };
  data.groups[gid].gameProgress = { stage1: true, stage2: true, themeUnlocked: true };
  data.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };
  saveData(data);
  renderAdminGameMonitor();
  showToast(`Tema untuk ${GROUPS_CONFIG[gid].name} berhasil dibuka permanen!`, 'success');
}

function adminResetGroupTheme(groupId) {
  const data = getData();
  const gid = String(groupId);
  if (!data.groups[gid]) data.groups[gid] = { leader: '-', points: 100, members: [], history: [], gameProgress: {}, gameCooldown: { wrongCount: 0, lockedUntil: null } };
  data.groups[gid].gameProgress = { stage1: false, stage2: false, themeUnlocked: false };
  data.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };
  saveData(data);
  renderAdminGameMonitor();
  showToast(`Progres tugas tema ${GROUPS_CONFIG[groupId].name} berhasil di-reset ke awal!`, 'success');
}

function adminResetGroupCooldown(groupId) {
  const data = getData();
  const gid = String(groupId);
  if (data.groups[gid] && data.groups[gid].gameCooldown) {
    data.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };
    saveData(data);
    renderAdminGameMonitor();
    showToast(`Penalti cooldown untuk ${GROUPS_CONFIG[groupId].name} berhasil dicabut!`, 'success');
  }
}

function adminResetAllGames() {
  const btn = document.getElementById('btn-reset-all-games');
  if (btn && btn.getAttribute('data-confirm') !== '1') {
    btn.setAttribute('data-confirm', '1');
    btn.innerHTML = `
      ${SVG.alertTriangle}
      Konfirmasi: Klik Sekali Lagi untuk Reset Semua Progres
    `;
    setTimeout(() => {
      if (btn.getAttribute('data-confirm') === '1') {
        btn.setAttribute('data-confirm', '0');
        btn.innerHTML = `
          ${SVG.alertTriangle}
          Reset Semua Progres Game (Kelompok 1 &ndash; 6)
        `;
      }
    }, 4000);
    showToast('Klik sekali lagi tombol merah untuk konfirmasi reset semua kelompok.', 'error');
    return;
  }

  if (btn) {
    btn.setAttribute('data-confirm', '0');
    btn.innerHTML = `
      ${SVG.alertTriangle}
      Reset Semua Progres Game (Kelompok 1 &ndash; 6)
    `;
  }

  const data = getData();
  for (let i = 1; i <= 6; i++) {
    const gid = String(i);
    if (!data.groups[gid]) data.groups[gid] = { leader: '-', points: 100, members: [], history: [], gameProgress: {}, gameCooldown: { wrongCount: 0, lockedUntil: null } };
    data.groups[gid].gameProgress = { stage1: false, stage2: false, themeUnlocked: false };
    data.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };
  }
  saveData(data);
  renderAdminGameMonitor();
  showToast('Seluruh progres game kelompok 1-6 berhasil di-reset ke awal.', 'success');
}

function checkCooldown(groupId) {
  const data = getData();
  const gid = String(groupId);
  const grp = data.groups[gid] || {};
  const cd = grp.gameCooldown || { wrongCount: 0, lockedUntil: null };

  if (cd.lockedUntil && cd.lockedUntil > Date.now()) {
    const remaining = Math.ceil((cd.lockedUntil - Date.now()) / 1000);
    return { locked: true, remainingSeconds: remaining, wrongCount: cd.wrongCount };
  }

  if (cd.lockedUntil && cd.lockedUntil <= Date.now()) {
    cd.wrongCount = 0;
    cd.lockedUntil = null;
    data.groups[gid].gameCooldown = cd;
    saveData(data);
  }

  return { locked: false, remainingSeconds: 0, wrongCount: cd.wrongCount || 0 };
}

function recordWrongAnswer(groupId) {
  const data = getData();
  const gid = String(groupId);
  if (!data.groups[gid]) data.groups[gid] = { leader: '-', points: 100, members: [], history: [], gameProgress: {}, gameCooldown: { wrongCount: 0, lockedUntil: null } };
  if (!data.groups[gid].gameCooldown) data.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };

  const cd = data.groups[gid].gameCooldown;
  cd.wrongCount = (cd.wrongCount || 0) + 1;

  if (cd.wrongCount >= 3) {
    cd.lockedUntil = Date.now() + 60000;
  }

  saveData(data);
  return checkCooldown(groupId);
}

function resetGroupWrongCount(groupId) {
  const data = getData();
  const gid = String(groupId);
  if (data.groups[gid] && data.groups[gid].gameCooldown) {
    data.groups[gid].gameCooldown = { wrongCount: 0, lockedUntil: null };
    saveData(data);
  }
}

function startCooldownTimer(groupId, containerId, onFinish) {
  if (cooldownIntervals[groupId]) {
    clearInterval(cooldownIntervals[groupId]);
  }

  cooldownIntervals[groupId] = setInterval(() => {
    const cd = checkCooldown(groupId);
    const timerEl = document.getElementById(containerId);
    if (!cd.locked || cd.remainingSeconds <= 0) {
      clearInterval(cooldownIntervals[groupId]);
      delete cooldownIntervals[groupId];
      if (typeof onFinish === 'function') onFinish();
    } else {
      if (timerEl) timerEl.textContent = `${cd.remainingSeconds}s`;
    }
  }, 1000);
}

function showGame(groupId) {
  const data = getData();
  const gid = String(groupId);
  const grp = data.groups[gid];
  const gp = (grp && grp.gameProgress) ? grp.gameProgress : { stage1: false, stage2: false, themeUnlocked: false };

  const labelEl = document.getElementById('game-group-label');
  if (labelEl) {
    labelEl.textContent = `${GROUPS_CONFIG[groupId].name} — Fasilitator: ${GROUPS_CONFIG[groupId].facilitator}`;
  }
  showPage('page-game');

  if (!data.brankasUnlocked) {
    showLockedGame(groupId);
    return;
  }

  if (gp.themeUnlocked) {
    showFinalTheme(groupId);
  } else if (gp.stage1) {
    showStage2(groupId);
  } else {
    showStage1(groupId);
  }
}

function showLockedGame(groupId) {
  const container = document.getElementById('game-content');
  if (!container) return;

  container.innerHTML = `
    <div class="card game-card game-locked-card">
      <div class="game-locked-icon">
        ${SVG.lock}
      </div>
      <h3 class="game-locked-title">Akses Penugasan Belum Dibuka</h3>
      <p class="game-locked-desc">
        Silakan menunggu instruksi resmi dari Panitia untuk memulai penyelesaian Brankas Resolusi Konflik.
      </p>
      <button id="btn-locked-back-dash" class="btn btn-primary" style="margin-top:24px;">
        ${SVG.arrowRight}
        Kembali ke Dashboard Kelompok
      </button>
    </div>
  `;

  const backBtn = document.getElementById('btn-locked-back-dash');
  if (backBtn) {
    backBtn.addEventListener('click', backToDashboard);
  }
}

function showStage1(groupId) {
  const container = document.getElementById('game-content');
  if (!container) return;

  const caseData = GAME_STAGE1[groupId];
  if (!caseData) return;

  const cd = checkCooldown(groupId);

  let cluesHtml = '';
  caseData.clues.forEach((c) => {
    cluesHtml += `<li>${escapeHtml(c)}</li>`;
  });

  const remainingAttempts = Math.max(0, 3 - cd.wrongCount);

  let formOrCooldownHtml = '';
  if (cd.locked) {
    formOrCooldownHtml = `
      <div class="game-cooldown">
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;color:#E11D48;font-weight:700;">
          ${SVG.alertTriangle}
          AKSES INPUT DITANGGUHKAN SEMENTARA
        </div>
        <div class="game-cooldown-timer mono-font" id="stage1-cooldown-timer">${cd.remainingSeconds}s</div>
        <div class="game-cooldown-text">
          Akses ditangguhkan sementara selama 60 detik karena analisis data tidak akurat. Silakan lakukan konsolidasi dan bedah ulang matriks petunjuk bersama tim Anda di grup diskusi.
        </div>
      </div>
    `;
    startCooldownTimer(groupId, 'stage1-cooldown-timer', () => {
      showStage1(groupId);
    });
  } else {
    formOrCooldownHtml = `
      <form id="form-stage1" style="margin-top:20px;">
        <div class="input-group">
          <label class="input-label" for="stage1-input">Jawaban Analisis Logika Matriks</label>
          <div class="input-wrapper">
            <input type="text" id="stage1-input" class="input-field mono-font" placeholder="Ketik jawaban analisis Anda..." autocomplete="off" required>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;font-size:0.8rem;color:#64748B;">
            <span>Gunakan format kapital dengan tanda strip (-)</span>
            <span>Kesempatan tersisa: <strong class="mono-font" style="color:${remainingAttempts === 1 ? '#E11D48' : '#0284C7'};">${remainingAttempts}/3</strong></span>
          </div>
        </div>

        <div id="stage1-feedback" style="margin-bottom:14px;font-size:0.9rem;font-weight:600;"></div>

        <button type="submit" class="btn btn-primary w-full">
          ${SVG.send}
          Verifikasi Jawaban Matriks
        </button>
      </form>
    `;
  }

  container.innerHTML = `
    <div class="card game-card">
      <p style="font-size:0.95rem;line-height:1.75;color:#334155;margin-bottom:18px;">
        ${escapeHtml(caseData.intro)}
      </p>

      <div class="game-instruction">
        <ol class="game-clue-list">
          ${cluesHtml}
        </ol>
      </div>

      <div class="game-question-box">
        ${escapeHtml(caseData.question)}
      </div>

      ${formOrCooldownHtml}
    </div>
  `;
}

function showStage2(groupId) {
  const container = document.getElementById('game-content');
  if (!container) return;

  const stage2Config = GAME_STAGE2_CODES[groupId];
  if (!stage2Config) return;

  const partnerName = GROUPS_CONFIG[stage2Config.partner].name;
  const partnerFacilitator = GROUPS_CONFIG[stage2Config.partner].facilitator;

  const cd = checkCooldown(groupId);
  const remainingAttempts = Math.max(0, 3 - cd.wrongCount);

  let formOrCooldownHtml = '';
  if (cd.locked) {
    formOrCooldownHtml = `
      <div class="game-cooldown">
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;color:#E11D48;font-weight:700;">
          ${SVG.alertTriangle}
          AKSES OTORISASI DITANGGUHKAN SEMENTARA
        </div>
        <div class="game-cooldown-timer mono-font" id="stage2-cooldown-timer">${cd.remainingSeconds}s</div>
        <div class="game-cooldown-text">
          Akses ditangguhkan sementara selama 60 detik karena kunci otorisasi tidak valid. Silakan koordinasikan kembali pertukaran kunci bersama perwakilan ${escapeHtml(partnerName)}.
        </div>
      </div>
    `;
    startCooldownTimer(groupId, 'stage2-cooldown-timer', () => {
      showStage2(groupId);
    });
  } else {
    formOrCooldownHtml = `
      <form id="form-stage2" style="margin-top:20px;">
        <div class="input-group">
          <label class="input-label" for="stage2-input">Kunci Otorisasi yang Diterima dari ${escapeHtml(partnerName)}</label>
          <div class="input-wrapper">
            <input type="text" id="stage2-input" class="input-field mono-font" placeholder="Ketik kode otorisasi dari mitra..." autocomplete="off" required>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;font-size:0.8rem;color:#64748B;">
            <span>Case-insensitive (huruf besar/kecil diakui)</span>
            <span>Kesempatan tersisa: <strong class="mono-font" style="color:${remainingAttempts === 1 ? '#E11D48' : '#0284C7'};">${remainingAttempts}/3</strong></span>
          </div>
        </div>

        <div id="stage2-feedback" style="margin-bottom:14px;font-size:0.9rem;font-weight:600;"></div>

        <button type="submit" class="btn btn-primary w-full">
          ${SVG.unlock}
          Buka Segel Tema Infografis 3D
        </button>
      </form>
    `;
  }

  container.innerHTML = `
    <div class="card game-card">
      <div class="game-success" style="margin-bottom:20px;text-align:left;">
        <div style="display:flex;align-items:center;gap:8px;font-weight:800;color:#065F46;margin-bottom:4px;">
          ${SVG.checkCircle}
          Analisis Logis Tahap 1 Dinyatakan Akurat!
        </div>
        <p style="font-size:0.88rem;color:#047857;line-height:1.6;">
          Matriks internal kelompok Anda telah diverifikasi valid. Untuk membuka segel berkas Tema Infografis 3D, diperlukan Kunci Otorisasi Silang yang dipegang oleh kelompok mitra Anda.
        </p>
      </div>

      <div style="background:#FEF3C7;border:2px dashed #D97706;border-radius:14px;padding:18px 20px;margin-bottom:20px;">
        <div style="font-size:0.75rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#92400E;margin-bottom:6px;">
          KODE RESMI KELOMPOK ANDA (BERIKAN KE MITRA)
        </div>
        <p style="font-size:0.88rem;color:#78350F;line-height:1.5;margin-bottom:10px;">
          Hubungi perwakilan <strong>${escapeHtml(partnerName)}</strong> (Fasilitator: ${escapeHtml(partnerFacilitator)}) via chat grup atau langsung, lalu berikan kode rahasia berikut kepada mereka:
        </p>
        <div style="background:#FFF;border-radius:10px;padding:12px;text-align:center;font-size:1.6rem;font-weight:900;letter-spacing:4px;color:#D97706;border:1.5px solid #F59E0B;" class="mono-font">
          ${escapeHtml(stage2Config.give)}
        </div>
      </div>

      <div style="background:#F1F5F9;border-radius:14px;padding:16px 20px;margin-bottom:16px;font-size:0.9rem;line-height:1.6;color:#334155;">
        Mintalah kode otorisasi dari perwakilan <strong>${escapeHtml(partnerName)}</strong>, lalu masukkan kode tersebut ke kolom verifikasi di bawah ini untuk membuka segel tema infografis bersama:
      </div>

      ${formOrCooldownHtml}
    </div>
  `;
}

function showFinalTheme(groupId) {
  const container = document.getElementById('game-content');
  if (!container) return;

  const theme = GAME_THEMES[groupId] || {
    title: 'Tema Resmi Open Recruitment OSIS',
    desc: 'Deskripsi tema kegiatan infografis 3D.'
  };

  container.innerHTML = `
    <div class="card game-card">
      <div class="game-final-card">
        <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#D97706,#F59E0B);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;box-shadow:0 8px 24px rgba(217,119,6,0.25);">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>

        <div style="display:inline-flex;align-items:center;gap:6px;background:#D1FAE5;color:#065F46;font-size:0.75rem;font-weight:800;letter-spacing:1px;padding:4px 14px;border-radius:20px;margin-bottom:12px;">
          ${SVG.checkCircle}
          SEGEL RESMI DIBUKA &bull; TEMA INFOGRAFIS TERBUKA PERMANEN
        </div>

        <div style="font-size:0.85rem;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">
          ${escapeHtml(GROUPS_CONFIG[groupId].name)} &mdash; OSIS SMA AL MUSLIM 2027/2028
        </div>

        <h1 class="game-theme-title">
          ${escapeHtml(theme.title)}
        </h1>

        <p class="game-theme-desc">
          ${escapeHtml(theme.desc)}
        </p>

        <div style="background:#FFFFFF;border:1px solid #CBD5E1;border-radius:14px;padding:18px 20px;text-align:left;margin:24px 0 20px;">
          <div style="font-size:0.8rem;font-weight:800;color:#0284C7;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;display:flex;align-items:center;gap:6px;">
            ${SVG.fileText}
            INSTRUKSI PENUGASAN TEMA INFOGRAFIS 3D
          </div>
          <ul style="margin:0 0 0 18px;font-size:0.88rem;color:#334155;line-height:1.7;">
            <li>Susun karya Infografis 3D Berbasis Bingkai sesuai tema di atas bersama seluruh anggota kelompok.</li>
            <li>Bedah akar permasalahan, data autentik, dan tawarkan solusi inovatif yang dapat diimplementasikan di lingkungan SMA Al Muslim.</li>
            <li>Siapkan presentasi interaktif untuk ditampilkan di hadapan panitia dan fasilitator pada <strong>15 November 2026</strong>.</li>
          </ul>
        </div>

        <button id="btn-theme-back-dash" class="btn btn-primary w-full">
          ${SVG.arrowRight}
          Kembali ke Dashboard Kelompok
        </button>
      </div>
    </div>
  `;
}

function backToDashboard() {
  if (currentUser && currentUser.groupId) {
    renderDashboard(currentUser.groupId);
    showPage('page-dashboard');
  } else {
    showPage('page-login');
  }
}

function showToast(message, type) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type === 'error' ? 'error' : 'success'}`;
  const iconSvg = type === 'error' ? TOAST_SVGS.error : TOAST_SVGS.success;
  toast.innerHTML = `${iconSvg}<span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3500);
}

window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) {
    refreshCurrentView();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const initialData = initData();
  applyBgFromData(initialData);
  initFirebase();
  showPage('page-login');

  const btnLogin = document.getElementById('btn-login');
  const pwdInput = document.getElementById('password-input');
  if (btnLogin && pwdInput) {
    btnLogin.addEventListener('click', () => {
      login(pwdInput.value);
    });
    pwdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        login(pwdInput.value);
      }
    });
  }

  const btnTogglePwd = document.getElementById('btn-toggle-pwd');
  if (btnTogglePwd && pwdInput) {
    btnTogglePwd.addEventListener('click', () => {
      const isPwd = pwdInput.type === 'password';
      pwdInput.type = isPwd ? 'text' : 'password';
      btnTogglePwd.innerHTML = isPwd
        ? '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'
        : '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    });
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) btnLogout.addEventListener('click', logout);

  const btnAdminLogout = document.getElementById('btn-admin-logout');
  if (btnAdminLogout) btnAdminLogout.addEventListener('click', logout);

  const btnGameMenu = document.getElementById('btn-game-menu');
  if (btnGameMenu) {
    btnGameMenu.addEventListener('click', () => {
      if (currentUser && currentUser.groupId) {
        showGame(currentUser.groupId);
      }
    });
  }

  const btnBackDash = document.getElementById('btn-back-dash');
  if (btnBackDash) btnBackDash.addEventListener('click', backToDashboard);

  const adminSelectGroup = document.getElementById('admin-select-group');
  if (adminSelectGroup) {
    adminSelectGroup.addEventListener('change', updateAdminGroupDisplay);
  }

  const adminMembersGroupSelect = document.getElementById('admin-members-group-select');
  if (adminMembersGroupSelect) {
    adminMembersGroupSelect.addEventListener('change', (e) => {
      adminRenderMembersForGroup(e.target.value);
    });
  }

  const btnSubmitPoints = document.getElementById('btn-submit-points');
  if (btnSubmitPoints) {
    btnSubmitPoints.addEventListener('click', () => {
      const sel = document.getElementById('admin-select-group');
      const ptsInp = document.getElementById('admin-points-input');
      const rsnInp = document.getElementById('admin-points-reason');
      if (!sel || !ptsInp || !rsnInp) return;

      const gid = sel.value;
      const amt = parseInt(ptsInp.value, 10);
      const rsn = rsnInp.value.trim();

      if (isNaN(amt)) {
        showToast('Masukkan angka nominal poin!', 'error');
        return;
      }
      if (!rsn) {
        showToast('Alasan evaluasi wajib diisi!', 'error');
        return;
      }

      adminAddPoints(gid, amt, rsn);
      ptsInp.value = '';
      rsnInp.value = '';
    });
  }

  const btnSaveAnn = document.getElementById('btn-save-announcement');
  if (btnSaveAnn) btnSaveAnn.addEventListener('click', adminSaveAnnouncement);

  const btnClearAnn = document.getElementById('btn-clear-announcement');
  if (btnClearAnn) btnClearAnn.addEventListener('click', adminClearAnnouncement);

  const btnSaveMem = document.getElementById('btn-save-members');
  if (btnSaveMem) btnSaveMem.addEventListener('click', adminSaveMembers);

  const btnSaveTml = document.getElementById('btn-save-timeline');
  if (btnSaveTml) btnSaveTml.addEventListener('click', adminSaveTimeline);

  const btnSaveDrv = document.getElementById('btn-save-drive');
  if (btnSaveDrv) btnSaveDrv.addEventListener('click', adminSaveDriveUrl);

  const btnToggleBrankas = document.getElementById('btn-toggle-brankas-access');
  if (btnToggleBrankas) {
    btnToggleBrankas.addEventListener('click', adminToggleBrankasAccess);
  }

  const adminMembersContainer = document.getElementById('admin-members-container');
  if (adminMembersContainer) {
    adminMembersContainer.addEventListener('click', (e) => {
      const addBtn = e.target.closest('#btn-add-member, #btn-add-member-bottom');
      if (addBtn) {
        e.preventDefault();
        adminAddMemberRow('');
        return;
      }
      const delBtn = e.target.closest('.btn-del-member');
      if (delBtn) {
        e.preventDefault();
        const row = delBtn.closest('.member-input-row');
        if (row) {
          row.remove();
          updateAdminMemberCount();
          showToast('Baris anggota dihapus', 'info');
        }
      }
    });
  }

  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.admin-tab');
    if (tabBtn && tabBtn.closest('#admin-tabs-container')) {
      const tabIdx = parseInt(tabBtn.getAttribute('data-tab'), 10);
      if (!isNaN(tabIdx)) switchAdminTab(tabIdx);
    }

    const qBtn = e.target.closest('.btn-quick-point');
    if (qBtn) {
      const delta = parseInt(qBtn.getAttribute('data-point-quick'), 10);
      const sel = document.getElementById('admin-select-group');
      const rsnInp = document.getElementById('admin-points-reason');
      const gid = sel ? sel.value : '1';
      let reason = rsnInp ? rsnInp.value.trim() : '';
      if (!reason) {
        if (delta === 50) reason = 'Apresiasi Ketepatan & Kualitas Tugas (+50)';
        else if (delta === 25) reason = 'Kontribusi Solusi & Keaktifan Forum (+25)';
        else if (delta === 10) reason = 'Kedisiplinan Kehadiran & Koordinasi (+10)';
        else if (delta === -5) reason = 'Keterlambatan Submit Administrasi (-5)';
        else if (delta === -10) reason = 'Pelanggaran Ketertiban Forum (-10)';
        else if (delta === -25) reason = 'Tugas Tidak Memenuhi Standar Minimal (-25)';
        else reason = `Penyesuaian Poin (${delta > 0 ? '+' : ''}${delta})`;
      }
      adminAddPoints(gid, delta, reason);
    }

    const unlBtn = e.target.closest('.btn-unlock-theme-manual');
    if (unlBtn) {
      const gid = unlBtn.getAttribute('data-group');
      if (gid) adminUnlockGroupTheme(gid);
    }

    const rstGrpBtn = e.target.closest('.btn-reset-group-theme');
    if (rstGrpBtn) {
      const gid = rstGrpBtn.getAttribute('data-group');
      if (gid) adminResetGroupTheme(gid);
    }

    const rstCdBtn = e.target.closest('.btn-reset-group-cooldown');
    if (rstCdBtn) {
      const gid = rstCdBtn.getAttribute('data-group');
      if (gid) adminResetGroupCooldown(gid);
    }

    const rstAllBtn = e.target.closest('#btn-reset-all-games');
    if (rstAllBtn) {
      adminResetAllGames();
    }

    const toggleBrankasBtn = e.target.closest('#btn-toggle-brankas-access');
    if (toggleBrankasBtn) {
      adminToggleBrankasAccess();
    }

    const themeBackBtn = e.target.closest('#btn-theme-back-dash');
    if (themeBackBtn) backToDashboard();
  });

  document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'form-stage1') {
      e.preventDefault();
      if (!currentUser || !currentUser.groupId) return;
      const gid = currentUser.groupId;

      const cd = checkCooldown(gid);
      if (cd.locked) {
        showToast('Akses input sedang ditangguhkan karena penalti cooldown.', 'error');
        return;
      }

      const inp = document.getElementById('stage1-input');
      const fb = document.getElementById('stage1-feedback');
      if (!inp) return;

      const entered = normalizeAnswer(inp.value);
      const expected = normalizeAnswer(GAME_STAGE1[gid].answer);

      if (entered === expected) {
        resetGroupWrongCount(gid);
        const data = getData();
        data.groups[String(gid)].gameProgress.stage1 = true;
        saveData(data);
        if (fb) fb.innerHTML = '<span class="point-positive">' + SVG.check + ' Analisis Logika Akurat! Membuka Tahap 2 (Silih Asuh)...</span>';
        showToast('Analisis logika akurat! Membuka Tahap 2...', 'success');
        setTimeout(() => {
          showStage2(gid);
        }, 800);
      } else {
        const newCd = recordWrongAnswer(gid);
        if (newCd.locked) {
          showToast('3 kali salah berturut-turut! Akses ditangguhkan selama 60 detik.', 'error');
          showStage1(gid);
        } else {
          const left = 3 - newCd.wrongCount;
          if (fb) fb.innerHTML = `<span class="point-negative">${SVG.alertCircle} Analisis belum tepat. Silakan teliti kembali petunjuk matriks. Sisa kesempatan: ${left}/3.</span>`;
          showToast(`Jawaban salah! Sisa kesempatan: ${left}/3`, 'error');
        }
      }
    }

    if (e.target && e.target.id === 'form-stage2') {
      e.preventDefault();
      if (!currentUser || !currentUser.groupId) return;
      const gid = currentUser.groupId;

      const cd = checkCooldown(gid);
      if (cd.locked) {
        showToast('Akses input sedang ditangguhkan karena penalti cooldown.', 'error');
        return;
      }

      const inp = document.getElementById('stage2-input');
      const fb = document.getElementById('stage2-feedback');
      if (!inp) return;

      const entered = normalizeAnswer(inp.value);
      const stage2Config = GAME_STAGE2_CODES[gid];
      const expected = normalizeAnswer(stage2Config.receive);

      if (entered === expected) {
        resetGroupWrongCount(gid);
        const data = getData();
        data.groups[String(gid)].gameProgress.stage2 = true;
        data.groups[String(gid)].gameProgress.themeUnlocked = true;
        saveData(data);
        if (fb) fb.innerHTML = '<span class="point-positive">' + SVG.check + ' Kunci Otorisasi Cocok! Membuka Segel Tema Infografis 3D...</span>';
        showToast('Otorisasi silang berhasil! Tema Infografis Terbuka!', 'success');
        setTimeout(() => {
          showFinalTheme(gid);
        }, 800);
      } else {
        const newCd = recordWrongAnswer(gid);
        const partnerName = GROUPS_CONFIG[stage2Config.partner].name;
        if (newCd.locked) {
          showToast('3 kali salah berturut-turut! Akses ditangguhkan selama 60 detik.', 'error');
          showStage2(gid);
        } else {
          const left = 3 - newCd.wrongCount;
          if (fb) fb.innerHTML = `<span class="point-negative">${SVG.alertCircle} Kunci tidak cocok. Pastikan meminta kode dari perwakilan ${escapeHtml(partnerName)}. Sisa kesempatan: ${left}/3.</span>`;
          showToast(`Kunci tidak cocok! Sisa kesempatan: ${left}/3`, 'error');
        }
      }
    }
  });
});
