import React from 'react'
import {auth} from '../../firebase'
import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'



const Register=({history})=>{
    const [email, setEmail] = useState("")

    const{user} =useSelector((state)=>({...state}))

    useEffect(()=>{
        if(user && user.token){
            history.push('/')
        }
    },[user, history])

    const handleSubmit=async (e)=>{
        e.preventDefault()
        console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL)
        const config={
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL, 
            handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(email, config)
        toast.success(`Emailul a fost trimis la adresa ${email}. Accesati link-ul pentru a va putea inregistra.`)

        //save user email in local storage 
        window.localStorage.setItem('emailForRegistration', email)

        //clear state 
        setEmail("")
    }

    const registerForm=()=>
        <form onSubmit={handleSubmit}>
            <input type="email" 
                   className="form-control" 
                   value={email} onChange={e => setEmail(e.target.value)} 
                   autoFocus placeholder="Introduceti e-mailul">

            </input>
            <br></br>
            <button type="submit" className="btn btn-raised">
                Creeaza
            </button>
        </form>


    return (
        <div className="container p-5">
            <div className="row center">
                <div className="col-md-6 offset-md-3">
                    <h3 class="text-center">Creeaza un cont</h3>
                    <br/>
                   
                    {registerForm()}

                </div>
            </div>
            
        </div>
    )
}

export default Register;