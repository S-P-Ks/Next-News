import NewsCard from "../../components/NewsCard";
import styles from "../../styles/Slug.module.css";
import Toolbar from "../../components/toolbar";
import router, { useRouter } from "next/router";

export default function Feed({ d, pageNumber }) {
  const router = useRouter();

  console.log(d.articles);
  return (
    <div className={styles.main}>
      <Toolbar />
      {d.articles.map((a) => (
        <NewsCard
          key={a.title}
          title={a.title}
          content={a.content}
          description={a.description}
          url={a.url}
          urlToImage={a.urlToImage}
          author={a.author}
        />
      ))}

      <div className={styles.pagination}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`feed/${pageNumber - 1}`)
                .then(() => window.screenTop());
            }
          }}
          className={pageNumber == 1 ? styles.disabled : styles.active}
        >
          Previous Page
        </div>

        <div>{pageNumber}</div>

        <div
          onClick={() => {
            if (pageNumber < 30) {
              router
                .push(`/feed/${parseInt(pageNumber) + 1}`)
                .then(() => window.screenTop);
            }
          }}
          className={pageNumber == 30 ? styles.disabled : styles.active}
        >
          Next Page
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const pageNumber = context.query.slug;

  const Data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const d = await Data.json();

  console.log(d.articles);

  return {
    props: {
      d,
      pageNumber,
    },
  };
}
