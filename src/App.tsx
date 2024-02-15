import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { MainPage } from "./pages/MainPage";
import Country from "./pages/Country";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {

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

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage data={data} originalData={originalData} setData={setData}/>}/>
        <Route path="/:name" element={<Country data={data}/>}/>
      </Routes>

    </>
  );
}

export default App;