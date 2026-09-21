/**
 * Every string in the interface, in both languages.
 *
 * Page *content* lives in src/content/**; this file is only the furniture —
 * navigation, buttons, table headings, empty states.
 *
 * TODO (committee): the Bahasa Malaysia column was drafted by a non-native
 * speaker and needs one review pass by someone who prays in BM. Liturgical
 * wording in particular ("Misa", "Sakramen", "Koronka") should be checked
 * against what the parish actually says out loud.
 */

export const languages = {
  en: 'English',
  ms: 'Bahasa Malaysia',
} as const;

export const languageShort = {
  en: 'EN',
  ms: 'BM',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // --- Global chrome ---------------------------------------------------
    'site.tagline': 'A parish family in Tanjung Malim',
    'site.skip': 'Skip to main content',
    'site.menu': 'Menu',
    'site.menuClose': 'Close menu',
    'site.language': 'Language',
    'site.switchTo': 'Switch to Bahasa Malaysia',
    'site.home': 'Home',
    'site.backToTop': 'Back to top',

    // --- Navigation ------------------------------------------------------
    'nav.home': 'Home',
    'nav.parish': 'Parish',
    'nav.cutes': 'CUTES',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.services': 'Sacraments',
    'nav.resources': 'Prayers',
    'nav.contact': 'Contact',
    'nav.bulletin': 'Bulletin',
    'nav.massSchedule': 'Mass Schedule',
    'nav.parishPriest': 'Parish Priest',
    'nav.deacon': 'Deacon',
    'nav.parishHistory': 'Parish History',
    'nav.aboutCutes': 'About CUTES',
    'nav.lifeAtCutes': 'Life at CUTES',
    'nav.committee': 'Committee',
    'nav.bec': 'BEC',

    // --- Home ------------------------------------------------------------
    'home.heroLead':
      'A Catholic parish serving Tanjung Malim and the students of UPSI. Everyone is welcome at the table.',
    'home.ctaMass': 'Mass times',
    'home.ctaBulletin': 'This week’s bulletin',
    'home.heroHeadline': 'WELCOME TO MOST HOLY REDEEMER CHURCH',
    'home.heroStatement':
      'Welcoming local parishioners, UPSI students, and visitors to grow together in Christ',
    'home.introHeadline': 'JOIN US AS ONE FAMILY',
    'home.introMission':
      'Join us as we grow together in faith, friendship, and community. Whether you are an undergraduate starting your student life at UPSI or a local family in Tanjung Malim, our doors and hearts are open to you.',
    'home.whoWeAre': 'WHO WE ARE',
    'home.whoWeAreLead':
      'We are a community of people learning to follow Jesus, build genuine relationships, and serve our city.',
    'home.whoWeAreBody':
      'Gathering students from Universiti Pendidikan Sultan Idris (UPSI) and families across Tanjung Malim, Most Holy Redeemer is a home where lifelong friendships and living faith take root.',
    'home.valuesTitle': 'WHAT WE VALUE',
    'home.v1Title': 'COMMUNITY',
    'home.v1Desc': 'Life is better together. We make room for genuine connection and shared meals.',
    'home.v2Title': 'FAITH',
    'home.v2Desc': 'Faith should shape everyday life, inspiring courage and grounding our hearts in Christ.',
    'home.v3Title': 'SERVICE',
    'home.v3Desc': 'We exist to make a difference in our community and serve those in need around us.',
    'home.v4Title': 'GENEROSITY',
    'home.v4Desc': 'We believe everything we have can be used to bless others and honor God.',
    'home.sundayTitle': 'JOIN US THIS WEEKEND',
    'home.sundayLead': 'Join us in Mass this weekend at Most Holy Redeemer Church.',
    'home.ministriesTitle': 'CUTES MINISTRIES',
    'home.ministriesLead':
      'From liturgy and choir to transport and outreach, find your place to serve and thrive.',
    'home.contactUs': 'Contact Us',
    'home.visionTitle': 'Our Vision and Mission',
    'home.scheduleTitle': 'Mass Schedule',
    'home.scheduleLead': 'Regular celebrations at Most Holy Redeemer Church.',
    'home.eventsTitle': 'Upcoming Events',
    'home.eventsAll': 'All events',
    'home.eventsEmpty':
      'Nothing on the calendar right now. Check the bulletin for the week’s announcements.',
    'home.cutesTitle': 'CUTES',
    'home.cutesLead':
      'Catholic Undergraduate Teachers’ Society — the campus community that gathers, serves and grows in faith at Most Holy Redeemer.',

    // --- Home (added by FIXES V1) ---------------------------------------
    'home.ctaLocation': 'Our Location',
    'home.meetCutesLabel': 'CUTES',
    'home.meetCutesLead': 'Catholic Undergraduate Teachers’ Society',
    'home.meetBecLabel': 'BEC',
    'home.meetBecLead': 'Basic Ecclesial Community',
    'home.moreMinistries': 'Click to explore more CUTES ministry',
    'home.councilTitle': 'PARISH PASTORAL COUNCIL',
    'home.councilLead':
      'The priest, deacon and coordinator who serve the parish and the student community. Call any of them directly.',
    'home.councilCall': 'Call',

    // --- Bulletin --------------------------------------------------------
    'bulletin.title': 'Parish Bulletin',
    'bulletin.lead': 'Announcements, readings and notices, published each week.',
    'bulletin.thisWeek': 'Latest',
    'bulletin.download': 'Download PDF',
    'bulletin.open': 'Open bulletin for',
    'bulletin.empty':
      'No bulletins have been published yet. They will appear here as soon as the first one is uploaded.',
    'bulletin.archive': 'Earlier bulletins',
    'bulletin.pdfNote': 'Each bulletin is a PDF. Tap to open or download.',

    // --- Mass schedule ---------------------------------------------------
    'schedule.title': 'Mass Schedule',
    'schedule.day': 'Day',
    'schedule.time': 'Time',
    'schedule.language': 'Language',
    'schedule.note': 'Notes',
    'schedule.empty': 'The schedule has not been published yet.',

    // --- Mass schedule (added by FIXES V1) -------------------------------
    'schedule.mass': 'Mass',
    'schedule.rosary': 'Rosary',
    'schedule.location': 'Location',
    'schedule.confessionNote': 'Confession 30 minutes before Mass.',
    'schedule.feastNote': 'For feast day Masses, please refer to the bulletin.',
    'day.saturday': 'Saturday',
    'day.sunday': 'Sunday',

    // --- Parish ----------------------------------------------------------
    'parish.title': 'Our Parish',
    'parish.lead': 'The people, the history and the rhythm of Most Holy Redeemer Church.',

    // --- CUTES -----------------------------------------------------------
    'cutes.title': 'CUTES',
    'cutes.committeeTitle': 'Committee',
    'cutes.committeeLead':
      'The students who serve the community this academic year, by ministry.',
    'cutes.year': 'Academic year',
    'cutes.ministries': 'Ministries',
    'cutes.noPhoto': 'No photo',

    // --- CUTES (added by FIXES V1) ---------------------------------------
    'cutes.tagline': 'The Catholic UPSI Student Community at Most Holy Redeemer Church',

    // --- Roles -----------------------------------------------------------
    'role.coordinator': 'Coordinator',
    'role.vice-coordinator-1': 'Vice Coordinator I',
    'role.vice-coordinator-2': 'Vice Coordinator II',
    'role.treasurer': 'Treasurer',
    'role.vice-treasurer': 'Vice Treasurer',
    'role.secretary': 'Secretary',
    'role.vice-secretary': 'Vice Secretary',
    'role.leader': 'Leader',
    'role.assistant': 'Assistant',
    'role.member': 'Member',

    // --- Roles (added by FIXES V1) ---------------------------------------
    'role.parish-priest': 'Parish Priest',
    'role.parish-deacon': 'Parish Deacon',
    'role.cutes-coordinator': 'CUTES Koordinator',

    // --- Ministries ------------------------------------------------------
    'ministry.leaders': 'Ministry of Leaders',
    'ministry.liturgy': 'Liturgy Ministry',
    'ministry.choir': 'Choir Ministry',
    'ministry.music': 'Music Ministry',
    'ministry.multimedia': 'Multimedia and Publicity Ministry',
    'ministry.transportation': 'Transportation Ministry',
    'ministry.recreation': 'Recreation and Spiritual Ministry',
    'ministry.entrepreneurship': 'Entrepreneurship Ministry',

    // --- Events ----------------------------------------------------------
    'events.title': 'Events',
    'events.lead': 'Retreats, celebrations and the moments the community keeps.',
    'events.upcoming': 'Upcoming',
    'events.past': 'Past events',
    'events.when': 'When',
    'events.where': 'Where',
    'events.register': 'Register',
    'events.viewGallery': 'Photos from this event',
    'events.empty': 'No events are listed yet.',
    'events.emptyUpcoming': 'Nothing scheduled at the moment.',
    'events.allDay': 'All day',

    // --- Gallery ---------------------------------------------------------
    'gallery.title': 'Gallery',
    'gallery.lead': 'Life at Most Holy Redeemer and CUTES, in photographs.',
    'gallery.albums': 'Albums',
    'gallery.photoCount': 'photos',
    'gallery.photoCountOne': 'photo',
    'gallery.viewAlbum': 'View album',
    'gallery.empty':
      'This album has no photos yet. They will appear here once the multimedia ministry uploads them.',
    'gallery.emptyAll': 'No photos have been uploaded yet.',
    'gallery.lightboxPrev': 'Previous photo',
    'gallery.lightboxNext': 'Next photo',
    'gallery.lightboxClose': 'Close',
    'gallery.openPhoto': 'Open photo',
    'gallery.photoOf': 'of',

    // --- Services / sacraments -------------------------------------------
    'services.title': 'Sacraments and Services',
    'services.lead':
      'How to arrange a sacrament at Most Holy Redeemer, and who to speak to.',
    'services.requirements': 'What to prepare',
    'services.contactHeading': 'Arranging this',
    'services.contactFallback': 'Please contact the parish priest.',
    'services.all': 'All sacraments and services',

    // --- Resources -------------------------------------------------------
    'resources.title': 'Prayers and Resources',
    'resources.lead': 'Prayers the parish uses, written out in full so you can pray along.',
    'resources.print': 'Print this prayer',
    'resources.all': 'All prayers',
    'resources.category.prayer': 'Prayers',
    'resources.category.devotion': 'Devotions',
    'resources.category.other': 'Other resources',

    // --- Contact ---------------------------------------------------------
    'contact.title': 'Contact Us',
    'contact.lead':
      'Visit, write or call — the parish priest, the deacon and the CUTES coordinator are all reachable directly.',
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.map': 'Find us',
    'contact.openMaps': 'Open in Google Maps',
    'contact.cutesHeading': 'Contacting CUTES',
    'contact.cutesLead':
      'Students looking for the campus community can write to the CUTES coordinator directly.',

    // --- Contact (added by FIXES V1) -------------------------------------
    'contact.social': 'Social media',

    // --- Shared ----------------------------------------------------------
    'common.readMore': 'Read more',
    'common.backTo': 'Back to',
    'common.updated': 'Updated',
    'common.on': 'on',
    'common.and': 'and',
    'common.breadcrumb': 'Breadcrumb',
    'common.moreIn': 'More in',
    'common.todo': 'This page is still being written.',

    // --- Footer ----------------------------------------------------------
    'footer.parish': 'The Parish',
    'footer.community': 'Community',
    'footer.visit': 'Visit us',
    'footer.rights': 'All rights reserved.',
    'footer.builtBy': 'Maintained by the CUTES Multimedia and Publicity Ministry.',

    // --- 404 -------------------------------------------------------------
    '404.title': 'Page not found',
    '404.lead': 'That page has moved or never existed. These links should help.',
    '404.home': 'Go to the home page',
  },

  ms: {
    // --- Global chrome ---------------------------------------------------
    'site.tagline': 'Keluarga paroki di Tanjung Malim',
    'site.skip': 'Terus ke kandungan utama',
    'site.menu': 'Menu',
    'site.menuClose': 'Tutup menu',
    'site.language': 'Bahasa',
    'site.switchTo': 'Tukar ke English',
    'site.home': 'Utama',
    'site.backToTop': 'Kembali ke atas',

    // --- Navigation ------------------------------------------------------
    'nav.home': 'Utama',
    'nav.parish': 'Paroki',
    'nav.cutes': 'CUTES',
    'nav.events': 'Acara',
    'nav.gallery': 'Galeri',
    'nav.services': 'Sakramen',
    'nav.resources': 'Doa',
    'nav.contact': 'Hubungi',
    'nav.bulletin': 'Buletin',
    'nav.massSchedule': 'Jadual Misa',
    'nav.parishPriest': 'Paderi Paroki',
    'nav.deacon': 'Diakon',
    'nav.parishHistory': 'Sejarah Paroki',
    'nav.aboutCutes': 'Tentang CUTES',
    'nav.lifeAtCutes': 'Kehidupan CUTES',
    'nav.committee': 'Jawatankuasa',
    'nav.bec': 'KKA',

    // --- Home ------------------------------------------------------------
    'home.heroLead':
      'Paroki Katolik yang melayani Tanjung Malim dan pelajar UPSI. Semua dialu-alukan.',
    'home.ctaMass': 'Waktu Misa',
    'home.ctaBulletin': 'Buletin minggu ini',
    'home.heroHeadline': 'SELAMAT DATANG KE GEREJA MOST HOLY REDEEMER',
    'home.heroStatement':
      'Mengalu-alukan umat tempatan, pelajar UPSI dan pengunjung untuk bertumbuh bersama dalam Kristus',
    'home.introHeadline': 'SERTAI KAMI SEBAGAI SATU KELUARGA',
    'home.introMission':
      'Sertai kami untuk bertumbuh bersama dalam iman, persahabatan dan komuniti. Sama ada anda mahasiswa yang baru memulakan kehidupan pelajar di UPSI atau keluarga tempatan di Tanjung Malim, pintu dan hati kami sentiasa terbuka untuk anda.',
    'home.whoWeAre': 'SIAPA KAMI',
    'home.whoWeAreLead':
      'Kami adalah komuniti yang belajar mengikut Yesus, membina hubungan yang tulus, dan melayani bandar kami.',
    'home.whoWeAreBody':
      'Menghimpunkan mahasiswa Universiti Pendidikan Sultan Idris (UPSI) serta keluarga di Tanjung Malim, Most Holy Redeemer adalah tempat persahabatan sejati dan iman hidup bertunas.',
    'home.valuesTitle': 'NILAI KAMI',
    'home.v1Title': 'KOMUNITI',
    'home.v1Desc': 'Hidup lebih baik bersama. Kami membuka ruang untuk persahabatan tulen dan santapan bersama.',
    'home.v2Title': 'IMAN',
    'home.v2Desc': 'Iman harus membentuk kehidupan seharian, memberi keberanian dan memaut hati kita pada Kristus.',
    'home.v3Title': 'PELAYANAN',
    'home.v3Desc': 'Kami hadir untuk membawa perubahan positif dalam komuniti dan melayani mereka yang memerlukan.',
    'home.v4Title': 'KEMURAHAN HATI',
    'home.v4Desc': 'Kami percaya setiap kurniaan yang kami miliki boleh digunakan untuk memberkati sesama dan memuliakan Tuhan.',
    'home.sundayTitle': 'SERTAI KAMI HUJUNG MINGGU INI',
    'home.sundayLead': 'Sertai kami dalam Misa hujung minggu ini di Gereja Most Holy Redeemer.',
    'home.ministriesTitle': 'KEMENTERIAN CUTES',
    'home.ministriesLead':
      'Daripada liturgi dan koir hingga pengangkutan dan khidmat komuniti, temui peranan anda untuk melayani.',
    'home.contactUs': 'Hubungi Kami',
    'home.visionTitle': 'Visi dan Misi Kami',
    'home.scheduleTitle': 'Jadual Misa',
    'home.scheduleLead': 'Perayaan tetap di Gereja Most Holy Redeemer.',
    'home.eventsTitle': 'Acara Akan Datang',
    'home.eventsAll': 'Semua acara',
    'home.eventsEmpty':
      'Tiada acara buat masa ini. Sila rujuk buletin untuk pengumuman minggu ini.',
    'home.cutesTitle': 'CUTES',
    'home.cutesLead':
      'Catholic Undergraduate Teachers’ Society — komuniti kampus yang berkumpul, melayani dan bertumbuh dalam iman di Most Holy Redeemer.',

    // --- Home (added by FIXES V1) ---------------------------------------
    'home.ctaLocation': 'Lokasi Kami',
    'home.meetCutesLabel': 'CUTES',
    'home.meetCutesLead': 'Catholic Undergraduate Teachers’ Society',
    'home.meetBecLabel': 'KKA',
    'home.meetBecLead': 'Komuniti Kristian Asas',
    'home.moreMinistries': 'Klik untuk meneroka kementerian CUTES yang lain',
    'home.councilTitle': 'MAJLIS PASTORAL PAROKI',
    'home.councilLead':
      'Paderi, diakon dan koordinator yang berkhidmat untuk paroki dan komuniti pelajar. Hubungi sesiapa antara mereka secara terus.',
    'home.councilCall': 'Hubungi',

    // --- Bulletin --------------------------------------------------------
    'bulletin.title': 'Buletin Paroki',
    'bulletin.lead': 'Pengumuman, bacaan dan makluman, diterbitkan setiap minggu.',
    'bulletin.thisWeek': 'Terkini',
    'bulletin.download': 'Muat turun PDF',
    'bulletin.open': 'Buka buletin bertarikh',
    'bulletin.empty':
      'Belum ada buletin diterbitkan. Ia akan dipaparkan di sini sebaik sahaja dimuat naik.',
    'bulletin.archive': 'Buletin terdahulu',
    'bulletin.pdfNote': 'Setiap buletin dalam bentuk PDF. Ketik untuk buka atau muat turun.',

    // --- Mass schedule ---------------------------------------------------
    'schedule.title': 'Jadual Misa',
    'schedule.day': 'Hari',
    'schedule.time': 'Masa',
    'schedule.language': 'Bahasa',
    'schedule.note': 'Catatan',
    'schedule.empty': 'Jadual belum diterbitkan.',

    // --- Mass schedule (added by FIXES V1) -------------------------------
    'schedule.mass': 'Misa',
    'schedule.rosary': 'Rosari',
    'schedule.location': 'Lokasi',
    'schedule.confessionNote': 'Pengakuan dosa 30 minit sebelum Misa.',
    'schedule.feastNote': 'Untuk Misa hari raya, sila rujuk buletin.',
    'day.saturday': 'Sabtu',
    'day.sunday': 'Ahad',

    // --- Parish ----------------------------------------------------------
    'parish.title': 'Paroki Kami',
    'parish.lead': 'Umat, sejarah dan irama Gereja Most Holy Redeemer.',

    // --- CUTES -----------------------------------------------------------
    'cutes.title': 'CUTES',
    'cutes.committeeTitle': 'Jawatankuasa',
    'cutes.committeeLead':
      'Pelajar yang berkhidmat untuk komuniti pada sesi akademik ini, mengikut kementerian.',
    'cutes.year': 'Sesi akademik',
    'cutes.ministries': 'Kementerian',
    'cutes.noPhoto': 'Tiada gambar',

    // --- CUTES (added by FIXES V1) ---------------------------------------
    'cutes.tagline': 'Komuniti Pelajar Katolik UPSI di Gereja Most Holy Redeemer',

    // --- Roles -----------------------------------------------------------
    'role.coordinator': 'Koordinator',
    'role.vice-coordinator-1': 'Naib Koordinator I',
    'role.vice-coordinator-2': 'Naib Koordinator II',
    'role.treasurer': 'Bendahari',
    'role.vice-treasurer': 'Naib Bendahari',
    'role.secretary': 'Setiausaha',
    'role.vice-secretary': 'Naib Setiausaha',
    'role.leader': 'Ketua',
    'role.assistant': 'Penolong Ketua',
    'role.member': 'Ahli',

    // --- Roles (added by FIXES V1) ---------------------------------------
    'role.parish-priest': 'Paderi Paroki',
    'role.parish-deacon': 'Diakon Paroki',
    'role.cutes-coordinator': 'Koordinator CUTES',

    // --- Ministries ------------------------------------------------------
    'ministry.leaders': 'Kementerian Pimpinan',
    'ministry.liturgy': 'Kementerian Liturgi',
    'ministry.choir': 'Kementerian Koir',
    'ministry.music': 'Kementerian Muzik',
    'ministry.multimedia': 'Kementerian Multimedia dan Publisiti',
    'ministry.transportation': 'Kementerian Pengangkutan',
    'ministry.recreation': 'Kementerian Rekreasi dan Kerohanian',
    'ministry.entrepreneurship': 'Kementerian Keusahawanan',

    // --- Events ----------------------------------------------------------
    'events.title': 'Acara',
    'events.lead': 'Retret, perayaan dan saat-saat yang dikenang komuniti.',
    'events.upcoming': 'Akan datang',
    'events.past': 'Acara lepas',
    'events.when': 'Bila',
    'events.where': 'Di mana',
    'events.register': 'Daftar',
    'events.viewGallery': 'Gambar acara ini',
    'events.empty': 'Belum ada acara disenaraikan.',
    'events.emptyUpcoming': 'Tiada acara dijadualkan buat masa ini.',
    'events.allDay': 'Sepanjang hari',

    // --- Gallery ---------------------------------------------------------
    'gallery.title': 'Galeri',
    'gallery.lead': 'Kehidupan di Most Holy Redeemer dan CUTES, dalam gambar.',
    'gallery.albums': 'Album',
    'gallery.photoCount': 'gambar',
    'gallery.photoCountOne': 'gambar',
    'gallery.viewAlbum': 'Lihat album',
    'gallery.empty':
      'Album ini belum mempunyai gambar. Ia akan dipaparkan setelah dimuat naik oleh Kementerian Multimedia.',
    'gallery.emptyAll': 'Belum ada gambar dimuat naik.',
    'gallery.lightboxPrev': 'Gambar sebelumnya',
    'gallery.lightboxNext': 'Gambar seterusnya',
    'gallery.lightboxClose': 'Tutup',
    'gallery.openPhoto': 'Buka gambar',
    'gallery.photoOf': 'daripada',

    // --- Services / sacraments -------------------------------------------
    'services.title': 'Sakramen dan Perkhidmatan',
    'services.lead':
      'Cara mengaturkan sakramen di Most Holy Redeemer, dan siapa yang perlu dihubungi.',
    'services.requirements': 'Apa yang perlu disediakan',
    'services.contactHeading': 'Cara mengaturkannya',
    'services.contactFallback': 'Sila hubungi paderi paroki.',
    'services.all': 'Semua sakramen dan perkhidmatan',

    // --- Resources -------------------------------------------------------
    'resources.title': 'Doa dan Sumber',
    'resources.lead': 'Doa yang digunakan paroki, ditulis penuh supaya anda boleh berdoa bersama.',
    'resources.print': 'Cetak doa ini',
    'resources.all': 'Semua doa',
    'resources.category.prayer': 'Doa',
    'resources.category.devotion': 'Devosi',
    'resources.category.other': 'Sumber lain',

    // --- Contact ---------------------------------------------------------
    'contact.title': 'Hubungi Kami',
    'contact.lead':
      'Datang, tulis atau telefon — paderi paroki, diakon dan koordinator CUTES semuanya boleh dihubungi terus.',
    'contact.address': 'Alamat',
    'contact.email': 'E-mel',
    'contact.map': 'Lokasi kami',
    'contact.openMaps': 'Buka dalam Google Maps',
    'contact.cutesHeading': 'Menghubungi CUTES',
    'contact.cutesLead':
      'Pelajar yang mencari komuniti kampus boleh menulis terus kepada koordinator CUTES.',

    // --- Contact (added by FIXES V1) -------------------------------------
    'contact.social': 'Media sosial',

    // --- Shared ----------------------------------------------------------
    'common.readMore': 'Baca lanjut',
    'common.backTo': 'Kembali ke',
    'common.updated': 'Dikemas kini',
    'common.on': 'pada',
    'common.and': 'dan',
    'common.breadcrumb': 'Jejak halaman',
    'common.moreIn': 'Lagi dalam',
    'common.todo': 'Halaman ini masih dalam penulisan.',

    // --- Footer ----------------------------------------------------------
    'footer.parish': 'Paroki',
    'footer.community': 'Komuniti',
    'footer.visit': 'Lawati kami',
    'footer.rights': 'Hak cipta terpelihara.',
    'footer.builtBy': 'Diselenggara oleh Kementerian Multimedia dan Publisiti CUTES.',

    // --- 404 -------------------------------------------------------------
    '404.title': 'Halaman tidak dijumpai',
    '404.lead': 'Halaman itu telah dipindahkan atau tidak pernah wujud. Pautan ini mungkin membantu.',
    '404.home': 'Ke halaman utama',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Look up a UI string. A key missing from Bahasa Malaysia falls back to
 * English rather than rendering an empty element — a half-translated page is
 * still usable, an empty button is not.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    const table = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    return table[key] ?? fallback[key] ?? key;
  };
}
