import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Item from "../components/item"

import flowers from "../images/flowers-works.svg"

const WorksPage = () => (
  <Layout>
    <SEO title="WORK$" />
    <div className='content'>
    <Item title="Artswrk" keywords="ui/ux, web development" to='/artswrk'/>
    <Item title="NYC Subway Ridership Patterns Tracking COVID-19 Progression"
             keywords="interactive map data visualization" 
             to='/subway-covid'/>
    <Item title="ai+art"
              keywords="deep learning data visualization"
              to='/ai-art' />
    <Item title="CryptoRich"
              keywords="branding, web development"
              to='/cryptorich' />
    </div>
    <div className='design' 
      style={{ 
        position: 'fixed', 
        zIndex: '1', 
        bottom: -200, 
        left: 0,
        mixBlendMode: 'multiply' }}>
      <img src={flowers} />
    </div>
  </Layout>
)

export default WorksPage