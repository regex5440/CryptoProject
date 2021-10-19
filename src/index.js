import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.sass';
import './module.homepage/module.style/coin_gallery.sass';
import TutorialWindow from './module.homepage/tutorial_window';
import reportWebVitals from './reportWebVitals';

///--------Burger Icon
function HamBurger(props) {
  function toggle(x) {
    props.transfer(x);
  }

  const transition = {
    transition: 'all 300ms linear 0s',
    backgroundColor: 'black',
    height: '1.5px',
    border: 'none'
  };
  const [hamTop, setTop] = useState({ ...transition, transformOrigin: 'top left' });
  const [hamMid, setMid] = useState({ ...transition, width: '95%' });
  const [hamBot, setBot] = useState({ ...transition, transformOrigin: 'bottom left' });
  const hamSize = {
    width: '30px',
    heigh: '40px',
    float: 'right',
    right: '10px',
    top: '2px',
  }

  function hamClicked() {
    if (props.isOpen) {
      setMid(pmid => {
        return { ...pmid, width: '95%' };
      });
      setTop(ptop => {
        return { ...ptop, transform: 'rotate(0deg)' };
      });
      setBot(ptop => {
        return { ...ptop, transform: 'rotate(0deg)' };
      })
      toggle(false);
    } else {
      setMid(pmid => {
        return { ...pmid, width: '0' };
      });
      setTop(linTrans => {
        return { ...linTrans, transform: 'rotate(40deg)' };
      });
      setBot(linTrans => {
        return { ...linTrans, transform: 'rotate(-40deg)' };
      });
      toggle(true);
    }
  }

  return <div id="ham" style={hamSize} onClick={hamClicked}>
    <hr id="top" style={hamTop} />
    <hr id="middle" style={hamMid} />
    <hr id="bottom" style={hamBot} />
  </div>
}

//////////////////Header Starts Here
class Header extends React.Component {            // Complete Header Component
  constructor() {
    super();
    this.options = ['Crypto', 'Contact', 'Support', 'FAQ', 'About'];
    this.state = {
      isOpen: false,
      navOptionStyle: {
      }
    };
    this.headerStyle = {
      boxShadow: '2px 4px 10px rgba(74, 71, 104, 0.445)'
    };
  }
  changeHamState = (x) => {
    this.setState({ isOpen: x });
    if (this.state.isOpen) {
      this.setState({ navOptionStyle: { display: 'none' } })
    } else {
      this.setState({ navOptionStyle: { display: 'block' } })
    }
  }
  render() {
    return <header style={this.headerStyle}>
      <div className="header_content">
        <div className="header_logo">Company Logo</div>
        <HamBurger isOpen={this.state.isOpen} transfer={this.changeHamState} />
        <nav style={this.state.navOptionStyle}>
          <ul>
            {this.options.map(e => <li key={this.options.indexOf(e)}>{e}</li>)}
          </ul>
        </nav>
      </div>
    </header>
  }
}
/////////////                Live Coin Structure
function Coin(coin) {
  const data = coin.data
  const styler = {
    background: `url("${data.logo_url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
  return <div className="coins" title={data.name}>
    <div className="logo" style={styler}></div>
    <div className="content">
      <strong>{data.name} ({data.id})</strong>
      <div id="price"><strong>Rs. {Math.abs(data.price).toFixed(4)}</strong></div>
      <div id="rank"><small>Rank: {data.rank}</small></div>
    </div>

  </div>
}
class CoinsLive extends React.Component {
  constructor() {
    super();
    this.extras = {
      scrollLevel: 170
    };
    this.state = {
      noOfCoins: 15,
      api_key: 'fd1c3a79525452330e652ca6a03b49c4ce5d6c51',
      sort: 'rank',
      status: 'active',
      currency: 'INR',
      id: ['BTC'],
      coins: [null]
    };

  }
  slideLeft = () => {
    document.getElementsByClassName('coin_roller')[0].scrollLeft -= this.extras.scrollLevel;
  };
  slideRight = () => {
    document.getElementsByClassName('coin_roller')[0].scrollLeft += this.extras.scrollLevel;
  };
  async componentDidMount() {
    await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${this.state.api_key}&interval=10s&convert=${this.state.currency}&status=active&per-page=${this.state.noOfCoins}&page=1`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then(response => response.json())
      .then(data => {
        this.setState({ coins: data });
      });
  }
  render() {
    return <div className="coin_space">
      <p title="Prices gets updated every 10 seconds"><span>Live</span> Prices</p>
      <div className="coin_roller">
        {this.state.coins[0] !== null ? this.state.coins.map(e => { return <Coin key={e.id} data={e} /> }) : <div className="loading"></div>}
      </div>
      <div className="leftSlide slidebtn" onClick={this.slideLeft}></div>
      <div className="rightSlide slidebtn" onClick={this.slideRight}></div>
    </div>;
  }
}

function Test() {
  const style = { fontSize: '18px', width: '300px', margin: 'auto' };

  return <p style={style}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sed consectetur velit autem adipisci ut aliquid non eaque? Aliquid commodi provident ipsa possimus voluptatibus vero obcaecati sequi rem ab quo. Atque sequi sunt nulla minus dignissimos itaque, aperiam tenetur aliquid! Assumenda ab tempora incidunt culpa rerum? Repellendus, est a. Vitae ipsum excepturi molestias culpa autem praesentium alias tempore animi a, et in eveniet ex ratione? Non nihil voluptatibus suscipit voluptate ut asperiores voluptatum exercitationem officiis. Debitis quisquam nobis veritatis recusandae cum vero adipisci explicabo eos pariatur necessitatibus laborum harum odit distinctio placeat hic, amet similique quae. Natus libero exercitationem fugiat quisquam corporis velit voluptatum vitae, minus quam, illo aut. Cumque earum minus ad velit. Magnam quae itaque quas totam necessitatibus? Dolores facilis sint dicta accusamus quidem blanditiis tempore debitis eos totam corporis perferendis quisquam delectus, alias minus mollitia odit rerum beatae maxime commodi soluta aperiam nisi quibusdam error! Nostrum odio delectus illum, dolore dolor itaque eligendi at laudantium quisquam architecto quis vel, quo amet blanditiis ipsum nobis, pariatur eaque aut? Ipsum sed quae culpa non! Dicta explicabo laborum mollitia reiciendis quod porro, itaque eligendi asperiores, praesentium beatae tenetur tempora eaque repudiandae autem, sint rem commodi similique iusto. Consequuntur omnis, a sunt aperiam placeat voluptatum dolor reiciendis quibusdam error. Ex pariatur vel illo animi molestias ab aperiam tenetur. Nisi voluptas velit nihil magni a accusamus minus hic vel culpa molestiae qui nesciunt harum expedita, numquam quidem voluptate esse adipisci soluta consequuntur ab? Pariatur, adipisci. Minus sunt quam exercitationem veritatis atque quo maiores adipisci reiciendis vitae saepe? Hic aliquam tenetur, ut repellendus soluta sunt tempora debitis aliquid assumenda facere doloribus! Explicabo dicta temporibus voluptatibus sit animi veniam, odit voluptates accusantium corporis vero molestiae veritatis nam distinctio fugiat sint minus, error voluptas et laudantium accusamus eos corrupti ullam. Odit sint quisquam laudantium nemo.</p>
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CoinsLive />
    <TutorialWindow />
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
