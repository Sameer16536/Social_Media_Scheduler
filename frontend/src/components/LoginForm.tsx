import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        //Remove this later:::::::
        console.log(email,password)
        //use Redux here
        axios.post('/api/auth/login',{
            email:email,
            password:password
        })

    }

  return (
    
    
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-4 bg-white shadow-md rounded">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Login
    </button>
  </form>
);
}

export default LoginForm