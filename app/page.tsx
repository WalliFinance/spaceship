import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <article className={styles.firstColumn}>
          <p>So, you want to travel to</p>
          <h1>Space</h1>
          <span>Let’s face it if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
        </article>
        <article className={styles.secondColumn}>
          <p>Explore</p>
        </article>
      </section>
    </main>
  );
}
