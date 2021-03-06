import React, {Component} from "react";
import {Link} from "react-router-dom";

class BranchShow extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="ShowBranch" style={{
              border: "2px solid white",
              padding: "10px",
              margin: "1rem",
              color: "rgba(240, 248, 255, 0.8)",
              boxShadow: "7px 10px 12px -5px rgba(255, 255, 255, 0.56)",
              backgroundColor: "black",
              borderRadius: "3px"
            }}>
              <img src={this.props.img} alt="feature branch"
                   style={{maxWidth: "100%", maxHeight: "100%"}}/>
              <Link to={this.props.path}
                    style={{color: "rgba(240, 248, 255, 0.8)"}}>
                <h1>{this.props.text}</h1></Link>
            </div>
          </div>
        </div>
    );

  }
}

export default BranchShow;