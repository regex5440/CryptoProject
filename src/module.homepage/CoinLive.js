import React from "react";
import Coin from "./Coin";

class CoinsLive extends React.Component {
  constructor(props) {
    super(props);
    this.extras = {
      scrollLevel: 200,
      timer: null,
    };
    this.state = {
      noOfCoins: 25,
      api_key: "fd1c3a79525452330e652ca6a03b49c4ce5d6c51",
      sort: "rank",
      status: "active",
      currency: "INR",
      coins: [null],
    };
  }
  slideLeft = () => {
    document.getElementsByClassName("coin_roller")[0].scrollLeft -=
      this.extras.scrollLevel;
  };
  slideRight = () => {
    document.getElementsByClassName("coin_roller")[0].scrollLeft +=
      this.extras.scrollLevel;
  };
  async fetchnUpdate() {
    //This function also called every 10 secs
    let response = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${this.state.api_key}&interval=10s&convert=${this.state.currency}&status=active&per-page=${this.state.noOfCoins}&page=1`
    );
    let data = await response.json();
    this.setState({ coins: data });
  }
  componentDidMount() {
    this.fetchnUpdate();
    this.extras.timer = setInterval(() => {
      this.fetchnUpdate();
    }, 10000);
  }
  shouldComponentUpdate(prevProps, prevState) {
    if (prevState !== this.state) return true;
    return false;
  }
  componentDidUpdate() {
    console.log("Coin Slider Updated");
  }
  componentWillUnmount() {
    clearInterval(this.extras.timer);
  }

  dummyCoin = () => {
    let dummyItems = [];
    for (let i = 0; i < this.state.noOfCoins; i++) {
      dummyItems.push(<div className="dummy coins" key={i}></div>);
    }
    return dummyItems;
  };

  showCoin(data) {
    this.props.updateCoinWindow(data);
  }

  render() {
    return (
      <div className="coin_space">
        <p title="Prices gets updated every 10 seconds">
          <span> Live</span> Prices
        </p>
        <div className="coin_roller">
          {this.state.coins[0] !== null
            ? this.state.coins.map((e) => {
                return (
                  <Coin
                    getCoin={(x) => {
                      this.showCoin(x);
                    }}
                    key={e.id}
                    data={e}
                  />
                );
              })
            : this.dummyCoin().map((e) => {
                return e;
              })}
        </div>
        <div className="leftSlide slidebtn" onClick={this.slideLeft}></div>
        <div className="rightSlide slidebtn" onClick={this.slideRight}></div>
        <a target="_blank" rel="noopener noreferrer" href="https://nomics.com">
          Crypto Market Cap & Pricing Data Provided By Nomics
        </a>
      </div>
    );
  }
}

export default CoinsLive;
