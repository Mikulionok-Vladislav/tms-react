import styles from "./index.module.css";

interface IProps {
  image?: string;
  text: string;
  date: string;
  title: string;
}

export const Post = ({ image, text, date, title }: IProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};
