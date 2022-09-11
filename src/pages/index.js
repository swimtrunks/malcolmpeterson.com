import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import GHIcon from "../icons/github.inline.svg"
import LFMIcon from "../icons/lastfm.inline.svg"
import LIIcon from "../icons/linkedin.inline.svg"
import MDIcon from "../icons/medium.inline.svg"
import TWIcon from "../icons/twitter.inline.svg"

// const PageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

const socialLinks = [
  {
    icon: <GHIcon />,
    text: "Github",
    url: "https://github.com/swimtrunks",
    description: "I host just about every project on my GitHub profile no matter how small. Feel free to take a look around and break something (after you fork it.)"
  },
  {
    icon: <MDIcon />,
    text: "Medium",
    url: "https://www.medium.com",
    description: "I recently started writing more and I have hosted a few of my posts over here at Medium."
  },
  {
    icon: <LIIcon />,
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/malcolm-peterson-811227141/",
    description: "Join my Network. Feel free to reach out and connect. "
  },
  {
    icon: <LFMIcon />,
    text: "LastFM",
    url: "https://www.last.fm/user/hiMalcolm",
    description: "I listen to a lot of music and I love to have credit across platforms for my 'hard work'. Follow me on last.fm and judge my music taste."
  },
  {
    icon: <TWIcon />,
    text: "Twitter",
    url: "https://www.twitter.com/malcolmpetersn",
    description: "I tend to not tweet very often, but I do check in with my timeline more than I would like to admit."
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/mypic.jpg"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)`, borderRadius: `50%` }}
      />
      <h1>
        Malcolm Peterson
      </h1>
      <div style={{ color: "grey" }}>
        Associate Engineer @Postlight <br />
        <div style={{ gap: "1rem", paddingTop: "10px", borderRadius: "2%", display: "flex", justifyContent: "center" }} >
          {socialLinks.map(link => (
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              <div style={{ fill: "rgb(82 150 170)" }}>{link.icon}</div>
            </a>
          ))}
        </div>
      </div>
      <>.............</>
      <br />
      <div className={styles.intro}>
        <>
          I am a self-taught software engineer currently building cool things for the web at <a href="https://www.postlight.com">Postlight</a>.<br />
          Music hoarder, fledgling writer, hobbyist photographer, design / architecture enthusiast and video game encyclopedia.
        </>
        <br />
        <br />
      </div>
    </div>
    <div style={{ borderRadius: "4px", marginTop: "1rem", padding: "30px", backgroundColor: "rgb(82, 150, 170)" }}>
      <div style={{ color: "white", fontWeight: "medium" }}><b>I also write a little newsletter</b> about stuff once a month. If you are curious try it out and subscribe here:</div>
      <form action="https://www.getrevue.co/profile/malcolmpetersn/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
        <div className="revue-form-group">
          <input style={{ width: '75%', border: 'none', background: 'white', padding: "8px 10px", borderRadius: "5px", margin: "8px 8px 8px 0px" }} className="revue-form-field" placeholder="ex. yourname@somewhere.com" type="email" name="member[email]" id="member_email" />
          <input style={{ border: 'none', background: 'white', padding: "8px 30px", borderRadius: "5px", color: "black" }} type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
        </div>
      </form>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
