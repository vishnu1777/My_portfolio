import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'


export const config = {
  projectId: "zastw76l" ,
  dataset:  "production",
  apiVersion: "2021-10-21",
  token: "sktW2OHHs2lPtHgasbaW7kbD9kpe6X4KvP77Em15bNh6E06BT5fuVPVCtamnazRVpqgGpAFckPGx8S2g57FV9xcUMjvmJ70XFlA1vtgiwwzkudGeVEMswo2X4K7gaoCRUgcrMalqFGUu40Wp5SHYtJXHlqQFVqj9yYjPVerMIw6kNc5cAZXX",
  useCdn: false,
}

export const sanityClient = createClient(config);
export const urlFor = (source:any)=> createImageUrlBuilder(config).image(source);