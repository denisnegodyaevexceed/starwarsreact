import React, {useState} from 'react';


export default function Modal ({modalPeople, hidden,setActive }){
    let src = `./../img/${modalPeople.name}.jpg`
    return (
        <div className="back"hidden={hidden} onClick={()=>setActive(false)}>
        <div className="over" hidden={hidden} onClick={event => event.stopPropagation()}>
        <div className="modal" >
        
            {modalPeople && <div>
                <div className="modal_info">
                <img src={src} alt=""/>
                <p>Имя: {modalPeople.name}</p>
                <p>Вес: {modalPeople.mass}</p>
                <p>Рост: {modalPeople.height}</p>
                <div className="close_btn"hidden={hidden} onClick={()=>setActive(false)} >Закрыть</div>
                </div>
                


            </div> }
            
        </div>
        </div>
        </div>
    );
};