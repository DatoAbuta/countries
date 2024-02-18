import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './countries.css'

export default function Country({ data, setRefresh }: any) {

  const location = useLocation();

  const cleanPathname = location.pathname.substring(1);

  const [lela, setLela] = useState<any>(null); 

  const navigation = useNavigate(); 

  useEffect(() => {
    const newdata = data.find((el: any) => el.alpha3Code === cleanPathname);
    setLela(newdata);
  }, [cleanPathname, data]); 

  console.log(lela)

  return (
    <div>
      <button className="simon"
        onClick={() => {
          setRefresh((prev:boolean) => !prev)
          navigation('/');
        }}
      >
        Back
      </button>
      <div className="mtliani">
      <div className="shmadi">
        <img className="img" src={lela?.flags.svg ? lela?.flags.svg : null} alt="" />
      </div>

      <div className="dedaflex">
        <div className="resp1">
        <div className="resp">
        
      <h1 className="baro">{lela?.name ? lela?.name : `Not Found`}</h1>

      <div className="qvemot">
        <h1>Native Name: {lela?.nativeName ? lela?.nativeName : `Not Found`}</h1>
        <h1>Population: {lela?.population ? lela?.population : `Not Found`}</h1>
        <h1>Region: {lela?.region ? lela?.region : `Not Found`}</h1>
        <h1>Sub Region: {lela?.subregion ? lela?.subregion : `Not Found`}</h1>
        <h1>Capital: {lela?.capital ? lela?.capital : `Not Found`}</h1>
      </div></div>
      <div className="qvemot2">
        <h1>Top Level Domain: {lela?.topLevelDomain ? lela?.topLevelDomain : `Not Found`}</h1>
        <h1>Currencies: {lela?.currencies[0].name ? lela?.currencies[0].name : `Not Found`}</h1>
        <h1>Languages: {lela?.languages[0].name ? lela?.languages[0].name : `Not Found`}</h1>
      </div>
      
      </div>

      <div className="borderrrr">

      <h1 className="mamaflex">Border Countries:</h1>

      <div className="buttons">
        <button className="borders ha">{lela?.borders ? lela?.borders[0] : <h1>Not Found</h1>}</button>
        <button className="borders ha">{lela?.borders ? lela?.borders[1] : <h1>Not Found</h1>}</button>
        <button className="borders">{lela?.borders ? lela?.borders[2] : <h1>Not Found</h1>}</button>
        
      </div>

      </div>

      </div>

      </div>
    </div>
  );
}
