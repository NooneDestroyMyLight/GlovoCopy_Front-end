import { FC, ReactNode } from "react";
import style from "./WrapperMobileMWOverlay.module.scss";
import { motion, useMotionValue } from "framer-motion";
//Style's

const initial = {
  open: { y: 0 },
  closed: { y: "100%" },
};

interface WrapperMobileMWOverlayProps {
  children: ReactNode;
  close: () => void;
  isOpen?: boolean;
}

const WrapperMobileMWOverlay: FC<WrapperMobileMWOverlayProps> = ({
  children,
  close,
  //
}) => {
  const y = useMotionValue(0);

  const onDragEnd = () => {
    if (y.get() >= 60) close?.();
    if (0 >= y.get()) y.jump(0);
  };

  const onDrag = (): void => {
    if (0 > y.get()) y.set(0);
  };

  return (
    <>
      <motion.div
        className={style["wrapper-mw-overlay--mobile"]}
        variants={initial}
        style={{ y }}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragSnapToOrigin={true}
        onDrag={onDrag}
        //
        onDragEnd={onDragEnd}
        //
        initial="closed"
        exit="closed"
        animate="open"
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
      <div className={style["wrapper-mw-overlay--desktop"]}>{children}</div>
    </>
  );
};

export default WrapperMobileMWOverlay;
