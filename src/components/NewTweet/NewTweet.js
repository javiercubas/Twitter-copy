import React from 'react';
import './NewTweet.css';

const NewTweet = () => {
  return (
    <div className="container-new-tweet">
        <img src="" alt="" className="avatar-new-tweet" />
        <div className="right-new-tweet">
            <input type="text" placeholder="¿Qué está pasando?" className="text-new-tweet" />
            <div className="bottom-new-tweet">
                {/* Botones papra adjuntar archivos */}
                <input type="submit" value="Twittear" className="button-new-tweet" />
            </div>
        </div>
    </div>
  )
}

export default NewTweet