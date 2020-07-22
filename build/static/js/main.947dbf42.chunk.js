(this.webpackJsonpcard_gen=this.webpackJsonpcard_gen||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),l=t.n(r),m=t(1),o=t(6),i=(t(12),function(e){var a=e.cardData,t=e.gradient;return c.a.createElement("div",{className:"cardContainer",style:t},c.a.createElement("div",{className:"topRow"},c.a.createElement("div",{id:"manaCostTray"},a.mana.map((function(e){return c.a.createElement("div",{id:"manaCost",key:e.color},e.cost,c.a.createElement("div",{className:"manaSymbol",style:{backgroundColor:e.color}}))})))),c.a.createElement("div",{id:"cardTopInfo"},c.a.createElement("div",{className:"cardName",style:{fontSize:a.name.length>22?"20px":"30px"}},a.name),c.a.createElement("div",{className:"cardRarity",style:{backgroundColor:a.rarity}})),c.a.createElement("div",{className:"midRow"},c.a.createElement("img",{id:"cardImg",src:a.img,alt:"Card Art",width:"300px",height:"200px"})),c.a.createElement("div",{id:"bottomRow"},c.a.createElement("div",{id:"cardText"},a.text),c.a.createElement("img",{id:"type",src:a.componential?"breakable.svg":"unique.svg",alt:"type",width:"35px",height:"35px"})))}),u=(t(13),{common:"lightgray",rare:"blue",epic:"purple",legendary:"orange"}),d=function(){var e=function(e,a){var t=e.reduce((function(e,a){return Number(e)+Number(a)}));return Math.floor(a*((100-10*(e.length-1))/t))},a=function(e){var a=e.target.name,t="checkbox"===e.target.type?e.target.checked:e.target.value;switch(a.includes("Mana")&&(t>10?t=10:t<0&&(t=0)),a){case"cardName":g(t);break;case"redMana":z(t);break;case"blueMana":A(t);break;case"yellowMana":H(t);break;case"greenMana":X(t);break;case"whiteMana":ae(t);break;case"blackMana":re(t);break;case"imageUrl":w(t);break;case"cardRarity":L(t);break;case"compCheck":q(t);break;case"cardText":C(t)}},t=Object(n.useState)(!1),r=Object(m.a)(t,2),l=r[0],d=r[1],s=Object(n.useState)(""),b=Object(m.a)(s,2),E=b[0],g=b[1],p=Object(n.useState)([]),v=Object(m.a)(p,2),h=v[0],y=v[1],k=Object(n.useState)(""),x=Object(m.a)(k,2),j=x[0],C=x[1],O=Object(n.useState)(""),f=Object(m.a)(O,2),N=f[0],w=f[1],S=Object(n.useState)(""),M=Object(m.a)(S,2),R=M[0],L=M[1],T=Object(n.useState)(!1),B=Object(m.a)(T,2),I=B[0],q=B[1],D=Object(n.useState)(0),G=Object(m.a)(D,2),U=G[0],z=G[1],J=Object(n.useState)(0),V=Object(m.a)(J,2),_=V[0],A=V[1],W=Object(n.useState)(0),Y=Object(m.a)(W,2),F=Y[0],H=Y[1],K=Object(n.useState)(0),P=Object(m.a)(K,2),Q=P[0],X=P[1],Z=Object(n.useState)(0),$=Object(m.a)(Z,2),ee=$[0],ae=$[1],te=Object(n.useState)(0),ne=Object(m.a)(te,2),ce=ne[0],re=ne[1];return c.a.createElement("div",null,!l&&c.a.createElement("form",{id:"cardGenContainer",onSubmit:function(e){e.preventDefault();var a=[{color:"red",cost:U},{color:"blue",cost:_},{color:"yellow",cost:F},{color:"green",cost:Q},{color:"white",cost:ee},{color:"black",cost:ce}].filter((function(e){return e.cost>0}));y({mana:a,name:E,img:N,rarity:u[R],componential:I,text:j}),d(!0)}},c.a.createElement("span",{className:"names"},c.a.createElement("label",{className:"name"},"Card Name:",c.a.createElement("input",{type:"text",name:"cardName",onChange:a,value:E,required:!0}))),c.a.createElement("div",{id:"mana"},"Mana Values:",c.a.createElement("label",{className:"manaLabel"},c.a.createElement("div",{id:"red"}),"Red:",c.a.createElement("input",{type:"number",name:"redMana",value:U,onChange:a,min:"0",max:"10"})),c.a.createElement("label",{className:"manaLabel"},c.a.createElement("div",{id:"blue"})," Blue:",c.a.createElement("input",{type:"number",name:"blueMana",value:_,onChange:a,min:"0",max:"10"})),c.a.createElement("label",{className:"manaLabel"},c.a.createElement("div",{id:"yellow"})," Yellow:",c.a.createElement("input",{type:"number",name:"yellowMana",value:F,onChange:a,min:"0",max:"10"})),c.a.createElement("label",{className:"manaLabel"},c.a.createElement("div",{id:"green"})," Green",c.a.createElement("input",{type:"number",name:"greenMana",value:Q,onChange:a,min:"0",max:"10"})),c.a.createElement("label",{className:"manaLabel"},c.a.createElement("div",{id:"white"})," White:",c.a.createElement("input",{type:"number",name:"whiteMana",value:ee,onChange:a,min:"0",max:"10"})),c.a.createElement("label",{className:"manaLabel"},c.a.createElement("div",{id:"black"})," Black:",c.a.createElement("input",{type:"number",name:"blackMana",value:ce,onChange:a,min:"0",max:"10"}))),c.a.createElement("label",{id:"image"},"Image Url:",c.a.createElement("input",{type:"text",name:"imageUrl",onChange:a,value:N,required:!0})),c.a.createElement("label",null,"Card Rarity",c.a.createElement("select",{value:R,name:"cardRarity",onChange:a},c.a.createElement("option",{value:"n/a",defaultValue:!0},"Select a Rarity"),c.a.createElement("option",{value:"common"},"Common"),c.a.createElement("option",{value:"rare"},"Rare"),c.a.createElement("option",{value:"epic"},"Epic"),c.a.createElement("option",{value:"legendary"},"Legendary"))),c.a.createElement("div",{id:"checkComp"},c.a.createElement("label",null,"Componential"),c.a.createElement("input",{type:"checkbox",name:"compCheck",checked:I,onChange:a})),c.a.createElement("label",{id:"cardText"},"Card Text:",c.a.createElement("textarea",{maxLength:"165",id:"textBox",type:"text",name:"cardText",onChange:a,value:j})),c.a.createElement("button",null,"Generate Card")),l&&c.a.createElement("div",null,c.a.createElement(i,{cardData:h,gradient:function(a){var t;a.sort((function(e,a){return a.cost-e.cost}));var n=0,c="",r=Object(o.a)(a.map((function(e){return e.cost})));if(a.length>1){for(var l=0;l<a.length;l++){var m=e(r,a[l].cost);c+="".concat(a[l].color," ").concat(n,"% ").concat(n+m,"% "),n+=m+10,l!==a.length-1&&(c+=", ")}t={background:"linear-gradient(90deg, ".concat(c,")")}}else t=0===a.length?{background:"azure"}:{background:a[0].color};return t}(h.mana)}),c.a.createElement("form",null,c.a.createElement("button",{id:"backButton"},"Back"))))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.947dbf42.chunk.js.map