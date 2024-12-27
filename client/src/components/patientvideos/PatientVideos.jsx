import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './PatientVideos.css';

const PatientVideos = () => {
  // Sample list of YouTube video URLs (You can replace with your own URLs)
  const videoList = [
    { id: 1, title: "Video 1", url: "https://youtu.be/8XeSb-2nl6k?si=IFLb2EWJ6n4c_uDn" },
    { id: 2, title: "Video 3", url: "https://youtu.be/0zFmLOjeR18?si=VX2-VIbOTnPrka-q" },
    { id: 3, title: "Video 4", url: "https://youtube.com/shorts/9rMiiC_EfYI?si=c6xT0iX2lTnBik-w" },
    { id: 2, title: "Video 3", url: "https://youtu.be/0zFmLOjeR18?si=VX2-VIbOTnPrka-q" },
    { id: 3, title: "Video 4", url: "https://youtube.com/shorts/9rMiiC_EfYI?si=c6xT0iX2lTnBik-w" },
    { id: 3, title: "Video 4", url: "https://youtube.com/shorts/9rMiiC_EfYI?si=c6xT0iX2lTnBik-w" }
  ];

  return (
    <div className="video-player-container">
      <h1>Patient <span style={{ color: 'orange'}}>Videos </span> ( रुग्णाचे व्हिडिओ )</h1>
      <div className="video-thumbnails">
        {videoList.map((video) => (
          <div key={video.id} className="video-thumbnail">
            {/* <h3>{video.title}</h3> */}
              <ReactPlayer
                url={video.url}
                playing={true}
                controls={true}
                width="100%"
                // height="500px" 
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientVideos;

