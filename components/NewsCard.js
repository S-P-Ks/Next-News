import styles from "../styles/newscard.module.css";
import Image from "next/image";

export default function NewsCard({
  description,
  title,
  url,
  content,
  author,
  urlToImage,
}) {
  return (
    <div
      className={styles.main}
      onClick={() => window.open(url)}
      alt={description}
    >
      <img className={styles.img} src={urlToImage}></img>
      <div>{content}</div>
    </div>
  );
}
