import React from 'react'
import './Card.css'



const Card = ({ image, name, login, repos, followers, following }) => {
  return (
    <div className='card'>
      <div className="image">
        <div className="border-image">
          <img src={image} alt="" />
        </div>
      </div>

      <header>
        <h2>{name}</h2>
        <p>{login}</p>
      </header>

      <div className="line"></div>

      <div className="social">

        <div className='info'>
          <h2>{repos}</h2>
          <p>Repos</p>
        </div>

        <div className='info'>
          <h2>{followers}</h2>
          <p> followers</p>

        </div>

        <div className='info'>
          <h2>{following}</h2>
          <p>  following</p>
        </div>


      </div>

    </div>
  )
}

export default Card