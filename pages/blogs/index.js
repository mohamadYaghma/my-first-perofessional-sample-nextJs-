import axios from "axios";

const BlogList = ({blogs}) => {
    return (
        <div>
            <h1>blogs List :</h1>
            <div>
                {
                    blogs.map((item)=>{
                        return <h2>title : {item.title} -- categoties : {item.categorie} </h2>
                    })
                }
            </div>
        </div>
      );
}
 
export default BlogList;

export async function getServerSideProps(){
    const {data} = await axios.get('http://localhost:4000/blogs')
    return{
        props:{
            blogs:data
        }
    }
}

