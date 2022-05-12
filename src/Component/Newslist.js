import React, { useState, useEffect } from 'react'
import News from './News'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './loading.js'
export default function Newslist(props) {
  const [news, setnews] = useState([])
  const [page, setPage] = useState(1)
  // const [isLoading, setLoading] = useState('false')
  const [totalResults, settotalResults] = useState('0')
  
  const fetchData = () => {
    // setLoading(true);
    fetch(  
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cc2c724622fd43808d0974b8155cff8b`,
    )
      .then((response) => {
        return response.json()
      })

      .then((data) => {
        setnews(data.articles)
        settotalResults(data.totalResults);
        console.log(data.totalResults)
        // setLoading(false);
      })
  }

  const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cc2c724622fd43808d0974b8155cff8b&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let newsData = await data.json()
    setnews(news.concat(newsData.articles))
    settotalResults(newsData.totalResults)
  };

  useEffect(() => {
    fetchData()
  }, [props.category])

  return (       
    <>
      <div style={{ marginTop: '5%' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>
            {' '}
            My News - Top{' '}
            <span
              class="badge bg-danger"
              style={{ textTransform: 'uppercase', color: '#FFF' }}
            >
              {' '}
              {props.category}
            </span>{' '}
            Headlines{' '}
          </h1>
        </div>
        {/* { isLoading ? (
                  <Loading />
                ) : ( */}
                
        <div style={{ marginTop: '4%', marginLeft: '15%', marginRight: '15%' }}>
        
            <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreData}
            hasMore={news.length !== totalResults}
            loader={
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            }
            > 
             <div className="row ">
              {news.map((data) =>
                data.urlToImage ? (
                  <News
                    name={props.category}
                    title={data.title}
                    author={data.author}
                    newsname={data.source.name}
                    description={data.description}
                    url={data.url}
                    publishedAt={data.publishedAt}
                    urlToImage={data.urlToImage}
                  />
                ) : (
                  ''
                ),
              )}
              </div>
            </InfiniteScroll>
          
        </div>
        {/*  ) } */}
      </div>
    </>
  )
}
