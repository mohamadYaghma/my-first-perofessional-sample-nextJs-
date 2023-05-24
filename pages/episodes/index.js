import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const Episodes = ({episodes})=>{
  return (
    <div>
        <h1> epsodes page : </h1>
        {
            episodes.results.map( (item) => {
                return( 
                    <div key={item.id}>
                        <Link  href={`/episodes/${item.id}`}>
                       
                            <h4>name : {item.name} ----- date : {item.air_date}</h4>
                            
                         </Link>
                   </div>
                )
            })
        }
    </div>
  )
}

export default Episodes ;

// export async function getStaticPath(){

// }

export async function getStaticProps(){
    const {data} = await axios.get('https://rickandmortyapi.com/api/episode')

    return{
        props:{
            episodes : data
        }
    }
}