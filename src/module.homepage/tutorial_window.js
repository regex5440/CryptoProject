import "./module.style/tutorial_window.sass";
import React from "react";

function TutorialWindow(prop) {
  var props = prop.data;
  console.log(props);
  return (
    <div className="tutorial_window">
      <div className="tutorial_col-left">
        <div className="coin_brand">
          <img src={props.logo_url} alt={props.id + " Logo"} />
          <h2>{props.name}</h2>
          <span>({props.currency})</span>
        </div>
        <div className="coin_metadata">
          Market Cap: Rs. {Number(props.market_cap).toLocaleString()}
          <br />
          Supply:{" "}
          <strong>{Number(props.circulating_supply).toLocaleString()}</strong>
          {props.max_supply !== undefined && (
            <span>
              {" "}
              out of
              <strong> {Number(props.max_supply).toLocaleString()}</strong>
            </span>
          )}
        </div>
      </div>
      <div className="tutorial_col-right">
        <div className="coin_price">
          Rs. {Number(Number(props.price).toFixed(2)).toLocaleString()}
        </div>
        <sub>
          as on{" "}
          <strong>
            {new Date(props.price_timestamp).toLocaleTimeString()}
          </strong>
        </sub>
      </div>
    </div>
  );
}

export default TutorialWindow;
