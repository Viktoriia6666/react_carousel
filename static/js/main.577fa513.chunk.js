(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),c=n(3),r=n(5),l=n(4),m=n(1),o=(n(12),n(13),n(0)),u=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={itemIndex:0},t.handleSwipeClick=function(e){return function(){var n=t.props,i=n.images,a=n.frameSize,s=t.state.itemIndex,c=i.length-a,r=s+e;e>0&&r>c&&(r=c),e<0&&r<0&&(r=0),t.setState((function(){return{itemIndex:r}}))}},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.step,i=t.itemWidth,a=t.frameSize,s=t.animationDuration,c=t.infinity,r=this.state.itemIndex,l=r<=0&&!c,m=r>=e.length-a&&!c;return Object(o.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*i,"px"),transition:"".concat(s,"ms")},children:[Object(o.jsx)("ul",{className:"Carousel__list",children:e.map((function(t,e){return Object(o.jsx)("li",{className:"Carusel__item",style:{transform:"translateX(".concat(-r*i,"px)"),transition:"".concat(s,"ms")},children:Object(o.jsx)("img",{src:t,alt:"".concat(e+1),width:i})},t)}))}),Object(o.jsxs)("div",{className:"Carousel__button",children:[Object(o.jsx)("button",{type:"button",className:"Carousel__btn",disabled:l,onClick:this.handleSwipeClick(-n),children:"\u21e6"}),Object(o.jsx)("button",{type:"button","data-cy":"next",className:"Carousel__btn",disabled:m,onClick:this.handleSwipeClick(n),children:"\u21e8"})]})]})}}]),n}(m.Component),h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinity:!1},t.setWidth=function(e){t.setState({itemWidth:+e.target.value})},t.setFrameSize=function(e){t.setState({frameSize:+e.target.value})},t.setStep=function(e){t.setState({step:+e.target.value})},t.setAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t.setInfinity=function(e){t.setState({infinity:e.target.checked})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.itemWidth,i=t.frameSize,a=t.step,s=t.animationDuration,c=t.infinity;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{"data-cy":"title",children:"Carousel"}),Object(o.jsx)(u,{images:e,itemWidth:n,frameSize:i,step:a,animationDuration:s,infinity:c}),Object(o.jsxs)("label",{htmlFor:"itemId",className:"label",children:["Item Width:",Object(o.jsx)("input",{type:"number",id:"itemId",value:n,min:130,max:260,step:10,onChange:this.setWidth})]}),Object(o.jsxs)("label",{htmlFor:"frameId",className:"label",children:["Frame Size:",Object(o.jsx)("input",{type:"number",id:"frameId",value:i,min:1,max:e.length,step:1,onChange:this.setFrameSize})]}),Object(o.jsxs)("label",{htmlFor:"stepId",className:"label",children:["Step:",Object(o.jsx)("input",{type:"number",id:"stepId",value:a,min:1,max:e.length,step:1,onChange:this.setStep})]}),Object(o.jsxs)("label",{htmlFor:"animationId",className:"label",children:["AnimationDuration:",Object(o.jsx)("input",{type:"number",id:"animationId",value:s,min:500,max:5e3,step:500,onChange:this.setAnimationDuration})]}),Object(o.jsxs)("label",{htmlFor:"infinityId",className:"label",children:["Infinite:",Object(o.jsx)("input",{type:"checkbox",id:"infinityId",onChange:this.setInfinity})]})]})}}]),n}(m.Component),d=h;a.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.577fa513.chunk.js.map