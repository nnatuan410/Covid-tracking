import React from 'react'
import {Card, CardContent, makeStyles, Typography } from '@material-ui/core'


const useStyle = makeStyles({
    wrap: (props)=>{
        if(props.type==='confirmed') return {borderLeft:'5px solid yellow'}
        if(props.type==='recover') return {borderLeft:'5px solid green'}
        else return {borderLeft:'5px solid red'}
    },
    title:{
        fontSize: 18, marginBottom: 5
    },
    count:{
        fontWeight: 'bold', fontSize:18
    }
})
export default function CardBox({title,count,type}) {
    const Styles = useStyle({type}); 
    return (
            <>  
                <Card className={Styles.wrap}>
                    <CardContent>
                        <Typography component="p" variant="body2" className={Styles.title}>{title}</Typography>
                        <Typography component="span" variant="body2" className={Styles.count}>{count}</Typography>
                    </CardContent>
                </Card>
            </>
    )
}
