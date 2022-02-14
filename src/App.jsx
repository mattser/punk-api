import React, {useEffect,useState} from 'react';
import './App.scss';
import Navbar from './containers/NavBar/Navbar';
import Main from './containers/Main/Main';

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
    setBeers([...masterList]);
  }

  useEffect( () => (!beersMaster) ? getMasterList() : getBeers(), [searchParams]);

  const getBeers = () => {

    let beerList = [...beersMaster]
    beerList = beerList.filter(beer => beer.name.toLowerCase().includes(searchParams.name)
      && beer.abv > searchParams.abv 
      && beer.first_brewed.slice(-4) < searchParams.year
      && beer.ph < searchParams.maxPh);
    setBeers(beerList);
  };

  const handleInput = (event) => {
    const tempParams = {...searchParams};
    if (event.target.id==="name") {
      tempParams.name = event.target.value.toLowerCase();
    } else if (event.target.id==="abv") {
      tempParams.abv = event.target.value;
    } else if (event.target.id==="year") {
      tempParams.year = event.target.value;
    } else if (event.target.id==="down" && searchParams.page > 1) {
      tempParams.page--;
    } else if (event.target.id==="up") {
      tempParams.page++;
    } else if (event.target.id==="maxph") {
      tempParams.maxPh = event.target.value;
    }
    setSearchParams(tempParams);
  }

  return (
    <div className="App">
      <Navbar handleInput={handleInput} abv={searchParams.abv} year={searchParams.year} maxPh={searchParams.maxPh} />
      {beers && <Main beers={beers} handleInput={handleInput} page={searchParams.page} maxPh={searchParams.maxPh} />}
    </div>
  );
}

export default App