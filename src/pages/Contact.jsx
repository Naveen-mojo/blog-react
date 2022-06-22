import React from 'react'

function Contact(props) {
    const loginForm = props.login
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <form onSubmit={loginForm}>
                        <div className='form-group mb-3'>
                            <input type="text" placeholder='Enter Email' className='form-control' name='email' />
                        </div>
                        <div className='form-group'>
                            <input type="password" placeholder='Enter Password' className='form-control' name='password' />
                        </div>
                        <div className='mt-3'>
                            <button type='submit' className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;