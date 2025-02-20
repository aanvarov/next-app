import React from 'react'
import Link from 'next/link'


export default function SingIn() {
    return      (
        <>
            <section >
                <div className="loginFormDiv">
                    <div style={{ width: '751px', margin: 'auto' }}>
                        <LoginDiv />
                    </div>
                    <img style={{ position: 'relative', height: '100%' }} src="/loginImg.png" />
                </div>
            </section>
        </>
    )
}
function LoginDiv(props) {
    const { isLogin, handleRegister } = props
    return (
        <>
            <div className={`loginDiv ${isLogin ? 'active' : ''}`}>
                <form className='form'>
                    <h1>Welcome back!</h1>
                    <h2 className='h2'>Enter your Credentials to access your account</h2>
                    <div className="formInput">
                        <p>Email address</p>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="formInput">
                        <p>Password</p>
                        <input type="password" placeholder='Enter your password' />
                    </div>
                    <div className="remember-forgot1">
                        <input type="checkbox" />
                        <p>Remember for 30 days</p>
                    </div>
                    <button>Login</button>
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
                        <p style={{ marginRight: '5px' }}>Don’t have an account?</p>
                        <Link href="/sing-up" className='singUp' >Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

//clayn site rendering
//server site rendering