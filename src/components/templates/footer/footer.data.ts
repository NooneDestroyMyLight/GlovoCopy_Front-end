interface FooterDataI {
  topics: { title: string; list: { name: string; link: string }[] }[];
  populars: { countryName: string; list: { name: string; link: string }[] }[];
  termsOfServices: string[];
}

export const FOOTER_DATA: FooterDataI = {
  topics: [
    {
      title: "Приєднуйтеся до нас",
      list: [
        { name: "Вакансії", link: "" },
        { name: "Glovo для партнерів", link: "" },
        { name: "Кур'єри", link: "" },
        { name: "Glovo Business", link: "" },
      ],
    },
    {
      title: "Корисні посилання",
      list: [
        { name: "Про нас", link: "" },
        { name: "Часті запитання", link: "" },
        { name: "Блог", link: "" },
        { name: "Зв'язатися з нами", link: "" },
        { name: "Безпека", link: "" },
      ],
    },
    {
      title: "Ми у соціальних мережах",
      list: [
        { name: "Facebook", link: "" },
        { name: "Twitter", link: "" },
        { name: "Instagram", link: "" },
      ],
    },
  ],
  populars: [
    {
      countryName: "Назва країни",
      list: [
        { name: "KFC", link: "" },
        { name: "McDonald's", link: "" },
        { name: "Puzata Hata", link: "" },
      ],
    },
    {
      countryName: "Назва країни",
      list: [
        { name: "Міжнародна", link: "" },
        { name: "Міжнародна", link: "" },
        { name: "Міжнародна", link: "" },
      ],
    },
  ],
  termsOfServices: [""],
};
export const FOOTER_FIELD_TEMPLATE = {
  category: "Популярні бренди:", // *country name
  brand: "Популярні категорії:", // *country name
};
