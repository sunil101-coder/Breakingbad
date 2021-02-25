import React from 'react'

const characteritem = ({ item }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={item.img} alt="Avatar" className="card-img" />
                </div>
                <div className="flip-card-back">
                    <h1>Name:{item.name}</h1>

                    <ul>
                        <li>
                            <strong>Actor Name:</strong>{item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong>{item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong>{item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong>{item.status}
                        </li>
                        <li>
                            <strong></strong>
                        </li><li>

                        </li>
                    </ul>


                </div>
            </div>
        </div>
    )

}

export default characteritem
