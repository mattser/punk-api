import React, {useEffect,useState} from 'react';
import './App.scss';
import Navbar from './containers/NavBar/Navbar';
import Main from './containers/Main/Main';

const App = () => {

  const [searchParams,setSearchParams] = useState({
    page: 1,
    name: "",
    abv: 0,
    year: 2022
  })
  const [beers,setBeers] = useState([]);

  const getBeers = () => {
    fetch(createFetchUrl())
      .then(response => response.json())
      .then(response => setBeers(response));
  }
  useEffect( () => getBeers() ,[]);

  const handleInput = (event) => {
    const tempParams = {...searchParams};
    if (event.target.id==="name") {
      tempParams.name = event.target.value.toLowerCase().split(" ").join("_");
    } else if (event.target.id==="abv") {
      tempParams.abv = event.target.value;
    } else if (event.target.id==="year") {
      tempParams.year = event.target.value;
    } else if (event.target.id==="down" && searchParams.page > 1) {
      tempParams.page--;
    } else if (event.target.id==="up") {
      tempParams.page++;
    }
    setSearchParams(tempParams);
    getBeers();
  }

  const createFetchUrl = () => {
    let url = 'https://api.punkapi.com/v2/beers';

    url += `?page=${searchParams.page}`
    if(searchParams.name) url+= `&beer_name=${searchParams.name}`;
    if(searchParams.abv) url +=`&abv_gt=${searchParams.abv}`;
    if(searchParams.year) url += `&brewed_before=01-${searchParams.year}`
    return url;
  }

  return (
    <div className="App">
      <Navbar handleInput={handleInput} abv={searchParams.abv} year={searchParams.year} />
      <Main beers={beers} handleInput={handleInput} page={searchParams.page}/>
    </div>
  );
}

export default App