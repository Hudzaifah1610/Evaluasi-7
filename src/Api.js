import React from "react";
import axios from "axios";
import "./Style.css";

export default class Api extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get(`https://api.rss2json.com/v1/api.json?rss_url=http://rss.detik.com/`)
      .then(res => {
        const { items } = res.data;
        delete items[0];
        delete items[1];
        delete items[2];
        delete items[3];
        delete items[4];
        delete items[5];

        this.setState({ items });
      });
  }

  render() {
    return (
      <>
        {this.state.items.map(items => (
          <div className="luar">
            <div>
              <div>
                <img className="img-api" src={items.thumbnail} alt=""></img>
                {/* <p className="text">{items.title}</p> */}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
