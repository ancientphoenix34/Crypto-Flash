import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency marketplace.Sign in to explore more...</p>
            <form action="">
                <input type="text" placeholder='Search crypto...'/>
                <button type='submit'>Search</button>
            </form>
        </div>
      
    </div>
  )
}

export default Home