
function Product(props) {
  return (
    <div className='item'>
      <div className='image'>
        <img src={props.productImageUrl} alt={props.title} />
      </div>
 
        <div className='header'>
       {props.votes}
        <button onClick={props.onVote} style={{ marginLeft: "10px" }}>
          Upvote
        </button>
        </div>
        <div className='description'>
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
          </div>
          
        <div className='extra'>
          <span>Submitted by:</span>
          <img
            className='image'
            src={props.submitterAvatarUrl}
            alt="avatar"
          />
          {props.url}
        </div>
      </div>
 
  );
}

export default Product;
