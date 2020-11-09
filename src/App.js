import React, {useState, useEffect} from 'react';
import './App.css';
import Modal from './components/Modal';
import People from './components/People';
let i = 1

// let i = +prompt(`введите число`,1)

function App() {
  const [people, setPeople] = useState([]);

  async function fetchPeople(j){
    let res = await fetch(`${j}`);
    let data = await res.json();
    setPeople(data.results);
 }



  useEffect(()=>{
     
     
     fetchPeople(`https://swapi.dev/api/people/?page=1`);
    
  },[]);
  
  
  return (
    <div className="container" >
      
        <People  data = {people} />
      
        <div className="button1">
        <div onClick={() =>{if(i <=1){fetchPeople(`https://swapi.dev/api/people/?page=1`)}else fetchPeople(`https://swapi.dev/api/people/?page=${i=i-1}`)}}>
       Назад
        </div>
        </div>
        <div className="button2">
        <div onClick={() =>{if(i >=9){fetchPeople(`https://swapi.dev/api/people/?page=9`)}else fetchPeople(`https://swapi.dev/api/people/?page=${i=i+1}`)}}>
        Вперед
        </div>
        </div>
     
        
        </div>
  );
}

export default App;