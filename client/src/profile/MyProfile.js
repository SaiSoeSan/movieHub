import { useState, useEffect, useRef } from 'react';
import MovieList from '../components/MovieList';

function MyProfile() {
    const updatePassword = useRef();
    const [userData, setUserData] = useState({})
    const [editPassword, setEditPassword] = useState(false)
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/profile')
                const result = await response.json();
                setUserData(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [editPassword])
    useEffect(() => {
        console.log(userData)
    })
    const editPasswordButton = async (e) => {
        e.preventDefault();
        console.log(updatePassword.current.value)
        const response = await fetch('http://localhost:8000/updatePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'updatePassword': updatePassword.current.value })
        })
        const result = await response.json();
        if (result['update'] === 'completed') {
            // Alert('Update Completed');
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
                                    {/* <form className="row g-2" method='post' action='/updatePassword'> */}
                                    <div className="col-auto">
                                        <input type="password" className="form-control" id="inputPassword2" defaultValue={userData.password} ref={updatePassword} />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary mb-3 " onClick={editPasswordButton}>Confirm</button>
                                    </div>
                                    {/* </form> */}
                                    
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
                {/* <div className='text-center h3'>
                    Favourite Movies List
                </div> */}
                <hr />
                <div>
                    <MovieList title='Favourite Movie List' />
                </div>
                {/* <div className='text-center h3'>
                    Watching Movies List
                </div> */}
                <hr />
                <div>
                    <MovieList title='Continue Watching' />
                </div>
            </div>
        </div>
    )
} export default MyProfile;