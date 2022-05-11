import React from 'react'
export default function News(props) {
  return (
    <> 
  <div className="col-md-4 col-sm-1 d-flex justify-content-stretch mt-4">
    
      <div className="card">
        <img src={props.urlToImage} classname="card-img-top" alt="..." style={{height: 300}} /> 
        <div className="card-body">
        <span class="badge bg-success">{props.newsname}</span>
          <h5 classname="card-title" style={{textAlign: 'justify'}}>{props.title}</h5>
          <p classname="card-text" style={{textAlign: 'justify'}}>{props.description}</p>
            <div class="d-grid gap-2 col-6 mx-auto">
            <a class="btn btn-primary btn-sm" href={props.url}>Read </a>
          </div>
        </div>
        </div>
        
        </div>
    </>
  )
}
