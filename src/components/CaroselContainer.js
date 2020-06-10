import React from 'react'
import '../bootstrap-4.0.0/dist/css/bootstrap.min.css'
import Carosel from './Carosel/carosel'
import Card from '../components/cards/Home'
import Footer from '../components/footer/foot'
import Landing from '../components/Landpage/landingpage'
import {Badge} from 'react-bootstrap'




export default function ccc() {
    return (
        <div>
            <div className="container-fluid" width="100%">
            <div className="row mt-5 mb-5 ml-5 mr-5" >
            <div className ="col-md-12">
                    <Landing />
                    </div>
                </div>
                <div className="row mx-3 my-3">
                        
                    <h1>
     <Badge variant="warning">Featured today</Badge>
  </h1>
                    </div>
                <div className="row mx-10">
                <div className ="col-md-6">
                <Carosel page="1"/>
                    </div>
                    <div className ="col-md-6">
                <Carosel page="4"/>
                    </div>
                </div>
                <div className="row mx-3 my-3">
                        
                    <h1>
     <Badge variant="warning">Explore what’s streaming</Badge>
  </h1>
                    </div>
                <div className = "row">
                    <div className ="col-md-12">
                        
                        <Card />
                    </div>
                    </div>
                    <div className="row mx-3 my-3">
                        
                    <h1>
     <Badge variant="warning">Trending Movies</Badge>
  </h1>
                    </div>
                    
                    <div className="row mx-20">
                <div className ="col-md-4">
                <Carosel page="2"/>
                    </div>
                    <div className ="col-md-4">
                <Carosel page="3"/>
                    </div>
                    <div className ="col-md-4">
                <Carosel page="5"/>
                    </div>
                </div>

                <div className="row mx-3 my-3">
                        
                    <h1>
     <Badge variant="warning">More to explore</Badge>
  </h1>
                    </div>

                    <div className="row mx-20">
                <div className ="col-md-4">
                <Carosel page="6"/>
                    </div>
                    <div className ="col-md-4">
                <Carosel page="1"/>
                    </div>
                    <div className ="col-md-4">
                <Carosel page="8"/>
                    </div>
                </div>

               
                       
                   
                    

                    <div className="row mt-15">
                    <div className ="col-md-12">
                    <Footer />
                    </div>
                </div>
                    
                </div>
            </div>
            
      
    )
}
