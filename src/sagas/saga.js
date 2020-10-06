import { put, takeEvery, all} from "redux-saga/effects";
import axios from 'axios';
import color from '../utils/color'

export function* sagaWatcher() {
    yield all([
        takeEvery('FETCHED_SAGA', getJoke),
        takeEvery('VIDEO/FETCHED_SAGA', getVideo)
    ])
}

export function* getJoke() {
    try {
        const { data } = yield axios.get('https://api.chucknorris.io/jokes/random')
        let sticker = {
            text: data.value,
            color: color(),
            favorite: false,
            starClass: 'far fa-star'
        }

        yield put({
            type: 'STICKERS/NEW_STICKER',
            payload: { value: sticker }
        })

    }
    catch (error) {
        console.log('error')
    }
}

export function* getVideo(props) {
    try {
        const searchText = props.payload
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC_PBPP8twG5VKvMQ1EAnlq_H3t21A_kF0&q=${searchText}&type=video`
        const { data } = yield axios.get(URL)
        let video = data.items.map((item,) => {
            return ({ id: item.id.videoId, url: item.snippet.thumbnails.default.url })
        })
        yield put({
            type: 'VIDEO/NEW_VIDEOLIST',
            payload: { value: video }
        })
    }
    catch (error) {
        console.log('error')
    }

}