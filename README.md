# Urban Native

![Home Page](https://i.imgur.com/YNnNZ8P.png)


<!-- TABLE OF CONTENTS -->

## Table of Contents
* [Repo Links](#repo-links)
* [About the Project](#about-the-project)
* [Lanugages Used](#languages-used)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- REPO LINKS -->
## Repo Links

Front End Repo Link: [https://github.com/mattdeann/urban-native](https://github.com/mattdeann/urban-native)

Back End Repo Link: [https://github.com/Codeherder19/Urban-Native-API](https://github.com/Codeherder19/Urban-Native-API)


<!-- ABOUT THE PROJECT -->
## About The Project

Urban Native is designed to help gardeners in urban settings (specifically Denver) plan their garden around what foods can be grown in their city's climate. The project utilizes a PERN stack (PostgreSQL, Express, React, Node) to store user garden information remotely. This allows users to leave the website and have the state of their garden maintained continously. Urban Native demonstrates CRUD by updating the PostgreSQL database upon user interaction. Users can exploit this by adding and deleting crops from their garden.

### Languages Used

* HTML
* CSS
* React.js
* Cypress (testing)
* Webpack (compiling)
* Express.js
* Knex
* PostgreSQL
* Node.js


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
* npm
```sh
npm install npm@latest -g
```
* Some browser

### Installation

1. Clone the two repos as siblings inside of a directory
```sh
git clone https://github.com/mattdeann/urban-native.git
git clone https://github.com/Codeherder19/Urban-Native-API.git
```

2. Open repos in seperate tabs
```sh
cd urban-native
cmd + t
cd ..
cd Urban-Native-API
```

3. Install NPM packages in both repos
```sh
npm install
```
4. Start the app

urban-native
```sh
npm start
```

Urban-Native-API
```sh
node server.js
```

4. In a browser tab, open the app
```sh
http://localhost:3000/
```

5. API endpoint examples

Return all crops as an array of objects
```
http://localhost:3001/api/v1/crops
```

Return a specific user by ID
```
http://localhost:3000/api/v1/users/:id
```


<!-- USAGE EXAMPLES -->
## Usage

### View all crops
  
  * The home page contains all crops able to be grown in the Denver area.
  ![All Crops](https://i.imgur.com/nJ7wLI7.png)


  

### Add a crop to My Garden
  * Inside of All Crops, users can click a + to add that crop to their garden both locally and on the database.
  ![Add to My Garden](https://i.imgur.com/0q3SvQZ.gif)


### Remove a crop from My Garden
  * Inside of My Garden, users can click an X to delete that crop from their garden both locally and on the database.
  ![Remove from My Garden](https://i.imgur.com/YrgVQlO.gif)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mattdeann/urban-native/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature-amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature-amazing-feature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Brian Forbes
[Email](brianandrewf81@gmail.com)
[GitHub](https://github.com/Codeherder10)


Cameron Aragon
[Email](caragon4695@gmail.com)
[GitHub](https://github.com/camaragon)

Matthew Dean
[Email](deanma95@gmail.com)
[GitHub](https://github.com/mattdeann)
