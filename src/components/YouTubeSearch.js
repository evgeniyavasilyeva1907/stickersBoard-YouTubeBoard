import React, { useState } from 'react';

function YouTubeSearch({ getVideoInfo }) {
    const [searchText, setSearchText] = useState('')
    const getVideo = () => {
        let text = searchText.trim().split(' ').join('_');
        getVideoInfo(text)
    }
    return (
        <div >
            <div className='youtubesearch'>
                <input onChange={(e) => setSearchText(e.target.value)} value={searchText}></input>
                <button onClick={getVideo}>Искать</button>
            </div>

        </div>
    )
}



export default YouTubeSearch;