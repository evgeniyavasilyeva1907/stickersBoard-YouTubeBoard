import React from 'react';
import { connect } from 'react-redux';
import YouTubeSearch from '../components/YouTubeSearch';
import YouTubeBoard from '../components/YouTubeBoard'

function YouTubePage({ getYouTubeVideo, video }) {

    const getVideoInfo = (text) => {
        getYouTubeVideo(text)
    }
    return (
        <div>
            <YouTubeSearch
                getVideoInfo={getVideoInfo}
            />
            <YouTubeBoard
                video={video}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        video: state.videoReducer.videoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getYouTubeVideo: (searchText) => dispatch({
            type: 'VIDEO/FETCHED_SAGA',
            payload: searchText
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YouTubePage)