const sampleListings = [
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
    country: "India",
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
      url: "https://images.unsplash.com/photo-1614662545389-167f4e8b4bc5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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


module.exports = { data: sampleListings };