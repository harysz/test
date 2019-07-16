import React from 'react';

const Footer=(props)=>{
    return(
        <div className='footer'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
            <div className='wrapper'>
                <ul className='pages'>
                    {props.pages.map((item,i)=>{
                    return(<li className='item' key={i}>{item}</li>)
                    })}
                    </ul>
                <div className='logo'>
                <h2 className='title'>@ </h2>
                {props.title.map((item,i)=>{return <h2 key={i}className='title'> {item}</h2>})}
                <h2 className='title'>  all rights reserved </h2>
                </div> 
            </div>
        </div>
    )
}
export default Footer