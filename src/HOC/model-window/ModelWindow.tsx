import { FC, ReactNode, useEffect } from "react";
import style from "./ModelWindow.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

interface ModelWindowProps {
  children: ReactNode;
  isOpen?: boolean;
  toggleMW: () => void;
}

let backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ModelWindow: FC<ModelWindowProps> = ({ children, isOpen, toggleMW }) => {
  console.log(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else if (!isOpen) {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          onClick={toggleMW}
          className={`${style.modelWindow} ${style.modelWindow__open}`}
          //
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <li
            onClick={(e): void => e.stopPropagation()}
            className={style.modelWindow__content}
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
