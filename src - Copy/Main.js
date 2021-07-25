import React,{useState,useEffect} from 'react'
import Card from './Card'

const Main = () => {

    const [data,setData]=useState([]);
    //const [search,setSearch]=useState("");
    const [search,setSearch]=useState("");

    const getData = async ()=>{

        const res = await fetch('https://newsapi.org/v2/everything?q=india&from=2021-07-24&sortBy=popularity&apiKey=9137ab6a0e6a42ca9f7eb241b9b5186e')
        const res1 = await res.json()
        
        const res2 = res1.articles
        console.log(res2);
        setData(res2)

    }

    // const getData = async ()=>{

    //     const res = await fetch(`https://newsapi.org/v2/everything?q=india&from=2021-07-24&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
    //     const res1 = await res.json()
        
    //     const res2 = res1.articles
    //     console.log(res2);
    //     setData(res2)

    // }

    useEffect(()=>{

        getData();
        // eslint-disable-next-line
    },[])


    const readvalue = (value)=>{
            setSearch(value)
           // console.log(value)
           
    }

    const SearchNews = async() =>{
        const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-07-24&sortBy=popularity&apiKey=9137ab6a0e6a42ca9f7eb241b9b5186e`)
        const res1 = await res.json()
        
        const res2 = res1.articles
        console.log(res2);
        setData(res2)

    }

    // useEffect(async ()=>{
    //     const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-07-24&sortBy=popularity&apiKey=9137ab6a0e6a42ca9f7eb241b9b5186e`)
    //     const res1 = await res.json()
        
    //     const res2 = res1.articles
    //     console.log(res2);
    //     setData(res2) 
    // },[search])

    return (
        <>
        <div className="form-group">
    
    <input type="text" onChange={(e)=>readvalue(e.target.value)} className="form-control" placeholder="Search ......" />
  </div>
  <button  class="btn btn-primary" onClick={SearchNews}>Search</button>

  <h3 style={{marginTop:'20px'}}>News List</h3>
         <div className="row mt-4">
          {

              data.length===0?(<h4 style={{color:'red',marginLeft:'12px'}}>Sorry, No Data Found </h4>):

              data.map((items)=>{
                  return <Card 
                  key={items.id} 
                  author={items.author}
                   title={items.title}
                   images={items.urlToImage}
                   url={items.url}
                   />
              })
          }  
          </div>
        </>
    )
}

export default Main
