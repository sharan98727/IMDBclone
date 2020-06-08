import React from 'react'

import '../bootstrap-4.0.0/bootstrap-4.0.0/dist/css/bootstrap.min.css'
import '../components/search.css'
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'


class search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isData:false,
      query : "",
      url:"https://api.themoviedb.org/3/search/movie",
      api : "489807c43664b9f441a43b7d1ce59dda",
      data:[],
      payload : []
      
      
    }
  }

   

  handleChange= (e) => {
   
    this.setState({
      query:e.target.value
    })
  }
     
    
     
   
   getData = (query) => {
    fetch(`${this.state.url}?api_key=${this.state.api}&query=${query}`).then(response => response.json()).then(data => {
      console.log(data.results);
      this.props.dispatch({
        type:'SD',
        payload:data.results
      })
      this.setState({
        data:data.results,
        isData : true
        
      })
      
     
    

})
   }

  render() {

    
    if(this.state.isData) {
    
    return <Redirect to="/searchbar" />
    }
        
      
    
    
    
    

    return (
        <div>
          
  
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">ALL</span>
      </div>
      <div>
      <input value={this.state.query} type="text" class="form-control" placeholder="Search Movie" onChange={this.handleChange}  />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.getData(this.state.query)}>Search</button>
      </div>
                    
                
      
        
      
    </div>
  
        </div>
    )
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch : dispatch

    }
  };


export default connect(mapDispatchToProps)(search);
