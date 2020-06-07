import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Home extends Component {

  handleClick = id => {
    this.props.addToWatchlist(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img
              src={item.img}
              alt={item.title}
              width={200}
              height={300}
              mode="fit"
            />
            <div>{item.title}</div>
            <div>Rating:{item.rating}</div>
            <button onClick={() => {
                this.handleClick(item.id);
              }}
            >Add</button>
          </div>
        </div>
      );
    });

   

    return (
    <div style={{padding:15}}>
        
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
//first arguement passes the total state
const mapStateToProps = state => {
  return {
    items: state.items,  //but here we are taking only the items we require for this file
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToWatchlist: id => {
      dispatch({type: 'ADD_TO_WATCHLIST', payload: {id: id,}});
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);