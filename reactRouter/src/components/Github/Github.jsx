// import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/PrathameshTheurkar')
    //     .then(response => response.json())
    //     .then(data => setData(data))   
    // }, [])
    
  return (
    <div className="flex justify-center">
     <span className="bg-gray-600 text-white text-3xl
     p-4 w-1/2 text-center">Github Followers: {data.followers}</span>
   </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const  response = await fetch('https://api.github.com/users/PrathameshTheurkar')
    return response.json()
}