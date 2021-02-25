import React from 'react'
import Characteritem from './characteritem'
const charactergrid = ({ item, isloading, }) => {
    return isloading ? (<h1>loading...</h1>) :
        (
            <div className="cards">
                {item.map((item) => (
                    <Characteritem className="character-name" key={item.char_id} item={item}></Characteritem>

                ))
                }
            </div>

        )

}

export default charactergrid
