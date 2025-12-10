import dish1 from "../../public/7.png";
import dish2 from "../../public/10.png";
import dish3 from "../../public/26.png";
import dish4 from "../../public/12.png";
import dish5 from "../../public/27.png";
import dish6 from "../../public/1.png";
import dish7 from "../../public/2.png";
import dish8 from "../../public/3.png";
import dish9 from "../../public/4.png";
import dish10 from "../../public/5.png";
// import dish11 from "../../public/6.png";
import dish12 from "../../public/8.png";
import dish13 from "../../public/9.png";
import dish14 from "../../public/11.png";
import dish15 from "../../public/13.png";
import dish16 from "../../public/14.png";
import dish17 from "../../public/15.png";
import dish18 from "../../public/16.png";
import dish19 from "../../public/17.png";
import dish20 from "../../public/18.png";
import dish21 from "../../public/19.png";
import dish22 from "../../public/20.png";
import dish23 from "../../public/21.png";
import dish24 from "../../public/22.png";
import dish25 from "../../public/23.png";
import dish26 from "../../public/24.png";
import dish27 from "../../public/25.png";
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
<span></span>;
export const DISHES = [
  {
    image: dish1,
    title: "American Burger",
    description: (
      <span>
        2 Chicken Fillet, 2 Battered Onion Rings -
        <strong className="text-base"> £8.99</strong>
      </span>
    ),
  },
  {
    image: dish2,
    title: "HOT DOG",
    description: (
      <span>
        Caramelised Onions, Sauce -<strong className="text-base"> £5.49</strong>
      </span>
    ),
  },

  {
    image: dish3,
    title: "CHICKEN WINGS",
    description: (
      <span>
        4pc -<strong className="text-base"> £4.49</strong> / 6pc -
        <strong className="text-base"> £5.99</strong> / 10pc -
        <strong className="text-base"> £7.99</strong> / 20pc -
        <strong className="text-base"> £14.99</strong>
      </span>
    ),
  },

  {
    image: dish4,
    title: "JUST HUNGRY COMBO",
    description: (
      <span>
        JustHungry Mix -<strong className="text-base"> £11.99</strong> / Variety
        mix -<strong className="text-base"> £14.99</strong> / Boneless mix -
        <strong className="text-base"> £21.99</strong> / Mega mix -
        <strong className="text-base"> £31.99</strong>
      </span>
    ),
  },
  {
    image: dish5,
    title: "CHEESE NUGGET",
    description: (
      <span>
        8pc -<strong className="text-base"> £3.99</strong> / 15pc -
        <strong className="text-base"> £5.99</strong>
      </span>
    ),
  },
  {
    image: dish6,
    title: "CHUNKY CHICKEN",
    description: (
      <span>
        4pc -<strong className="text-base"> £3.99</strong> / 6pc -
        <strong className="text-base"> £4.99</strong> / 7pc -
        <strong className="text-base"> £5.99</strong>
      </span>
    ),
  },
  {
    image: dish7,
    title: "CHEEKY BITES",
    description: (
      <span>
        8pc -<strong className="text-base"> £3.99</strong> / 15pc -
        <strong className="text-base"> £5.99</strong> / 30pc -
        <strong className="text-base"> £11.99</strong>
      </span>
    ),
  },
  {
    image: dish8,
    title: "SPICY MOZZARELLA",
    description: (
      <span>
        6pc -<strong className="text-base"> £3.99</strong> / 10pc -
        <strong className="text-base"> £5.99</strong> / 20pc -
        <strong className="text-base"> £9.99</strong>
      </span>
    ),
  },
  {
    image: dish9,
    title: "POPCORN CHICKEN",
    description: (
      <span>
        15pc -<strong className="text-base"> £3.99</strong> / 20pc -
        <strong className="text-base"> £4.99</strong> / 30pc -
        <strong className="text-base"> £6.99</strong>
      </span>
    ),
  },
  {
    image: dish10,
    title: "CHICKEN STRIP",
    description: (
      <span>
        15pc -<strong className="text-base"> £3.99</strong> / 20pc -
        <strong className="text-base"> £5.99</strong> / 30pc -
        <strong className="text-base"> £11.99</strong>
      </span>
    ),
  },

  // {
  //   image: dish11,
  //   title: "JUST HUNGRY COMBINATION DEALS",
  //   description: "Perfectly paired combos build for sharing and indulgence.",
  // },
  {
    image: dish12,
    title: "CHICKEN BURGER",
    description: (
      <span>
        1 chicken fillet, onion, sauce -
        <strong className="text-base">£4.99</strong>
      </span>
    ),
  },
  {
    image: dish13,
    title: "SPICY BURGER",
    description: (
      <span>
        2 Chicken Strip, onion, sauce -
        <strong className="text-base">£4.99</strong>
      </span>
    ),
  },
  {
    image: dish14,
    title: "HOT DOG",
    description: (
      <span>
        Caramalised onions, sauce -<strong className="text-base"> £5.49</strong>
      </span>
    ),
  },
  {
    image: dish15,
    title: "NACHO BITES",
    description: (
      <span>
        8pc -<strong className="text-base"> £4.99</strong> / 15pc -
        <strong className="text-base"> £5.99</strong>
      </span>
    ),
  },
  {
    image: dish16,
    title: "MOZZARELLA STICKS",
    description: (
      <span>
        6pc -<strong className="text-base"> £3.99</strong> / 10pc -
        <strong className="text-base"> £5.99</strong> / 20pc -
        <strong className="text-base"> £9.99</strong>
      </span>
    ),
  },
  {
    image: dish17,
    title: "ONION RINGS",
    description: (
      <span>
        8pc -<strong className="text-base"> £3.99</strong> / 15pc -
        <strong className="text-base"> €5.99</strong>
      </span>
    ),
  },
  {
    image: dish18,
    title: "CHICKEN NUGGET",
    description: (
      <span>
        6 Nuggets, Fries, Drink <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full  text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: dish19,
    title: "CHICKEN STRIP",
    description: (
      <span>
        2 Chicken Strip, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full  text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },

  {
    image: dish20,
    title: "CHICKEN WINGS",
    description: (
      <span>
        2 Wings, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full  text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: dish21,
    title: "MOZARELLA STICK",
    description: (
      <span>
        4XL Mozarella Sticks. Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full  text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: dish22,
    title: "ONION RINGS",
    description: (
      <span>
        6 Battered Onion rings, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full  text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: dish23,
    title: "POPCORN CHICKEN",
    description: (
      <span>
        10 Popcorn, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full  text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: dish24,
    title: "REGULAR FRIES",
    description: (
      <span>
        Regular -<strong className="text-base"> £2.49</strong> / Large -
        <strong className="text-base"> £3.49</strong>
      </span>
    ),
  },
  {
    image: dish25,
    title: "SPICY FRIES",
    description: (
      <span>
        Regular -<strong className="text-base"> £2.49</strong> / Large -
        <strong className="text-base"> £3.49</strong>
      </span>
    ),
  },
  {
    image: dish26,
    title: "CHEESY CHIPS",
    description: (
      <span>
        <strong className="text-base">£3.49</strong>
      </span>
    ),
  },
  {
    image: dish27,
    title: "CHICKEN NUGGET",
    description: (
      <span>
        8pc -<strong className="text-base"> £3.99</strong> / 10pc -
        <strong className="text-base"> £4.99</strong> / 15pc -
        <strong className="text-base"> £6.99</strong>
      </span>
    ),
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
