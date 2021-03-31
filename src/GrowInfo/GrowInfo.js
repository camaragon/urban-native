import React from 'react';
import './GrowInfo.css';
import { Link } from 'react-router-dom';

function GrowInfo() {

  return (
    <section className="grow-info">
      <h1 className='grow-info-heading'>Gardening on the Front Range</h1>
      <p className='colorado-grow-info'>
        Gardening in Colorado can be challenging. The average elevation of the state is 6,800 feet above sea-level. Three-fourths of the nation’s land above 10,000 feet is within its borders. Due to the high elevation, sunlight is frequently of high intensity and the humidity generally is low. These features, along with rapid and extreme weather changes and frequently poor soil conditions, make for challenges in growing plants.
        <br/><br/>
        Low humidity, fluctuating temperatures, alkaline clay soils and drying winds often restrict plant growth more than low temperatures.
        Selecting plants that tolerate our soil and climatic conditions is key to Colorado gardening.
        Colorado grows excellent flowers, vegetables and lawns.
        Gardeners who are patient, know how to select plants that will do well, and manipulate the soil and microclimate will be amply rewarded.
        <br/><br/>
        <section className='link-container'>
          <a className='grow-info-link' href="https://extension.colostate.edu/topic-areas/yard-garden/colorado-gardening-challenge-to-newcomers-7-220/" target="_blank" rel="noreferrer">More Info Here</a>
        </section>
      </p>
      <Link to={`/`}>
        <div className='button-container'>
          <button className="back-button">Back</button>
        </div>
      </Link>
    </section>

  )
}

export default GrowInfo;
