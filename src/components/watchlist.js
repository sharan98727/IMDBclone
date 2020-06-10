import React from "react";
import { connect } from "react-redux";

class Watchlist extends React.Component {

  render() {
    let watchList = this.props.watchlist.map(item => {
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
          </div>
        </div>
      );
    });

    return (
      <div>{watchList}</div>
    )

  }
}

const mapStateToProps = state => {
    return {
      watchlist: state.Watchlist,
    };
  };
  

export default connect(mapStateToProps)(Watchlist);