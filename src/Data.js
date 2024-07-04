import img1 from "./Img/img1.jpg";
import img2 from "./Img/img2.jpg";
import img3 from "./Img/img3.jpg";

import imgh from "./Img/imgh.jpg";
// import room from "./Img/Services/room.jpg";
// import dining from "./Img/Services/dining.png";
// import lobby from "./Img/Services/lobby.jpg";
// import gym from "./Img/Services/gym.jpg";
// import wedding from "./Img/Services/wedding.jpg";

export const SlideImages = [
  {
    url: img1,
    span: "Discover Extraordinay  Comfort in Hotels",
  },
  {
    url: img2,
    span: "Experience Hospitality Redefined",
  },
  {
    url: img3,
    span: "Indulge in Unmatched Luxury",
  },
];

export const ServiceImages = [
  {
    // url: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    span: "Rooms",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=350&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nfGVufDB8fDB8fHww",
    span: "Dining",
  },
  {
    url: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=350&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9iYnl8ZW58MHx8MHx8fDA%3D",
    span: "Confrence & Meetings",
  },
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    span: "Service & Facility",
  },
  {
    url: "https://images.unsplash.com/photo-1473177027534-53d906e9abcf?w=350&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjB3ZWRkaW5nfGVufDB8fDB8fHww",
    span: "Wedding Package",
  },
];

export const offerImages = [
  {
    url: "https://images.unsplash.com/photo-1429080355161-3c071e2e27a6?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offertype: "Room",
    offerNmae: "Honeymoon",
    allowedPerson: 2,
    offerDetails: "this i s going to be offer detais",
    offerPrice: 699,
    time: "night",
  },

  {
    url: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offertype: "Room",
    offerNmae: "Party",
    allowedPerson: 10,
    offerDetails: "this i s going to be offer detais",
    offerPrice: 699,
    time: "night",
  },

  {
    url: "https://images.unsplash.com/photo-1529516222410-a269d812f320?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    offertype: "Room",
    offerNmae: "Romantic Dining",
    allowedPerson: 2,
    offerDetails: "this i s going to be offer detais",
    offerPrice: 499,
    time: "Table",
  },
];

export const TypesofRooms = [
  // standard
  {
    roomType: "Standard Room",
    startingPrice: 2000,
    desc: "Comfortable and affordable, our standard rooms offer modern furnishings and essential amenities for a pleasant stay.",
    facilites: [
      {
        name: "Comfortable Bedding",
        iconName: "fa-bed",
      },

      {
        name: "Private Bathroom",
        iconName: "fa-sink",
      },

      {
        name: "WorkSpace",
        iconName: "fa-square-check",
      },
      {
        name: "Free Wifi",
        iconName: "fa-wifi",
      },

      {
        name: "Room Services",
        iconName: "fa-person-dots-from-line",
      },
    ],

    images: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678297269904-6c46528b36a7?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558392164-be227dfe1c98?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  // double room

  {
    roomType: "Double Room",
    desc: "Indulge in luxury with our spacious double rooms featuring a plush queen-sized bed and modern amenities for a memorable stay.",
    startingPrice: 3000,
    facilites: [
      {
        name: "Master Bedroom",
        iconName: "fa-bed",
      },

      {
        name: "Private Bathroom",
        iconName: "fa-sink",
      },
      {
        name: "Air Conditioner",
        iconName: "fa-fan",
      },
      {
        name: "Free Wifi",
        iconName: "fa-wifi",
      },
      {
        name: "Mini-Fridge",
        iconName: "fa-temperature-low",
      },
      {
        name: "Room Services",
        iconName: "fa-person-dots-from-line",
      },
    ],

    images: [
      "https://plus.unsplash.com/premium_photo-1683649964208-d76100727c59?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683649964203-baf13fa852e4?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683649964208-d76100727c59?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683649964277-60f5333869a4?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683649964233-93bbb9bc6316?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  // Suite Room

  {
    roomType: "Suite Room",
    desc: "Experience sophistication in our luxurious suites, boasting separate living and sleeping areas, premium amenities, and personalized service.",
    startingPrice: 5000,
    facilites: [
      {
        name: "Sea Facing",
        iconName: "fa-water",
      },

      {
        name: "1 Master Bedrooms",
        iconName: "fa-bed",
      },
      {
        name: "Air Conditioner",
        iconName: "fa-fan",
      },

      {
        name: "Private Bathroom",
        iconName: "fa-sink",
      },

      {
        name: "Free Wifi",
        iconName: "fa-wifi",
      },
      {
        name: "Mini-Fridge",
        iconName: "fa-temperature-low",
      },
      {
        name: "Room Services",
        iconName: "fa-person-dots-from-line",
      },
      {
        name: "Coffee/Tea Maker",
        iconName: "fa-mug-hot",
      },
    ],

    images: [
      "https://plus.unsplash.com/premium_photo-1670360415069-af406ef41611?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670360414882-4d4e261afb53?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670360414531-aaf6c4b48b8d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670360413885-fefcf55cd0e0?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670360413242-547c2dd63e50?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  // deluse
  {
    roomType: "Deluse Room",
    startingPrice: 8000,
    desc: " Discover opulence in our exclusive luxury rooms, featuring lavish furnishings, upscale amenities, and meticulous attention to detail. ",
    facilites: [
      {
        name: "Sea Facing",
        iconName: "fa-water",
      },
      {
        name: "3 Master Bedroom",
        iconName: "fa-bed",
      },
      {
        name: "Air Conditioner",
        iconName: "fa-fan",
      },
      {
        name: "Private Bathroom",
        iconName: "fa-sink",
      },

      {
        name: "WorkSpace",
        iconName: "fa-square-check",
      },
      {
        name: "Free Wifi",
        iconName: "fa-wifi",
      },
      {
        name: "Mini-Fridge",
        iconName: "fa-temperature-low",
      },
      {
        name: "Room Services",
        iconName: "fa-person-dots-from-line",
      },
      {
        name: "Coffee/Tea Maker",
        iconName: "fa-mug-hot",
      },
    ],

    images: [
      "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663091254650-90b78dc44744?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663061414669-bb34bcd3ff2f?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663076153319-e65d2ec746cf?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  // family rooms

  {
    roomType: "Family Room",
    startingPrice: 10000,
    desc: "Create lasting memories in our spacious family rooms, designed for families with comfortable bedding options and family-friendly amenities.",
    facilites: [
      {
        name: "3 Bedroom",
        iconName: "fa-bed",
      },

      {
        name: "2 Master Bedroom",
        iconName: "fa-bed",
      },
      ,
      {
        name: "1 Child Bedroom",
        iconName: "fa-bed",
      },
      {
        name: "Private Bathroom",
        iconName: "fa-sink",
      },
      {
        name: "Private Pool",
        iconName: "fa-person-swimming",
      },
      {
        name: "WorkSpace",
        iconName: "fa-square-check",
      },
      {
        name: "Free Wifi",
        iconName: "fa-wifi",
      },
      {
        name: "Mini-Fridge",
        iconName: "fa-temperature-low",
      },
      {
        name: "Room Services",
        iconName: "fa-person-dots-from-line",
      },
      {
        name: "Coffee/Tea Maker",
        iconName: "fa-mug-hot",
      },
    ],

    images: [
      "https://plus.unsplash.com/premium_photo-1675537843204-a729d7ceedda?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675537856764-a557a0a7b313?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675537843198-dcd3365d95a5?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675537856925-57af594a8f46?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export const hotelServices = [
  {
    serviceName: "Accomodation Options",
    options: [
      {
        optionName: "Standard Room",
        url: "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        optionName: "Deluse Room",
        url: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        optionName: "Suite",
        url: "https://plus.unsplash.com/premium_photo-1661963630748-3de7ab820570?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    serviceName: "Dining Options:",
    options: [
      {
        optionName: "Fine Dining Restaurant",
        url: "https://images.unsplash.com/photo-1520252684003-ed43c268810a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        optionName: "Casual Dining Restaurant",
        url: "https://images.unsplash.com/photo-1708493449638-be3ffd051472?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        optionName: "Poolside Bar & Grill",
        url: "https://images.unsplash.com/photo-1629466928463-7c93bcb15f12?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
      },
    ],
  },

  {
    serviceName: "Facilities and Amenities:",
    options: [
      {
        optionName: "Swimming Pool",
        url: "https://images.unsplash.com/photo-1551672746-89991811c186?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        optionName: "Spa & Wellness Center",
        url: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        optionName: "Fitness Center",
        url: "https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    serviceName: "Events and Meetings:",
    options: [
      {
        optionName: "Conference Rooms",
        url: "https://images.unsplash.com/photo-1571173069043-82a7a13cee9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },

      {
        optionName: "Ballroom",
        url: "https://images.unsplash.com/photo-1549964336-96c968e00d5b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        optionName: "Meeting Spaces",
        url: "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];
