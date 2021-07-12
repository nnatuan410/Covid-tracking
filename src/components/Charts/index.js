import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import HighMap from '../map-chart/highmap'
import LineChart from '../map-chart/linechart'

export default function Charts({report, selectedCountryID}) {
    const [mapdata,setMapdata]=useState({});

    useEffect(() => {
            if(selectedCountryID){
                import(`@highcharts/map-collection/countries/${selectedCountryID}/${selectedCountryID}-all.geo.json`)
                .then(res=> setMapdata(res))
                .catch((err)=>console.log({err}));
            }
        }, [selectedCountryID]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart data={report}/>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HighMap mapData={mapdata}/>
                </Grid>
            </Grid>
        </>
    )
}
