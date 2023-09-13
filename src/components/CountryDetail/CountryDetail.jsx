/* eslint-disable no-unused-vars */
import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    let {cc,rr,tt}=props
    return (
        <div>
            <h4>Country Detail : {cc.name.common}</h4>
            <hr />
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetail;