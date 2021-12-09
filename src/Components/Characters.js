import React from 'react'


// import 'bootstrap/dist/css/bootstrap.min.css';
import EachCharacter from './EachCharacter';

const Characters=({isLoading,casts})=>{
  
// const {isLoading,casts}=FetchAPI(`https://www.breakingbadapi.com/api/characters`);
//when we don't fetch data in App.js and do it separately


console.log(casts);

return (
   isLoading ?
   <h1>Loading ... </h1> :

   <section className='cards1'>
    {casts.map((cast)=>
    <EachCharacter key={cast.char_id} cast={cast}></EachCharacter>
    )}
   </section> 
)
};




  
export default Characters;