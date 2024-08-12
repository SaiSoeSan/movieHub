//import { React, useEffect, useState } from 'react'
//import {useNavigate} from 'react-router-dom';
import './Detail.css'
import backgroundImage from '../Detail/T2.webp';
import React, {useState,useEffect} from 'react';

export default function Detail(){

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
    cast: []});

    useEffect(()=>{
        try {
            const fetchdata = async ()=>{
                const response = await fetch('http://localhost:8000/api/movie/detail');
                const result = await response.json();
                console.log(result);
                setMovie(result);
            }
            fetchdata();
        } catch (error) {
            console.log(error);
        }
    },[]);


    return (
        <div style={{backgroundColor:'black'}}>
            <div style={{
                display:'grid', 
                gridTemplateColumns:'2fr 3fr', 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize:'cover',
                width:'100%'}}>
                <div style={{marginTop:'80px', color:'white', padding:'50px'}}>
                    {/* <div><h1 style={{display:'inline-block', borderBottom:'2px solid white'}}>{movie.mainMovieName}</h1></div>
                    <div><h3>{movie.subMovieName}</h3></div> */}
                    <div style={{
                        fontFamily: '"Arial Black", Gadget, sans-serif',}}>
                        <div style={{textShadow: '1px 1px 2px red'}}>
                            <h1 style={{display:'inline-block', borderBottom:'6px solid white', textShadow: '1px 1px 2px red'}}>{movie.mainMovieName}</h1>
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
                        <div style={{display:'flex', border:'1px solid white', width:'20px', height:'20px', justifyContent:'center', alignItems:'center'}}>{movie.rating}</div>
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