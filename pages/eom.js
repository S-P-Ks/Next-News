import Image from "next/image";
import styles from "../styles/EOM.module.css";
import Toolbar from "../components/toolbar";

export default function EOM({ employee }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  console.log(employee.image);
  return (
    <>
      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <h1>I , Myself and me</h1>

          <div className={styles.info}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <Image
              src={employee.image}
              width={400}
              height={400}
              blurDataURL={employee.image}
              placeholder="blur"
            />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    "https://my-json-server.typicode.com/S-P-Ks/Next-News/info"
  );

  const employee = await data.json();

  console.log(employee);

  return {
    props: {
      employee,
    },
  };
}
