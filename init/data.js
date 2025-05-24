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
    coordinates: { latitude: 27.1751, longitude: 78.0421 },
    videos: [
      {
        id: "eN6vyH_iImE",
        title: "Taj Mahal Tour",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "6DDJY82ZuTU",
        title: "Taj Mahal History",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "DV_r9tw8uo8",
        title: "Taj Mahal Architecture",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.3176, longitude: 83.0058 },
    videos: [
      {
        id: "7-WlErr5mnQ",
        title: "Varanasi Ghats",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "L-2MUmGTkDA",
        title: "Varanasi Ghats",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "_rQtI71dl6I&t=35s",
        title: "Varanasi Ghats",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.8687, longitude: 80.9121 },
    videos: [
      {
        id: "sRzNiq8eLfo&t",
        title: "Lucknow Bara Imambara",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "HnazxRFfouU&t",
        title: "Lucknow Bara Imambara",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "kKO5R0LWDE4",
        title: "Lucknow Bara Imambara",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.7924, longitude: 82.1998 },
    videos: [
      {
        id: "Iu9Bef851wM",
        title: "Ayodhya Temples",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "LGrgIB_R6kk",
        title: "Ayodhya Temples",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "PNYmPkMtdT0",
        title: "Ayodhya Temples",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.3809, longitude: 83.0214 },
    videos: [
      {
        id: "1mfqVupHH0E&t=10s",
        title: "Sarnath Stupa",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "-iOzfPNnkB0&t=563s",
        title: "Sarnath Stupa",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "SRDP5xpKW-0",
        title: "Sarnath Stupa",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.7403, longitude: 83.8889 },
    videos: [
      {
        id: "RcmLXRt94vs",
        title: "Kushinagar Buddhist Sites",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "x5aQHn6wrc0&t=15s",
        title: "Kushinagar Buddhist Sites",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "GW2LhdIB2uc",
        title: "Kushinagar Buddhist Sites",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.4484, longitude: 78.5685 },
    videos: [
      {
        id: "ZnzQ-2KdzAQ",
        title: "Jhansi Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "JOfWGH74to8",
        title: "Jhansi Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "OO7BKM8iv9o",
        title: "Jhansi Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 28.4695, longitude: 80.7022 },
    videos: [
      {
        id: "ZnzQ-2KdzAQ",
        title: "Jhansi Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "JOfWGH74to8",
        title: "Jhansi Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "OO7BKM8iv9o",
        title: "Jhansi Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.1968, longitude: 80.8638 },
    videos: [
      {
        id: "majZh2AJ7Pg",
        title: "Chitrakoot",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "86wSFi5Gf5Q",
        title: "Chitrakoot",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "MaMUXzaIGGk",
        title: "Chitrakoot",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 27.4924, longitude: 77.6737 },
    videos: [
      {
        id: "4o8pUsRWZjQ",
        title: "Mathura and Vrindavan",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "vUg4XjYVPaM&t=78s",
        title: "Mathura and Vrindavan",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "edVn6u-WMlo",
        title: "Mathura and Vrindavan",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.3176, longitude: 83.0058 },
    videos: [
      {
        id: "gIMcRVyyDr4",
        title: "Sankat Mochan Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "8x_OqyWzU7k",
        title: "Sankat Mochan Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "-2hWUaTnoaM",
        title: "Sankat Mochan Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.7924, longitude: 82.1998 },
    videos: [
      {
        id: "P7iI0uIrZfQ",
        title: "Makhdoom Shah Dargah",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "epcrdoYk6wM",
        title: "Makhdoom Shah Dargah",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "6vBIbgfO6LE",
        title: "Makhdoom Shah Dargah",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    location: "Agra this is the location",
    country: "India",
    coordinates: { latitude: 27.1797, longitude: 78.0211 },
    videos: [
      {
        id: "IV4RxvXYGzo",
        title: "Agra Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "5R3Cx3Yk21o",
        title: "Agra Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "2x9ywCSxWAQ",
        title: "Agra Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
  },
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
    coordinates: { latitude: 25.4358, longitude: 81.8463 },
    videos: [
      {
        id: "CGSjJB4XRW4",
        title: "All Saints Cathedral",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "wtSRUvQFrfA",
        title: "All Saints Cathedral",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "ID4ODK3Lbss",
        title: "All Saints Cathedral",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 29.155, longitude: 77.9922 },
    videos: [
      {
        id: "Z0yCGdo-B9M",
        title: "Hastinapur",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "ccef3HviR28",
        title: "Hastinapur",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "HM-zUvhoPFM",
        title: "Hastinapur",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 27.4924, longitude: 77.6737 },
    videos: [
      {
        id: "q0rnJQUMg6A",
        title: "Krishna Janmabhoomi",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "CZ5xE9P3tlo",
        title: "Krishna Janmabhoomi",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "6-TnJlzxQOY",
        title: "Krishna Janmabhoomi",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.3176, longitude: 83.0058 },
    videos: [
      {
        id: "FLkAwdNl-vo",
        title: "Kaal Bhairav Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "BqJvqyt0w2Q",
        title: "Kaal Bhairav Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "_MNFHcOsDUE",
        title: "Kaal Bhairav Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.2677, longitude: 82.9913 },
    videos: [
      {
        id: "4dqAu0cLHyE",
        title: "Banaras Hindu University",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "1oeh8LwyMtY",
        title: "Banaras Hindu University",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "JwDojrbH7zQ",
        title: "Banaras Hindu University",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.3109, longitude: 83.0108 },
    videos: [
      {
        id: "cRBcTeYOYpI",
        title: "Kashi Vishwanath Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "Bhgqg8E8PcU",
        title: "Kashi Vishwanath Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "yPdoC8K8Dp4",
        title: "Kashi Vishwanath Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.8467, longitude: 80.9462 },
    videos: [
      {
        id: "H3ZG7HTJvWk",
        title: "Train Park",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "bDbeLdkJi58",
        title: "Train Park",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "XQh5ZctD8yY",
        title: "Train Park",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.4358, longitude: 81.8463 },
    videos: [
      {
        id: "9jOkgsZMxjw",
        title: "Prayagraj",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "C9_2VTAZwlk",
        title: "Prayagraj",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "95X_u-tNYdQ",
        title: "Prayagraj",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.146, longitude: 82.5674 },
    videos: [
      {
        id: "2G6gwg3w7SY",
        title: "Mirzapur Vindhyachal",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "bqOTaYjhhb0",
        title: "Mirzapur Vindhyachal",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "_iF4XagTPHY",
        title: "Mirzapur Vindhyachal",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.2309, longitude: 81.2402 },
    videos: [
      {
        id: "6Jw_npo3Mok",
        title: "Raebareli Bird Sanctuary",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "PigjdJW_Op0&t=16s",
        title: "Raebareli Bird Sanctuary",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "XSfL5nUCw60",
        title: "Raebareli Bird Sanctuary",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 27.5619, longitude: 80.6825 },
    videos: [
      {
        id: "IUzqNHFOJrc",
        title: "Naimisharanya",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "64MHoggI_rQ",
        title: "Naimisharanya",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "we1QquFwZSw",
        title: "Naimisharanya",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 25.2557, longitude: 83.2683 },
    videos: [
      {
        id: "IbljRA9t-XM",
        title: "Chandauli's Naugarh Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "p-EhJT1S7Nk",
        title: "Chandauli's Naugarh Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "FHVsxCI7rfQ",
        title: "Chandauli's Naugarh Fort",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.7606, longitude: 83.3732 },
    videos: [
      {
        id: "BTZOBRLNSGg",
        title: "Gorakhpur Gorakhnath Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "5N3jsBx6sqk",
        title: "Gorakhpur Gorakhnath Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "fLQQ_I_xciE",
        title: "Gorakhpur Gorakhnath Temple",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.7766, longitude: 79.0213 },
    videos: [
      {
        id: "GqFu2IJic0s",
        title: "Etawah Lion Safari",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "47z1gxEy3po",
        title: "Etawah Lion Safari",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "P7gtQI9Wcyw",
        title: "Etawah Lion Safari",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 24.6877, longitude: 83.0685 },
    videos: [
      {
        id: "dGrTzIVHeDk",
        title: "Sonbhadra Salkhan Fossil Park",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "V0D-rE7uDb4",
        title: "Sonbhadra Salkhan Fossil Park",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "d2cPRidPDnw",
        title: "Sonbhadra Salkhan Fossil Park",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
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
    coordinates: { latitude: 26.4499, longitude: 80.3319 },
    videos: [
      {
        id: "5Etjujo5W-g",
        title: "Kanpur Bithoor",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "VnCEHRJHLEA",
        title: "Kanpur Bithoor",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "BvQuIjardIA",
        title: "Kanpur Bithoor",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
  },
  {
    title: "Kapilvastu",
    description:
      "Visit the ancient kingdom of Lord Buddha where he spent his early life as Prince Siddhartha. Explore archaeological sites and Buddhist monuments.",
    image: {
      filename: "kapilvastuimage",
      url: "https://cdn.s3waas.gov.in/s301386bd6d8e091c2ab4c7c7de644d37b/uploads/bfi_thumb/2018051741-olw736s637y4vdx0m82ze09x10nj7h8rnuov8gw96y.jpg",
    },
    price: 260,
    location: "Siddharthnagar",
    country: "India",
    coordinates: { latitude: 27.5, longitude: 83.45 },
    videos: [
      {
        id: "lvZvmRkpt-k",
        title: "Kapilvastu",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg",
      },
      {
        id: "JwGkgJsLaa8",
        title: "Kapilvastu",
        thumbnail:
          "https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148914343.jpg",
      },
      {
        id: "O-Z7wNCr0Sk",
        title: "Kapilvastu",
        thumbnail:
          "https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148923758.jpg",
      },
    ],
  },
];

// To use these, you would add them to your sampleListings array like this:
const sampleListing = [
  ...allListings,
  ...secondListings,
  ...additionalUPDestinations,
];

module.exports = { data: sampleListing };