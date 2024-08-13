import Slider from "react-slick";

const MovieList = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  return (
    <div>
      <h5 className="mt-4 mb-4">{props.title ? props.title : 'Exciting Movies'}</h5>
      <Slider {...settings}>
        <div>
          <img src="../../images/movie1.jpg" alt="" />
          <h6 className="movieTitle text-center">Terminator 2: Judgment Day</h6>
        </div>
        <div>
          <img src="../../images/movie2.jpg" alt="" />
        </div>
        <div>
          <img src="../../images/movie3.jpg" alt="" />
        </div>
        <div>
          <img src="../../images/movie4.jpg" alt="" />
        </div>
        <div>
          <img src="../../images/movie5.jpg" alt="" />
        </div>
        <div>
          <img src="../../images/movie6.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default MovieList;
