import React, {useState} from "react";
import video from "../data/video.js";
import Video from "./Video"
import VideoDetails from "./VideoDetails"
import VideoComments from "./VideoComments";


function App() {

    const [isVisible, setIsVisible] = useState(true)

    function clickHandler() {
      setIsVisible((isVisible) => !isVisible)
    }

  return (
    <div className="App">
      <Video video={video}/>
      <VideoDetails 
      title={video.title}
      viewCount={video.views}
      createdAt={video.createdAt}
      userUpvotes={video.upvotes}
      userDownvotes={video.downvotes}
      clickHandler={clickHandler}
      commentCount={video.comments.length}
      />
      {isVisible ? <VideoComments comments={video.comments}/> : null}
    </div>
    
  );
}

export default App;
