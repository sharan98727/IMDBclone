import React, { Component } from 'react'
 import '../bootstrap-4.0.0/dist/css/bootstrap.min.css'
 import {connect} from 'react-redux'

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
          const d = this.state.data.map((d1,i) => {
              return <div>
              <div className="container">
              <div className="row">
              <div className="col-sm-4">
                      <div className="card">
                      
                          <div className="card-head">
                              <img src={`${this.state.url}${d1.poster_path}`} alt="ss" width="100%" height="300px" />
                          </div>
                          <div className="card-body">
          <h2 className="card-title">{d1.original_title}</h2>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          </div>
          })
          
                return <div>
                      {d}
        </div>

            
    }
    
}

    const mapStateToProps = (state) => {
         
        return {
            data1:state.data
              }
          }
        

   export default connect(mapStateToProps)(SearchBar)