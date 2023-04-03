import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import React from 'react'
export default function PageNotFound() {
  let router=useRouter();
const handleinput=()=>{
  router.push("/pass");
}
useEffect(()=>{
  setTimeout(()=>{
    router.push("/pass")
  },3000)
},[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>
        Page Not found
      </h1>
      <button onClick={handleinput}>Back to HomePage</button>
      {/* <Link href="/">HomePage</Link> */}
    </div>
  )
}
