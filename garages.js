`use strict`

import * as DOM from './dom.js';

// list item function
const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
  DOM.listOutput.appendChild(child);
}


/*
BONUS
*/

const updateGarage = () => { 
  axios.put(`/update/${DOM.inputGarageID.value.toString()}`, {name:DOM.inputUpdateGarageName.value,_id:DOM.inputUpdateGarageID.value.toString()})
    .then((response) => {
     console.log(response);
     get();
    }).catch((err) => {
      console.log(err);
    });
}



const delGarage = () => { 
  axios.delete(`/delete/${DOM.inputDeleteGarageID.value.toString()}`)
    .then((response) => {
     console.log(response);
     get();
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonUpdateGarage.onclick = () => updateGarage();
DOM.buttonDeleteGarage.onclick = () => delGarage();