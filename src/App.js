import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header'
import Charactergrid from './component/charactergrid';
import Searchbar from './component/searchbar'
import Pagination from './component/pagination';


const App = () => {
  const [item, setitem] = useState([]);
  const [isloading, setIsloading] = useState(true)
  const [currentpage, setcurrentpage] = useState(1)
  const [postperpage] = useState(12)
  const [query, setquery] = useState('')
  useEffect(() => {
    const fetchapi = async () => {
    
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data)
      setitem(result.data)
      setIsloading(false)

    }
    fetchapi()
  }, [query]);
  //get current page
  const indexofLastpost = currentpage * postperpage;
  const indexofFirstpost = indexofLastpost - postperpage;
  const currentPost = item.slice(indexofFirstpost, indexofLastpost);
  //change page\
  const paginate = (number) => setcurrentpage(number);

  return (
    <div className="App">

      <Header />
      <Searchbar getquery={(q) => setquery(q)}   />
      <Charactergrid isloading={isloading} item={currentPost} />
      <Pagination postperpage={postperpage} totalpost={item.length} paginate={paginate} search={query}/>
    </div>
  );
}

export default App;
