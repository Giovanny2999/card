import React from 'react'

export default function Card({id,title,image,instructor,url}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt='no image' width="80%"></img>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                Instructor: {instructor}
            </p>

            <a href={url} className='btn btn-outline btn-secondary rounded-0' >
                Ir al sitio web
            </a>

        </div>
    </div>
  )
}
