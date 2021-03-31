import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import MyGarden from './MyGarden/MyGarden';
import AllCrops from './AllCrops/AllCrops';
import CropDetails from './CropDetails/CropDetails';
import { Route, Switch } from 'react-router-dom';
import GrowInfo from './GrowInfo/GrowInfo';
import {getCrops, getUser, updateGarden} from './fetchRequests';

function App() {
  const [crops, setCrops] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    getCrops()
    .then(result => {
      setCrops(result)
    })
    getUser(1)
    .then(result => {
      setUser(result)
    })
  }, [user])

  const toggleFavorite = (id) => {
    if (user.my_garden.includes(id)) {
      const index = user.my_garden.indexOf(id)

      const gardenCopy = user.my_garden
      gardenCopy.splice(index, 1)

    } else {
      const gardenCopy = user.my_garden
      gardenCopy.push(id)
    }
    updateGarden(user.id, user.my_garden)
  }

  return (
    <>
      <Header user={user} />
      <Switch>
          <Route exact path="/" render={() => {
          return (
          <>
            <MyGarden data={crops} user={user} toggleFavorite={toggleFavorite} />
            <AllCrops data={crops} user={user} toggleFavorite={toggleFavorite} />
          </>
          )
        }}/>
        <Route path="/info" render={ () => <GrowInfo />} />
        <Route path="/:id" render={({match}) => <CropDetails data={crops} id={match.params.id}/>} />
      </Switch>
    </>
  );
}

export default App;
