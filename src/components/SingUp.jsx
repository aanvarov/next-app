import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function SingUp() {
    return (
        <>
            <section>
                <div className="loginFormDiv">
                    <div style={{ width: '751px', margin: 'auto' }}>
                        <RegisterDiv />
                    </div>
                    <img style={{ position: 'relative', height: '100%' }} src="/loginImg.png" />
                </div>
            </section>
        </>
    )
}

function RegisterDiv(props) {
    const { isRegister, handleLogin } = props
    return (
        <>
            <div className={`registerDiv ${isRegister ? 'active' : ''}`}>
                <form  className='form'>
                    <h1>Get Started Now</h1>
                    <div className="formInput">
                        <p>Name</p>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div className="formInput">
                        <p>Email address</p>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="formInput">
                        <p>Password</p>
                        <input type="password" placeholder='Enter your password' />
                    </div>
                    <div className="remember-forgot">
                        <input type="checkbox" />
                        <p>I agree to the terms & policy</p>
                    </div>
                    <button>Sing up</button>
                    <div className="orDiv">
                        <hr className='hr' /><p>or</p><hr className='hr' />
                    </div>
                    <div className="acc-div">
                        <Link href="#">
                            <img src="/google.png" alt="Google icon" />
                            Sing in with Google
                        </Link>
                        <Link href="#">
                            <img src="/apple.png" alt="Apple icon" />
                            Sing in with Apple
                        </Link>
                    </div>
                    <div className="haveAcc">
                        <p style={{ marginRight: '5px' }}>Have an account?</p>
                        <Link href="/sing-in" className='singIn'>Sign In</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

//clayn site rendering
//server site rendering