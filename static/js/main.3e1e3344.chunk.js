(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[0],{15:function(t,e,s){},16:function(t,e,s){},17:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(1),i=s.n(n),c=s(4),r=s.n(c),o=(s(15),s(5)),l=s(6),u=s(2),p=s(9),d=s(8),m=s(7),g=["user-top-read","user-read-currently-playing","user-read-playback-state"],h=window.location.hash.substring(1).split("&").reduce((function(t,e){if(e){var s=e.split("=");t[s[0]]=decodeURIComponent(s[1])}return t}),{});window.location.hash="";var j=h,y=(s(16),function(t){var e={backgroundImage:"url(".concat(t.item.album.images[0].url,")")},s={width:100*t.progress_ms/t.item.duration_ms+"%"};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"main-wrapper",children:[Object(a.jsx)("div",{className:"now-playing__img",children:Object(a.jsx)("img",{src:t.item.album.images[0].url})}),Object(a.jsxs)("div",{className:"now-playing__side",children:[Object(a.jsx)("div",{className:"now-playing__name",children:t.item.name}),Object(a.jsx)("div",{className:"now-playing__artist",children:t.item.artists[0].name}),Object(a.jsx)("div",{className:"now-playing__status",children:t.is_playing?"Playing":"Paused"}),Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"progress__bar",style:s})})]}),Object(a.jsx)("div",{className:"background",style:e})," "]})})}),b=s.p+"static/media/spotify.4e7c5090.svg",_=(s(17),function(t){Object(p.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(o.a)(this,s),(t=e.call(this)).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0,no_data:!1},t.getCurrentlyPlaying=t.getCurrentlyPlaying.bind(Object(u.a)(t)),t.tick=t.tick.bind(Object(u.a)(t)),t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=j.access_token;e&&(this.setState({token:e}),this.getCurrentlyPlaying(e)),this.interval=setInterval((function(){return t.tick()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"tick",value:function(){this.state.token&&this.getCurrentlyPlaying(this.state.token)}},{key:"getCurrentlyPlaying",value:function(t){var e=this;m.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(t){t?e.setState({item:t.item,is_playing:t.is_playing,progress_ms:t.progress_ms,no_data:!1}):e.setState({no_data:!0})}})}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:b,className:"App-logo",alt:"logo"}),!this.state.token&&Object(a.jsx)("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("a7a4432773c3430c81fc881285643a24","&redirect_uri=").concat("http://localhost:3000/redirect","&scope=").concat(g.join("%20"),"&response_type=token&show_dialog=true"),children:"Login to Spotify"}),this.state.token&&!this.state.no_data&&Object(a.jsx)(y,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.state.progress_ms}),this.state.no_data&&Object(a.jsx)("p",{children:"You need to be playing a song on Spotify, for something to appear here."})]})})}}]),s}(n.Component));r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3e1e3344.chunk.js.map