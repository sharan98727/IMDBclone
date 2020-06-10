import React, { Component } from 'react'
import '../../bootstrap-4.0.0/dist/css/bootstrap.min.css';
import './landpage.css';

 class Landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/18?api_key=489807c43664b9f441a43b7d1ce59dda").then(Response => Response.json()).then(data =>{
           console.log(data) ;
           
           
          this.setState({
              data:data,
              url:"https://image.tmdb.org/t/p/w500"
          })
    }
            )
    }
    render() {
        var {url} = this.state
        var {poster_path} = this.state.data
        return (
            <div>
                
                <div className="card   bg-dark  text-white" width="100%">
                   <div className="card-head">
                <img src = {`${url}${poster_path}`}  width="100%" height="300px"  alt="shhhh" />
            </div>
               <div className="card-body">
        <h3>{this.state.data.title}</h3>
        <p>{this.state.data.overview}</p>
               </div>
            </div>
            </div>
            
        )
    }
}
export default Landingpage;