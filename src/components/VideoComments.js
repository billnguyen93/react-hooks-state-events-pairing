function VideoComments({comments}) {

    function renderComments() {
        return comments.map((comment) => 
        <div>
        <h2>{comment.user}</h2>
        <p>{comment.comment}</p>
        </div>
        )
    }
    
    return (
        <div>
        {renderComments()}
        </div>
    )
}

export default VideoComments