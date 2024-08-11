//import { React, useEffect, useState } from 'react'
//import {useNavigate} from 'react-router-dom';
import React, {useState,useEffect} from 'react';

export default function Detail(){

    const [movie, setMovie] = useState({});

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
        <>
        <div style={{display:'grid', gridTemplateColumns:'2fr 3fr'}}>
            <div style={{padding:'50px'}}>
                <div><h1 style={{display:'inline-block', borderBottom:'2px solid black'}}>{movie.mainMovieName}</h1></div>
                <div><h3>{movie.subMovieName}</h3></div>
                <div style={{marginTop:'50px', display:'flex', gap:'10px', fontSize:'22px'}}>
                    <label>{movie.mainMovieName}:</label>
                    <label>{movie.subMovieName}</label>
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>{movie.releaseYear}</div>
                    <div style={{display:'inline-block', borderRight:'1px solid black'}}></div>
                    <div style={{display:'flex', border:'1px solid black', width:'20px', height:'20px', justifyContent:'center', alignItems:'center'}}>{movie.rating}</div>
                    <div style={{display:'inline-block', borderRight:'1px solid black'}}></div>
                    <div>{movie.times}</div>
                    <div style={{display:'inline-block', borderRight:'1px solid black'}}></div>
                    <div>{movie.genres[0]}</div>
                </div>
                <div style={{marginTop:'20px'}}>{movie.description}</div>
                <div style={{marginTop:'20px', display:'flex', gap:'5px'}}>
                    <div>Starring:</div>
                    <div>{movie.mainCast.join(', ')}</div>
                    {/* {movie.mainCast.map((actor)=>(<div>{actor} ,</div>))} */}
                </div>
            </div>
            <div>{/* 2nd col */}</div>
        </div>
        
        </>
    );
}