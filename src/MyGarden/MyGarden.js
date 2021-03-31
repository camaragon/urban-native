import React from 'react';
import './MyGarden.css';
import Crop from '../Crop/Crop';

function MyGarden({data, user, toggleFavorite}) {
  const crops = data;

  const filteredCrops = () => {
    const userCrops = [];
      const currentUser = user;
      if (currentUser.my_garden) {
        currentUser.my_garden.forEach(cropId => {
          userCrops.push(crops.find(crop => {
            return crop.id === cropId
          }))
        })
      }
      return userCrops;
    }

  const currentUserGarden = filteredCrops().map(crop => {
    return (
      crop && <Crop
        id={crop.id}
        user={user}
        name={crop.name}
        image={crop.photo_links[0]}
        key={crop.id}
        toggleFavorite={toggleFavorite}
        inGarden={true}
      />
    )
  })

  return (
    <article className="my-garden">
      <h2 className="my-garden-header">My Garden</h2>
      {currentUserGarden.length > 0 ?
      <section className="my-crops">
        {currentUserGarden}
      </section>
      :
      <section className="no-crops">
        No crops in your garden... Add some!
      </section>
      }
    </article>
  )
}

export default MyGarden;
