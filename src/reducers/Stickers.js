
const stickersList = [];


let counter = stickersList.length;
const initialState = { stickersList };

function stickersReducer(state = initialState, action) {
    switch (action.type) {

        case 'STICKERS/NEW_STICKER':
            counter++;
            let copyStateSkickersList = [...state.stickersList];
            let obj = action.payload.value;
            obj['id'] = counter
            copyStateSkickersList.push(obj)
            return { ...state, stickersList: copyStateSkickersList };

        case 'STICKERS/STICKER_REMOVE':
            const newState = state.stickersList.filter(e => e.id !== action.payload.value);
            return { ...state, stickersList: newState };

        case 'STICKERS/STICKER_EDIT':
            const copyState = state.stickersList.map((sticker, index) => {
                if (sticker.id === action.payload.value) {
                    sticker.text = action.payload.text
                }
                return sticker
            })

            return { ...state, stickersList: copyState }

        case 'STICKERS/STICKER_FAVORITE':
            const favoriteState = state.stickersList.map((sticker, index) => {
                if (sticker.id === action.payload.value) {
                    sticker.favorite = (!sticker.favorite)
                }
                if(sticker.favorite){
                    sticker.starClass='fas fa-star'
                }
                else sticker.starClass='far fa-star'
                return sticker
            })
            return { ...state, stickersList: favoriteState }

        default:
            return state
    }
}

export default stickersReducer;