import Tilt from "react-parallax-tilt";

import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Murys FX. - Pedals FX, amplifiers and projects for guitar"
    >
      <div>
        <div
          className={`h-screen flex justify-center items-center ${styles.container}`}
        >
          <div className={`${styles.cards}`}>
            <Tilt>
              <div className={`${styles.card}`}>
                <div className={`${styles.content}`}>
                  <Image
                    src={"./pedal-svg.svg"}
                    width={60}
                    height={60}
                    className="invert"
                  />
                  <h2 className="title">Pedals</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link href={"/"}>Read More</Link>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={`${styles.card}`}>
                <div className={`${styles.content}`}>
                  <Image
                    src={"./amp.svg"}
                    width={60}
                    height={60}
                    className="invert"
                  />
                  <h2>Amplifiers</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link href={"/"}>Read More</Link>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={`${styles.card}`}>
                <div className={`${styles.content}`}>
                  <Image
                    src={"./diy.svg"}
                    width={60}
                    height={60}
                    className="invert"
                  />
                  <h2>DIY projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link href={"/"}>Read More</Link>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </Layout>
  );
}
