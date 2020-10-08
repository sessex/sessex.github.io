import React from "react"
import screenshot from '../images/subway.png'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/layout-project"

const CryptorichPage = () => (
  <Layout>
    <SEO title="CryptoRich" />
    <Project
      title="CryptoRich"
      keywords="Branding, Web Development"
      skills="HTML/CSS, JavaScript, Video Editing, Illustrator, InDesign" >
        <div className='Project-body'>
        'Crypto Rich' by Christine Wang was an art exhibit displayed in Berlin during Fall 2018. It is a series of 8 humorous paintings commenting on cryptocurrency. My goal was to recreate the promotional materials to market the exhibit. I began by designing a cohesive brand identity, which became the basis for the exhibit's poster, promo video, publication, and website.
        </div>
        <img src={screenshot} />
        <div className='Project-body'>
          <h4>Brand Identity</h4>
          I drew inspiration from the magazine covers of Bloomberg Businessweek, which has a similar goal of mixing humor with current events and generally, exudes an "in-your-face" type of energy. I wanted the typography and color scheme to highlight the catchiness of the artwork titles (i.e. Bitcoin Princess, Tron, Vitalik Jesus) and reflect the flashy nature of internet trends. As a guideline, unless an animated component, should be simple, bright, bold. For the animated components, I also played with an overarching theme of digital clutter, incorporating weird crypto meme gifs. 
        </div>
        <img src={screenshot} />
        
        <div className='Project-body'>
          <h4>Promotional Video</h4>
          The goal of the promo video was to resemble a quick flashy trailer. It incorporates crypto gifs and large bold names of artwork/exhibit titles. From here, the title screen caps became a recurring element throughout the rest of the materials.
        </div>
        <img src={screenshot} />

        <div className='Project-body'>
          <h4>Exhibit Poster</h4>
          I decided to use the poster as an opportunity to incorporate the actual artworks into the promotional material. The posters are different combinations of the bright, bold exhibit/artwork titles, "bitcoin face", and exhibit artworks. The posters could be displayed in various sets of three to feature a holistic view of the exhibit.
        </div>
        <img src={screenshot} />

        <div className='Project-body'>
          <h4>Exhibit Publication</h4>
          <i>"Unfortunately, Crypto Rich is filled with jokes that have to be explained"</i> -Christine Wang<br />
          The publication gives a chance to read the artists thoughts and explain the jokes behind each painting. It is a 4x6 booklet with artist forward and table of contents. For each artwork, there is a full page for the detail image, full page for title, and unfolding page to display artist's description on respective work.
        </div>
        <img src={screenshot} />

        <div className='Project-body'>
          <h4>Exhibit Site</h4>
          I built a web application with HTML/CSS and JavaScript, focused on creating a fun user experience. As a spin-off on the video and due to the relevance of the internet to the content of the exhibit, the website maximized the concept of digital clutter through chaotic mouse interactivity and frenzy of gifs. Users can view each work as bitcoins and artwork related emojis fly across the screen. 
        </div>
        <img src={screenshot} />
      </Project>
  </Layout>
)

export default CryptorichPage
