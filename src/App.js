import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./components/api";
import Case from "./components/Case";
import Charts from "./components/Charts";
import Country from "./components/Country";

function App() {
  const [countries, setCountry] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState('');
  const [report,setReport] = useState([]);
  useEffect(()=>{
    getCountries()
      .then((res)=>{
        setCountry(res.data)
        console.log(res.data)
        setSelectedCountryID('vn')
      })
  }, [])
  const handleOnChange=(e)=>{
    setSelectedCountryID(e.target.value);
  };
  useEffect(() => {
    if(selectedCountryID){
      const { Slug } = countries.find(
        (value) => value.ISO2.toLowerCase() === selectedCountryID
        );
      getReportByCountry(Slug)
        .then((res)=>{
          res.data.pop();
          setReport(res.data)
        })
    }
  }, [countries,selectedCountryID])
  return (
    <>
     <Country countries={countries} handleOnChange={handleOnChange} value={selectedCountryID}/>
     <Case report={report}/>
     <Charts report={report}/>
    </>
  );
}

export default App;
