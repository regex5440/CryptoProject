(this.webpackJsonppolka=this.webpackJsonppolka||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(3),n=a.n(i),r=a(9),s=a(4),o=a(5),u=a(7),c=a(6),l=a(1),m=a(2),d=a(0),p=a.n(d),b=a(10),v=a.n(b);a(17),a(18),a(19),a(20);function f(e){return p.a.createElement("div",{className:"player",style:{height:"400px",width:"600px",border:"1px solid black"}},"Video Player for ",e.name)}function h(){return p.a.createElement("div",{style:{height:"500px",width:"380px",border:"1px solid black"}},"TOPICS Will Align here")}var g=function(e){return p.a.createElement("div",{className:"tutorial_window"},p.a.createElement(f,{address:e.name}),p.a.createElement("div",{id:"vr"}),p.a.createElement(h,null))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),r(e),s(e)}))};function q(e){function t(t){e.transfer(t)}var a={transition:"all 300ms linear 0s",backgroundColor:"black",height:"1.5px",border:"none"},i=Object(d.useState)(Object(l.a)(Object(l.a)({},a),{},{transformOrigin:"top left"})),n=Object(m.a)(i,2),r=n[0],s=n[1],o=Object(d.useState)(Object(l.a)(Object(l.a)({},a),{},{width:"95%"})),u=Object(m.a)(o,2),c=u[0],b=u[1],v=Object(d.useState)(Object(l.a)(Object(l.a)({},a),{},{transformOrigin:"bottom left"})),f=Object(m.a)(v,2),h=f[0],g=f[1];return p.a.createElement("div",{id:"ham",style:{width:"30px",heigh:"40px",float:"right",right:"10px",top:"2px"},onClick:function(){e.isOpen?(b((function(e){return Object(l.a)(Object(l.a)({},e),{},{width:"95%"})})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{transform:"rotate(0deg)"})})),g((function(e){return Object(l.a)(Object(l.a)({},e),{},{transform:"rotate(0deg)"})})),t(!1)):(b((function(e){return Object(l.a)(Object(l.a)({},e),{},{width:"0"})})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{transform:"rotate(40deg)"})})),g((function(e){return Object(l.a)(Object(l.a)({},e),{},{transform:"rotate(-40deg)"})})),t(!0))}},p.a.createElement("hr",{id:"top",style:r}),p.a.createElement("hr",{id:"middle",style:c}),p.a.createElement("hr",{id:"bottom",style:h}))}var E=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).changeHamState=function(t){e.setState({isOpen:t}),e.state.isOpen?e.setState({navOptionStyle:{display:"none"}}):e.setState({navOptionStyle:{display:"block"}})},e.options=["Crypto","Contact","Support","FAQ","About"],e.state={isOpen:!1,navOptionStyle:{}},e.headerStyle={boxShadow:"2px 4px 10px rgba(74, 71, 104, 0.445)"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement("header",{style:this.headerStyle},p.a.createElement("div",{className:"header_content"},p.a.createElement("div",{className:"header_logo"},"Company Logo"),p.a.createElement(q,{isOpen:this.state.isOpen,transfer:this.changeHamState}),p.a.createElement("nav",{style:this.state.navOptionStyle},p.a.createElement("ul",null,this.options.map((function(t){return p.a.createElement("li",{key:e.options.indexOf(t)},t)}))))))}}]),a}(p.a.Component);function y(e){var t=e.data,a={background:'url("'.concat(t.logo_url,'")'),backgroundRepeat:"no-repeat",backgroundSize:"contain"};return p.a.createElement("div",{className:"coins",title:t.name},p.a.createElement("div",{className:"logo",style:a}),p.a.createElement("div",{className:"content"},p.a.createElement("strong",null,t.name," (",t.id,")"),p.a.createElement("div",{id:"price"},p.a.createElement("strong",null,"Rs. ",Math.abs(t.price).toFixed(4))),p.a.createElement("div",{id:"rank"},p.a.createElement("small",null,"Rank: ",t.rank))))}var x=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).slideLeft=function(){document.getElementsByClassName("coin_roller")[0].scrollLeft-=e.extras.scrollLevel},e.slideRight=function(){document.getElementsByClassName("coin_roller")[0].scrollLeft+=e.extras.scrollLevel},e.extras={scrollLevel:170},e.state={noOfCoins:50,api_key:"fd1c3a79525452330e652ca6a03b49c4ce5d6c51",sort:"rank",status:"active",currency:"INR",id:["BTC"],coins:[null]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nomics.com/v1/currencies/ticker?key=".concat(this.state.api_key,"&interval=10s&convert=").concat(this.state.currency,"&status=active&per-page=").concat(this.state.noOfCoins,"&page=1")).then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,this.setState({coins:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return p.a.createElement("div",{className:"coin_space"},p.a.createElement("p",{title:"Prices gets updated every 10 seconds"},p.a.createElement("span",null,"Live")," Prices"),p.a.createElement("div",{className:"coin_roller"},null!==this.state.coins[0]?this.state.coins.map((function(e){return p.a.createElement(y,{key:e.id,data:e})})):p.a.createElement("div",{className:"loading"})),p.a.createElement("div",{className:"leftSlide slidebtn",onClick:this.slideLeft}),p.a.createElement("div",{className:"rightSlide slidebtn",onClick:this.slideRight}))}}]),a}(p.a.Component);function j(){return p.a.createElement("p",{style:{fontSize:"18px",width:"300px",margin:"auto"}},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sed consectetur velit autem adipisci ut aliquid non eaque? Aliquid commodi provident ipsa possimus voluptatibus vero obcaecati sequi rem ab quo. Atque sequi sunt nulla minus dignissimos itaque, aperiam tenetur aliquid! Assumenda ab tempora incidunt culpa rerum? Repellendus, est a. Vitae ipsum excepturi molestias culpa autem praesentium alias tempore animi a, et in eveniet ex ratione? Non nihil voluptatibus suscipit voluptate ut asperiores voluptatum exercitationem officiis. Debitis quisquam nobis veritatis recusandae cum vero adipisci explicabo eos pariatur necessitatibus laborum harum odit distinctio placeat hic, amet similique quae. Natus libero exercitationem fugiat quisquam corporis velit voluptatum vitae, minus quam, illo aut. Cumque earum minus ad velit. Magnam quae itaque quas totam necessitatibus? Dolores facilis sint dicta accusamus quidem blanditiis tempore debitis eos totam corporis perferendis quisquam delectus, alias minus mollitia odit rerum beatae maxime commodi soluta aperiam nisi quibusdam error! Nostrum odio delectus illum, dolore dolor itaque eligendi at laudantium quisquam architecto quis vel, quo amet blanditiis ipsum nobis, pariatur eaque aut? Ipsum sed quae culpa non! Dicta explicabo laborum mollitia reiciendis quod porro, itaque eligendi asperiores, praesentium beatae tenetur tempora eaque repudiandae autem, sint rem commodi similique iusto. Consequuntur omnis, a sunt aperiam placeat voluptatum dolor reiciendis quibusdam error. Ex pariatur vel illo animi molestias ab aperiam tenetur. Nisi voluptas velit nihil magni a accusamus minus hic vel culpa molestiae qui nesciunt harum expedita, numquam quidem voluptate esse adipisci soluta consequuntur ab? Pariatur, adipisci. Minus sunt quam exercitationem veritatis atque quo maiores adipisci reiciendis vitae saepe? Hic aliquam tenetur, ut repellendus soluta sunt tempora debitis aliquid assumenda facere doloribus! Explicabo dicta temporibus voluptatibus sit animi veniam, odit voluptates accusantium corporis vero molestiae veritatis nam distinctio fugiat sint minus, error voluptas et laudantium accusamus eos corrupti ullam. Odit sint quisquam laudantium nemo.")}v.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(E,null),p.a.createElement(x,null),p.a.createElement(g,null),p.a.createElement(j,null)),document.getElementById("root")),O()}],[[11,1,2]]]);
//# sourceMappingURL=main.557bfe83.chunk.js.map