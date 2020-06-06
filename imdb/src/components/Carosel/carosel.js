import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
//import imag1 from '../card/cardimages/card1.jpg'
import './style.css'







 class Carosel extends Component {
    render() {
        
        return (
            <div>
                <Carousel interval = "1000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
      alt="First slide"
     
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2522654/pexels-photo-2522654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2522661/pexels-photo-2522661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
export default Carosel;