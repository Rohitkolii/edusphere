import React from 'react'
import "../login/login.css"
const Page = () => {
  return (
      <section className='login_con'>
        <div className='login_logo'><h1><span>E</span>d<span>.</span></h1></div>
        <h1 style={{textAlign: "center"}}>login form</h1>
        <form className='login_con_inner'>
          <div className='input_con'>
            <label>username:</label>
            <input type="email" placeholder='name@example.com'/>
          </div>
          <div className='input_con'>
            <label>password:</label>
            <input type="password" placeholder='name@example.com'/>
          </div>

          <div>
            <input id='check' type="checkbox" defaultChecked={false} />
            <label htmlFor='check'>Accept Terms & Conditions</label>
          </div>

          <div className='input_btn'>
            <input value="Login" type='button' />
          </div>
        </form>
      </section>
  )
}

export default Page