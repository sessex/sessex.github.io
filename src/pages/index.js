import React from "react"
import starter from '../images/starter-pack.svg'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import flowers from "../images/flowers-about.svg"
import scribble from "../images/scribble.svg"
import emoji from "../images/flowers-emoji.svg"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Sydney Essex" />
    <div className='content' style={{ margin: 'auto', padding: '100px 0', width: '95%'}}>
      <img src={starter} />
      <div style={{ width: '70%', margin: 'auto', textAlign: 'left'}}>
          <h2 className='Index-subtitle'>-recent grad from the university of pennsylvania</h2>
          <h2 className='Index-subtitle'>-studied computer science and fine arts</h2>
          <h2 className='Index-subtitle'>-lover of glitter</h2>
      </div>
    </div>

    <div className='design' 
      style={{ 
        zIndex: '-3' }} >
        <div 
        style={{
        position: 'fixed',
        bottom: -150, 
        left: -200,
        mixBlendMode: 'multiply' }}>
          <img src={scribble} />
        </div>
        <div 
        style={{
        zIndex: '-1',
        position: 'fixed',
        top: -500, 
        left: 200,
        transform: 'rotate(-80deg)',
        mixBlendMode: 'multiply' }}>
          <img src={scribble} />
        </div>
        <div 
        style={{
        position: 'fixed',
        top: -100, 
        right: -100,
        mixBlendMode: 'difference' }}>
          <img src={flowers} height='50%'/>
        </div>
        <div 
        style={{
        position: 'fixed',
        top: -100, 
        left: -100,
        mixBlendMode: 'difference' }}>
          <img src={flowers} height='50%'/>
        </div>
        <div 
        style={{
        position: 'fixed',
        bottom: -200, 
        right: 100,
        mixBlendMode: 'multiply' }}>
          <img src={flowers} />
        </div>
        
        <div 
        style={{
        position: 'fixed',
        top: -350, 
        right: 200,
        mixBlendMode: 'multiply' }}>
          <img src={emoji} />
        </div>
        
    </div>
  </Layout>
)

export default IndexPage
