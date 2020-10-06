import React, { useState } from 'react';
import { connect } from 'react-redux';
import color from '../utils/color'

function First({ newChange, getJoke }) {

    const [text, setText] = useState('')
    const [err, setErr] = useState()
  

    const click = () => {
        if (text) {
            const sticker = {
                text: text.trim(),
                color: color(),
                favorite: false,
                starClass: 'far fa-star',
            }
            newChange(sticker)
            setText('');
            setErr('')
        }
        else { setErr('Заполните поле ввода') }
    }

    const clickSaga =() =>{
            getJoke()
            setText('');
            setErr('')
    }

    return (
        <div>
            <div className='info'>
            <input type="text" id='text' onChange={(e) => setText(e.target.value)} value={text}></input>
            <label htmlFor='text'>{err}</label>
            <button onClick={click}>Add sticker</button>
            <button onClick={clickSaga} >Get Joke</button>
            
        </div>
        </div>
        
    )
}


const mapDispatchToProps = dispatch => {
    return {
        newChange: (sticker) => dispatch({
            type: 'STICKERS/NEW_STICKER',
            payload: {
                value: sticker
            }
        }),
        getJoke: () => dispatch({
            type:'FETCHED_SAGA'
        })
    }
}

export default connect(
    null,
    mapDispatchToProps)(First);
