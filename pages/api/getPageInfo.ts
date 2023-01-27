
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typing";
const query = groq`
*[_type == "pageInfo"][0]
`;

type Data ={
    pageInfos:PageInfo
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageInfos:PageInfo= await sanityClient.fetch(query)
    res.status(200).json({pageInfos})
  }
  