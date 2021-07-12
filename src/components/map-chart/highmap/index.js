import React, { useRef } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import highchartMap from 'highcharts/modules/map';
import { useState ,useEffect } from 'react';
import cloneDeep from 'lodash.clonedeep';

highchartMap(Highcharts);
const initOptions={
    chart: {
        height: '500',
      },
      title: {
        text: null,
      },
      mapNavigation: {
        enabled: true,
      },
      colorAxis: {
        min: 0,
        stops: [
          [0.2, '#FFC4AA'],
          [0.4, '#FF8A66'],
          [0.6, '#FF392B'],
          [0.8, '#B71525'],
          [1, '	#7A0826'],
        ],
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
      },
      series: [
        {
        name: 'Dân số',
        joinBy: ['hc-key', 'key'],
        },
      ],
}
export default function HighMap({mapData}) {
    console.log({mapData})
    const [option,setOptions]=useState({})
    const [mapload,setMapload] = useState(false);
    const chartRef= useRef(null);
    useEffect(() => {
        if(mapData && Object.keys(mapData).length){
                const fakeData = mapData.features.map((features,index)=>({
                    key: features.properties['hc-key'],
                    value: index,
                }));
                setOptions(()=>({
                    ...initOptions,
                    series:[
                        {   ...initOptions.series[0],
                            mapData: mapData,
                            data: fakeData,
                        }]
                }))
                if(!mapload) setMapload(true);
        }
    }, [mapData,mapload])
    useEffect(()=>{
        if(chartRef && chartRef.current){
            chartRef.current.chart.series[0].update({
                mapData,
              });
        }
    },[mapData])

    if(!mapload) return null;

    return (
            <HighchartsReact 
            highcharts={Highcharts}
            options={cloneDeep(option)}
            constructorType={'mapChart'}
            ref={chartRef}
            />  
    )
}
