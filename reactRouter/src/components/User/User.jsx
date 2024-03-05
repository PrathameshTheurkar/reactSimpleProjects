import { useParams } from "react-router-dom"
function User() {
  const {id} = useParams()
  return (
   <div className="flex justify-center">
     <span className="bg-gray-600 text-white text-3xl
     p-4 w-1/2 text-center">User: {id}</span>
   </div>
  )
}

export default User