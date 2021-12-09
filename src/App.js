
import React,{ useState,useEffect} from "react";
import Header from './Components/Header'
import Characters from "./Components/Characters";
import Searchbar from "./Components/Searchbar";
import Pagination from "./Components/Pagination";




function App() {
  const [casts,setCasts]=useState([]);
     const [isloading,setIsLoading]=useState(true);
     const [query,setQuery]=useState('');
     const [currentPage, setcurrentPage] = useState(1);
     const [castsPerPage] = useState(10);

    
    
     const urlcharacters=`https://www.breakingbadapi.com/api/characters?name=${query}`;

     const getCastDetails=async()=>{
          const response= await fetch(urlcharacters);
          const casts= await response.json();
          console.log(casts.data);
          setCasts(casts);
          setIsLoading(false);
         };

         useEffect(()=>{
             getCastDetails();
         },[query]);

         //Get current casts

         const indexOfLastCast = currentPage*castsPerPage;
         const indexOfFirstCast = indexOfLastCast-castsPerPage;
         const currentCasts = casts.slice(indexOfFirstCast,indexOfLastCast);

        //  console.log(indexOfFirstCast," ",indexOfLastCast," ",currentCasts);

        //change Page
        const paginate = pageNumber =>setcurrentPage(pageNumber);



  return (
    <div className='container'>
      <Header/>
      <Searchbar getQuery={(q)=>setQuery(q)}/>
      
 <Characters isloading={isloading} casts={currentCasts}/>
<Pagination
      castsPerPage={castsPerPage}
      paginate = {paginate}
      totalCasts = {casts.length}/>
    </div>
  );
}

export default App;
