import { classNames } from "../../../shared/lib/classNames/classNames";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;
  return (
    <div className={classNames(styles.notFoundPage, {}, [className!])}>
      Страница не найдена
    </div>
  );
};
