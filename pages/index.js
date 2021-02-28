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
              <div style={{width: '500px'}}>
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
                      <AiFillLinkedin className={styles.social} />
                      <AiFillGithub  className={styles.social} style={{marginLeft: '1.2rem'}}/>
                      <IoLogoTwitter className={styles.social} style={{marginLeft: '1.2rem'}}/>
                  </div>
              </div>
              <div>
                  <Image
                      className={styles.headimage}
                      src="/images/me.jpg"
                      height={495} // Desired size with correct aspect ratio
                      width={700} // Desired size with correct aspect ratio
                      alt="Your Name"
                  />
              </div>
          </main>
          <section className={styles.projects}>
              <h2 className={styles.headerText}>My Projects</h2>
              <div className={styles.cards}>
                  <div>
                      <Image
                          src="/images/coolSpaces.jpg"
                          className={styles.image}
                          width={370}
                          height={250}
                          alt="coolSpaces"
                      />
                      <h4 className={styles.cardHeaderText}>Cool Spaces</h4>
                  </div>
                  <div>
                      <Image
                          src="/images/financeMe.jpg"
                          className={styles.image}
                          width={370}
                          height={250}
                          alt="coolSpaces"
                      />
                      <h4 className={styles.cardHeaderText}>FinanceMe</h4>
                  </div>
                  <div>
                      <Image
                          src="/images/MySpa.jpg"
                          className={styles.image}
                          width={370}
                          height={250}
                          alt="coolSpaces"
                      />
                      <h4 className={styles.cardHeaderText}>MySpa</h4>
                  </div>
              </div>
          </section>
      </div>

          {/*About me */}
          <section className={styles.about}>
              <div className={styles.container}>
                <h2 className={styles.aboutText}>About Me</h2>
                  <p style={{fontSize: '1.3rem', textAlign: 'justify'}}>
                      Hello! My name is Joseph Wambua, I'm a Web Developer and I
                      specialize in React and HTML & CSS. I care deeply about building
                      interfaces that are accessible and enjoyable for everyone to use.
                      I love that there is always new things to learn and new problems to solve.
                      My favorite technology to work with right now is Typescript.
                  </p>

                  <p style={{fontSize: '1.3rem', textAlign: 'justify'}}>Here are a few technologies I've been working with recently:</p>
                  <div className={styles.lang}>
                      <div style={{width: '300px'}}>
                        <ul>
                            <li className={styles.listItem}>React</li>
                            <li className={styles.listItem}>Redux</li>
                            <li className={styles.listItem}>MongoDB</li>
                        </ul>
                      </div>
                      <div style={{width: '300px'}}>
                          <ul>
                              <li className={styles.listItem}>Python</li>
                              <li className={styles.listItem}>HTML&CSS</li>
                              <li className={styles.listItem}>PostgreSQL</li>
                          </ul>
                      </div>
                      <div style={{width: '300px'}}>
                          <ul>
                              <li className={styles.listItem}>Javascript</li>
                              <li className={styles.listItem}></li>
                              <li className={styles.listItem}></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
        <div className={styles.container}>
          <footer className={styles.footer}>
              <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Powered by{' '}
                  <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
              </a>
          </footer>
      </div>

    </div>
  )
}
