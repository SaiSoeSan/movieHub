//import { React, useEffect, useState } from 'react'
//import {useNavigate} from 'react-router-dom';
import './Detail.css'
//import backgroundImage from '../Detail/paw.png';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

// const Detail = ()=>{
//     const { id } = useParams();
//     return (
//         <div>
//             {id};
//         </div>
//       );
// }

export default function Detail(){

    const { _id } = useParams();


    const [movie, setMovie] = useState({    mainMovieName: '',
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
    movieId:''});

    useEffect(()=>{
        try {
            const fetchdata = async ()=>{
                const response = await fetch(`http://localhost:8000/api/movie/detail/${_id}`);
                const result = await response.json();
                console.log(result);
                setMovie(result);
            }
            fetchdata();
        } catch (error) {
            console.log(error);
        }
    },[]);

    const backgroundImage = movie ? `../../images/back${movie.movieId}.jpg` : null;
    

    return (
        <div style={{backgroundColor:'black'}}>
            <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand p-0" href="/">
            <img src="/images/logo.png" alt="" width="110px" height="60px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          </div>
        </div>
      </nav>
            <div style={{
                display:'grid', 
                gridTemplateColumns:'2fr 3fr', 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize:'cover',
                width:'100%',
                height:'600px'}}>
                <div style={{marginTop:'80px', color:'white', padding:'50px'}}>
                    {/* <div><h1 style={{display:'inline-block', borderBottom:'2px solid white'}}>{movie.mainMovieName}</h1></div>
                    <div><h3>{movie.subMovieName}</h3></div> */}
                    <div style={{
                        fontFamily: '"Arial Black", Gadget, sans-serif',}}>
                        <div style={{textShadow: '1px 1px 2px red'}}>
                            {/* <h1 style={{display:'inline-block', borderBottom:'6px solid white', textShadow: '1px 1px 2px red'}}>{movie.mainMovieName}</h1> */}
                            <h1>{movie.mainMovieName}</h1>
                        </div>
                        <div style={{ textShadow: '1px 1px 2px red' }}>
                            <h2>{movie.subMovieName}</h2>
                        </div>
                    </div>
                    <div style={{marginTop:'50px', display:'flex', gap:'10px', fontSize:'22px'}}>
                        <label>{movie.mainMovieName}:</label>
                        <label>{movie.subMovieName}</label>
                    </div>
                    <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                        <div>{movie.releaseYear}</div>
                        <div className='rightborder'></div>
                        <div style={{display:'flex', border:'1px solid white', justifyContent:'center', alignItems:'center', paddingLeft:'4px', paddingRight:'4px'}}>{movie.rating}</div>
                        <div className='rightborder'></div>
                        <div>{movie.times}</div>
                        <div className='rightborder'></div>
                        <div>{movie.genres[0]}</div>
                    </div>
                    <div style={{marginTop:'20px'}}>{movie.description}</div>
                    <div style={{marginTop:'20px', display:'flex', gap:'5px'}}>
                        <div>Starring:</div>
                        <div>{movie.mainCast.join(', ')}</div>
                    </div>
                </div>
                <div>{/* 2nd col */}</div>
            </div>
            <div style={{color:'white', padding:'50px'}}>
                <div style={{fontSize:'26px', marginTop:'30px', marginBottom:'10px'}}>More Details</div>
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
                <div className='columntitle' style={{marginTop:'20px'}}>Cast</div>
                <div className='gridcolumn'>
                    {movie.cast.map((actor)=>(<div>{actor}</div>))}
                </div>
            </div>


        </div>
    );
}