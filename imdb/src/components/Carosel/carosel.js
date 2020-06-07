import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
//import imag1 from '../card/cardimages/card1.jpg'
import './style.css'







 class Carosel extends Component {
   constructor(props) {
       super(props)
       this.state = {
         moviedata : []
       }
   }

  componentDidMount()
  {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=489807c43664b9f441a43b7d1ce59dda&Language=en-US&page=1").then(response => response.json()).then(data => {
      console.log(data.results[0].poster_path)
    
      this.setState({
        moviedata : data.results,
        url:"https://image.tmdb.org/t/p/w300"
      })
    })
  }
    render() {
      var {url} = this.state
      var {moviedata} = this.state
     
        return (
            <div>
                <Carousel interval = "1000">

                  {moviedata && moviedata.map((movie,i) => {
                    return <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src= {movie.poster_path && `${url}${movie.poster_path}`}
                      alt="First slide"
                     
                    />
                    
                  </Carousel.Item>
                  })}
  
  
  
</Carousel>
            </div>
        )
    }
}
export default Carosel;