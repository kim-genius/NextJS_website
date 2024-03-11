export default function fetcher(url:string):any{
    fetch(url).then(res => res.json())
}

