import axios from "axios";
import Link from "next/link";

const Products = ({product}) => {
    return (  
        <div>  
            <h1>Product List : </h1>
            {
            product.map((item)=>{
                return(
                    <div key={item.id}>
                  
                    <p>title : {item.title} - price: {item.price}</p>
                </div>
                )
            })
        }
        </div>
    );
}
 
export default Products;

export async function getStaticProps(){
    const {data} = await axios.get('http://localhost:4000/products');

    return{
        props:{
            product:data
        }
    }
}