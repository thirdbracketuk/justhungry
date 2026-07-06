export const JUSTEAT_URL = "https://www.just-eat.co.uk/restaurants-just-hungry-blackpool-fy1/menu#category_50f794af-25ca-444a-bef7-3d211d614385";
export const UBEREATS_URL = "https://www.ubereats.com/gb/store/just-hungry-blackpool/JqFmFciCQdK859BnlzHrRA";

export interface MenuItem {
  title: string;
  price: string;
  description: string;
  image: string; // empty string = no creative yet
  spicy?: boolean;
  vegetarian?: boolean;
  // future collection order system fields:
  // available?: boolean;
  // collectionOnly?: boolean;
  // collectionPrice?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const FEATURED_ITEMS: MenuItem[] = [
  {
    title: "Chunky Chicken",
    price: "from £5.99",
    description: "Battered Chicken Breast Chunks.",
    image: "/1.png",
  },
  {
    title: "20 BBQ Chicken Wings",
    price: "£15.50",
    description: "20 BBQ Chicken Wings.",
    image: "",
  },
  {
    title: "Onion Rings",
    price: "from £4.99",
    description: "Battered Onion Rings Formed From Chopped Onions.",
    image: "/15.png",
    vegetarian: true,
  },
  {
    title: "Chicken Fillet Burger",
    price: "£6.99",
    description: "Chicken Fillet Burger.",
    image: "/8.png",
  },
  {
    title: "Cream Cheese Garlic Bites",
    price: "from £4.99",
    description: "Cream Cheese With Garlic and Chive in Butter.",
    image: "",
    vegetarian: true,
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "meal-deals",
    label: "Meal Deals",
    items: [
      {
        title: "Meal Deal 1",
        price: "£7.99",
        description: "4 Chicken Wings, Fries, Rubicon Mango or Bottled Water",
        image: "/18.png",
      },
      {
        title: "Meal Deal 2",
        price: "£7.49",
        description: "4 Chunky Chicken, Fries, Rubicon Mango or Bottled Water",
        image: "/1.png",
      },
      {
        title: "Meal Deal 3",
        price: "£6.99",
        description: "2 Chicken Strip, Fries, Rubicon Mango or Bottled Water",
        image: "/17.png",
      },
      {
        title: "Meal Deal 4",
        price: "£6.49",
        description: "4 Mozzarella Sticks, Fries, Rubicon Mango or Bottled Water",
        image: "/19.png",
      },
      {
        title: "Meal Deal 5",
        price: "£7.49",
        description: "2 Chicken Tenders, Fries, Rubicon Mango or Bottled Water",
        image: "/5.png",
      },
      {
        title: "Meal Deal 6",
        price: "£5.99",
        description: "5 Spicy Chicken Chunks with Chips",
        image: "",
        spicy: true,
      },
    ],
  },
  {
    id: "combination-deals",
    label: "Combination Deals",
    items: [
      {
        title: "Just Hungry Mix",
        price: "£17.99",
        description: "6pc Spicy Chunky Chicken, 6pc Chicken Wing, 6pc Onion Rings, Regular Fries & Drink",
        image: "/12.png",
      },
      {
        title: "Variety Mix",
        price: "£21.99",
        description: "8 Chicken Wings, 4 Spicy Chicken Strip Fillet, 8 Jalapeno Cheesy Nacho Bites, 8 Onion Rings, 2 Regular Fries, 4 Dips, 2 Drinks",
        image: "/12.png",
      },
      {
        title: "Boneless Mix",
        price: "£31.99",
        description: "10 Chicken Nuggets, 10 Cheeky Bites, 10 Popcorn Chicken, 4 Spicy Chicken Strip Fillet, 6 Spicy Chunky Chicken, 10 Onion Rings, 2 Regular Fries, 6 Dips, Bottled Drink 1.25litre",
        image: "/12.png",
      },
      {
        title: "Mega Mix",
        price: "£44.99",
        description: "8pc Spicy Chunky Chicken, 8pc Chicken Wings, 8pc Spicy Chicken Strip Fillet, 8 Mozzarella Sticks, 8 Chilli Cheesy Nugget Bites, 8 Onion Rings, 3 Regular Fries, 8 Dips, 2 Bottled Drinks 1.25litre",
        image: "/12.png",
      },
      {
        title: "Spicy Mix",
        price: "£29.99",
        description: "8 Spicy Chicken Fillet Strip, 8 Chilli Cheese Nugget Bites, 10 Jalapeño Cheesy Nacho Bites, 8 XL Spicy Mozzarella Sticks, 2 Regular Fries, 6 Dips, Bottled Drink 1.25litre",
        image: "",
        spicy: true,
      },
      {
        title: 'Say "Cheese" Mix',
        price: "£29.99",
        description: "10 Pizza Bites, 10 Cream Cheese Garlic Bites, 10 XL Mozzarella Sticks, 10 Spicy Cheese Nugget Bites, 10 Jalapeño Cheesy Nacho Bites, 2 Regular Fries, 6 Dips, Bottled Drink 1.25litre",
        image: "",
      },
      {
        title: "Chicken Lover",
        price: "£49.99",
        description: "8 Chicken Wings, 10 Chicken Nuggets, 15 Cheeky Bites, 8 Spicy Chunky Chicken, 20 Popcorn Chicken, 8 Chicken Fillet Strip, 3 Regular Fries, 10 Dips, 2 Bottled Drinks 1.25litres",
        image: "",
      },
      {
        title: "Mini Chicken Lover",
        price: "£25.99",
        description: "4 Chicken Wings, 6 Chicken Nuggets, 8 Cheeky Bites, 4 Chunky Chicken, 10 Popcorn Chicken, 3 Chicken Fillet Strip, 2 Regular Fries, 4 Dips, Bottled Drink 1.25litres",
        image: "",
      },
    ],
  },
  {
    id: "holiday-menu",
    label: "🎉 Holiday Menu",
    items: [
      {
        title: "Holiday Mix 1",
        price: "£39.99",
        description: "2 Spring Rolls, 2 Tenders, 6 BBQ Wings, 2 Jumbo Sausages, 4 XL Mozzarella Sticks, 8 Jalapeño Cheesy Nacho Bites, 2 Regular Fries, 8 Dips, 2 Ice Cream Tubs, 2 Chocolate Bars, 1 Bottle Drink 1.25ltr",
        image: "",
      },
      {
        title: "Holiday Mix 2",
        price: "£34.99",
        description: "4 Chicken Wings, 4 Spicy Chunky Chicken, 4 Chicken Nuggets, 8 Cheeky Bites, 6 Popcorn Chicken, 2 Chicken Fillet Strips, 1 Regular Fries, 4 Dips, x2 Drinks, Ice Cream Tub, x2 Chocolate",
        image: "",
      },
      {
        title: "Holiday Mix 3",
        price: "£28.99",
        description: "10 Cheeky Bites, 8 Jalapeño Cheesy Nacho Bites, 2 Chicken Fillet Strips, 8 Chilli Cheese Nugget Bites, 4 XL Spicy Mozzarella Sticks, 1 Regular Fries, x2 Drinks, 4 Dips, Ice Cream Tub, x2 Chocolates",
        image: "",
      },
      {
        title: "Holiday Mix 4",
        price: "£28.99",
        description: "4 XL Mozzarella Sticks, 6 Pizza Bites, 5 Jalapeno Cheesy Nacho Bites, 6 Cream Cheese Garlic Bites, 6 Spicy Cheese Nugget Bites, 1 Regular Fries, 4 Dips, x2 Drinks, Ice Cream Tub, x2 Chocolate",
        image: "",
      },
      {
        title: "Holiday Mix 5",
        price: "£25.99",
        description: "4 Chicken Nuggets, 8 Cheeky Bites, 2 Chicken Strip Fillet, 6 Popcorn Chicken, 4 Spicy Chunky Chicken, 1 Regular Fries, 4 Dips, x2 Drinks, 1 Ice Cream Tub, x2 Chocolate",
        image: "",
      },
    ],
  },
  {
    id: "just-chicken",
    label: "Just Chicken",
    items: [
      {
        title: "Cheeky Bites",
        price: "from £4.99",
        description: "Southern Fried Chicken Bites — full cooked pieces of whole chicken breast in a crisp southern fried coating.",
        image: "/2.png",
      },
      {
        title: "Chunky Chicken",
        price: "from £5.99",
        description: "Battered Chicken Breast Chunks.",
        image: "/1.png",
      },
      {
        title: "Spicy Chicken Chunks",
        price: "from £5.99",
        description: "Spicy Chicken Chunks.",
        image: "",
        spicy: true,
      },
      {
        title: "Chicken Fillet Strip",
        price: "from £5.49",
        description: "Chicken Mini Fillets.",
        image: "/5.png",
      },
      {
        title: "Spicy Chicken Fillet Strip",
        price: "from £5.49",
        description: "Hot & Spicy Chicken Mini Fillets.",
        image: "",
        spicy: true,
      },
      {
        title: "Chicken Nugget",
        price: "from £4.99",
        description: "Battered Chicken Nuggets.",
        image: "/25.png",
      },
      {
        title: "Popcorn Chicken",
        price: "from £4.99",
        description: "Formed Chicken Meat Breaded.",
        image: "/4.png",
      },
      {
        title: "Chicken Tenders",
        price: "from £4.99",
        description: "Premium Chicken Tenders. Breaded Chicken Inner Fillets. 100% Whole Fillet. No Palm Oil.",
        image: "",
      },
    ],
  },
  {
    id: "snacky-bites",
    label: "Snacky Bites",
    items: [
      {
        title: "XL Mozzarella Sticks",
        price: "from £4.99",
        description: "Breaded XL Mozzarella Sticks.",
        image: "/14.png",
        vegetarian: true,
      },
      {
        title: "XL Spicy Mozzarella Sticks",
        price: "from £4.99",
        description: "Mozzarella in a hot and spicy butter and breadcrumb coating.",
        image: "/3.png",
        spicy: true,
        vegetarian: true,
      },
      {
        title: "Cream Cheese Garlic Bites",
        price: "from £4.99",
        description: "Cream Cheese with Garlic and Chive in Butter.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Spicy Cheese Nugget Bites",
        price: "from £4.99",
        description: "Creamy Cheese with chilli butter.",
        image: "",
        spicy: true,
        vegetarian: true,
      },
      {
        title: "Jalapeño Cheesy Nacho Bites",
        price: "from £4.99",
        description: "Breaded Pickled Jalapeños with a Nacho Cheese Filling.",
        image: "/13.png",
        spicy: true,
        vegetarian: true,
      },
      {
        title: "Onion Rings",
        price: "from £4.99",
        description: "Battered Onion Rings Formed From Chopped Onions.",
        image: "/15.png",
        vegetarian: true,
      },
      {
        title: "Pizza Bites",
        price: "from £4.99",
        description: "Gouda Cheese, Full Fat Soft Cheese and Mozzarella Cheese Balls with a Tomato Sauce Centre.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Cheddar Jalapeño Bites",
        price: "from £4.99",
        description: "Cheese with small pieces of Jalapeños in a crispy breaded coating.",
        image: "",
        vegetarian: true,
      },
    ],
  },
  {
    id: "chicken-wings",
    label: "Chicken Wings",
    items: [
      {
        title: "4 Chicken Wings",
        price: "£5.49",
        description: "4 Chicken Wings.",
        image: "/26.png",
      },
      {
        title: "6 Chicken Wings",
        price: "£6.99",
        description: "6 Chicken Wings.",
        image: "/26.png",
      },
      {
        title: "10 Chicken Wings",
        price: "£8.99",
        description: "10 Chicken Wings.",
        image: "/26.png",
      },
      {
        title: "20 Chicken Wings",
        price: "£16.99",
        description: "20 Chicken Wings.",
        image: "/26.png",
      },
      {
        title: "4 BBQ Chicken Wings",
        price: "£4.50",
        description: "4 BBQ Chicken Wings.",
        image: "",
      },
      {
        title: "6 BBQ Chicken Wings",
        price: "£5.99",
        description: "6 BBQ Chicken Wings.",
        image: "",
      },
      {
        title: "10 BBQ Chicken Wings",
        price: "£8.50",
        description: "10 BBQ Chicken Wings.",
        image: "",
      },
      {
        title: "20 BBQ Chicken Wings",
        price: "£15.50",
        description: "20 BBQ Chicken Wings.",
        image: "",
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    items: [
      {
        title: "Chicken Fillet Burger",
        price: "£6.99",
        description: "Chicken Fillet Burger.",
        image: "/8.png",
      },
      {
        title: "Spicy Chicken Strip Burger",
        price: "£6.49",
        description: "2 Chicken Strip.",
        image: "/9.png",
        spicy: true,
      },
      {
        title: "American Classic Chicken Burger",
        price: "£10.99",
        description: "2 Chicken Fillet, 2 Battered Onion Rings.",
        image: "/7.png",
      },
      {
        title: "Desi Burger",
        price: "£7.99",
        description: "Chicken Fillet, Caramelised Onion, Creamy or Sweet Naga Sauce, Coriander.",
        image: "",
        spicy: true,
      },
      {
        title: "Chicken T-Rasher Burger",
        price: "£10.99",
        description: "Chicken Fillet, 2 Turkey Rasher, Caramelised Onion, 2 Battered Onion Rings.",
        image: "",
      },
      {
        title: "Chicken Steak Burger",
        price: "£6.49",
        description: "Chicken Steak, Mayo, Lettuce.",
        image: "",
      },
      {
        title: "Quarter Pounder Burger",
        price: "£5.49",
        description: "Beef Burger.",
        image: "",
      },
      {
        title: "Double Smash Burger with Cheese",
        price: "£7.99",
        description: "100% Beef Burger.",
        image: "",
      },
      {
        title: "Smash Burger, Double Cheese",
        price: "£5.49",
        description: "100% Beef Burger.",
        image: "",
      },
      {
        title: "6oz Gourmet Burger",
        price: "£8.99",
        description: "Juicy 6oz Gourmet Beef Burger including 3 slices of cheese.",
        image: "",
      },
      {
        title: "Double Patty",
        price: "£12.99",
        description: "Juicy double 6oz Beef Burger including 4 slices of cheese.",
        image: "",
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    items: [
      {
        title: "Chicken Fillet Strip Wrap",
        price: "£6.49",
        description: "Chicken Fillet, Mayo, Lettuce.",
        image: "",
      },
      {
        title: "Spicy Chicken Fillet Strip Wrap",
        price: "£7.99",
        description: "Spicy Creamy Bengal Sauce, Chicken Fillet, Lettuce.",
        image: "",
        spicy: true,
      },
      {
        title: "Desi Chicken Fillet Strip Wrap",
        price: "£6.99",
        description: "Mouthwatering Desi Sauce, a blend of exotic flavours, Chicken Fillet, Lettuce.",
        image: "",
        spicy: true,
      },
      {
        title: "Turkey Rasher Wrap",
        price: "£7.99",
        description: "8 slices of Turkey Rashers, 4 Onion Rings, Lettuce, Mayonnaise.",
        image: "",
      },
      {
        title: "Desi Turkey Rasher Wrap",
        price: "£8.99",
        description: "8 slices of Turkey Rashers, 4 Onion Rings, Caramelised Onions, Lettuce, In-House Hot Sauce.",
        image: "",
        spicy: true,
      },
    ],
  },
  {
    id: "hot-dogs",
    label: "Hot Dogs",
    items: [
      {
        title: "Hot Dog",
        price: "£6.49",
        description: "Caramelised Onions, Sauce.",
        image: "/10.png",
      },
      {
        title: "Spicy Hot Dog",
        price: "£7.99",
        description: "Caramelised Onions, Creamy Bengal Sauce, Coriander.",
        image: "",
        spicy: true,
      },
    ],
  },
  {
    id: "spring-rolls",
    label: "Spring Rolls",
    items: [
      {
        title: "Jumbo Spring Rolls",
        price: "from £4.99",
        description: "Golden, crispy light pastry filled with a delicious yummy vegetable filling.",
        image: "",
        vegetarian: true,
      },
    ],
  },
  {
    id: "loaded-fries",
    label: "Crazy Loaded Fries",
    items: [
      {
        title: "Loaded Masala Fries",
        price: "£8.99",
        description: "Mouthwatering fries layered with Cheese sauce, Cheese, blend of seasoning, variety of blended spices, in-house sauces, chopped red and green Jalapeños, crunchy fried onions and fresh Coriander. (Hot & Spicy), (Gluten Free).",
        image: "",
        spicy: true,
        vegetarian: true,
      },
      {
        title: "Loaded Chicken Fries",
        price: "£14.99",
        description: "Mouthwatering fries layered with succulent diced Chicken, cheese sauce, Cheese, blend of seasoning, variety of blended spices, in-house sauces, chopped red and green jalapeños, crunchy fried onions and fresh Coriander. (Hot & Spicy).",
        image: "",
        spicy: true,
      },
    ],
  },
  {
    id: "kids-meal",
    label: "Kids Meal",
    items: [
      {
        title: "Chicken Strip Meal",
        price: "£6.99",
        description: "x2 Chicken Strip, Fries, Drink.",
        image: "/17.png",
      },
      {
        title: "Chicken Wings Meal",
        price: "£6.99",
        description: "x2 Wings, Fries, Drink.",
        image: "/18.png",
      },
      {
        title: "Chicken Nugget Meal",
        price: "£6.99",
        description: "6 Nuggets, Fries, Drink.",
        image: "/16.png",
      },
      {
        title: "Mozzarella Sticks Meal",
        price: "£5.99",
        description: "4XL Mozzarella Sticks, Fries, Drink.",
        image: "/19.png",
      },
      {
        title: "Onion Rings Meal",
        price: "£5.99",
        description: "6 Battered Onion Rings, Fries, Drink.",
        image: "/20.png",
      },
      {
        title: "Popcorn Chicken Meal",
        price: "£6.99",
        description: "10 Popcorn, Fries, Drink.",
        image: "/21.png",
      },
    ],
  },
  {
    id: "sides",
    label: "On the Side",
    items: [
      {
        title: "Fries",
        price: "from £3.50",
        description: "Gluten Free.",
        image: "/22.png",
        vegetarian: true,
      },
      {
        title: "Cheesy Chips",
        price: "£4.50",
        description: "Cheesy Chips.",
        image: "/24.png",
        vegetarian: true,
      },
      {
        title: "Cheese Slice",
        price: "£0.50",
        description: "Cheese Slice.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Crispy Crunchy Onions",
        price: "£0.65",
        description: "Crispy Crunchy Onions.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Dips",
        price: "£0.65",
        description: "Dips.",
        image: "",
      },
      {
        title: "Special Dips",
        price: "£1.00",
        description: "Special Dips.",
        image: "",
        spicy: true,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Chocolates",
    items: [
      {
        title: "Mr Kipling French Fancy Ice Cream",
        price: "£4.99",
        description: "Ice Cream with sponge cake bites & Fondant Flavour Sauce. 475ml.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Mr Kipling Caramel Tart Ice Cream",
        price: "£4.99",
        description: "Caramel Flavour Ice Cream with a rich Caramel Flavour Sauce & Pastry Pieces. 475ml.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Time Out Chocolate",
        price: "£1.00",
        description: "Cadbury Orange Creamy Chocolate covered Wafer. 18g.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Diamond Truffles (Caramel)",
        price: "£1.00",
        description: "White Truffle Chocolate with Coconut. 3 Pieces.",
        image: "",
        vegetarian: true,
      },
      {
        title: "Diamond Truffles (Coconut)",
        price: "£1.00",
        description: "White Truffle Chocolate with Coconut. 3 Pieces.",
        image: "",
        vegetarian: true,
      },
    ],
  },
];
