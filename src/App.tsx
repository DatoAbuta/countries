import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom';

function App() {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setData(res.data);
        setOriginalData(res.data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, []);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = originalData.filter((el: any) => el.name.toLowerCase().startsWith(e.target.value));
    setData(filtered);
  };

  const handleRegion = (regioni: any) => {
    const filteredRegion = originalData.filter((el: any) => el.region === regioni);
    setData(filteredRegion);
    setOpened(false);
  };

  return (
    <>
      <Header />
      <div className='smn'>
        <input 
          onChange={handleFilter} 
          type="text" 
          placeholder='Search for a country...' 
        />
      </div>

      <div className='menu'>
        <div onClick={() => setOpened(!opened)} className='brgr'>
          <h1 className='fltr'>Filter by Region</h1>
          <img
            style={{
              transform: `rotate(${opened ? '180deg' : '0deg'})`,
            }}
            src="./arrow.svg" alt="" />
        </div>
        {opened ? (
          <div className='chamonatvali'>
            <h1 onClick={() => handleRegion('Africa')} className='list'>Africa</h1>
            <h1 onClick={() => handleRegion('Americas')} className='list'>America</h1>
            <h1 onClick={() => handleRegion('Asia')} className='list'>Asia</h1>
            <h1 onClick={() => handleRegion('Europe')} className='list'>Europe</h1>
            <h1 onClick={() => handleRegion('Oceania')} className='list'>Oceania</h1>
          </div>
        ) : null}

        {data.map((el: any) => (
        <Link to={`/${el.name}`} key={el.name}>
          <div className='cards'>
            <img src={el.flags.png} alt="" />
            <div className='bottom'>
              <h1 className='name'>{el.name}</h1>
              <h1 className='info'>Population: <span>{el.population}</span></h1>
              <h1 className='info'>Region: <span>{el.region}</span></h1>
              <h1 className='info'>Capital: <span>{el.capital}</span></h1>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
}

export default App;
