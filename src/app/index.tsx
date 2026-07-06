import { ReactNode } from "react";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export interface Link {
  text: string;
  targetId: string;
}

export interface Dish {
  image: string;
  title: string;
  description: ReactNode;
}

export interface Cuisine {
  number: string;
  image: string;
  title: string;
  description: string;
}

export interface ContactDetail {
  key: string;
  value: string;
}

export interface Review {
  name: string;
  reviewCount: string;
  timeAgo: string;
  text: string;
}

export interface PlatformStat {
  platform: string;
  rating: string;
  reviews: string;
}

export interface SocialMediaLink {
  href: string;
  icon: ReactNode;
}

export const LINKS: Link[] = [
  { text: "Menu", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Reviews", targetId: "reviews" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES: Dish[] = [
  {
    image: "/7.png",
    title: "American Burger",
    description: (
      <span>
        2 Chicken Fillet, 2 Battered Onion Rings -
        <strong className="text-base"> £8.99</strong>
      </span>
    ),
  },
  {
    image: "/10.png",
    title: "HOT DOG",
    description: (
      <span>
        Caramelised Onions, Sauce -<strong className="text-base"> £5.49</strong>
      </span>
    ),
  },
  {
    image: "/26.png",
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
    image: "/12.png",
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
    image: "/27.png",
    title: "CHEESE NUGGET",
    description: (
      <span>
        8pc -<strong className="text-base"> £3.99</strong> / 15pc -
        <strong className="text-base"> £5.99</strong>
      </span>
    ),
  },
  {
    image: "/1.png",
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
    image: "/2.png",
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
    image: "/3.png",
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
    image: "/4.png",
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
    image: "/5.png",
    title: "CHICKEN STRIP",
    description: (
      <span>
        15pc -<strong className="text-base"> £3.99</strong> / 20pc -
        <strong className="text-base"> £5.99</strong> / 30pc -
        <strong className="text-base"> £11.99</strong>
      </span>
    ),
  },
  {
    image: "/8.png",
    title: "CHICKEN BURGER",
    description: (
      <span>
        1 chicken fillet, onion, sauce -
        <strong className="text-base">£4.99</strong>
      </span>
    ),
  },
  {
    image: "/9.png",
    title: "SPICY BURGER",
    description: (
      <span>
        2 Chicken Strip, onion, sauce -
        <strong className="text-base">£4.99</strong>
      </span>
    ),
  },
  {
    image: "/11.png",
    title: "HOT DOG",
    description: (
      <span>
        Caramalised onions, sauce -<strong className="text-base"> £5.49</strong>
      </span>
    ),
  },
  {
    image: "/13.png",
    title: "NACHO BITES",
    description: (
      <span>
        8pc -<strong className="text-base"> £4.99</strong> / 15pc -
        <strong className="text-base"> £5.99</strong>
      </span>
    ),
  },
  {
    image: "/14.png",
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
    image: "/15.png",
    title: "ONION RINGS",
    description: (
      <span>
        8pc -<strong className="text-base"> £3.99</strong> / 15pc -
        <strong className="text-base"> £5.99</strong>
      </span>
    ),
  },
  {
    image: "/16.png",
    title: "CHICKEN NUGGET",
    description: (
      <span>
        6 Nuggets, Fries, Drink <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: "/17.png",
    title: "CHICKEN STRIP",
    description: (
      <span>
        2 Chicken Strip, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: "/18.png",
    title: "CHICKEN WINGS",
    description: (
      <span>
        2 Wings, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: "/19.png",
    title: "MOZARELLA STICK",
    description: (
      <span>
        4XL Mozarella Sticks. Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: "/20.png",
    title: "ONION RINGS",
    description: (
      <span>
        6 Battered Onion rings, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: "/21.png",
    title: "POPCORN CHICKEN",
    description: (
      <span>
        10 Popcorn, Fries, Drink
        <br />
        <span className="px-2 py-1 bg-gradient-to-l from-gray-800 to-slate-800 rounded-full text-[10px] font-medium">
          KIDS MEAL
        </span>
      </span>
    ),
  },
  {
    image: "/22.png",
    title: "REGULAR FRIES",
    description: (
      <span>
        Regular -<strong className="text-base"> £2.49</strong> / Large -
        <strong className="text-base"> £3.49</strong>
      </span>
    ),
  },
  {
    image: "/23.png",
    title: "SPICY FRIES",
    description: (
      <span>
        Regular -<strong className="text-base"> £2.49</strong> / Large -
        <strong className="text-base"> £3.49</strong>
      </span>
    ),
  },
  {
    image: "/24.png",
    title: "CHEESY CHIPS",
    description: (
      <span>
        <strong className="text-base">£3.49</strong>
      </span>
    ),
  },
  {
    image: "/25.png",
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
  header: "Are you Just Hungry!",
  content:
    "Just Hungry is a fast food restaurant based in Blackpool, serving delicious, freshly prepared meals to locals and visitors alike. We focus on quality, great taste, and a friendly experience for every customer. Our goal is simple: make every meal satisfying and every visit enjoyable.",
};

export const MISSION =
  "At Just Hungry, our mission is to create delicious and memorable JustHungry experience.";

export const CUSINES: Cuisine[] = [
  {
    number: "01.",
    image: "/assets/1.webp",
    title: "Crispy & Flavor-Packed Chicken",
    description: "Emphasizing mastery in wings, nuggets, fillets, and lollipops.",
  },
  {
    number: "02.",
    image: "/assets/2.webp",
    title: "Quick, Fun Snack Innovation",
    description: "Highlighting skill in snacky bites, fries, dips, and sides.",
  },
  {
    number: "03.",
    image: "/assets/3.webp",
    title: "Indulgent Comfort Foods",
    description:
      "Showcasing desserts, burgers, and combo meals that deliver rich satisfaction",
  },
];

export const GOOGLE_REVIEW_URL = "https://share.google/8osKSbPXskKrYtnPk";

export const PLATFORM_STATS: PlatformStat[] = [
  { platform: "Just Eat", rating: "5/5", reviews: "20 reviews" },
  { platform: "Uber Eats", rating: "4.9/5", reviews: "5 reviews" },
  { platform: "Google", rating: "5/5", reviews: "98 reviews" },
];

export const REVIEWS: Review[] = [
  {
    name: "Emily Turner",
    reviewCount: "4 reviews",
    timeAgo: "2 weeks ago",
    text: "What can I say other than the food didn't last 5 minutes when I got home! The owner was lovely and his communication was fab, reassuring me how the wait for the food was to assure everything was fresh. I ordered the chicken wings and they were absolutely delicious!",
  },
  {
    name: "Oleh Zuhan",
    reviewCount: "2 reviews",
    timeAgo: "1 month ago",
    text: "Such a great experience! The owner was very kind and patient explaining the menu, and the food was honestly excellent. The fried chicken was crispy and juicy, the mozzarella sticks were perfect, and everything tasted fresh.",
  },
  {
    name: "Juber",
    reviewCount: "8 reviews",
    timeAgo: "5 months ago",
    text: "The owner of this takeaway was extremely friendly & welcoming. The food was lovely & prepared right in front of me giving me confidence that what I was eating was freshly prepared & cooked with the highest level of care and hygiene. I loved their burger & fried prawns. Will definitely be back!",
  },
  {
    name: "Ing Chen",
    reviewCount: "41 reviews",
    timeAgo: "6 months ago",
    text: "Had a fantastic takeaway meal last night and the homemade spicy dipping sauce was so delicious. Will be back soon and highly recommended!",
  },
  {
    name: "Katie Parr",
    reviewCount: "3 reviews",
    timeAgo: "5 months ago",
    text: "Food is absolutely delicious!! Driver was lovely. Ordering was easy. 100% would order again and recommend to others.",
  },
  {
    name: "Mike Gelling",
    reviewCount: "1 review",
    timeAgo: "5 months ago",
    text: "I'm a big foodie and the only disappointment I got from this place is that I didn't get 2 burgers. Conversation was nice and genuine, food was lovely, clean establishment and fresh salad. Definitely recommend and would have again.",
  },
];

export const CONTACT: ContactDetail[] = [
  { key: "address", value: "7 topping street, Blackpool, FY1 3AX" },
  { key: "phone", value: "Phone: 0750 715 5382" },
  { key: "email", value: "Email: info@justhungry.co.uk" },
];

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
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
