import { Image } from './Image';
import Stack from '@mui/material/Stack';


export function StackT(albumId, id, title, url, thumbnailUrl, style) {
    return (
        <div>
            <Stack direction="row" style={style} spacing={8} sx={{my:5}}>
                <div>{albumId}</div>
                <div>{id}</div>
                <div>{title}</div>
                {Image(url, thumbnailUrl)}
            </Stack>
        </div>
    )
}