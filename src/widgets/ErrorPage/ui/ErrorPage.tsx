import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <h1 className={styles.errorPage}>
      Что-то пошло не так, перезагрузите страницу
    </h1>
  );
};
