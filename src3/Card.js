import React from 'react'
import Avatar from './Avatar'
import Details from './Details'
function Card(props){
​
    return (
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{props.nm}</h2>
                <Avatar img={props.img} />
            </div>
            <div className='bottom'>
                <Details phn={props.phn} eml={props.eml} />
            </div>
        </div>
    )
}
​
​
export default Card;