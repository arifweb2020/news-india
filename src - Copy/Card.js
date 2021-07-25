import React from 'react'

const Card = ({author,title,images,url}) => {
    return (
        <>
        <div className="col-md-4 mb-3">
           <div className="card" >
  <img className="card-img-top" src={images} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">{author}</h4>
    <p className="card-text">{title}</p>
    <a href={url} className="btn btn-primary" target="_blank">Read News</a>
  </div>
</div> 
</div>
        </>
    )
}

export default Card
