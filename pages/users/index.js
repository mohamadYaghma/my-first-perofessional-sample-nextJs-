import User from "@/components/User";
import axios from "axios"

export default function UsersList({userList}) {
    console.log(userList);
  return (
    <div>
        <h1>UsersList</h1>
        {
            userList.results.map( user => {
                return <User  user={user} key={user.id}/>
            })
        }
    </div>
  )
}

export async function getStaticProps(){
    const {data} = await axios.get("https://rickandmortyapi.com/api/character")
    return{
        props:{
            userList : data
        }
    }
}