import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'

//icons
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code With Wamzy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={styles.container}>
          <main className={styles.main}>
              <div className={styles.mainDiv}>
                  <h1 className={styles.title}>
                      Hi{' '}
                      <Link href="/posts/about">
                          <a>I'm Wamzy</a>
                      </Link>
                  </h1>

                  <p className={styles.description}>
                      A passionate Front-End Developer{' '}
                  </p>

                  <p className={styles.descriptionText}>
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.
                  </p>

                  {/*social media links*/}
                  <div className={styles.socials}>
                      <a className={styles.socialLink} href="https://www.linkedin.com/in/joseph-mutua-123245137/" target="_blank">
                          <AiFillLinkedin className={styles.social} />
                      </a>

                      <a className={styles.socialLink} href="https://github.com/mutuajoseph/" target="_blank">
                          <AiFillGithub  className={styles.social} style={{marginLeft: '1.2rem'}}/>
                      </a>

                      <a className={styles.socialLink} href="https://twitter.com/_JWMutua" target="_blank">
                          <IoLogoTwitter className={styles.social} style={{marginLeft: '1.2rem'}}/>
                      </a>


                  </div>
              </div>
              <div>
                  <Image
                      className={styles.headimage}
                      src="/images/me.jpg"
                      height={380} // Desired size with correct aspect ratio
                      width={540} // Desired size with correct aspect ratio
                      alt="Your Name"
                  />
              </div>
          </main>
          {/* <section className={styles.projects}>
              <h2 className={styles.headerText}>My Projects</h2>
              <div className={styles.cards}>
                  <div>
                      <Image
                          src="/images/coolSpaces.jpg"
                          className={styles.image}
                          width={350}
                          height={240}
                          alt="coolSpaces"
                      />
                      <h4 className={styles.cardHeaderText}>Cool Spaces</h4>
                  </div>
                  <div>
                      <Image
                          src="/images/financeMe.jpg"
                          className={styles.image}
                          width={350}
                          height={240}
                          alt="coolSpaces"
                      />
                      <h4 className={styles.cardHeaderText}>FinanceMe</h4>
                  </div>
                  <div>
                      <Image
                          src="/images/MySpa.jpg"
                          className={styles.image}
                          width={350}
                          height={240}
                          alt="coolSpaces"
                      />
                      <h4 className={styles.cardHeaderText}>MySpa</h4>
                  </div>
              </div>
          </section> */}
      </div>

          {/*About me */}
        <div className={styles.container}>
          <section className={styles.about}>
              <div>
                  <Image
                      src="/images/about.jpeg"
                      height={500} // Desired size with correct aspect ratio
                      width={400} // Desired size with correct aspect ratio
                      alt="Your Name"
                  />
              </div>
              <div>
                  <h2 className={styles.aboutText}>About Me</h2>
                  <p className={styles.text}>
                      Hello! My name is Joseph Wambua, I'm a Web Developer and I <br/>
                      specialize in React and HTML & CSS. I care deeply about building <br/>
                      interfaces that are accessible and enjoyable for everyone to use. <br/>
                      I love that there is always new things to learn and new problems to solve. <br/>
                      My favorite technology to work with right now is Typescript.
                  </p>

                  <p className={styles.text}>Here are a few technologies I've been working with recently:</p>
                  <div className={styles.lang}>
                      <div>
                          <ul>
                              <li className={styles.listItem}>React</li>
                              <li className={styles.listItem}>Redux</li>
                              <li className={styles.listItem}>MongoDB</li>
                          </ul>
                      </div>
                      <div>
                          <ul>
                              <li className={styles.listItem}>Python</li>
                              <li className={styles.listItem}>HTML&CSS</li>
                              <li className={styles.listItem}>PostgreSQL</li>
                          </ul>
                      </div>
                      <div>
                          <ul>
                              <li className={styles.listItem}>Javascript</li>
                              <li className={styles.listItem}></li>
                              <li className={styles.listItem}></li>
                          </ul>
                      </div>
                  </div>
              </div>

          </section>
        </div>

          <footer className={styles.footer}>
              <div className={styles.container}>
                  <div className={styles.links}>
                      <a
                          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          JW
                      </a>
                      <div style={{display: 'flex'}}>
                          <a className={styles.socialLink} href="https://www.linkedin.com/in/joseph-mutua-123245137/" target="_blank">
                              <AiFillLinkedin className={styles.social} />
                          </a>

                          <a className={styles.socialLink} href="https://github.com/mutuajoseph/" target="_blank">
                              <AiFillGithub  className={styles.social} style={{marginLeft: '1rem'}}/>
                          </a>

                          <a className={styles.socialLink} href="https://twitter.com/_JWMutua" target="_blank">
                              <IoLogoTwitter className={styles.social} style={{marginLeft: '1rem'}}/>
                          </a>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  )
}
