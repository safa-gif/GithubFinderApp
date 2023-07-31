import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar"></div>
                <div className="rounded-full shadow w-14 h-14">
                    <img src={avatar_url} alt="loading the avatar of the user" />
                </div>
            </div>
        </div>
        <div>
            <h2 className="card-title">
            {login}
            <Link className='text-base-content text-opacity-40' to={`/users/${login}`}>Visit Profile</Link>
            </h2>
        </div>
    </div>
  )
}

UserItem.proTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
