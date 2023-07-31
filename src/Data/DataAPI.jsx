// dataApis.js

import image4 from"../Images/image4.jpg";
import image5 from"../Images/image5.jpg";
import image6 from"../Images/image6.jpg";
import image7 from"../Images/image7.jpg";
import image8 from"../Images/image8.jpg";
import image9 from"../Images/image9.jpg";
import image10 from"../Images/image10.jpg";


export const recentTrip = [
    {
      id: 1,
      title: 'Trip in india',
      description: 'Varanasi, the religious capital of India, wrote a new chapter of religious tourism in Kashi. The appearance of the Kashi Vishwanath Dham temple has changed because of the newly built Kashi Vishwanath Corridor. ',
      image : image4
    },
    {
      id: 2,
      title: 'Trip in australia ',
      description: 'There are vast beaches with no one else on, out any human chatter,red outback where the spirit of Australia is palpable.',
      image: image5,
    },
    {
      id: 3,
      title: 'Trip in china',
      description: 'Visit the Great Wall of China, Tiananmen Square, and the Forbidden City. Explore the hutongs, or traditional Beijing neighborhoods. ',
      image: image6,
    },    
    {
      id: 4,
      title: 'Trip in norway',
      description: 'Norway, country of northern Europe. Nearly half of the inhabitants of the country live in the far south, in the region around Oslo, the capital.',
      image: image7,
    },

  ];
  
  // Add more data with image paths/URLs as needed
  
  export const recommendedDestinations = [
    {
      id: 1,
      country: 'Madhya Pradesh, india',
      title: 'Khajuraho Temple',
      price: '250$/person',
      image : image8,
    },
    {
      id: 2,
      country: 'Tamil nadu, india ',
      title: 'The Chidambaram temple',
      price: '230$/person',
      image: image9,
    },
    {
      id: 3,
      country: 'Bali,indonesia',
      title: 'Pura Tirta Empul',
      price: '300$/person',
      image: image10,
    },    

  ];
  

  export const about = [
    {
      id:1,
      heading: "Our History",
      content: "As a premier travel company specializing in tours and travels, we take immense pride in providing unforgettable experiences to our valued customers. Since our inception, we have had the privilege of serving over 10,000 enthusiastic travelers, guiding them to explore the wonders of various exotic destinations across the globe. From the enchanting cultural marvels of India to the tropical paradise of Bali, the vast landscapes of Australia, the vibrant cities of the USA, the serene beauty of Indonesia, and the captivating charm of Thailand "
    },
    {
      id:2,
      heading:"Our Mission",
      content:"our mission is to enrich lives through unforgettable travel experiences, providing access to exciting and luxurious destinations at affordable prices. We are dedicated to curating exceptional tours and travels, catering to the wanderlust of our customers and delivering journeys that go beyond expectations."
    },
    {
      id:3,
      heading:"Our Vision",
      content:"our vision is to be a trailblazer in the travel industry, setting new standards of excellence and redefining the art of exploration. We aspire to be the first choice for travelers worldwide, renowned for delivering unparalleled journeys that inspire, captivate, and leave an indelible mark on the hearts and minds of our valued customers."
    }

  ]