export interface StoreCardDataI {
  name: string;
  src: string;
  category: string;
  //
  ratingScore: string;
  ratingVotes: number;
  //
  diskont?: string;
}

export const ESTABLISH_SUGGESTIONS_TEMPLATE = {
  suggestions: "Заклади, які вам можуть сподобатися",
  bestInCity: "Найкраще в *CITY_NAME",
};

export const ESTABLISH_SUGGESTIONS_DATA: StoreCardDataI[] = [
  {
    name: "AТВ / AТБ",
    src: "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/h0xtakxljdrlm5xkubcl",
    category: "Супермаркет",
    //
    ratingScore: "94%",
    ratingVotes: 129,
    diskont: "20%",
  },
  {
    name: "AТВ / AТБ",
    src: "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/h0xtakxljdrlm5xkubcl",
    category: "Супермаркет",
    //
    ratingScore: "94%",
    ratingVotes: 129,
  },
  {
    name: "AТВ / AТБ",
    src: "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/h0xtakxljdrlm5xkubcl",
    category: "Супермаркет",
    //
    ratingScore: "94%",
    ratingVotes: 129,
  },
  {
    name: "AТВ / AТБ",
    src: "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/h0xtakxljdrlm5xkubcl",
    category: "Супермаркет",
    //
    ratingScore: "94%",
    ratingVotes: 129,
  },
  {
    name: "AТВ / AТБ",
    src: "https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/h0xtakxljdrlm5xkubcl",
    category: "Супермаркет",
    //
    ratingScore: "94%",
    ratingVotes: 129,
  },
];
