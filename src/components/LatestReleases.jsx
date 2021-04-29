import React from 'react'

import fantasy from '../data/fantasy.json'

console.log(fantasy)
const LatestReleases = () => (
    <div>{
        fantasy.map(book => {
            return <img className='book-cover' src={book.img} />
        })
        }</div>
    )

export default LatestReleases