import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

function Toolbar() {
  const router = useRouter();
  return (
    <div className="page-container">
      <div className={styles.main}>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/feed/1")}>Feed</div>
        <div onClick={() => router.push("/eom")}>About</div>
        <div
          onClick={() =>
            (window.location.href = "https://twitter.com/Shubham97249069")
          }
        >
          Twitter
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
