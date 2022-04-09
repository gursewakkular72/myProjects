// this module contains the function that will be used mutiple times in the project, but the functions would be independanr of other modules.

import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(url){
    try{

        const res = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
        //const res = await fetch(url);
      
        const data = await res.json();

        if(!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;

    }
    catch(err){
       
        throw err /// re thorwing the error so that It can be caught in model.js. 
       // console.log(`${err} 💥💥`);
    }

}

export const sendJSON = async function(url, dataTOSend){
  try{
    const fetchPro = fetch(url,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(dataTOSend)
    })

    const res = await Promise.race([fetchPro,timeout(TIMEOUT_SEC)]);
        //const res = await fetch(url);
      
    const data = await res.json();
    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  }
  catch(error){
    console.log(error);
  }
}