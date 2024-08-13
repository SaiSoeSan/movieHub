import Slider from "react-slick";
import { NextArrow, PrevArrow } from './CustomArrows'; 
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(4);
  const [totalPage, setTotalPage] = useState(0);

  const clickNextArrow =  (event)=>{
    console.log("next page", page);
    let boundPage = Math.floor((totalPage + pageSize - 1) / pageSize) ;
    console.log("bond", boundPage);
    if(page == boundPage -  2){
      setPage(0);
    }else{
      setPage(page + 1);
    }
  }
  const clickPrevArrow =  (event)=>{
    console.log("prev, page",page);
    let boundPage = Math.floor((totalPage + pageSize - 1) / pageSize) ;
    console.log("bond", boundPage);
    if(page == 0){
      setPage(boundPage - 1);
    }else{
      setPage(page - 1);
    }
  }

  const updatePageSize = ()=>{
    const width = window.innerWidth;
    if(width < 480){
      setPageSize(1);
    }else if (width >= 480 && width < 600){
      setPageSize(2);
    }else if (width >= 600 && width < 1024){
      setPageSize(3);
    }else{
      setPageSize(4);
    }
  };

  useEffect(()=>{
    updatePageSize();
    window.addEventListener("resize",updatePageSize);
    return ()=>{
      window.removeEventListener("resize",updatePageSize);
    };
  },[]);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={clickNextArrow}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={clickPrevArrow}
      />
    );
  }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: pageSize,
    slidesToScroll: pageSize,
    // nextArrow: <NextArrow onClick={() => setPage(page + 1)} />,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow  />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  useEffect(()=>{
    const fetchmovices = async()=>{
      const response = await fetch(`http://localhost:8000/api/movies?page=${page}&pageSize=${pageSize}`);
      const data = await response.json();
      setMovies(data);
      console.log(data);
    }
    fetchmovices();
  },[page]);

  useEffect(()=>{
    const fetchmovices = async()=>{
      const response = await fetch('http://localhost:8000/api/allmovies');
      const data = await response.json();
      console.log("total page",data);
      setTotalPage(data);
    }
    fetchmovices();
  },[]);

  const MovieItem = ({ movie }) => (
    <div>
      <Link to={`/movie/${movie._id}`}>
        <img src={`../../images/movie${movie.movieId}.jpg`} alt={movie.mainMovieName} />
        <h6 className="movieTitle text-center">{movie.mainMovieName}</h6>
      </Link>
    </div>
  );

  return (
    <div>
      <h5 className="mt-4 mb-4">Exciting Movies</h5>
      <Slider {...settings}>
        {/* {movies.map(movie => (
            <div key={movie._id}>
              <img src={`../../images/movie${movie.movieId}.jpg`} alt={movie.mainMovieName} />
              <h6 className="movieTitle text-center">{movie.mainMovieName}</h6>
            </div>
          ))} */}
        {movies.map(movie => (
          <MovieItem key={movie._id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
