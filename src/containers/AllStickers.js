import React from 'react'
import { connect } from 'react-redux';
import StickersBoard from '../components/StickersBoard';
import First from '../components/First'

function Favorites(props) {

    const remove = (id) => {
        props.removeSticker(id)
    }
    const edit = (id, text) => {
        props.editSticker(id, text)
    }
    const setFavorite = (id) => {
        props.favoriteSticker(id)
    }
    return (
        <div>
            <First />
            <div >
                <StickersBoard 
                    stickers={props.stickers}
                    remove={remove}
                    edit={edit}
                    setFavorite={setFavorite} />
            </div>
        </div>

    )
}
const mapStateToProps = state => {
    return {
        stickers: state.stickersReducer.stickersList
    }
}
const mapDispatchToProps = dispatch => {

    return {
        removeSticker: (id) => dispatch({
            type: 'STICKERS/STICKER_REMOVE',
            payload: { value: id }
        }),
        editSticker: (id, text) => dispatch({
            type: 'STICKERS/STICKER_EDIT',
            payload: { value: id, text: text }
        }),
        favoriteSticker: (id) => dispatch({
            type: 'STICKERS/STICKER_FAVORITE',
            payload: { value: id }
        })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)
    (Favorites)