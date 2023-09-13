import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({cc,rr,tt}) => {
    let {name,flags,population,area,cca3}=cc;
    
    let [vis,setvis]=useState(false);

    let click =()=>
    {
        setvis(!vis);
    }
    //console.log(rr);
    return (
        <div className={`country ${vis ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:vis ? 'purple' : 'white'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=>tt(cc.flags.png)}>Add Flag</button>
            <br />
            <button onClick={()=>rr(cc)}>Mark</button>
            <br />
            <button onClick={click}>{vis ? 'Visited' : 'Going'}</button>
            {vis ? " I have visited" : " I want to visit"}
            <hr />
            <CountryDetail cc={cc} rr={rr} tt={tt}></CountryDetail>
        </div>
    );
};

export default Country;