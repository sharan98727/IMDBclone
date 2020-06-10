import React, { Component } from 'react'
 import '../bootstrap-4.0.0/dist/css/bootstrap.min.css'
 import {connect} from 'react-redux'
 import {Card,Button} from 'react-bootstrap'

 class SearchBar extends Component {
     constructor(props) {
         
        super(props);
        this.state = {
            data:props.data1,
            url:"https://image.tmdb.org/t/p/w300"
           
        }
     }


     
     
    
    render() {
          console.log(this.state.data)
         
              return (

                <div className="container">
                <div className="row">
                {this.state.data.map((d)=>{
                    return(
                        <div className="col-md-4">
                          <Card width="100px" height="100px">
                        <Card.Img variant="top"  src={d.poster_path && `${this.state.url}${d.poster_path}` } alt="no image" />
                        <Card.Body>
                            <Card.Title><p>{d.title}</p></Card.Title>
                        
                    <Button variant="primary">overview</Button>
                        </Card.Body>
              
                        </Card>
                        </div>
                        
                        
            
                    )
                    
                    })}
                        
                   </div>
            
                    </div>
             
             
             
             
             
             
             
              )
                            
            
    }
    
}

    const mapStateToProps = (state) => {
         
        return {
            data1:state.data
              }
          }
        

   export default connect(mapStateToProps)(SearchBar)