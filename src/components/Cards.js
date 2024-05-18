import React from 'react'
import Card from './Card'
import image1 from '../assets/javaScript.jpg'
import image2 from '../assets/nginx.jpg'
import image3 from '../assets/python.jpg'

const cards = [
    {
        id:1,
        title:'JavaScript',
        image: image1,
        instructor: 'Beto Ramirez',
        url: 'http://www.google.com'        
    },
    {
        id:2,
        title:'Nginx',
        image: image2,
        instructor:'Angela Rios',
        url: 'http://www.google.com'
    },
    {
        id:3,
        title:'Python',
        image: image3,
        instructor: 'Lucas Hernandez',
        url: 'http://www.google.com'
    }
]

export default function Cards() {
    console.log(cards)
  return (
    
    <div className='container d-flex justify-content-center align-item-center h-100'>
        

        <div className='row'>
            {
                cards.map(c => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                         key={c.id}
                         id={c.id}
                         title={c.title}
                         image={c.image}
                         instructor={c.instructor}
                         url={c.url}
                        />
                    </div>
                ))

                

            }                        
        </div>

    </div>
  )
}
