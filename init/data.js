const allListings = [
  {
    title: "Taj Mahal",
    description:
      "Explore the iconic symbol of love, the Taj Mahal. This architectural masterpiece in white marble is a UNESCO World Heritage Site.",
    image: {
      filename: "tajmahalimage",
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 500,
    location: "Agra",
    country: "Uttar Pradesh, India",
  },
  {
    title: "Varanasi Ghats",
    description:
      "Witness the spiritual charm of the Ghats of Varanasi. Enjoy Ganga Aarti and explore ancient temples along the riverbank.",
    image: {
      filename: "varanasighatsimage",
      url: "https://images.unsplash.com/photo-1565354785692-9e7523e5a87b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 200,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Fatehpur Sikri",
    description:
      "Step back in time at the Mughal city of Fatehpur Sikri. Marvel at its palaces, courtyards, and the stunning Buland Darwaza.",
    image: {
      filename: "fatehpursikriimage",
      url: "https://media.istockphoto.com/id/514675199/photo/dar-gah-mosque.jpg?s=1024x1024&w=is&k=20&c=WRUmd6UJNDgrxIzaMcLN9nsoKeOXY93c143-wn-rZPU=",
    },
    price: 300,
    location: "Fatehpur Sikri",
    country: "India",
  },
  {
    title: "Lucknow Bara Imambara",
    description:
      "Discover the grandeur of Bara Imambara, an architectural wonder built in the Mughal and Awadhi style.",
    image: {
      filename: "baraimambaraimage",
      url: "https://images.unsplash.com/photo-1655747543289-74baefbfa184?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 150,
    location: "Lucknow",
    country: "India",
  },
  {
    title: "Ayodhya Temples",
    description:
      "Visit the spiritual town of Ayodhya, the birthplace of Lord Rama. Explore ancient temples and religious sites.",
    image: {
      filename: "ayodhyatemplesimage",
      url: "https://images.unsplash.com/photo-1705930691855-9acaa8c6e181?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 100,
    location: "Ayodhya",
    country: "India",
  },
  {
    title: "Sarnath Stupa",
    description:
      "Explore Sarnath, where Lord Buddha delivered his first sermon. Visit the Dhamek Stupa and other Buddhist monuments.",
    image: {
      filename: "sarnathstupaimage",
      url: "https://images.unsplash.com/photo-1630261522977-eb446514ed8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 250,
    location: "Sarnath",
    country: "India",
  },
  {
    title: "Kushinagar Buddhist Sites",
    description:
      "Visit Kushinagar, the site of Lord Buddha's Mahaparinirvana. Explore the Mahaparinirvana Temple and the Rambhar Stupa.",
    image: {
      filename: "kushinagarsitesimage",
      url: "https://images.unsplash.com/photo-1593900107359-dde19776da88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 200,
    location: "Kushinagar",
    country: "India",
  },
  {
    title: "Jhansi Fort",
    description:
      "Explore the historic Jhansi Fort, a symbol of India's freedom struggle and the valor of Rani Laxmibai.",
    image: {
      filename: "jhansifortimage",
      url: "https://images.pexels.com/photos/20000867/pexels-photo-20000867/free-photo-of-raja-mahal-in-jhansi-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 150,
    location: "Jhansi",
    country: "India",
  },
  {
    title: "Dudhwa National Park",
    description:
      "Immerse yourself in the wilderness at Dudhwa National Park. Spot tigers, elephants, and a variety of wildlife.",
    image: {
      filename: "dudhwanationalparkimage",
      url: "https://images.unsplash.com/photo-1711220280949-a20915985940?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 500,
    location: "Lakhimpur Kheri",
    country: "India",
  },
  {
    title: "Chitrakoot",
    description:
      "Experience the divine aura of Chitrakoot, a spiritual haven with sacred rivers, temples, and mesmerizing waterfalls.",
    image: {
      filename: "chitrakootimage",
      url: "https://images.unsplash.com/photo-1641203808562-73b1fd2442ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 300,
    location: "Chitrakoot",
    country: "India",
  },
  {
    title: "Mathura and Vrindavan",
    description:
      "Explore the birthplace of Lord Krishna in Mathura and the vibrant temples of Vrindavan, rich with devotional energy.",
    image: {
      filename: "mathuravrindavanimage",
      url: "https://images.pexels.com/photos/11969919/pexels-photo-11969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 250,
    location: "Mathura-Vrindavan",
    country: "India",
  },
  {
    title: "Sankat Mochan Temple",
    description: 
      "Dedicated to Lord Hanuman, Sankat Mochan is one of Varanasi's most revered temples. Founded by the saint Goswami Tulsidas, it's believed that a visit here removes all troubles (sankat). The temple is known for its vibrant Tuesday and Saturday gatherings with devotional music.",
    image: {
      filename: "sankatmochanimage",
      url: "https://varanasi.tourismindia.co.in/images/places-to-visit/headers/sankat-mochan-temple-varanasi-header-varanasi-tourism.jpg.jpg",
    },
    price: 0, // Usually no entry fee
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Makhdoom Shah Dargah",
    description: 
      "The sacred dargah (shrine) of Makhdoom Shah Baba, a revered Sufi saint, offers a peaceful spiritual experience. This important Muslim pilgrimage site attracts devotees from various faiths who come to seek blessings and tie threads on the shrine's lattice windows, symbolizing their wishes and prayers.",
    image: {
      filename: "makhdumshahimage",
      url: "https://thumbs.dreamstime.com/b/nov-mahim-mumbai-maharashtra-india-horizontal-view-entrance-way-to-tomb-hazrat-makhdoom-shah-baba-dargah-d-237830086.jpg",
    },
    price: 0, // Usually no entry fee
    location: "Faizabad - Ayodhya",
    country: "India",
  },
  {
    title: "Agra Fort",
    description:
      "Visit the majestic Agra Fort, a UNESCO World Heritage Site, known for its red sandstone architecture and rich history.",
    image: {
      filename: "agrafortimage",
      url: "https://images.pexels.com/photos/27222606/pexels-photo-27222606/free-photo-of-the-front-of-a-large-building-with-a-large-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 400,
    location: "Agra",
    country: "India",
  }
  // Additional places can be appended following the same format
];


const secondListings = [
  {
    title: "All Saints Cathedral",
    description: 
      "Visit the magnificent All Saints Cathedral in Allahabad, known for its stunning Gothic architecture and beautiful stained glass windows. This Anglican cathedral is one of the finest examples of colonial-era religious buildings in India.",
    image: {
      filename: "allsaintscathedralimage",
      url: "https://www.trawell.in/admin/images/upload/630209497Allahabad_All_Saints_Cathedral_Main.jpg",
    },
    price: 150,
    location: "Allahabad",
    country: "India",
  },
  {
    title: "Hastinapur",
    description: 
      "Explore the ancient city of Hastinapur, the capital of the Kuru Kingdom from the Mahabharata. Visit Jain temples, archaeological sites, and immerse yourself in the rich history of this legendary location.",
    image: {
      filename: "hastinapurimage",
      url: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/12/Places-To-Visit-In-Hastinapur-Cover-Photo-840x425.jpg",
    },
    price: 250,
    location: "Meerut",
    country: "India",
  },
  {
    title: "Krishna Janmabhoomi",
    description: 
      "Visit the sacred birthplace of Lord Krishna in Mathura. Explore the temple complex, museum, and experience the spiritual significance of this important Hindu pilgrimage site.",
    image: {
      filename: "krishnajanmabhomiimage",
      url: "https://timesofindia.indiatimes.com/photo/msid-105990566/105990566.jpg?resizemode=4",
    },
    price: 350,
    location: "Mathura",
    country: "India",
  },
  {
    title: "Kaal Bhairav Temple",
    description: 
      "Discover the ancient Kaal Bhairav Temple in Varanasi, dedicated to the fierce manifestation of Lord Shiva as the God of Time. Experience unique rituals and the mystical atmosphere of this significant temple.",
    image: {
      filename: "kaalbhairavimage",
      url: "https://i.pinimg.com/564x/81/89/fb/8189fb1abc140016becdb0bc91876ae8.jpg",
    },
    price: 180,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Banaras Hindu University (BHU)",
    description: 
      "Tour the sprawling campus of Banaras Hindu University, one of Asia's largest residential universities. Visit the Bharat Kala Bhavan museum, New Vishwanath Temple, and experience the intellectual heritage of this renowned institution.",
    image: {
      filename: "bhuimage",
      url: "https://iitbhu.ac.in/contents/iitbhu/img/slider/iit_bhu_slider_03.jpg",
    },
    price: 200,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Kashi Vishwanath Temple",
    description: 
      "Experience the divine aura of the famous Kashi Vishwanath Temple, dedicated to Lord Shiva. One of the twelve Jyotirlingas, this ancient temple is the spiritual heart of the holy city of Varanasi.",
    image: {
      filename: "kashivishwanathimage",
      url: "https://i.pinimg.com/736x/9d/cd/8b/9dcd8b10e7912bd6b0fe4205285b44c1.jpg",
    },
    price: 300,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Train Park",
    description: 
      "Enjoy a relaxing day at Train Park with its miniature train rides, beautiful gardens, and recreational facilities. Perfect for families looking for outdoor activities and a peaceful retreat.",
    image: {
      filename: "trainparkimage",
      url: "https://www.lucknowzoo.com/assets/train1.jpg",
    },
    price: 120,
    location: "Lucknow",
    country: "India",
  },
];

const additionalUPDestinations = [
  {
    title: "Prayagraj (Allahabad)",
    description:
      "Visit the sacred confluence of the Ganges, Yamuna, and mythical Saraswati rivers. Experience the spiritual atmosphere of Triveni Sangam and the historic Allahabad Fort.",
    image: {
      filename: "prayagrajimage",
      url: "https://www.bhaktibharat.com/photo/mandir/shri-adishankar-viman-mandapam/5.jpg",
    },
    price: 280,
    location: "Prayagraj",
    country: "India",
  },
  {
    title: "Mirzapur Vindhyachal",
    description:
      "Explore the ancient temples of Vindhyachal, one of the most revered Shakti Peethas in India, nestled amidst the scenic Vindhya mountains.",
    image: {
      filename: "vindhyachalimage",
      url: "https://thetempleguru.com/wp-content/uploads/2023/04/Vindhyavasini-temple-vindhyachal-3.jpg",
    },
    price: 190,
    location: "Mirzapur",
    country: "India",
  },
  {
    title: "Raebareli Bird Sanctuary",
    description:
      "Discover the rich avian diversity at this serene bird sanctuary, a paradise for birdwatchers with numerous migratory species visiting during winter.",
    image: {
      filename: "raebarelibirdsanctuaryimage",
      url: "https://clubmahindra.gumlet.io/blog/images/Gajner-Wildlife-Sanctuary-resized.jpg?w=376&dpr=2.6",
    },
    price: 220,
    location: "Raebareli",
    country: "India",
  },
  {
    title: "Naimisharanya",
    description:
      "Experience the tranquility of this ancient pilgrim site where the wheel of time (Kaal Chakra) is said to have paused. Visit the sacred Chakra Tirth and numerous temples.",
    image: {
      filename: "naimisharanyaimage",
      url: "https://media.istockphoto.com/id/1468174398/photo/naimisharanya.jpg?s=1024x1024&w=is&k=20&c=Rg0PSAppQsL9lLRubGH7lVakat3aXF7b5CVYy4wc8rI=",
    },
    price: 160,
    location: "Sitapur",
    country: "India",
  },
  {
    title: "Chandauli's Naugarh Fort",
    description:
      "Explore this historical fortress built by King Vikramaditya, offering panoramic views of the surrounding landscapes and housing ancient artifacts.",
    image: {
      filename: "nauagarhfortimage",
      url: "https://tripxl.com/blog/wp-content/uploads/2024/11/Sita-Kund-1.jpg",
    },
    price: 170,
    location: "Chandauli",
    country: "India",
  },
  {
    title: "Gorakhpur Gorakhnath Temple",
    description:
      "Visit the significant Gorakhnath Temple, an important center for the Nath tradition, featuring beautiful architecture and spiritual significance.",
    image: {
      filename: "gorakhnathtempleimage",
      url: "https://staticimg.amarujala.com/assets/images/2020/09/25/gorakhnath-temple_1601017553.jpeg?q=80&w=700",
    },
    price: 130,
    location: "Gorakhpur",
    country: "India",
  },
  {
    title: "Etawah Lion Safari",
    description:
      "Experience the thrill of spotting Asiatic lions in their natural habitat at this state-of-the-art safari park, established for lion conservation.",
    image: {
      filename: "etawahlionsafariimage",
      url: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/11/etawah-lion-safari-1574399636.jpg",
    },
    price: 350,
    location: "Etawah",
    country: "India",
  },
  {
    title: "Sonbhadra Salkhan Fossil Park",
    description:
      "Witness one of the world's oldest fossil parks featuring 1.4 billion-year-old stromatolite fossils, offering a glimpse into Earth's ancient past.",
    image: {
      filename: "sonbhadrafossilparkimage",
      url: "https://static.punjabkesari.in/multimedia/16_53_58734393117.jpg",
    },
    price: 240,
    location: "Sonbhadra",
    country: "India",
  },
  {
    title: "Kanpur Bithoor",
    description:
      "Explore the historical town of Bithoor on the banks of the Ganges, known for its association with Lord Brahma, Valmiki, and the freedom struggle.",
    image: {
      filename: "bithoorimage",
      url: "https://kanpurtourism.in/images/places-to-visit/headers/bithoor-kanpur-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    price: 180,
    location: "Kanpur",
    country: "India",
  },
  {
    title: "Kapilvastu",
    description:
      "Visit the ancient kingdom of Lord Buddha where he spent his early life as Prince Siddhartha. Explore archaeological sites and Buddhist monuments.",
    image: {
      filename: "kapilvastuimage",
      url: "https://scontent.fvns1-1.fna.fbcdn.net/v/t1.6435-9/120048748_3351632408254106_1059284566134213330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qm2BeJ6sbpIQ7kNvgHI42rO&_nc_oc=AdlNRuAwHdhK65ZkGIcjFoVgCAH4xKweuDPDnKIDdzpJhITE-vf-hDaSQrVVu1kPa3Zsr4FUa7lMDTTH8iWllrQw&_nc_zt=23&_nc_ht=scontent.fvns1-1.fna&_nc_gid=bGvplp3o4Ku8kZAfYRVaow&oh=00_AYGfeVfl_leWMemzX6DIHnvlQuFPpwjgy5ifSN4sLTMV6Q&oe=681221EC",
    },
    price: 260,
    location: "Siddharthnagar",
    country: "India",
  }
];

// To use these, you would add them to your sampleListings array like this:
const sampleListing = [...allListings,...secondListings, ...additionalUPDestinations];

module.exports = { data: sampleListing };