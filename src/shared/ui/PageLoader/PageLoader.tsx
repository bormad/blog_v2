import styles from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <span className={styles.loader}></span>
    </div>
  );
};
