import { FC } from "react";
import style from "./StoreFAQ.module.scss";
import { IFAQQquestion } from "../../../types/IFAQQquestion";
import { STORE_FAQ_TEMPLATE } from "./storeFAQ.data";

interface StoreFAQItemProps {
  question: IFAQQquestion;
}

const StoreFAQItem: FC<StoreFAQItemProps> = ({ question: { text, title } }) => {
  return (
    <li className={style["store-faq-item"]}>
      <h4 className={`${style["store-faq-item__title"]} ${style["title"]}`}>
        {title}
      </h4>
      <p className={style["store-faq-item__text"]}>{text}</p>
    </li>
  );
};

interface StoreFAQProps {
  questionsList: IFAQQquestion[];
}

const StoreFAQ: FC<StoreFAQProps> = ({ questionsList }) => {
  return (
    <section className={style["store-faq"]}>
      {/*Add background*/}
      <div className={style["store-faq__container"]}>
        <div className={style["store-faq__title__wrapper"]}>
          {/*Icon*/}
          <img
            src={STORE_FAQ_TEMPLATE.iconSrc}
            className={style["store-faq__title__icon"]}
          />
          <h2 className={style["store-faq__title"]}>
            {STORE_FAQ_TEMPLATE.title}
          </h2>
        </div>
        <ul className={style["store-faq__list"]}>
          {questionsList.map((question) => (
            <StoreFAQItem question={question} key={question.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StoreFAQ;
