import { useEffect } from "react"

export default function Home(props){
    // To Do
    // Ensure that user is actually logged in
    useEffect(()=>{
        async function ensureAccount(){
            const result = await fetch('http://localhost:3000/isUser',{
                method: 'GET',
                credentials: 'include'
            })
        }
        ensureAccount()
    })
    return(
        <div className='Home'>
            Home page
        </div>
    )
}