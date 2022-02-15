import Image from "next/image"
import { signIn } from 'next-auth/react'

const Login = ()=>{
  return (
    <div className="grid place-items-center">
      <Image alt="facebook"
        src={'/images/facebook.svg'}
        width={400}
        height={400}
        objectFit="contain"/>

      <h1 onClick={signIn}
        className="bg-[#3B5998] text-white text-center cursor-pointer px-16 py-5 mt-5 rounded-full">
        Login with Facebook
      </h1>
    </div>
)}

export default Login  
