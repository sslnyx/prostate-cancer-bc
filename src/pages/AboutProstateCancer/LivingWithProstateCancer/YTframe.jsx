import { useEffect, useState } from "react";

const YTframe = ({ videoId }) => {
  const [apiLoaded, setApiLoaded] = useState(false);

  const loadVideo = () => {
    // const { id } = this.props;
    // the Player object is created uniquely based on the id in props

    if (window.YT) {
      const player = new window.YT.Player(`youtube-player-${videoId}`, {
        videoId,
        events: {
          onReady: onPlayerReady(),
        },
      });
    }
  };

  const onPlayerReady = (event) => {
    // event.target.playVideo();
  };

  useEffect(() => {
    // On mount, check to see if the API script is already loaded
    // console.log(window.YT)

    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // setApiLoaded(true);

      // console.log(apiLoaded);

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo();
      // console.log(window.onYouTubeIframeAPIReady)
    } else {
      console.log("this run")
      // If script is already there, load the video directly
      loadVideo();
    }
  }, [window]);

  return <div id={`youtube-player-${videoId}`}></div>;
};

export default YTframe;
