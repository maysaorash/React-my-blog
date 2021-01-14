import emojipedia from "../emojipedia.js";
import Entry from './Entry.js'
function App() {       
   return (
     <div className="dictionary"> 
     <div><h1>Welcome</h1></div>  
    {emojipedia.map((element)=>(
        <Entry id={element.id}
        icon={element.icon}
        name={element.name}
        meaning={element.meaning}
        />))}
      
      </div>
      );
  }




export default App;