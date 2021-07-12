import { Container, Typography } from "@material-ui/core";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./components/api";
import Case from "./components/Case";
import Charts from "./components/Charts";
import Country from "./components/Country";
import 'moment/locale/vi'
import '@fontsource/roboto'

moment.locale('vi')

function App() {
  const [countries, setCountry] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState('');
  const [report,setReport] = useState([]);
  useEffect(()=>{
    getCountries()
      .then((res)=>{
        const countries = sortBy(res.data, 'Country');
        setCountry(countries);
        setSelectedCountryID('vn');
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
    <Container>
     <Typography variant="h2" component="h2">Cập Nhật Số Ca COVID-19</Typography>
      <Typography>{moment().format('LLL')}</Typography>
     <Country countries={countries} handleOnChange={handleOnChange} value={selectedCountryID}/>
     <Case report={report}/>
     <Charts report={report} selectedCountryID={selectedCountryID} />
    </Container>
  );
}

export default App;
