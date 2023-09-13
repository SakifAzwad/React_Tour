/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    let [cc,setcc]=useState([]);

    let [viscon,setviscon]=useState([]);
    let [flags1,setflags]=useState([]);

    let clicked=country=>
    {
        let new2=[...viscon,country];
        setviscon(new2);
    }

    let clicked2=flag=>
    {
        setflags([...flags1,flag]);
    }

    useEffect(()=>
    {
        fetch('https://restcountries.com/v3.1/all')
        .then(aa=>aa.json())
        .then(data=>setcc(data))
    },[])
    return (
        <div>
            <h3>Countries : {cc.length}</h3>
            <div className="flag3">
                {
                    flags1.map((pp,idx)=><img key={idx} src={pp}></img>)
                }
            </div>
            <div>
                <h2>Visited Countries : {viscon.length}</h2>
                <ul>
                    {viscon.map(pp=><li key={pp.cca3}>{pp.name.common}</li>)}
                </ul>
            </div>
           <div className="aa1">
            {
                    cc.map(xx=><Country key={xx.cca3} tt={clicked2} rr={clicked} cc={xx}></Country>)
                }
           </div>
        </div>
    );
};

export default Countries;