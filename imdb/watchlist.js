import React from "react";
import { connect } from "react-redux";
import { render } from "@testing-library/react";

const Watchlist = () => {

 render()
    let watchList = this.props.watchlist.map(id => {
        return (
            
          <h1 key={id}>{id}</h1>

        );
      });

      return (
        <div >

            <div className="box">{watchList}</div>
    
        
          </div>
        );
      }


const mapStateToProps = state => {
    return {
      watchlist: state.Watchlist,
    };
  };
  

export default connect(mapStateToProps)(Watchlist);