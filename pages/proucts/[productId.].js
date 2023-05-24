import axios from "axios";
import {  useRouter } from "next/router";

const ProductDitails = ({ditails}) => {

    const ruter = useRouter();
    if(ruter.isFallback){
        return (<div>
            loding.....
        </div>)
    }

    return (  
        <div>
            <h1> product details Page  </h1>
            <h2> prics : {ditails.price} - title : {ditails.title} </h2>
            <p>discription  :{ditails.discription} </p>
        </div>
    );
}
 
export default ProductDitails;


export async function getStaticPaths(){

    return{
        paths:[
            {
            params:{productId : '1'}

            }
        ],
        fallback:true
    }
}


export async function getStaticProps({params}){

const {data} = await axios.get(`http://localhost:4000/products/${params.productId}`);
return{
    props:{
        ditails:data
    }
}
}