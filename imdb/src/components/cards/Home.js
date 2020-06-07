import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Home extends Component {
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
          </div>
        </div>
      );
    });
    return (
      <div >
        <h3 className="sha" style={{color:"white"}}>Fan favorites</h3>
        <h4 > This week's top TV and movies </h4>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Home);
