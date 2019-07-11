import React from 'react';

class Content extends React.Component{

    render(){
        return(
            <div className='content2'>
             <div className='box1'>
                 <h2 className='title'>web development</h2>
                 <p className='text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                 <br/>
                 <br/>at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
             </div>
             <div className='box2'>
                 <h2 className='title'>wireframe</h2>
                 <p className='text'>something something something something something something something something</p>
                 <div className='table'>
                     <div className='part1'>
                        <h2>Custom list</h2>
                        <p>Some heading</p>
                        <ul>

                        </ul> 
                     </div>
                     <div className='part2'>
                         <h2>web development</h2>
                         <p>established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                     </div>
                 </div>
             </div>
            </div>
        )
    }
}
export default Content;