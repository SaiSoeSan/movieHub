import { useState, useEffect, useRef } from 'react';
import MovieList from '../components/MovieList';
import * as authService from '../LoginSignup/AuthService'

function MyProfile() {
    const updatePassword = useRef();
    const [userData, setUserData] = useState({})
    const [editPassword, setEditPassword] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'email': authService.loggedInUserInfo.get().email })
                })
                const result = await response.json();
                setUserData(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        const fetchFavorite = async () => {
            try {
                const response = await fetch('http://localhost:8000/favorite', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'email': authService.loggedInUserInfo.get().email })
                })
                const result = await response.json();
                setFavorite(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
        fetchFavorite();
    }, [editPassword])
    const editPasswordButton = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/updatePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'userData': userData, 'updatePassword': updatePassword.current.value })
        })
        const result = await response.json();
        if (result['update'] === 'completed') {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 1500);
        }
        setEditPassword(false)
    }
    const ShowUserData = () => {

        return (
            <div>
                {showAlert && <div className="alert alert-success">Password has been updated!</div>}
                <div className='text-center h3'>
                    Personal Information
                </div>
                <div style={{ width: '150px' }} className='text-center mx-auto'>
                    <img src='../../profile/profile.webp' alt='profile-pic' className='rounded mx-auto d-block img-fluid img-thumbnail' />
                </div>
                <hr />
                <div className='row py-1'>
                    <div className='col text-center'>
                        Email
                    </div>
                    <div className='col text-center'>
                        <div>
                            {userData.email}
                        </div>
                    </div>
                </div>
                <div className='row py-1'>
                    <div className='col text-center'>
                        Name
                    </div>
                    <div className='col text-center'>
                        <div>
                            {userData.name}
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
                                <div className='row'>
                                    <div className='col-4'></div>
                                    <div className="col-4">
                                        <input type="password" className="form-control" id="inputPassword2" defaultValue={userData.password} ref={updatePassword} />
                                    </div>
                                    <div className="col-2">
                                        <button type="submit" className="btn btn-primary mb-3 " onClick={editPasswordButton}>Confirm</button>
                                    </div>
                                </div>
                                :
                                <div>
                                    {/* {'*'.repeat(userData.password.length)} */}
                                    *****
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
                {favorite.length === 0 ?
                    <div className='h3'>
                        No Favorite Movie
                    </div>
                    :
                    <div>
                        <MovieList movies={favorite} title='My Favorite Movies' />
                    </div>}
                <hr />
            </div>
        </div>
    )
} export default MyProfile;