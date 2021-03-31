import React from 'react';
import './Crop.css';
import { Link } from 'react-router-dom';

const Crop = ({id, user, name, image, toggleFavorite, inGarden,}) => {
    let toggleText = '';
    if (user && user.my_garden && user.my_garden.includes(id)  && inGarden === false) {
      toggleText = <article onClick={() => toggleFavorite(id)} className="toggle" disabled={true}></article>
    } else if (user && user.my_garden && user.my_garden.includes(id)) {
      toggleText = <article onClick={() => toggleFavorite(id)} className="toggle">x</article>
    } else {
      toggleText = <article onClick={() => toggleFavorite(id)} className="toggle">+</article>
    }

    return (
        <div className='seed-packet'>
          <section className="seed-packet-top">
            <h3>{name}</h3>
            {toggleText}
          </section>
          <Link to={`/${id}`} aria-label={name} data-index-number={id}>
            <img className = "crop-image" src={image} alt={`${name}`} />
          </Link>
          <p className="footnote">© Urban Native</p>
        </div>
    );
}

export default Crop;
