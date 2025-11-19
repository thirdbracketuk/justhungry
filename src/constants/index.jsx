import dish1 from "../../public/dish1.webp";
import dish2 from "../../public/dish2.webp";
import dish3 from "../../public/dish3.webp";
import dish4 from "../../public/dish4.webp";
import dish5 from "../../public/dish5.webp";
import dish6 from "../../public/dish6.webp";
import dish7 from "../../public/dish7.webp";
import dish8 from "../../public/dish8.webp";
import dish9 from "../../public/dish9.webp";
import dish10 from "../../public/dish10.webp";
import italian from "../assets/1.webp";
import japanese from "../assets/2.webp";
import indian from "../assets/3.webp";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Menu", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "JUST CHICKEN",
    description: "Cruncy, juicy chicken made for bold flavour in every bite.",
  },
  {
    image: dish2,
    title: "CHICKEN WINGS",
    description: "Savor the ultimate experience with our sauced wings",
  },
  {
    image: dish3,
    title: "HOT DOGS",
    description: "Classy hot dog loaded with smoked sausage",
  },
  {
    image: dish4,
    title: "SNACKY BITES",
    description:
      "Light bites loaded with cheese, crunch, and instant satisfaction.",
  },
  {
    image: dish5,
    title: "ON THE SIDE",
    description: "Fresh fries and dips built to level up your meal fast.",
  },
  {
    image: dish6,
    title: "BURGERS",
    description: "Juicy stacked burger built for pure, messy satisfaction.",
  },
  {
    image: dish7,
    title: "DESSERTS",
    description: "Warm dough and rich brownie made for sweet comfort.",
  },
  {
    image: dish8,
    title: "KIDS MEAL",
    description: "Fun, easy bites made for small hands and big smiles.",
  },
  {
    image: dish9,
    title: "DRINKS",
    description: "Cold, refreshing sips that keep every meal light and smooth.",
  },
  {
    image: dish10,
    title: "JUST HUNGRY COMBINATION DEALS",
    description: "Perfectly paired combos build for sharing and indulgence.",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Crispy & Flavor-Packed Chicken",
    description:
      "Emphasizing mastery in wings, nuggets, fillets, and lollipops.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Quick, Fun Snack Innovation",
    description: "Highlighting skill in snacky bites, fries, dips, and sides.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indulgent Comfort Foods",
    description:
      "Showcasing desserts, burgers, and combo meals that deliver rich satisfaction",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "7 topping street, Blackpool, FY1 3AX" },
  { key: "phone", value: "Phone: 0750 715 5382" },
  { key: "email", value: "Email: contact@justhungry.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
