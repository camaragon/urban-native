import React from 'react';
import './CropDetails.css';
import { Link } from 'react-router-dom';

const CropDetails = ({data, id}) => {
  const thisCrop = data.find(crop => crop.id === parseInt(id))
  if (thisCrop) {
    return (
      <div className="crop-details-container">
        <img alt="crop" className="crop-details-image" src={thisCrop.photo_links[0]} />
        <h1 className="crop-details-name">{thisCrop.name}</h1>
        <p className="crop-details-description" >Description: {thisCrop.description}</p>
        <p className="crop-sun-requirements">Sun Requirement: {thisCrop.sun_reqs}</p>
        <p className="sowing-method">Sowing Method: {thisCrop.sowing_method}</p>
        <p className="crop-spread">Spread: {thisCrop.spread}cm</p>
        <p className="row-spacing">Row Spacing: {thisCrop.row_spacing}cm</p>
        <p className="crop-height">Height: {thisCrop.height}cm</p>
        <p className="maturity">Days To Maturity: {thisCrop.days_to_maturity}</p>
        <Link to={`/`} id={id}>
          <div className='button-container'>
            <button className="back-button">Back</button>
          </div>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default CropDetails;
