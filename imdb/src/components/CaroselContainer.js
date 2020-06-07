import React from 'react'
import '../bootstrap-4.0.0/dist/css/bootstrap.min.css'
import Carosel from './Carosel/carosel'
import Card from '../components/cards/Home'
import Footer from '../components/footer/foot'
import Landing from '../components/Landpage/landingpage'


export default function ccc() {
    return (
        <div>
            <div className="container-fluid" width="100%">
            <div className="row mt-3 mb-3 ml-4 mr-4" >
            <div className ="col-md-12">
                    <Landing />
                    </div>
                </div>
                <div className="row mx-10">
                <div className ="col-md-6">
                <Carosel />
                    </div>
                </div>
                <div className = "row">
                    <div className ="col-md-12">
                        
                        <Card />
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
