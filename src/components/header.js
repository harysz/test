import React from 'react';

 class Header extends React.Component{
    render(){
        const pager=this.props.pager.map((item,i)=>{
            return(
                <li className='items' key={i}>{item}</li>
            )
        });
        const logo=this.props.title.map((logo,i)=>{
            return(
                <h2 key={i} className="title">{logo}</h2>
            )
        });
        const pages=this.props.pages.map((page,i)=>{
            return(
                <li key={i} className='page'>{page}</li>
            )
        })
        return(
            <div className="header">
                <ul className='textTop'>{pager}</ul>
                    <div className='container'>
                        <div className='logo'>{logo}</div>
                        <ul className='nav'>{pages}</ul>
                    </div>
            </div>
        )
    }
 }
 export default Header;