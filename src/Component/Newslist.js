import React, { useState, useEffect } from 'react'
import News from './News'
import Loading from './loading.js'
export default function Newslist(props) {
    const [news, setnews] = useState([])
    const [isLoading,setLoading] = useState('false');
    
    const fetchData = () => {
      setLoading(true);
      fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cc2c724622fd43808d0974b8155cff8b`)
        .then((response) => {
          return response.json()
        })

        .then((data) => {
            setnews(data.articles);
            console.log(data.articles);
            setLoading(false);
        })
      }
    
      useEffect(() => {
          fetchData();
        }, [props.category])
  return (
    <> 
        <div style={{marginTop: '5%'}}>
            <div style={{textAlign: 'center'}}>
                <h1> My News - Top <span class="badge bg-danger" style={{textTransform: 'uppercase',color: '#FFF'}}  > {props.category}</span> Headlines </h1>
                { isLoading ? (
                  <Loading />
                ) : (
                  <div style={{marginTop: '4%', marginLeft: '15%', marginRight: '15%'}}>
                  <div className="row">
                  {  
                      news.map((data) => (
                          <div className="col-md-4 col-sm-1">
                        <News name={props.category}
                              title={data.title} 
                              author={data.author} 
                              newsname={data.source.name} 
                              description={data.description} 
                              url={data.url} 
                              publishedAt={data.publishedAt} 
                              urlToImage={data.urlToImage}
                              />
                               </div>
                          )) 
                          } 
                  </div>
              </div>
                )}

            
             
     
            </div>
        </div>

    </>
  )
}
