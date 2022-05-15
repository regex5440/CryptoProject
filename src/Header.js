import React, { useState } from "react";

function HamBurger(props) {
  function toggle(x) {
    props.transfer(x);
  }

  const transition = {
    transition: "all 300ms linear 0s",
    backgroundColor: "black",
    height: "1.5px",
    border: "none",
  };
  const [hamTop, setTop] = useState({
    ...transition,
    transformOrigin: "top left",
  });
  const [hamMid, setMid] = useState({ ...transition, width: "95%" });
  const [hamBot, setBot] = useState({
    ...transition,
    transformOrigin: "bottom left",
  });
  const hamSize = {
    width: "30px",
    heigh: "40px",
    float: "right",
    right: "10px",
    top: "2px",
  };

  function hamClicked() {
    if (props.isOpen) {
      setMid((pmid) => {
        return { ...pmid, width: "95%" };
      });
      setTop((ptop) => {
        return { ...ptop, transform: "rotate(0deg)" };
      });
      setBot((ptop) => {
        return { ...ptop, transform: "rotate(0deg)" };
      });
      toggle(false);
    } else {
      setMid((pmid) => {
        return { ...pmid, width: "0" };
      });
      setTop((linTrans) => {
        return { ...linTrans, transform: "rotate(40deg)" };
      });
      setBot((linTrans) => {
        return { ...linTrans, transform: "rotate(-40deg)" };
      });
      toggle(true);
    }
  }

  return (
    <div id="ham" style={hamSize} onClick={hamClicked}>
      <hr id="top" style={hamTop} />
      <hr id="middle" style={hamMid} />
      <hr id="bottom" style={hamBot} />
    </div>
  );
}

class Header extends React.Component {
  constructor() {
    super();
    this.options = ["Crypto", "Contact", "Support", "FAQ", "About"];
    this.state = {
      isOpen: false,
      navOptionStyle: {},
    };
    this.headerStyle = {
      boxShadow: "2px 4px 10px rgba(74, 71, 104, 0.445)",
    };
  }
  shouldComponentUpdate() {
    return false;
  }
  componentDidUpdate() {
    console.log("Header Mounted");
  }
  changeHamState = (x) => {
    this.setState({ isOpen: x });
    if (this.state.isOpen) {
      this.setState({ navOptionStyle: { display: "none" } });
    } else {
      this.setState({ navOptionStyle: { display: "block" } });
    }
  };
  render() {
    return (
      <header style={this.headerStyle}>
        <div className="header_content">
          <div className="header_logo">Polka.</div>
          <HamBurger
            isOpen={this.state.isOpen}
            transfer={this.changeHamState}
          />
          <nav style={this.state.navOptionStyle}>
            <ul>
              {this.options.map((e) => (
                <li key={this.options.indexOf(e)}>{e}</li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
