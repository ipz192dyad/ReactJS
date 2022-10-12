import Link from '@mui/material/Link';


export function Image(url, thumbnailUrl) {
    return (
        <div><Link href={url}>{thumbnailUrl}</Link></div>
    )
}