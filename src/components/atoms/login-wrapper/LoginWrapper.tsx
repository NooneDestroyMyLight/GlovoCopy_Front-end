import { FC } from "react";
import { motion } from "framer-motion";
import style from "./LoginWrapper.module.scss";
//
import MWLogin, { MWLoginI } from "../../organisms/mw-organism/login/MWLogin";

const initial = {
  open: { y: 0 },
  closed: { y: "100%" },
};

const LoginWrapper: FC<MWLoginI> = ({
  /*className*/
  onIconClick,
  isOpen,
}) => {
  return (
    <>
      <motion.div
        className={style["mw-login--mobile"]}
        variants={initial}
        //drag
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={onIconClick}
        initial="closed"
        exit="closed"
        //
        animate={"open"}
        transition={{ duration: 0.25 }}
      >
        <MWLogin onIconClick={onIconClick} isOpen={isOpen} />
      </motion.div>
      <div className={style["mw-login--desktop"]}>
        <MWLogin onIconClick={onIconClick} isOpen={isOpen} />
      </div>
    </>
  );
};

export default LoginWrapper;
