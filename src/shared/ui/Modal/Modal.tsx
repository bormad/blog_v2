import type { ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const onClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };
  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className!])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
