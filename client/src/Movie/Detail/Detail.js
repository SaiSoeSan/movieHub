//import { React, useEffect, useState } from 'react'
//import {useNavigate} from 'react-router-dom';
import './Detail.css'
import backgroundImage from '../Detail/1.jpg';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as authService from '../../LoginSignup/AuthService'

// const Detail = ()=>{
//     const { id } = useParams();
//     return (
//         <div>
//             {id};
//         </div>
//       );
// }

export default function Detail() {

    const { _id } = useParams();


    const [movie, setMovie] = useState({
        mainMovieName: '',
        subMovieName: '',
        releaseYear: '',
        rating: '',
        times: '',
        genres: [],
        description: '',
        mainCast: [],
        comment: [],
        audio: [],
        subtitles: [],
        cast: [],
        movieId: ''
    });
    const [isFavorite, setIsFavorite] = useState(false)
    const [id,setRefresh] = useState(false);

    const backgroundImage = movie ? `../../images/back${movie.movieId}.jpg` : null

    useEffect(() => {
        try {
            const fetchdata = async () => {
                const response = await fetch(`http://localhost:8000/api/movie/detail/${_id}`);
                const result = await response.json();
                //console.log(result);
                setMovie(result);
            }
            const fetchFavorite = async () => {
                const response = await fetch('http://localhost:8000/isFavorite', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'email': authService.loggedInUserInfo.get().email, 'movieId': _id })
                })
                const result = await response.json();
                setIsFavorite(result)
            }
            fetchdata();
            // fetchdata().then(window.scrollTo(0,0));
            fetchFavorite();

        } catch (error) {
            console.log(error);
        }
    }, []);



    const AddToFavorit = () => {
        return (
            <div className='mt-2'>
                <button type="button" className="btn btn-success" onClick={handleAddFavorite}>
                    Add&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </button>
            </div>
        )
    }

    const ShowFavorite = () => {
        return (
            <div className='mt-2'>
                <button type="button" className="btn btn-danger" onClick={handleRemoveFavorite}>
                    Remove&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                </button>
            </div>
        )
    }

    const handleAddFavorite = async () => {
        const response = await fetch('http://localhost:8000/addFavorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': authService.loggedInUserInfo.get().email, 'movieId': _id })
        })
        const result = await response.json();
        setIsFavorite(true);
    }

    const handleRemoveFavorite = async () => {
        const response = await fetch('http://localhost:8000/removeFavorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': authService.loggedInUserInfo.get().email, 'movieId': _id })
        })
        const result = await response.json();
        setIsFavorite(false);
    }

    const [showList, setshowList] = useState([{}]);


    const handleNavigate = (_id) => {
        console.log("new id", _id);
        window.location.href = `/movie/${_id}`;
    };

    useEffect(() => {
        try {
            const fetchdata = async () => {
                console.log(movie.genres);
                const response = await fetch(`http://localhost:8000/api/movies/genre/${movie.genres}`);
                const result = await response.json();
                console.log(result);

                setshowList(result.filter((film)=>film.movieId != movie.movieId));
            }
            if(movie.genres.length == 0){
                return;
            }
            fetchdata();
        } catch (error) {
            console.log(error);
        }
    }, [movie]);

    const [displayCount, setDisplayCount] = useState(4);
    const handleMoreClick = () => {
        setDisplayCount(prev => prev + 4); 
    };

        // Styled More Button component
        const StyledMoreButton = ({ onClick }) => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: '20px'
            }}>
                <button
                    onClick={onClick}
                    style={{
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        width: '200px'  // Fixed width
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                >
                    More ▼
                </button>
            </div>
        );


    return (
        <div style={{ backgroundColor: 'black' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 3fr',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                width: '100%',
            }}>
                <div style={{ marginTop: '80px', color: 'white', padding: '50px' }}>
                    {/* <div><h1 style={{display:'inline-block', borderBottom:'2px solid white'}}>{movie.mainMovieName}</h1></div>
                    <div><h3>{movie.subMovieName}</h3></div> */}
                    <div style={{
                        fontFamily: '"Arial Black", Gadget, sans-serif',
                        marginTop:'100px'}}>
                        <div style={{ textShadow: '1px 1px 2px red' }}>
                            {/* <h1 style={{display:'inline-block', borderBottom:'6px solid white', textShadow: '1px 1px 2px red'}}>{movie.mainMovieName}</h1> */}
                            <h1>{movie.mainMovieName}</h1>
                        </div>
                        <div style={{ textShadow: '1px 1px 2px red' }}>
                            <h2>{movie.subMovieName}</h2>
                        </div>
                    </div>
                    <div style={{ marginTop: '50px', display: 'flex', gap: '10px', fontSize: '22px' }}>
                        <label>{movie.mainMovieName}:</label>
                        <label>{movie.subMovieName}</label>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div>{movie.releaseYear}</div>
                        <div className='rightborder'></div>
                        <div style={{ display: 'flex', border: '1px solid white', justifyContent: 'center', alignItems: 'center', paddingLeft: '4px', paddingRight: '4px' }}>{movie.rating}</div>
                        <div className='rightborder'></div>
                        <div>{movie.times}</div>
                        <div className='rightborder'></div>
                        <div>{movie.genres[0]}</div>
                    </div>
                    <div style={{ marginTop: '20px' }}>{movie.description}</div>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
                        <div>Starring:</div>
                        <div>{movie.mainCast.join(', ')}</div>
                    </div>
                    <div style={{marginTop:'60px'}}>{isFavorite ? <ShowFavorite /> : <AddToFavorit />}</div>


                </div>
                <div>{/* 2nd col */}</div>
                <div style={{marginTop:'150px'}}></div>
                    </div>
            <div style={{ color: 'white', padding: '50px' }}>
                <div style={{ fontSize: '26px', marginTop: '30px', marginBottom: '10px' }}>More Details</div>
                <div className='gridcolumn'>
                    <div className='flexcolumn'>
                        <div className='columntitle'>Genres</div>
                        <div>{movie.genres.join(' Movies, ')} Movies</div>
                    </div>
                    <div className='flexcolumn'>
                        <div className='columntitle'>This movie is...</div>
                        <div>{movie.comment.join(', ')}</div>
                    </div>
                    <div className='flexcolumn'>
                        <div className='columntitle'>Audio</div>
                        <div>{movie.audio.join(', ')}</div>
                    </div>
                    <div className='flexcolumn'>
                        <div className='columntitle'>Subtitles</div>
                        <div>{movie.subtitles.join(', ')}</div>
                    </div>
                </div>
                <div className='columntitle' style={{ marginTop: '20px' }}>Cast</div>
                <div className='gridcolumn'>
                    {movie.cast.map((actor) => (<div>{actor}</div>))}
                </div>
                <div style={{marginTop:'200px', fontSize:'30px'}}>More Like This</div>
                <div className='gridcolumn' style={{gap:'10px'}}>
                {showList.slice(0, displayCount).map(movie => (
                    // <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
                    // <div onClick={() => handleNavigate(movie._id)} style={{ cursor: 'pointer' }}>
                    <div key={movie._id} onClick={() => handleNavigate(movie._id)} style={{ cursor: 'pointer' }}>
                        <img src={`../../images/movie${movie.movieId}.jpg`} alt={movie.mainMovieName} style={{height: '180px'}} />
                        <h6 className="movieTitle text-center">{movie.mainMovieName}</h6>
                    </div>
                ))}
                 {/* <button onClick={handleMoreClick} style={{ marginTop: '20px' }}>More</button> */}
                </div>
                {displayCount < showList.length && <StyledMoreButton onClick={handleMoreClick} />}
                
            </div>


        </div>
    );
}