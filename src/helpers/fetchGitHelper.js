import { giphy_fetch_base } from "../vars/vars"

export const getGifHelper = async (category) =>
{
 const fetchResult = await fetch(`${giphy_fetch_base}&q=${ decodeURI(category) }`)
 const {data} = await fetchResult.json();
 return (data.map((item)=>({
     id: item.id,
     title: item.title,
     url: item.images?.preview_webp.url
 })));
}