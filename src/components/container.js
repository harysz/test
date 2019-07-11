import React from 'react';

class Container extends React.Component{
    render(){
        
        return(
            <div className='container'>
                <div className='box1'>
                    <h2 className='title'>{this.props.box1.title}</h2>
                    <p className='text'>{this.props.box1.text}</p>
                    <div className='btn'> Learn more</div>
                </div>
                <div className='box2'>
                    <div className='img'></div>
                    <div className='content'>
                    <h2 className='title'>{this.props.box2.title}</h2>
                    <p className='text'>{this.props.box2.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Container;