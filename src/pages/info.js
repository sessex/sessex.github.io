import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./info.css"
import syd from '../images/mask.jpg'
import emoji from '../images/flowers-emoji.svg'

const InfoPage = () => (
  <Layout>
    <SEO title="!NFO" />
    <div className="Info-grid">
      <img src={syd} />
      <p>
        Sydney Essex is a creative technologist and developer from New York City. <br /><br />

        She just graduated from the University of Pennsylvania with a major in Computer Science and a minor in Fine Arts. Currently, she is working as a software engineer for an <a href='https://www.artswrk.com' target="_blank">arts-tech startup</a>. <br /><br />
        She is a maker of things that make others go ah!, HA!!, and huh?? – and is most fulfilled mix-and-matching her skills and interests with different technologies to create digital experiences that spark joy, solve problems, and empower users. She hopes that through constant experimentation, and with art, and a bit of humor, she can better make sense of the world. <br /> <br />

        You can find her producing mini music videos as director, editor, and often dancer, consuming, reflecting on, and cooking up her own versions of internet clutter, and learning new crafts (this week it’s designing t-shirts). <br /><br />

        Say <a href="mailto:sydneyressex@gmail.com">hey</a>, or see what is up @ {' '}
          <a href="https://www.instagram.com/syd_does_the_thing/" target="_blank">Instagram</a>, {' '}
          <a href="https://github.com/sessex" target="_blank">Github</a>, or {' '}
          <a href="https://www.linkedin.com/in/sydneyessex/" target="_blank">LinkedIn</a>.
      </p>
    </div>

    <div style={{ zIndex: 1, position: 'fixed', left: -300, top: -100, mixBlendMode: 'multiply' }}>
      <img src={emoji} />
    </div>
  </Layout>
)

export default InfoPage
