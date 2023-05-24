import axios from "axios";

const DitailsBlog = ({blogs , categorie}) => {
    return (  
        <div>
            <h1>blogs for category : {categorie} </h1>
            <div>
                {
                    blogs.map((item) => {
                        return(
                            <div key={item.id}>
                                <h2> title : {item.title}</h2>
                                <p>{item.discription}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default DitailsBlog;

export async function getServerSideProps(context){
    const {params} = context;
    const {categorie} = params;

    const {data} = await axios.get(`http://localhost:4000/blogs?categorie=${categorie}`);
    return{
        props:{
            categorie,  
            blogs:data
        }
    }
}