import React from "react"
import screenshot from '../images/subway.png'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/layout-project"

const SubwayCovidPage = () => (
  <Layout>
    <SEO title="Subway x COVID-19" />
    <Project 
        title="NYC Subway Ridership Patterns Tracking COVID-19 Progression"
        keywords="Data Visualization"
        skills="Python + Pandas, JavaScript, Mapbox GL JS"
    >
    <div className='Project-body'>
    "NYC Subway Ridership Patterns Tracking COVID-19 Progression" is a data visualization project that reflects how MTA subway station usage has served as funnel points for massive amounts of NYC subway riders, even at the onset of COVID-19. It analyzes turnstile data provided by the MTA to the public. The project is live here.
    </div>
    <img src={screenshot} />
    <div className='Project-body'>
    The MTA releases turnstile data on a weekly basis for each subway station, detailing the total number of entries and exits for turnstiles within each station by ~~groupings of hours~~. This visualization includes weeks from the beginning of January 2020 to the end of April 2020. The stations can be identified by their unique Unit code, which allowed for cross-matching with a dataset of geographic coordinates. After cleaning, aggregating, and re-formatting the data using Python + Pandas, the final dataset consisted of monthly subway entries for each station with the station's corresponding longitude and latitude. This same process was repeated for daily entries in March, the ___ of the COVID-19 crisis in NYC, to allow for a deeper look at COVID-19 related events. (Attempts to mitigate discrepancies in data...?)
    </div>
    <div className='Project-body'>
    The visualization is made using Mapbox GL JS, "a JavaScript library for interactive, customizable vector maps". Each station is plotted and users can explore the dataset using timeline filters and interacting with the map of NYC. USers can observe the data at a glance, filtering by month, or for a more detailed view, filtering by days in March. The visualization specifically leverages the Mapbox clustering feature, grouping data points based on a maximum radius specification. Depending on zoom level, the clusters sum the number of entries of the stations included within the radius. Users can compare subway usage between different areas of the metropolitan area or zoom in close to observe changes of individual stations. Hovering over a stop's location reveals the station name and its respective subway lines. The higher the number of subway entries, the larger the size of the cluster.
    </div>
    <img src={screenshot} />
    <img src={screenshot} />
    </Project>
  </Layout>
)

export default SubwayCovidPage
