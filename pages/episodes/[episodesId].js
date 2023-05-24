import axios from "axios";

const Episode = ({epi}) => {
    return ( 
        <div>
            <h2> 
                name: {epi.name} **** episode:{epi.episode} *** episodeNumber : {epi.id}
            </h2>
        </div>
     );
}
 
export async function getStaticPaths(){
    const {data} = await axios.get('https://rickandmortyapi.com/api/episode');

   const pathss =  data.results.map((item) =>{
    return{
        params:{ episodesId :`${item.id}`}
    }
})

    return{
        paths:pathss,
        fallback:false
    }
}


export default Episode;

export async function getStaticProps(context){
    const {params} = context ;
    const {data} = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodesId}`);

    return{
        props:{
            epi:data
        }
    }
}