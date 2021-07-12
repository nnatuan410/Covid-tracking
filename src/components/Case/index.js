import { CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import CardBox from './Card'


export default function Case({report}) {
    const data = report && report.length ?  report[report.length-1]:[];
    const sumary = [
        {
            title: 'Số Ca Nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số Ca Khỏi',
            count: data.Recovered,
            type: 'recover'
        },
        {
            title: 'Số Ca Tử Vong',
            count: data.Deaths,
            type: 'death'
        },
    ]
    return (
        <Grid container spacing={3}>
            {
                sumary.map(item=>
                    <Grid item sm={4} xs={12}>
                        <CardBox title={item.title} count={item.count} type={item.type}/>
                    </Grid>
                    )
            }
        </Grid>
    )
}
