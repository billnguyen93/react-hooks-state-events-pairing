import {useState} from "react"

function VideoDetails({title, viewCount, createdAt, userUpvotes, userDownvotes, commentCount, clickHandler}) {
    
    const [upvotes, setUpvotes] = useState(userUpvotes)
    const [downvotes, setDownvotes] = useState(userDownvotes)
    const [comments, setComments] = useState(false)
   
    function handleUpvote() {
        setUpvotes((currentUpvotes) => currentUpvotes + 1)
    }

    function handleDownvote() {
        setDownvotes((currentDownvotes) => currentDownvotes + 1)
    }

    function handleClick() {
        setComments((comments) => !comments)
        
    }

    

    
    
    return (
       <div> 
        <h1>{title}</h1>
        <p>{viewCount} Views | Uploaded {createdAt}</p>
        <button onClick={handleUpvote}>{upvotes} 👍</button>
        <button onClick={handleDownvote}>{downvotes} 👎</button>
        <br></br>
        <br></br>
        <button onClick={clickHandler} handleClick={handleClick}>{comments ? "Show Comments" : "Hide Comments"}</button>
        <h3>{commentCount} Comments</h3>
    </div>
    )

}
export default VideoDetails