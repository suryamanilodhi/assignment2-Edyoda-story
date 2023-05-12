import Logo from './Image/edyoda1.jpg'
import './App.css';
import ImageGrid from './Component/image'
import {RiArrowDropDownLine} from 'react-icons/ri'
function App() {
  return ( 
  
  <div>
    <header className="header">
    <section className="first">
      <div>
      <img id="logo" src={Logo} alt="react logo"/>
         <p>Stories</p>
      </div>
    
    <p className='cat'>Explore Categories<span><RiArrowDropDownLine/></span> </p>
   
    </section> 
     <section className="second">
      <p className='header-p'>EdYoda is a learning and knowledge
      sharing platform for techies</p> 
      <button>Go To Main Website</button>
    </section>
    </header>
   
   <main>
    <h1>Latest Posts</h1>
    <h3>Filter by Category</h3>
    <div className="filter-btn-box">
      <button>ALL</button>
      <button>Artificial Intelligence</button>
      <button>Cloud Computing</button>
      <button>DevOps</button>
      <button>Programming Languages</button>
      <button>Mobile Application Development</button>
      <button>Technology and Tools</button>
      <button>Get a Job in a Tech Company</button>
      <button>Others</button>
    </div>
   </main>
   <ImageGrid/>
  </div>
  
  )
}

export default App;
