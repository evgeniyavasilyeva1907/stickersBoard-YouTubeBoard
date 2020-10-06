const videoList =[]; 
const initialState = { videoList }

function videoReducer(state = initialState, action) {
    switch (action.type) {
    case 'VIDEO/NEW_VIDEOLIST':
        return{...state, videoList: action.payload.value}
        default:
            return state
}
}

export default videoReducer;