import {useState, useEffect} from "react";
import Paper from '@mui/material/Paper';
import {FixedSizeList as List} from 'react-window';
import { StackT } from './Stack';


export function TableT(dataURL) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson.filter(item => item.title.split(' ').length <= 7)))
            .catch((error) => {
                console.error(error);
            });
    }, [dataURL])


    return (
        <Paper sx={{mt:5}}>
            <List
            height={600}
            itemCount={data.length}
            itemSize={40}
            width="100%"
            >
            {({ index, style }) => {
                return (
                    StackT(data[index].albumId, data[index].id, data[index].title, data[index].url, data[index].thumbnailUrl, style)
          );
        }}
            </List>
        </Paper>
    )
}