import { FC, memo } from "react";
import style from "./Footer.module.scss";
import { FOOTER_DATA } from "./footer.data";

const Footer: FC = () => {
  return (
    <>
      <img
        src="/public/footer-wave-desktop.svg"
        alt=""
        className={style["custom-border"]}
      />
      <footer className={style["footer-content"]}>
        {/* Logo*/}
        {FOOTER_DATA.topics.map((item) => (
          <ul className={style["block"]}>
            <li key={item.title}>{item.title}</li>
            {item.list.map((inner, index) => (
              <li key={index}>{inner.name}</li>
            ))}
          </ul>
        ))}
        <ul className={style["topic-vertical"]}></ul>
        <button>{/* Button with dropdown*/}</button>
      </footer>
    </>
  );
};

export default Footer;
