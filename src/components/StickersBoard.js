import React from 'react';
import Sticker from './Sticker';



function StickersBoard(props) {
    const { stickers, remove, edit, setFavorite } = props;
  
    return (
        <div className='stickersBoard'>
            {stickers.map((sticker, index) => {
                return (
                    <Sticker key={index}
                        edit={edit}
                        remove={remove}
                        id={sticker.id}
                        text={sticker.text}
                        color={sticker.color}
                        stickerFav={sticker.favorite}
                        favorite={setFavorite}
                        starClass={sticker.starClass}>
                    </Sticker>

                )
            })}
        </div>
    )
}



export default StickersBoard
