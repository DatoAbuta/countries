import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './countries.css'

export default function Country({ data }: any) {
  const location = useLocation();
  const cleanPathname = location.pathname.substring(1);

  const [lela, setLela] = useState<any>(null); 
  const navigation = useNavigate(); 

  useEffect(() => {
    const newdata = data.find((el: any) => el.alpha3Code === cleanPathname);
    setLela(newdata);
  }, [cleanPathname, data]); 

  if (!lela) {
    return null;
  }

  console.log(lela)

  return (
    <div>
      <button className="simon"
        onClick={() => {
          navigation('/');
        }}
      >
        Back
      </button>
      <div className="mtliani">
      <div className="shmadi">
        <img className="img" src={lela?.flags.svg} alt="" />
      </div>

      <div className="dedaflex">
        <div className="resp1">
        <div className="resp">
        
      <h1 className="baro">{lela?.name}</h1>

      <div className="qvemot">
        <h1>Native Name: {lela?.nativeName}</h1>
        <h1>Population: {lela?.population}</h1>
        <h1>Region: {lela?.region}</h1>
        <h1>Sub Region: {lela?.subregion}</h1>
        <h1>Capital: {lela?.capital}</h1>
      </div></div>
      <div className="qvemot2">
        <h1>Top Level Domain: {lela?.topLevelDomain}</h1>
        <h1>Currencies: {lela?.currencies[0].name}</h1>
        <h1>Languages: {lela?.languages[0].name}</h1>
      </div></div>
        <div className="borderrrr">
      <h1 className="mamaflex">Border Countries:</h1>

      <div className="buttons">
        <button className="borders ha">{lela?.borders[0]}</button>
        <button className="borders ha">{lela?.borders[1]}</button>
        <button className="borders">{lela?.borders[2]}</button></div>
      </div>
      </div>

      </div>
    </div>
  );
}
