// Lista e plotë e të gjithë 76 Imamëve në Kosovë
const imamsData = [
    { id: 1, name: "Ekrem Avdiu", city: "Prishtinë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Ekrem+Avdiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 2, name: "Enis Rama", city: "Prizren", location: "Xhamia Sinan Pasha", image: "https://ui-avatars.com/api/?name=Enis+Rama&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 3, name: "Blerim Musliu", city: "Prishtinë", location: "Xhamia Dardania", image: "https://ui-avatars.com/api/?name=Blerim+Musliu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 4, name: "Ismail Bardhoshi", city: "Mitrovicë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Ismail+Bardhoshi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 5, name: "Rasim Haxha", city: "Ferizaj", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Rasim+Haxha&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 6, name: "Fadil Musliu", city: "Pejë", location: "Xhamia Bajrakli", image: "https://ui-avatars.com/api/?name=Fadil+Musliu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 7, name: "Zeki Qerkezi", city: "Gjakovë", location: "Xhamia Hadum", image: "https://ui-avatars.com/api/?name=Zeki+Qerkezi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 8, name: "Llokman Hoxha", city: "Gjilan", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Llokman+Hoxha&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 9, name: "Sulltan Pajaziti", city: "Vushtrri", location: "Xhamia Gazi Ali Beu", image: "https://ui-avatars.com/api/?name=Sulltan+Pajaziti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 10, name: "Alaudin Abazi", city: "Prishtinë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Alaudin+Abazi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 11, name: "Bajram Karabegu", city: "Prizren", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Bajram+Karabegu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 12, name: "Sadat Rrustemi", city: "Mitrovicë", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Sadat+Rrustemi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 13, name: "Mustafa Terniqi", city: "Pejë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Mustafa+Terniqi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 14, name: "Sedat Islami", city: "Ferizaj", location: "Xhamia Sulltan Murat", image: "https://ui-avatars.com/api/?name=Sedat+Islami&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 15, name: "Adnan Pallqa", city: "Gjakovë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Adnan+Pallqa&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 16, name: "Jusuf Kastrati", city: "Prishtinë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Jusuf+Kastrati&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 17, name: "Arsim Morina", city: "Gjilan", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Arsim+Morina&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 18, name: "Abdurrahman Bejtullahu", city: "Vushtrri", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Abdurrahman+Bejtullahu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 19, name: "Sami Fetahu", city: "Prizren", location: "Xhamia Gazi Mehmet Pasha", image: "https://ui-avatars.com/api/?name=Sami+Fetahu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 20, name: "Agim Bekiri", city: "Mitrovicë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Agim+Bekiri&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 21, name: "Bekir Halimi", city: "Pejë", location: "Xhamia Bajrakli", image: "https://ui-avatars.com/api/?name=Bekir+Halimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 22, name: "Ahmed Kalaja", city: "Ferizaj", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Ahmed+Kalaja&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 23, name: "Ferid Selimi", city: "Prishtinë", location: "Xhamia Lakriste", image: "https://ui-avatars.com/api/?name=Ferid+Selimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 24, name: "Besnik Llumnica", city: "Gjakovë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Besnik+Llumnica&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 25, name: "Ahmed Numanaj", city: "Gjilan", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Ahmed+Numanaj&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 26, name: "Bilal Teqja", city: "Vushtrri", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Bilal+Teqja&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 27, name: "Uthman Agolli", city: "Prizren", location: "Xhamia Arasta", image: "https://ui-avatars.com/api/?name=Uthman+Agolli&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 28, name: "Bledar Haxhiu", city: "Mitrovicë", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Bledar+Haxhiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 29, name: "Justinian Topulli", city: "Pejë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Justinian+Topulli&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 30, name: "Enes Goga", city: "Ferizaj", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Enes+Goga&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 31, name: "Ernest Goga", city: "Prishtinë", location: "Xhamia Kalabria", image: "https://ui-avatars.com/api/?name=Ernest+Goga&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 32, name: "Muhamed Broja", city: "Gjakovë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Muhamed+Broja&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 33, name: "Fidan Musliu", city: "Gjilan", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Fidan+Musliu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 34, name: "Fitim Gerguri", city: "Vushtrri", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Fitim+Gerguri&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 35, name: "Gazmir Sahara", city: "Prizren", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Gazmir+Sahara&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 36, name: "Driton Xhezairi", city: "Mitrovicë", location: "Xhamia Sulltan Mehmet", image: "https://ui-avatars.com/api/?name=Driton+Xhezairi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 37, name: "Hadith Miftari", city: "Pejë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Hadith+Miftari&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 38, name: "Bashkim Bajrami", city: "Ferizaj", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Bashkim+Bajrami&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 39, name: "Ulvi Fejzullahu", city: "Prishtinë", location: "Xhamia Mati", image: "https://ui-avatars.com/api/?name=Ulvi+Fejzullahu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 40, name: "Muhamed Dermaku", city: "Gjakovë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Muhamed+Dermaku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 41, name: "Hekuran Elshani", city: "Gjilan", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Hekuran+Elshani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 42, name: "Kujtim Ameti", city: "Vushtrri", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Kujtim+Ameti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 43, name: "Amel Kurteshi", city: "Prizren", location: "Xhamia Kalabria", image: "https://ui-avatars.com/api/?name=Amel+Kurteshi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 44, name: "Ali Ashani", city: "Mitrovicë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Ali+Ashani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 45, name: "Bledar Mulla", city: "Pejë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Bledar+Mulla&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 46, name: "Valdet Gashi", city: "Ferizaj", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Valdet+Gashi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 47, name: "Osman Bekteshi", city: "Prishtinë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Osman+Bekteshi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 48, name: "Irfan Salihu", city: "Gjakovë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Irfan+Salihu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 49, name: "Remzi Isaku", city: "Gjilan", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Remzi+Isaku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 50, name: "Faruk Lohaj", city: "Vushtrri", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Faruk+Lohaj&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 51, name: "Mirsim Maliqi", city: "Prizren", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Mirsim+Maliqi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 52, name: "Shefqet Krasniqi", city: "Prishtinë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Shefqet+Krasniqi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 53, name: "Eroll Rexhepi", city: "Mitrovicë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Eroll+Rexhepi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 54, name: "Ruzhdi Buzuku", city: "Pejë", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Ruzhdi+Buzuku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 55, name: "Bali Sadiku", city: "Ferizaj", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Bali+Sadiku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 56, name: "Xheladin Leka", city: "Gjakovë", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Xheladin+Leka&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 57, name: "Rafet Zaimi", city: "Gjilan", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Rafet+Zaimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 58, name: "Harith Selimi", city: "Vushtrri", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Harith+Selimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 59, name: "Uvejs Ramadani", city: "Prizren", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Uvejs+Ramadani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 60, name: "Blerim Murati", city: "Prishtinë", location: "Xhamia Ulpiana", image: "https://ui-avatars.com/api/?name=Blerim+Murati&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 61, name: "Usame Morina", city: "Mitrovicë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Usame+Morina&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 62, name: "Irfan Jahiu", city: "Pejë", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Irfan+Jahiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 63, name: "Ismail Asllani", city: "Ferizaj", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Ismail+Asllani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 64, name: "Muharrem Ismaili", city: "Gjakovë", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Muharrem+Ismaili&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 65, name: "Fatmir Latifi", city: "Gjilan", location: "Xhamia Sulltan Murat", image: "https://ui-avatars.com/api/?name=Fatmir+Latifi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 66, name: "Amir Isaku", city: "Vushtrri", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Amir+Isaku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 67, name: "Sinan Rushiti", city: "Prizren", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Sinan+Rushiti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 68, name: "Gazmend Mehmeti", city: "Prishtinë", location: "Xhamia Dardania", image: "https://ui-avatars.com/api/?name=Gazmend+Mehmeti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 69, name: "Gilman Kazazi", city: "Mitrovicë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Gilman+Kazazi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 70, name: "Gentjan Mara", city: "Pejë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Gentjan+Mara&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 71, name: "Lulzim Susuri", city: "Ferizaj", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Lulzim+Susuri&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 72, name: "Musli Zymberi", city: "Gjakovë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Musli+Zymberi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 73, name: "Fidan Xhelili", city: "Gjilan", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Fidan+Xhelili&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 74, name: "Vesim Avdiu", city: "Vushtrri", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Vesim+Avdiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 75, name: "Blerim Rexha", city: "Prizren", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Blerim+Rexha&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 76, name: "Metush Mehmedi", city: "Prishtinë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Metush+Mehmedi&size=400&background=2c5f2d&color=fff&bold=true" }
];

// Të dhënat e orarit për çdo Imam (në prodhim do të vijnë nga API)
const schedulesByImam = {
    1: [ // Ekrem Avdiu
        { date: "2025-11-24", time: "19:00", topic: "Akide - Besimi në Ditën e Fundit", description: "Një mësim rreth besimit në Ditën e Fundit dhe pasojat e saj në sjelljen e përditshme." }
    ],
    2: [ // Enis Rama
        { date: "2025-11-23", time: "17:30", topic: "Fikhul Ibadet - Namazi dhe Rëndësia e Tij", description: "Diskutim rreth rregullave të namazit dhe rëndësisë së tij në jetën e një muslimani." }
    ],
    52: [ // Shefqet Krasniqi
        { date: "2025-11-22", time: "18:00", topic: "Tefsiri i Kur'anit - Surja El-Bekare", description: "Një shpjegim i detajuar i Surës El-Bekare, duke u fokusuar në mësimet dhe udhëzimet e saj për jetën e përditshme." },
        { date: "2025-11-28", time: "13:00", topic: "Hytbeja e së Xhumasë - Falënderimi ndaj Allahut", description: "Hytbe e veçantë e së Xhumasë që fokusohet në rëndësinë e falënderimit ndaj Allahut." }
    ]
    // Më shumë orarë mund të shtohen për imamë të tjerë
};

// Të dhënat e artikujve të blogut
const blogPosts = [
    {
        id: 1,
        imamId: 52, // Shefqet Krasniqi
        title: "Rëndësia e Tefsirit në Jetën e Përditshme",
        category: "tefsir",
        excerpt: "Tefsiri i Kur'anit nuk është vetëm një studim shkencor, por një udhëzues praktik për jetën tonë të përditshme. Në këtë artikull shqyrtojmë mënyrat se si mund ta aplikojmë kuptimin e ajeteve në jetën tonë.",
        content: "Kur'ani është libri i Allahut që na udhëzon në çdo aspekt të jetës. Tefsiri na ndihmon të kuptojmë më thellë mesazhin hyjnor dhe ta zbatojmë atë në situata të ndryshme. Çdo ajet ka një mësim të thellë që mund të na ndryshojë jetën nëse e kuptojmë siç duhet.",
        date: "2025-11-15",
        readTime: "8 min"
    },
    {
        id: 2,
        imamId: 1, // Ekrem Avdiu
        title: "Besimi në Ditën e Gjykimit dhe Ndikimi në Sjelljen Tonë",
        category: "akide",
        excerpt: "Si ndikon besimi në Ditën e Fundit në sjelljen tonë të përditshme? Një analizë e thellë e lidhjes mes besimit dhe veprës.",
        content: "Besimi në Ditën e Gjykimit është shtyllë thelbësore e besimit islam. Ky besim nuk është vetëm një doktrinë teorike, por ka ndikim të drejtpërdrejtë në sjelljen tonë. Kur besojmë se do të japim llogari për çdo vepër, jemi më të kujdesshëm në zgjedhjet tona.",
        date: "2025-11-18",
        readTime: "10 min"
    },
    {
        id: 3,
        imamId: 2, // Enis Rama
        title: "Namazi: Shtyllë e Besimit dhe Dritë e Shpirtit",
        category: "fikh",
        excerpt: "Namazi nuk është thjesht një ritual, por një komunikim i drejtpërdrejtë me Allahun. Mësoni rreth thellësisë së namazit dhe ndikimit të tij në jetën tonë.",
        content: "Namazi është shtyllë e fesë dhe dallues mes muslimanit dhe jomuslimanit. Në namaz, robërueshëm para Krijuesit tonë, i lëmë pas të gjitha shqetësimet e kësaj bote. Kjo komunikim i pastër na sjell qetësi, forcë dhe udhëzim për jetën tonë.",
        date: "2025-11-12",
        readTime: "7 min"
    },
    {
        id: 4,
        imamId: 52, // Shefqet Krasniqi
        title: "Jeta e Pejgamberit Muhamed (s.a.v.s) si Model për Ne",
        category: "sira",
        excerpt: "Historia e jetës së Pejgamberit Muhamed (s.a.v.s) është burim i pasur mësimesh për çdo musliman. Si mund ta marrim shembull Pejgamberin në jetën tonë moderne?",
        content: "Pejgamberi Muhamed (s.a.v.s) është shembulli më i përsosur i qenies njerëzore. Jeta e tij është plot me mësime që mund t'i aplikojmë në çdo kohë. Nga përulësia e tij, drejtësia, durimi, dhe mëshira - çdo aspekt i jetës së tij është një udhëzues për ne.",
        date: "2025-11-10",
        readTime: "12 min"
    },
    {
        id: 5,
        imamId: 1, // Ekrem Avdiu
        title: "Etika Islame në Marrëdhëniet Familjare",
        category: "etika",
        excerpt: "Familja është themeli i shoqërisë islame. Mësoni rreth etikës islame që duhet të udhëheqë marrëdhëniet tona me prindërit, bashkëshortët dhe fëmijët.",
        content: "Islami i kushton rëndësi të veçantë familjes. Marrëdhëniet familjare duhet të bazohen në dashuri, respekt, dhe mëshirë. Pejgamberi (s.a.v.s) ka thënë: 'Më i miri prej jush është ai që është më i mirë me familjen e vet.' Kjo na mëson se sjellja jonë në shtëpi është një reflektim i vërtetë i besimit tonë.",
        date: "2025-11-08",
        readTime: "9 min"
    },
    {
        id: 6,
        imamId: 2, // Enis Rama
        title: "Pastrimi Shpirtëror: Zekata dhe Rëndësia e Saj",
        category: "fikh",
        excerpt: "Zekata është njëri nga pesë shtyllat e Islamit dhe ka rëndësi të madhe në pastrimin e shpirtit dhe ndihmën ndaj të varfërve.",
        content: "Zekata nuk është thjesht një detyrim financiar, por një mjet pastrimi shpirtëror. Duke dhënë nga pasuria jonë për hir të Allahut, ne pastrojmë zemrat tona nga lakmia dhe zhvillojmë ndjenjën e solidaritetit me të tjerët. Zekata është një sistemë drejtësie sociale që siguron që pasuria të qarkulojë në të gjithë shoqërinë.",
        date: "2025-11-05",
        readTime: "8 min"
    }
];

// Menaxhimi i gjendjes
let filteredData = [...imamsData];
let currentSort = 'name';
let onlyWithSchedules = false;
let onlyFavorites = false;
let currentView = 'imams'; // 'imams', 'blog', 'about'
let currentBlogCategory = 'all';
let filteredBlogPosts = [...blogPosts];
let favoriteImams = [];
let darkMode = false;
let userCity = '';
let userStats = { visited: [], streak: 0, badges: [] };

// Elementet e DOM - Pamja e Imamëve
const scheduleList = document.getElementById('schedule-list');
const noResults = document.getElementById('no-results');
const filterImam = document.getElementById('filter-imam');
const filterCity = document.getElementById('filter-city');
const sortBy = document.getElementById('sort-by');
const onlyWithSchedulesToggle = document.getElementById('only-with-schedules');
const detailModal = document.getElementById('detail-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Elementet e DOM - Pamja e Views
const imamsView = document.getElementById('imams-view');
const blogView = document.getElementById('blog-view');
const aboutView = document.getElementById('about-view');

// Elementet e DOM - Blog
const blogList = document.getElementById('blog-list');
const noBlogResults = document.getElementById('no-blog-results');
const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');

// ==================== LOCALSTORAGE & STATE MANAGEMENT ====================

// Ngarkon të dhënat nga LocalStorage
function loadFromLocalStorage() {
    try {
        const stored = localStorage.getItem('ligjeratat_data');
        if (stored) {
            const data = JSON.parse(stored);
            favoriteImams = data.favorites || [];
            darkMode = data.darkMode || false;
            userCity = data.userCity || '';
            userStats = data.userStats || { visited: [], streak: 0, badges: [] };
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}

// Ruaj të dhënat në LocalStorage
function saveToLocalStorage() {
    try {
        const data = {
            favorites: favoriteImams,
            darkMode: darkMode,
            userCity: userCity,
            userStats: userStats,
            lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('ligjeratat_data', JSON.stringify(data));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Toggle favorit
function toggleFavorite(imamId) {
    const index = favoriteImams.indexOf(imamId);
    if (index > -1) {
        favoriteImams.splice(index, 1);
        showToast('Hoxha u hoq nga favoritët', 'info');
    } else {
        favoriteImams.push(imamId);
        showToast('Hoxha u shtua te favoritët', 'success');
    }
    saveToLocalStorage();
    renderSchedule();
}

// Kontrollo nëse imami është favorit
function isFavorite(imamId) {
    return favoriteImams.includes(imamId);
}

// ==================== TOAST NOTIFICATIONS ====================

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    // Animim i shfaqjes
    setTimeout(() => toast.classList.add('show'), 10);

    // Fshij pas 3 sekondash
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== DARK MODE ====================

function toggleDarkMode() {
    darkMode = !darkMode;
    applyDarkMode();
    saveToLocalStorage();
    showToast(darkMode ? 'Modaliteti i errët u aktivizua' : 'Modaliteti i dritës u aktivizua', 'info');
}

function applyDarkMode() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Inicializimi i Aplikacionit
function init() {
    // Ngarko të dhënat e ruajtura
    loadFromLocalStorage();

    // Zbato dark mode nëse është i aktivizuar
    applyDarkMode();

    // Rendit imamët alfabetikisht
    imamsData.sort((a, b) => a.name.localeCompare(b.name));

    // Populloj filtrat
    populateFilters();

    // Shfaq listën e imamëve
    renderSchedule();

    // Vendos dëgjuesit e ngjarjeve
    setupEventListeners();
}

// Populloj filtrat dropdown
function populateFilters() {
    const cities = [...new Set(imamsData.map(item => item.city))].sort();

    filterCity.innerHTML = '<option value="">Të gjitha Qytetet</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        filterCity.appendChild(option);
    });

    // Ndryshoj filtrin e imamit në fushë kërkimi
    filterImam.setAttribute('list', 'imams-list');
    const datalist = document.createElement('datalist');
    datalist.id = 'imams-list';
    imamsData.forEach(imam => {
        const option = document.createElement('option');
        option.value = imam.name;
        datalist.appendChild(option);
    });
    filterImam.parentNode.appendChild(datalist);
}

// Shfaq listën e imamëve
function renderSchedule() {
    scheduleList.innerHTML = '';

    if (filteredData.length === 0) {
        scheduleList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    scheduleList.style.display = 'grid';
    noResults.style.display = 'none';

    filteredData.forEach(imam => {
        const card = createImamCard(imam);
        scheduleList.appendChild(card);
    });
}

// Krijon kartelën e imamit
function createImamCard(imam) {
    const card = document.createElement('div');
    card.className = 'schedule-card';

    const schedules = schedulesByImam[imam.id] || [];
    const scheduleCount = schedules.length;
    const nextSchedule = schedules.length > 0 ? schedules[0] : null;
    const isFav = isFavorite(imam.id);

    const mapLink = `https://maps.google.com/?q=${encodeURIComponent(imam.location + ' ' + imam.city)}`;

    card.innerHTML = `
        <button class="favorite-btn ${isFav ? 'active' : ''}" data-imam-id="${imam.id}" title="${isFav ? 'Hiq nga favoritët' : 'Shto te favoritët'}">
            <i class="fas fa-heart"></i>
        </button>
        <div class="card-image">
            <img src="${imam.image}" alt="${imam.name}" loading="lazy">
        </div>
        <div class="card-content">
            <h3 class="card-imam">Hoxhë ${imam.name}</h3>
            <p class="card-topic">${imam.location}</p>
            <div class="card-meta">
                <div class="card-meta-item">
                    <i class="fas fa-map-marker-alt card-meta-icon"></i>
                    <span>${imam.city}</span>
                </div>
                <div class="card-meta-item">
                    <i class="fas fa-book card-meta-icon"></i>
                    <span>${scheduleCount} ${scheduleCount === 1 ? 'Mësim' : 'Mësime'}</span>
                </div>
                ${nextSchedule ? `
                <div class="card-meta-item">
                    <i class="fas fa-calendar-alt card-meta-icon"></i>
                    <span>Tjetri: ${formatDate(nextSchedule.date)}</span>
                </div>
                ` : ''}
            </div>
            <div class="card-actions">
                <button class="btn btn-primary view-schedule-btn">
                    <i class="fas fa-eye"></i> Shiko Orarin
                </button>
                <button class="btn btn-secondary share-btn" title="Ndaj">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        </div>
    `;

    // Favorit button event
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(imam.id);
    });

    // Share button event
    const shareBtn = card.querySelector('.share-btn');
    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shareImam(imam);
    });

    // Kliko për të hapur modalin me orarin e imamit
    card.addEventListener('click', () => {
        openModal(imam);
    });

    return card;
}

// Formaton datën në shqip
function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];
    const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

// Filtron dhe rendit të dhënat
function filterData() {
    const imamValue = filterImam.value.toLowerCase();
    const cityValue = filterCity.value;

    // Filtron të dhënat
    filteredData = imamsData.filter(item => {
        const matchImam = !imamValue || item.name.toLowerCase().includes(imamValue);
        const matchCity = !cityValue || item.city === cityValue;
        const matchSchedules = !onlyWithSchedules || (schedulesByImam[item.id] && schedulesByImam[item.id].length > 0);
        const matchFavorites = !onlyFavorites || isFavorite(item.id);

        return matchImam && matchCity && matchSchedules && matchFavorites;
    });

    // Rendit të dhënat
    sortData();

    renderSchedule();
}

// Rendit të dhënat sipas kritereve të zgjedhura
function sortData() {
    switch(currentSort) {
        case 'name':
            filteredData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'city':
            filteredData.sort((a, b) => a.city.localeCompare(b.city));
            break;
        case 'schedules':
            filteredData.sort((a, b) => {
                const aCount = schedulesByImam[a.id]?.length || 0;
                const bCount = schedulesByImam[b.id]?.length || 0;
                return bCount - aCount; // Zbritës
            });
            break;
    }
}

// ==================== SHARE FUNCTIONALITY ====================

function shareImam(imam) {
    const url = `${window.location.origin}${window.location.pathname}#imam-${imam.id}`;
    const text = `Shiko orarin e mësimeve të Hoxhë ${imam.name} në ${imam.city}`;

    if (navigator.share) {
        // Native Share API (mobile)
        navigator.share({
            title: `Hoxhë ${imam.name}`,
            text: text,
            url: url
        }).then(() => {
            showToast('U ndanë me sukses!', 'success');
        }).catch((error) => {
            if (error.name !== 'AbortError') {
                fallbackShare(url, text);
            }
        });
    } else {
        fallbackShare(url, text);
    }
}

function fallbackShare(url, text) {
    // Kopjo në clipboard
    const textToCopy = `${text}\n${url}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast('Linku u kopjua! Tani mund ta ndash me të tjerët.', 'success');
        }).catch(() => {
            showShareModal(url, text);
        });
    } else {
        showShareModal(url, text);
    }
}

function showShareModal(url, text) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <h3>Ndaje me të tjerët</h3>
            <div class="share-buttons">
                <a href="${whatsappUrl}" target="_blank" class="share-option whatsapp">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="${facebookUrl}" target="_blank" class="share-option facebook">
                    <i class="fab fa-facebook"></i> Facebook
                </a>
                <button class="share-option copy-link" data-url="${url}">
                    <i class="fas fa-link"></i> Kopjo Linkun
                </button>
            </div>
            <button class="close-share-modal">Mbyll</button>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    modal.querySelector('.copy-link').addEventListener('click', function() {
        const urlToCopy = this.getAttribute('data-url');
        navigator.clipboard.writeText(urlToCopy).then(() => {
            showToast('Linku u kopjua!', 'success');
            modal.remove();
        });
    });

    modal.querySelector('.close-share-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });
}

// ==================== CALENDAR EXPORT ====================

function exportToCalendar(schedule, imam) {
    const event = {
        title: schedule.topic,
        description: schedule.description + `\n\nHoxhë: ${imam.name}`,
        location: `${imam.location}, ${imam.city}`,
        start: new Date(`${schedule.date}T${schedule.time}`),
        duration: 90 // 1.5 orë
    };

    const icsContent = generateICS(event);
    downloadICS(icsContent, `mesim-${imam.name.replace(/\s+/g, '-')}-${schedule.date}.ics`);
    showToast('Eventi u shtua! Hape me kalendarin tënd.', 'success');
}

function generateICS(event) {
    const startDate = formatICSDate(event.start);
    const endDate = formatICSDate(new Date(event.start.getTime() + event.duration * 60000));

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ligjeratat.com//Orari i Mësimeve//EN
BEGIN:VEVENT
UID:${Date.now()}@ligjeratat.com
DTSTAMP:${startDate}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, '\\n')}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;
}

function formatICSDate(date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function downloadICS(content, filename) {
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==================== BROWSER NOTIFICATIONS ====================

let notificationPermission = 'default';

async function requestNotificationPermission() {
    if ('Notification' in window) {
        notificationPermission = await Notification.requestPermission();
        if (notificationPermission === 'granted') {
            showToast('Njoftimet u aktivizuan!', 'success');
        } else if (notificationPermission === 'denied') {
            showToast('Njoftimet janë të bllokuara. Aktivizoji nga cilësimet e shfletuesit.', 'warning');
        }
    }
}

function scheduleNotification(schedule, imam) {
    if (notificationPermission !== 'granted') {
        requestNotificationPermission().then(() => {
            if (notificationPermission === 'granted') {
                saveNotification(schedule, imam);
            }
        });
    } else {
        saveNotification(schedule, imam);
    }
}

function saveNotification(schedule, imam) {
    const notifications = JSON.parse(localStorage.getItem('scheduled_notifications') || '[]');
    notifications.push({
        id: Date.now(),
        schedule: schedule,
        imam: imam,
        scheduledFor: schedule.date + ' ' + schedule.time
    });
    localStorage.setItem('scheduled_notifications', JSON.stringify(notifications));
    showToast('Do të njoftohesh para mësimit!', 'success');
}

// Vendos dëgjuesit e ngjarjeve (shih poshtë për implementimin e plotë)

// Hap modalin me orarin e imamit
function openModal(imam) {
    const schedules = schedulesByImam[imam.id] || [];
    const mapLink = `https://maps.google.com/?q=${encodeURIComponent(imam.location + ' ' + imam.city)}`;

    let schedulesHTML = '';
    if (schedules.length > 0) {
        schedulesHTML = schedules.map((schedule, index) => {
            const formattedDate = formatDate(schedule.date);
            return `
                <div class="schedule-item">
                    <div class="schedule-item-header">
                        <h4>${schedule.topic}</h4>
                        <span class="schedule-badge"><i class="fas fa-clock"></i> ${schedule.time}</span>
                    </div>
                    <p class="schedule-date"><i class="fas fa-calendar-day"></i> ${formattedDate}</p>
                    <p class="schedule-description">${schedule.description}</p>
                    <div class="schedule-item-actions">
                        <button class="btn btn-sm btn-outline schedule-export-btn" data-schedule-index="${index}">
                            <i class="fas fa-calendar-plus"></i> Shto në Kalendar
                        </button>
                        <button class="btn btn-sm btn-outline schedule-notify-btn" data-schedule-index="${index}">
                            <i class="fas fa-bell"></i> Më kujto
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        schedulesHTML = '<p class="no-schedule"><i class="fas fa-info-circle"></i> Aktualisht nuk ka mësime të planifikuara.</p>';
    }

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${imam.image}" alt="${imam.name}" loading="lazy">
        </div>
        <div class="modal-body">
            <h2 class="modal-imam">Hoxhë ${imam.name}</h2>
            <p class="modal-topic"><i class="fas fa-mosque"></i> ${imam.location}</p>

            <div class="modal-meta">
                <div class="modal-meta-item">
                    <i class="fas fa-map-marker-alt modal-meta-icon"></i>
                    <span>${imam.city}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-book modal-meta-icon"></i>
                    <span>${schedules.length} ${schedules.length === 1 ? 'Mësim' : 'Mësime'}</span>
                </div>
            </div>

            <h3 class="schedules-title">Orari i Mësimeve</h3>
            <div class="schedules-list">
                ${schedulesHTML}
            </div>

            <div class="modal-actions">
                <a href="${mapLink}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-map-marked-alt"></i> Shiko në Hartë
                </a>
                <button class="btn btn-secondary modal-share-btn">
                    <i class="fas fa-share-alt"></i> Ndaj
                </button>
            </div>
        </div>
    `;

    // Event listeners për butonat e eksportit dhe njoftimeve
    document.querySelectorAll('.schedule-export-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-schedule-index'));
            exportToCalendar(schedules[index], imam);
        });
    });

    document.querySelectorAll('.schedule-notify-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-schedule-index'));
            scheduleNotification(schedules[index], imam);
        });
    });

    // Event listener për share button
    const modalShareBtn = modalBody.querySelector('.modal-share-btn');
    if (modalShareBtn) {
        modalShareBtn.addEventListener('click', () => {
            shareImam(imam);
        });
    }

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Mbyll modalin
function closeModal() {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== BLOG FUNCTIONS ====================

// Ndërron pamjen (imams, blog, about)
function switchView(viewName) {
    currentView = viewName;

    // Fsheh të gjitha pamjet
    imamsView.style.display = 'none';
    blogView.style.display = 'none';
    aboutView.style.display = 'none';

    // Shfaq pamjen e zgjedhur
    switch(viewName) {
        case 'imams':
            imamsView.style.display = 'block';
            break;
        case 'blog':
            blogView.style.display = 'block';
            renderBlogPosts();
            break;
        case 'about':
            aboutView.style.display = 'block';
            break;
    }

    // Përditëso footer navigation
    updateFooterNavigation();
}

// Përditëson footer navigation active state
function updateFooterNavigation() {
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if ((href === '#' || href === '#imams') && currentView === 'imams') {
            link.classList.add('active');
        } else if (href === '#blog' && currentView === 'blog') {
            link.classList.add('active');
        } else if (href === '#about' && currentView === 'about') {
            link.classList.add('active');
        }
    });
}

// Filtron artikujt e blogut sipas kategorisë
function filterBlogPosts(category) {
    currentBlogCategory = category;

    if (category === 'all') {
        filteredBlogPosts = [...blogPosts];
    } else {
        filteredBlogPosts = blogPosts.filter(post => post.category === category);
    }

    renderBlogPosts();

    // Përditëso butonin aktiv
    blogFilterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
}

// Shfaq listën e artikujve të blogut
function renderBlogPosts() {
    blogList.innerHTML = '';

    if (filteredBlogPosts.length === 0) {
        blogList.style.display = 'none';
        noBlogResults.style.display = 'block';
        return;
    }

    blogList.style.display = 'grid';
    noBlogResults.style.display = 'none';

    // Rendit artikujt sipas datës (më të rejat së pari)
    const sortedPosts = [...filteredBlogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedPosts.forEach(post => {
        const card = createBlogCard(post);
        blogList.appendChild(card);
    });
}

// Krijon kartelën e artikullit të blogut
function createBlogCard(post) {
    const imam = imamsData.find(i => i.id === post.imamId);
    const card = document.createElement('div');
    card.className = 'blog-card';

    const categoryNames = {
        'tefsir': 'Tefsir',
        'fikh': 'Fikh',
        'akide': 'Akide',
        'sira': 'Sira',
        'etika': 'Etikë'
    };

    const categoryIcons = {
        'tefsir': 'fa-book-quran',
        'fikh': 'fa-hands-praying',
        'akide': 'fa-heart',
        'sira': 'fa-mosque',
        'etika': 'fa-handshake'
    };

    card.innerHTML = `
        <div class="blog-card-header">
            <span class="blog-category">
                <i class="fas ${categoryIcons[post.category]}"></i>
                ${categoryNames[post.category]}
            </span>
            <span class="blog-read-time">
                <i class="fas fa-clock"></i>
                ${post.readTime}
            </span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
            <div class="blog-card-author">
                <img src="${imam.image}" alt="${imam.name}" class="blog-author-avatar">
                <div class="blog-author-info">
                    <span class="blog-author-name">Hoxhë ${imam.name}</span>
                    <span class="blog-post-date">${formatDate(post.date)}</span>
                </div>
            </div>
            <button class="btn btn-secondary blog-read-btn">
                <i class="fas fa-book-open"></i> Lexo
            </button>
        </div>
    `;

    // Event listener për të hapur artikullin
    card.querySelector('.blog-read-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openBlogPostModal(post);
    });

    card.addEventListener('click', () => {
        openBlogPostModal(post);
    });

    return card;
}

// Hap modalin me artikullin e plotë të blogut
function openBlogPostModal(post) {
    const imam = imamsData.find(i => i.id === post.imamId);

    const categoryNames = {
        'tefsir': 'Tefsir',
        'fikh': 'Fikh',
        'akide': 'Akide',
        'sira': 'Sira',
        'etika': 'Etikë'
    };

    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="blog-post-header">
                <span class="blog-category-badge">${categoryNames[post.category]}</span>
                <h2 class="blog-post-title">${post.title}</h2>
                <div class="blog-post-meta">
                    <div class="blog-post-author">
                        <img src="${imam.image}" alt="${imam.name}" class="blog-author-avatar-large">
                        <div>
                            <div class="blog-author-name-large">Hoxhë ${imam.name}</div>
                            <div class="blog-post-date-large">${formatDate(post.date)} • ${post.readTime}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-post-content">
                <p class="blog-post-excerpt-large">${post.excerpt}</p>
                <div class="blog-post-body">${post.content}</div>
            </div>

            <div class="blog-post-footer">
                <button class="btn btn-primary" onclick="switchView('blog'); closeModal();">
                    <i class="fas fa-arrow-left"></i> Kthehu te Artikujt
                </button>
            </div>
        </div>
    `;

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== SETUP EVENT LISTENERS ====================

// Zgjeron setupEventListeners për të përfshirë navigacionin dhe blogun
function setupEventListeners() {
    // Event listeners për imamët (ekzistues)
    filterImam.addEventListener('input', filterData);
    filterImam.addEventListener('change', filterData);
    filterCity.addEventListener('change', filterData);

    sortBy.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterData();
    });

    onlyWithSchedulesToggle.addEventListener('change', (e) => {
        onlyWithSchedules = e.target.checked;
        filterData();
    });

    // Favoriten filter
    const onlyFavoritesToggle = document.getElementById('only-favorites');
    if (onlyFavoritesToggle) {
        onlyFavoritesToggle.addEventListener('change', (e) => {
            onlyFavorites = e.target.checked;
            filterData();
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            toggleDarkMode();
            // Update icon
            const icon = darkModeToggle.querySelector('i');
            icon.className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
        });
    }

    modalClose.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });

    // Event listeners për navigacionin në footer
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            if (href === '#' || href === '#imams') {
                switchView('imams');
            } else if (href === '#blog') {
                switchView('blog');
            } else if (href === '#about') {
                switchView('about');
            }
        });
    });

    // Event listeners për filtrat e blogut
    blogFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterBlogPosts(category);
        });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            // Ruaj në localStorage (në prodhim do të dërgohej në server)
            const newsletters = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
            if (!newsletters.includes(email)) {
                newsletters.push(email);
                localStorage.setItem('newsletter_emails', JSON.stringify(newsletters));
                showToast('Faleminderit! Ju do të merrni njoftime për mësime të reja.', 'success');
                newsletterForm.reset();
            } else {
                showToast('Kjo email është tashmë e regjistruar.', 'info');
            }
        });
    }
}

// Inicializo aplikacionin kur ngarkohet faqja
document.addEventListener('DOMContentLoaded', () => {
    init();
});
