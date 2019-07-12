import React from 'react';

const Contact =(props)=>{
    return(
        <div className='form'>
            <div className='part1'>
                <h2 className='title'>Contact</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                <br/> of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                <br/>passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className='part2'>
                <h3>NAME</h3>
                <input className='name' type='text'></input>
                <h3>EMAIL</h3>
                <input className='email' type='email'></input>
                <h3>MESSAGE</h3>
                <textarea className='message'></textarea>
                <div className='btn send'>SEND</div>
            </div>
        </div>
    )
}
export default Contact