import React from 'react'
import {auth} from '../../firebase'
import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'

const ForgotPassword=({history})=>{
    const [email, setEmail]=useState('')
    const [loading, setLoading]=useState(false)

    const{user} =useSelector((state)=>({...state}))

    useEffect(()=>{
        if(user && user.token){
            history.push('/')
        }
    },[user, history])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)

        const config={
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT, 
            handleCodeInApp: true
        }
        
        await auth.sendPasswordResetEmail(email, config)
        .then(()=>{
            setEmail('')
            setLoading(false)
            toast.success('Verificati-va e-mailul pentru a va reseta parola')
        })
        .catch(error=>{
            setLoading(false)
            toast.error(error.message)
        })

    }

    return <div className="container col-md-6 offset-md-3 p-5">
        {loading ? (<h3>Se incarca...</h3>) : (<h3 class="text-center">Reseteaza parola</h3>)}
        
        <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Introduceti noua parola" autoFocus/>
            <br/>

            <button className="btn btn-raised" disabled={!email}>
                Trimite
            </button>
        </form>
    </div>
}

export default ForgotPassword