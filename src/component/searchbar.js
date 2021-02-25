import React,{ useState, useEffect } from 'react'

 const Searchbar = ({getquery,item}) => {
     const [text, setitem] = useState([])   

         const onchange=(q)=>{
             setitem(q)  
             getquery(q) 
             console.log(text)
      
           };
           
    /*useEffect((q) => {
        if(setitem(q)===item.name)
                {
                    getquery(q) 
        console.log(text)
 
                }
                else{
                    alert('not match');
                }
    },[])*/
    return (
        <div className="searchbar">
            <input type="text"
             placeholder="Search Character"
             value={text}
             onChange={(e)=>onchange(e.target.value)} />
        </div>
    )
}
export default Searchbar