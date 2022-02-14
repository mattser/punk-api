import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './containers/NavBar/Navbar';
import Main from './containers/Main/Main';
import About from './containers/About/About';

const App = () => {

  const [searchParams,setSearchParams] = useState({
    page: 1,
    name: "",
    abv: 0,
    year: 2022,
    maxPh: 7
  });

  const [beersMaster,setBeersMaster] = useState(false);
  const [beers,setBeers] = useState(false);

  const getMasterList = async () => {
    const masterList = [];
    for (let i = 1; i <= 5; i++) {
      let tempBeer = await fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=80`)
        .then(response => response.json());

      masterList.push(...tempBeer);
    }
    setBeersMaster([...masterList]);
    setBeers([...masterList].slice(0,25));
  }

  const getBeers = () => {

    let beerList = [...beersMaster]
    beerList = beerList.filter(beer => beer.name.toLowerCase().includes(searchParams.name)
      && beer.abv > searchParams.abv 
      && beer.first_brewed.slice(-4) < searchParams.year
      && beer.ph < searchParams.maxPh);
    setBeers(beerList.slice((searchParams.page-1)*25,(searchParams.page)*25));
  };

  useEffect( () => (!beersMaster) ? getMasterList() : getBeers(), [searchParams]);

  const handleInput = (event) => {
    const tempParams = {...searchParams};
    if (event.target.id==="name") {
      tempParams.name = event.target.value.toLowerCase();
      tempParams.page = 1;
    } else if (event.target.id==="abv") {
      tempParams.abv = event.target.value;
      tempParams.page = 1;
    } else if (event.target.id==="year") {
      tempParams.year = event.target.value;
      tempParams.page = 1;
    } else if (event.target.id==="down" && searchParams.page > 1) {
      tempParams.page--;
    } else if (event.target.id==="up" && !(beers.length < 25)) {
      tempParams.page++;
    } else if (event.target.id==="maxph") {
      tempParams.maxPh = event.target.value;
      tempParams.page = 1;
    }
    setSearchParams(tempParams);
  }

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <Navbar handleInput={handleInput} abv={searchParams.abv} year={searchParams.year} maxPh={searchParams.maxPh} />
          <Main beers={beers} handleInput={handleInput} page={searchParams.page} maxPh={searchParams.maxPh} /> </>}>
        </Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App