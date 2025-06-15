import { FaHandsHolding } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaBinoculars } from "react-icons/fa6";
// landing page cards to show in missions 
export const missionContent = [
   {
     id: 1,
     icon: FaBinoculars,
     heading: "Our Vision",
     para: `We strive to create a suitable environment that allows animals to
            live in their natural habitats and conserve them.`,
   },
  {
     id: 2,
     icon: FaHandsHolding,
     heading: "Our History",
     para: `Van Rakshan was established in 2023 by a small group of students led by Tushar Soni, and we have been working towards saving nearly extinct species ever since.`,
   },
  {
     id: 3,
     icon: FaUserGroup,
     heading: "Our Team",
     para: `With a growing team of 20 passionate individuals, we always welcome new helping hands to join our mission.`,
   },
 ];




// caraousel quotes data to show on home page
export const carouselData = [
  {
    id: 1,
    quote:
      "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
    name: "Mahatma Gandhi",
    about:
      "Leader of India's independence movement, known for advocating non-violence and compassion for all living beings.",
  },
  {
    id: 2,
    quote:
      "Wild beasts and birds are by right not the property merely of the people who are alive today, but the property of unknown generations, whose belongings we have no right to squander.",
    name: "Theodore Roosevelt",
    about:
      "26th President of the United States (1901–1909), known as 'The Conservation President' for establishing national parks and wildlife refuges.",
  },
  {
    id: 3,
    quote:
      "The way we treat our animals reflects the values we hold. Protecting endangered species and their habitats is not just about them; it’s about us.",
    name: "Barack Obama",
    about:
      "44th President of the United States (2009–2017), known for environmental policies and expanding marine sanctuaries.",
  },
  {
    id: 4,
    quote:
      "A country is judged not only by the strength of its economy but by the richness of its wildlife and the responsibility it takes in preserving it.",
    name: "John F. Kennedy",
    about:
      "35th President of the United States (1961–1963), promoted environmental initiatives and marine conservation.",
  },
  {
    id: 5,
    quote:
      "Education is the most powerful weapon which you can use to change the world. Let us educate people on the importance of wildlife conservation before it is too late.",
    name: "Nelson Mandela",
    about:
      "First black President of South Africa (1994–1999), known for advocating peace, justice, and wildlife conservation in Africa.",
  }
];

// showing random videos after every render on home page
export const randomVideo = () => {
  const videoArr = [
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740283858/2436088-uhd_3840_2160_25fps_lqyh7f.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740197857/21723-320725678_medium_i5uvts.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740285938/114145-700585495_medium_o3ht7p.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740286015/2835528-hd_1920_1080_25fps_cri5qj.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740286890/85699-591865509_small_nhikfn.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740286916/35427-407130886_medium_a9zb4t.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740286926/76330-559113165_small_eylxj9.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740286936/13704-250154065_medium_fpjn7e.mp4",
    "https://res.cloudinary.com/dgzqoxyzo/video/upload/v1740286993/coverr-young-swans-swim-with-their-mother-2053-1080p_slbsrl.mp4",
  ];

  const random = Math.floor(Math.random() * videoArr.length);
  return videoArr[random];
};

// events array of object to post events in home page
export const events = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740299989/ranthmbhore_wkcgx3.jpg",
    name: "Ranthambore Tiger Safari",
    location: "Ranthambore National Park, Rajasthan",
    date: "10-08-2025",
    completed: false,
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740300925/XZOS2fAzY3nzWBQg-generated_image_clpn6g.jpg",
    name: "Rhino Protection Tour",
    location: "Manas National Park, Assam",
    date: "12-06-2025",
    completed: false,
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740301142/hTLqMtpvsNNywwrf-generated_image_w1kmij.jpg",
    name: "Sloth Bear Sanctuary Trek",
    location: "Daroji Bear Sanctuary, Karnataka",
    date: "30-04-2025",
    completed: true,
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740301277/KZDGfUDF6SlBlWOp-generated_image_ymiab3.jpg",
    name: "Ganges River Dolphin Boat Ride",
    location: "Vikramshila Dolphin Sanctuary, Bihar",
    date: "01-02-2025",
    completed: true,
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740301364/Dudhwa-National-Park-Tigers-vs-Elephants-1-930x600_qouorm.jpg",
    name: "Wetland Conservation Tour",
    location: "Dudhwa National Park, UP",
    date: "12-12-2024",
    completed: true,
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740301564/3zSW98eFW7acsj4M-generated_image_stu5yu.jpg",
    name: "Save Our Seas: Virtual Marine Conservation Summit",
    location: "Zoom",
    date: "15-06-2025",
    completed: false,
  },
  {
    id: 7,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740301669/URKol3NLYh172ayr-generated_image_tnumzk.jpg",
    name: "Human vs. Wildlife: How to Coexist with Nature",
    location: "Zoom",
    date: "14-06-2025",
    completed: false,
  },
  {
    id: 8,
    imgUrl:
      "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740302443/frf5yKZ4GoQUz1iF-generated_image_hpiby9.jpg",
    name: "Tigers in Trouble: Online Awareness Webinar",
    location: "Zoom",
    date: "26-01-2025",
    completed: true,
  },
];

// events help images to post in joinTeam component.
export const eventsImages = [
  {
    img: "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1740510888/9gQyia1AkibgwWp5-generated_image_wx0tje.jpg",
    event: "birdInHand",
  },
  {
    img: "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1742130093/CWTpanel_powrbo.jpg",
    event: "unEvent",
  },
  {
    img: "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1742129398/Save-our-Tigers-Wildlife-Conservation-Trust-2_vlw19j.jpg",
    event: "amitEvent",
  },
  {
    img: "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1742129398/nature_kbbnzg.jpg",
    event: "elephantEvent",
  },
];
