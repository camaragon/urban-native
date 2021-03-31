const getCrops = () => {
  return fetch("https://urban-native-api.herokuapp.com/api/v1/crops")
  .then(response => {
    return response.json();
  })
  .then(data => data)
}

const getUser = id => {
  return fetch(`https://urban-native-api.herokuapp.com/api/v1/users/${id}`)
    .then(response => response.json())
    .then(data => data)
}

const updateGarden = (id, arr) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({"my_garden":arr});
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  return fetch(`https://urban-native-api.herokuapp.com/api/v1/users/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    // .catch(error => console.log('error', error));

}

export {getCrops, getUser, updateGarden}