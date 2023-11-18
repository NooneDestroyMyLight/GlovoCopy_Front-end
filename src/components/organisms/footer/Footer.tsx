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
      <footer className={style["footer"]}>
        <div
          className={`${style["footer__container"]} ${style["layout-container"]}`}
        >
          {/* Logo*/}
          {FOOTER_DATA.topics.map((item) => (
            <ul className={style["column"]}>
              <li className={style["block-title"]} key={item.title}>
                {item.title}
              </li>
              {item.list.map((inner, index) => (
                <li className={style["block-item"]} key={index}>
                  {inner.name}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <button>{/* Button with dropdown*/}</button>
      </footer>
    </>
  );
};

export default Footer;
