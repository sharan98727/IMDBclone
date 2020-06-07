import React from "react";
import { connect } from "react-redux";

class Watchlist extends React.Component {

 render(){
    let watchList = this.props.watchlist.map(state => {
        return (
           <div> 
          <h1 key={state}>{state}</h1>
          <h2 key={state}>{state.title}</h2>
         
            </div>


        );
      });

      return (
        <div >

            <div >{watchList}</div>
    
        
          </div>
        );
      }

    }
const mapStateToProps = state => {
    return {
      watchlist: state.Watchlist,
    };
  };
  

export default connect(mapStateToProps)(Watchlist);