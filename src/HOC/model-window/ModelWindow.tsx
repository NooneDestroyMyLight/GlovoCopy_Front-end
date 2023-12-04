import { FC, ReactNode, useEffect } from "react";
import style from "./ModelWindow.module.scss";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ReactDOM from "react-dom";

interface ModelWindowProps {
  children: ReactNode;
  isOpen?: boolean;
  toggleMW: () => void;
  position?: string; //children screen position
  //
  customBackdrop?: Variants;
}

let backdrop: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const ModelWindow: FC<ModelWindowProps> = ({
  children,
  isOpen,
  toggleMW,
  position,
  //
  customBackdrop,
}) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("modal-open");
    if (!isOpen) document.body.classList.remove("modal-open");
  }, [isOpen]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          onClick={toggleMW}
          className={`${style.modelWindow} ${style.modelWindow__open}`}
          //
          variants={customBackdrop ? customBackdrop : backdrop}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <li
            onClick={(e): void => e.stopPropagation()}
            className={`${style.modelWindow__content} ${
              !position ? style["mw-position__center"] : position
            }`}
          >
            {children}
          </li>
        </motion.ul>
      )}
    </AnimatePresence>,
    document.getElementById("portal") as HTMLElement
  );
};
export default ModelWindow;
