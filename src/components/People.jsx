import React, {useState} from 'react';
import Modal from './Modal';


export default function People ({ data }){
  const [isVisible, setIsVisible] = useState(false)
  const [modalPeople, setModalPeople]= useState({})
    const test = (key) => {
        setIsVisible(!isVisible)
        setModalPeople(data[key])
    }
    return (
        <div className="people" >
            {data.map((people,key)=> {
          let link = `./img/${people.name}.jpg`
             return(
               
                 <div className="people_item" key={key}>
                     <div className="people_box" >
                     
                          <div  onClick={()=> test(key)} >{people.name}</div>
                          <img src = {link} onClick={()=> test(key)} />
                          <div>
                          
                          </div>
                     </div>
                </div>
             )
        })}
        <Modal  hidden={!isVisible} modalPeople={modalPeople} setActive={setIsVisible} />
        </div>
    );
};