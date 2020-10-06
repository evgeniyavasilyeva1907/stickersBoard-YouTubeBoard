import React, { useEffect, useState } from 'react';

function YouTubeBoard({ video }) {
    const [videoId, setVideoId] = useState();
    let url = `https://www.youtube.com/embed/${videoId}`

    useEffect(() => { if (video.length) setVideoId(video[0].id) }, [video])
    return (
        <div className='video'>
            <div className='youtube'>
                {video.length ? (
                    <iframe width="560" height="315" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                ): null}</div>
            <div className='preview'>
                {video.map((video, index) => {
                    return (
                        <img src={video.url} key={index} onClick={() => setVideoId(video.id)}></img>
                    )
                })}
            </div>

        </div>
    )
}

export default YouTubeBoard;