import { useState, useEffect } from 'react';

function MyProfile() {
    const [userData, setUserData] = useState({
        username: 'username',
        password: 'myPa$$w0rd',
    })
    const [editPassword, setEditPassword] = useState(false)

    useEffect(() => {
        console.log(userData)
    })

    const ShowUserData = () => {

        return (
            <div>
                <div className='text-center'>
                    Personal Information
                </div>
                <div style={{ width: '150px' }} className='text-center mx-auto'>
                    <img src='./profile/profile.webp' alt='profile-pic' className='rounded mx-auto d-block img-fluid img-thumbnail' />
                </div>
                <hr />
                <div className='row py-1'>
                    <div className='col text-center'>
                        Username
                    </div>
                    <div className='col text-center'>
                        <div>
                            {userData.username}
                        </div>
                    </div>
                </div>
                <div className='row py-1'>
                    <div className='col text-center'>
                        Password
                    </div>
                    <div className='col text-center'>
                        {
                            editPassword ?
                                <div>
                                    <form className="row g-2" method='post' action='/updatePassword'>
                                        <div className="col-auto">
                                            <input type="password" className="form-control" id="inputPassword2" defaultValue={userData.password} />
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-3 ">Confirm</button>
                                        </div>
                                    </form>
                                </div>
                                :
                                <div>
                                    {userData.password}
                                    <button type='button' className='btn btn-primary ms-2'
                                        onClick={() => setEditPassword(true)}>Edit</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className='container-md'>
            <div className='mw-100 p-2'>
                <ShowUserData />
                <hr />
                <div className='text-center'>
                    Favourite Movies List
                </div>
                <hr />
                <div>
                    Component from Sai
                </div>
                <hr />
                <div className='text-center'>
                    Watching Movies List
                </div>
                <hr />
                <div>
                    Component from Sai
                </div>
            </div>
        </div>
    )
} export default MyProfile;