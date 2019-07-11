import React from 'react';
import Header from './components/header';
import Container from './components/container';
import Content from './components/content';
import './style.css';
import axios from 'axios';
class App extends React.Component {
  state={
      header:{
        pagers:['MENU','|','SOME TEXT','|','ANOTHER ITEM','|','ONE MORE','|','AND LAST ONE'],
       title:['DEMO','SITE'],
       pages:['HOME','SERVICE','WORKS','ABOUT ME','CONTACT'],
        },
        container1:{
          box1:{
            title:'Welcome',
            text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
          },
          box2:{
            title:'UI/UX DESIGN',
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est enim, vestibulum non elementum et, tincidunt in diam. Donec tempor."
          }
        }
      }
   getData(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then((res)=>{
     return res;
     }).then((data)=>{
       console.log(data);
       const items =data.data;
       this.setState({items})
     })
   }
   componentDidMount(){
     this.getData();
   }
  render(){
    const header =this.state.header;
    const container=this.state.container1;
    return (
    <div className="App">
    <header>
    <Header pager={header.pagers} title={header.title} pages={header.pages}/>
    </header>
    <Container
      box1={container.box1}
      box2={container.box2}
    />
    <Content/>
    </div>
   );
  }
}
export default App;
