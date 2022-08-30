import React, { useContext } from 'react'
import { AppContext } from '../App'
import Del from '../assets/del.png'
import UserLogo from '../assets/user.png'

export const Search = () => {
    const { searchData } = useContext(AppContext)

    return (
        <div className='home-wrapper'>
            {searchData.length === 0 && <h1 style={{textAlign: 'center'}}>Your Search is not match...sir</h1>}
            {searchData.map(data => (
                <div key={data.id} className="posts">
                    <div className='user-info'>
                        <img src={UserLogo} />
                        <div className="user-name">
                            <span>Myat Ko Ko</span>
                        </div>
                    </div>
                    <div className="description">
                        {data.description}
                    </div>
                </div>
            ))}
        </div>
    )
}
