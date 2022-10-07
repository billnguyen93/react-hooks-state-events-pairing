import VideoDetails from "./VideoDetails"
import VideoComments from "./VideoComments"


function Video({video}) {
    return (
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

    </div>
)
}

export default Video