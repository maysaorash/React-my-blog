import React from 'react';
import Card from './Card'
import contacts from "../contacts";
​
function App(){
  
    console.log(contacts);
    return(
        <div>
            <h1 className='heading'>My Contacts</h1>
           {contacts.map(cont=>{
            return   <Card
          nm ={cont.name}
          id= {cont.id}
          eml={cont.email}
          phn={cont.phone}
          img= {cont.imgURL}
​
          />
            })}
       </div>
     )}
​
   
​
​
​
export default App;
​
​
// return contacts
