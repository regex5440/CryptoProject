import React, { useRef, useEffect } from "react";
export default function Coin(coin) {
  const data = coin.data;
  const styler = {
    background: `url("${data.logo_url}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    transition: "5s ease-in",
  };
  const elem = useRef(null);
  useEffect(() => {
    if (data.id === "BTC") {
      elem.current.click();
    }
  }, [data.id]);
  const aboutFunction = () => {
    coin.getCoin(data);
  };
  return (
    <div className="coins" title={data.name} onClick={aboutFunction} ref={elem}>
      <div className="logo" style={styler}></div>
      <div className="content">
        <strong>
          {data.name} ({data.id})
        </strong>
        <div id="price">
          <strong>
            Rs. {Number(Math.abs(data.price).toFixed(4)).toLocaleString()}
          </strong>
        </div>
        <div id="rank">
          <small>Rank: {data.rank}</small>
        </div>
      </div>
    </div>
  );
}
