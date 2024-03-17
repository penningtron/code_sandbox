

function Card(){
    return (
        <div className="card">
            <img className="card-image" src="https://picsum.photos/200/300" alt="random" />
            <h2 className="card-title">Title</h2>
            <p className="card-text">Random image from picsum</p>
        </div>
    );
}

export default Card;