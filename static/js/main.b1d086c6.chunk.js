(this["webpackJsonpdijkstra-s-dog"]=this["webpackJsonpdijkstra-s-dog"]||[]).push([[0],{116:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(37),a=n.n(o),c=n(7),l=n(195),s=n(189),d=n(198),u=n(199),h="#f38d8d",f="rgba(217,223,246,0.99)",b="rgba(123,152,248,0.98)",p="rgb(243,141,141)",j="#ffbdb1",g="#ffe",m="rgb(255,255,255)",v="rgba(0,29,101,0.98)",O="#6b1eff",w="#d21d1d",x=n(1),y=function(e){var t=e.width,n=e.clicked,i=e.isBusy;return Object(x.jsx)(d.a,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",sx:{marginBottom:1,marginLeft:1},children:Object(x.jsx)(u.a,{sx:{backgroundColor:h,color:g,fontWeight:"bold",width:.95*t},onClick:n,disabled:i,children:"SOLVE MAZE"})})},E=n(194),k=n(200),C=n(201),S=n(202),B=n(22),M=n(23),T=n(12),W=n(21),z=(n(116),function(){function e(t,n){Object(M.a)(this,e),this.duration=void 0,this.color=void 0,this.duration=t,this.color=n}return Object(B.a)(e,[{key:"apply",value:function(e,t){e.animate({backgroundColor:[this.color,t],scale:[.6,1]},this.duration)}}]),e}());z.ReachedNode=new z(8e3,h),z.SelectedNode=new z(1e3,j),z.WallNode=new z(100,v),z.ShortesPathNode=new z(8e3,O),z.Unreachable=new z(1e3,w),z.EmptyNode=new z(100,m);var D=function(){function e(t){Object(M.a)(this,e),this.color=void 0,this.color=t}return Object(B.a)(e,[{key:"apply",value:function(e,t){e.style.background=this.color}}]),e}();D.Wall=new D(v),D.ShortestPath=new D(O),D.Empty=new D(m),D.Unreachable=new D(w);var V=function(){function e(t,n){Object(M.a)(this,e),this.type=void 0,this.node=void 0,this.type=t,this.node=n}return Object(B.a)(e,[{key:"apply",value:function(){this.type.apply(document.getElementById("row".concat(this.node.coords.row,"col").concat(this.node.coords.col)),this.node.getColor())}}]),e}();function L(e){return[new V(z.WallNode,e),new V(D.Wall,e)]}function R(e){for(var t=[],n=0;n<e.length;n++)t.push(new V(z.Unreachable,e[n].node)),t.push(new V(D.Unreachable,e[n].node));return t}var N=Object(B.a)((function e(t){Object(M.a)(this,e),this.color=void 0,this.color=t}));N.Empty=new N(m),N.Start=new N(m),N.End=new N(m),N.Crumb=new N(m),N.Wall=new N("rgba(3,30,101,0.98)"),N.None=new N("");var A=Object(B.a)((function e(t,n){Object(M.a)(this,e),this.row=void 0,this.col=void 0,this.col=n,this.row=t})),I=function(){function e(t,n,i){Object(M.a)(this,e),this.nodeType=void 0,this.isVisited=void 0,this.distance=void 0,this.previous=void 0,this.coords=void 0,this.isWall=void 0,this.color=void 0,this.parent=void 0,this.elevation=void 0,this.parent="",this.nodeType=t,this.isVisited=!1,this.distance=1/0,this.previous=e.None,this.coords=new A(n,i),this.isWall=t===N.Wall,this.color=t.color,this.elevation=0}return Object(B.a)(e,[{key:"toggle",value:function(){return this.isWall=!0,this}},{key:"visitedIs",value:function(){return this.isVisited}},{key:"visited",value:function(){this.isVisited=!0}},{key:"unVisited",value:function(){this.isVisited=!1}},{key:"getColor",value:function(){var e;return 0===this.elevation?this.color:(e=.7/this.elevation,"rgba(3,30,101,".concat(e,")"))}}]),e}();I.None=new I(N.None,-1,-1);function F(e){e.sort((function(e,t){return e.distance-t.distance}))}function P(e,t){var n,i=function(e,t){var n=[],i=[e.coords.row,e.coords.col],r=i[0],o=i[1];r>0&&n.push(t[r-1][o]);r<t.length-1&&n.push(t[r+1][o]);o>0&&n.push(t[r][o-1]);o<t[0].length-1&&n.push(t[r][o+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),r=Object(W.a)(i);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.distance=e.distance+1+e.elevation,o.previous=e}}catch(a){r.e(a)}finally{r.f()}}function U(e){for(var t=[],n=e;n.nodeType!==N.None;)t.push(new V(z.ShortesPathNode,n)),n=n.previous;return t}function Z(e,t,n,i,r){for(var o=[],a=0;a<n;a++){for(var c=[],l=0;l<t;l++)if(e[a][l].isWall)c.push(new I(N.Wall,a,l));else if(e[a][l].nodeType===N.Crumb)c.push(new I(N.Crumb,a,l));else{var s=new I(N.Empty,a,l);c.push(s),0!==e[a][l].elevation&&(s.elevation=e[a][l].elevation)}o.push(c)}return o[i.row][i.col]=new I(N.Start,i.row,i.col),o[r.row][r.col]=new I(N.End,r.row,r.col),o}function H(e,t){var n=e.slice();return n[t.row][t.col]=new I(N.Empty,t.row,t.col),n}function q(e,t){var n=[],i=e.coords.row-1,r=e.coords.col;return G(i,r,t)&&n.push(t[i][r]),G(i=e.coords.row,r=e.coords.col-1,t)&&n.push(t[i][r]),G(i=e.coords.row+1,r=e.coords.col,t)&&n.push(t[i][r]),G(i=e.coords.row,r=e.coords.col+1,t)&&n.push(t[i][r]),n}function G(e,t,n){return!(e>=n.length||e<0||t>=n[0].length||t<0)}var X=n(99);n(147);function J(e,t,n,i){e[t.coords.row][t.coords.col].isVisited=!0,i.push(new V(z.ReachedNode,t));var r,o=Object(W.a)(q(t,e));try{for(o.s();!(r=o.n()).done;){var a=r.value;if(a.coords.col===n.coords.col&&a.coords.row===n.coords.row)return n.isVisited=!0,void(n.previous=t);a.isVisited||a.isWall||n.isVisited||(J(e,a,n,i),a.previous=t)}}catch(c){o.e(c)}finally{o.f()}}function _(e,t,n,i,r){var o=n.shift();if(void 0===o)return!1;r.push(new V(z.ReachedNode,o));var a,c=Object(W.a)(q(o,i));try{for(c.s();!(a=c.n()).done;){var l=a.value;if(l.parent===t)return r.push(new V(z.ReachedNode,l)),r.push.apply(r,Object(T.a)(U(l))),r.push.apply(r,Object(T.a)(U(o))),!0;l.isVisited||l.isWall||(n.push(l),l.isVisited=!0,l.previous=o,l.parent=e)}}catch(s){c.e(s)}finally{c.f()}return!1}var Y=Object(B.a)((function e(t,n,i,r){Object(M.a)(this,e),this.getAnimations=void 0,this.name=void 0,this.text=void 0,this.isWeighted=void 0,this.getAnimations=t,this.name=n,this.text=i,this.isWeighted=r}));Y.Dijkstra=new Y((function(e,t,n){var i=[];t.distance=0;for(var r=function(e){var t,n=[],i=Object(W.a)(e);try{for(i.s();!(t=i.n()).done;){var r,o=t.value,a=Object(W.a)(o);try{for(a.s();!(r=a.n()).done;){var c=r.value;n.push(c)}}catch(l){a.e(l)}finally{a.f()}}}catch(l){i.e(l)}finally{i.f()}return n}(e);r.length;){F(r);var o=r.shift();if(void 0===o)return[];if(!o.isWall){if(o.distance===1/0)return i.concat.apply(i,Object(T.a)(R(i)));if(o.isVisited=!0,i.push(new V(z.ReachedNode,o)),P(o,e),o.coords.row===n.coords.row&&o.coords.col===n.coords.col)return i.concat.apply(i,Object(T.a)(U(n)))}}return[]}),"Dijkstra","\n     Dijkstra's picks the unvisited vertex with the lowest distance (closest vertex), calculates\n     the distance through it to each unvisited neighbor, and updates the \n     neighbor's distance if smaller. It repeats this until it finds the end-node.\n    Its complexity varies upon the way we store the closest nodes, being the best one\n    O(lgV*V + E) where V are the vertices and E the edges. It works with WEIGHTED graphs\n    ",!0),Y.Bfs=new Y((function(e,t,n){var i=[],r=[];for(r.push(t),t.isVisited=!0;0!==r.length;){var o=r.shift();if(void 0===o)return[];i.push(new V(z.ReachedNode,o));var a,c=Object(W.a)(q(o,e));try{for(c.s();!(a=c.n()).done;){var l,s=a.value;if(s.isVisited||s.isWall||(r.push(s),s.isVisited=!0,s.previous=o),s===n)return(l=i.concat(new V(z.ReachedNode,s))).concat.apply(l,Object(T.a)(U(n)))}}catch(d){c.e(d)}finally{c.f()}}return i.concat.apply(i,Object(T.a)(R(i)))}),"BFS","\n    Breadth First Search (BFS) is set to initialise at a vertex and then moves on to traverse all the nodes\n    with the current height before traversing all the others with next depth level. Because in the worst case\n    it traverses the whole graph, its complexity is O(V + E) where V are the vertices and E are the edges \n    of the graph. It works with UN-WEIGHTED graphs\n",!1),Y.Dfs=new Y((function(e,t,n){console.log("dfs called");var i=[new V(z.ReachedNode,t)];return(new X.Stack).push(t),J(e,t,n,i),i.concat.apply(i,Object(T.a)(U(n.previous)))}),"DFS","\n    Depth First Search (DFS) works analogously to BFS but traverses in order of the deepest vertex possible at every\n    step, before reaching it and backtracking. Like BFS it works with UN-WEIGHTED graphs, and traverses the whole\n    graph in worst case so its complexity is O(V + E). Contrary to BFS, it DOESN'T GUARANTEE shortest path\n",!1),Y.BidirectionalBFS=new Y((function(e,t,n){var i=[],r=[];r.push(t),t.isVisited=!0;var o=[];for(o.push(n),n.isVisited=!0;0!==r.length&&0!==o.length;)if(_("start","end",r,e,i)||_("end","start",o,e,i))return i.concat.apply(i,Object(T.a)(U(t)));return i.concat.apply(i,Object(T.a)(R(i)))}),"BFS*","\n   Bidirectional BFS works by running two BFS simultaneously, one starting from the dog and another starting\n   from the steak. It has the same limitations and BFS but in practise it's usually quite faster due to reducing\n   the total number of traversed vertices. \n",!1);var K,Q,$,ee,te,ne,ie,re,oe,ae,ce,le,se,de,ue,he=n(60),fe=n.n(he),be=function(e){var t=e.width,n=e.clicked,r=e.isBusy,o=e.defaultAlgorithm,a={backgroundColor:"rgba(122,147,227,0.93)",width:.75*t},l=Object(i.useState)(!1),h=Object(c.a)(l,2),f=(h[0],h[1],Object(i.useRef)(null)),p=function(e){f.current.click(),n(e)};return Object(x.jsx)(s.a,{direction:"column",width:t,children:Object(x.jsxs)(E.a,{sx:{backgroundColor:b,color:g,marginBottom:1},disabled:r,children:[Object(x.jsxs)(k.a,{expandIcon:Object(x.jsx)(fe.a,{sx:{color:g}}),"aria-controls":"panel1a-content",id:"panel1a-header",sx:{marginBottom:0},ref:f,children:[Object(x.jsx)(C.a,{fontWeight:"bold",fontSize:12,children:"ALGORITHM: "}),Object(x.jsxs)(C.a,{paddingLeft:1,fontSize:12,children:["  ",o.name]})]}),Object(x.jsx)(S.a,{sx:{marginBottom:1},children:Object(x.jsxs)(d.a,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",sx:{marginTop:0},children:[Object(x.jsx)(u.a,{sx:a,onClick:function(){return p(Y.BidirectionalBFS)},children:" BFS* "}),Object(x.jsx)(u.a,{sx:a,onClick:function(){return p(Y.Dijkstra)},children:" Dijkstra "}),Object(x.jsx)(u.a,{sx:a,onClick:function(){return p(Y.Bfs)},children:" BFS "}),Object(x.jsx)(u.a,{sx:a,onClick:function(){return p(Y.Dfs)},children:" DFS "})]})})]})})},pe=n(38),je=n(203),ge=["title","titleId"];function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},me.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Oe(e,t){var n=e.title,r=e.titleId,o=ve(e,ge);return i.createElement("svg",me({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",style:{enableBackground:"new 0 0 512.001 512.001"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},o),n?i.createElement("title",{id:r},n):null,i.createElement("path",{style:{fill:"#AEADB3"},d:"M62.336,204.361c-20.375-40.298-24.819-85.483-12.851-130.672 c8.979-33.905,24.07-56.018,24.708-56.943L85.748,0l79.735,92.81L62.336,204.361z"}),i.createElement("path",{style:{fill:"#D37B93"},d:"M141.684,113.258L90.04,53.146c-3.587,7.881-7.488,17.961-10.502,29.637 c-7.917,30.667-7.021,60.241,2.636,88.184L141.684,113.258z"}),i.createElement("path",{style:{fill:"#818186"},d:"M449.665,204.361c20.375-40.298,24.819-85.483,12.851-130.671 c-8.979-33.905-24.07-56.017-24.708-56.943L426.253,0l-79.735,92.81L449.665,204.361"}),i.createElement("path",{style:{fill:"#9D5B6E"},d:"M370.318,113.258l51.643-60.11c3.587,7.881,7.488,17.961,10.502,29.637 c7.917,30.667,7.021,60.241-2.636,88.184L370.318,113.258"}),i.createElement("path",{style:{fill:"#D8D9DD"},d:"M256.001,512c-45.417,0-80.561-14.658-107.438-44.815c-24.94-27.981-39.663-65.8-51.858-102.499 c-4.758-14.319-9.345-26.547-13.782-38.373c-13.167-35.099-23.567-62.823-23.567-107.819c0-30.689,6.978-57.096,20.741-78.489 c12.104-18.814,29.528-33.878,51.786-44.774c41.09-20.116,90.514-22.442,124.117-22.442s83.027,2.326,124.116,22.442 c22.259,10.896,39.681,25.96,51.786,44.774c13.763,21.392,20.741,47.8,20.741,78.489c0,44.996-10.4,72.719-23.567,107.819 c-4.437,11.826-9.023,24.054-13.782,38.373c-12.195,36.7-26.918,74.518-51.857,102.499C336.561,497.342,301.418,512,256.001,512"}),i.createElement("g",null,i.createElement("path",{style:{fill:"#333333"},d:"M184.887,225.811c0-11.273,9.024-20.402,20.112-20.402c11.102,0,20.124,9.13,20.124,20.402 c0,11.272-9.022,20.409-20.124,20.409C193.91,246.22,184.887,237.083,184.887,225.811z"}),i.createElement("path",{style:{fill:"#333333"},d:"M327.116,225.811c0-11.356-9.082-20.561-20.263-20.561c-11.195,0-20.277,9.205-20.277,20.561 c0,11.355,9.082,20.561,20.277,20.561C318.034,246.372,327.116,237.166,327.116,225.811"})),i.createElement("g",null,i.createElement("path",{style:{fill:"#444242"},d:"M240.312,511.376c5.089,0.412,10.315,0.624,15.689,0.624c5.374,0,10.599-0.212,15.689-0.624V403.575 h-31.377L240.312,511.376"}),i.createElement("path",{style:{fill:"#444242"},d:"M256.001,415.799c-19.589,0-37.144-15.455-43.783-22.101c-6.662-6.669-22.157-24.326-22.157-44.22 c0-16.438,7.848-28.435,22.697-34.691c9.836-4.145,22.365-5.835,43.243-5.835s33.407,1.69,43.243,5.835 c14.849,6.257,22.697,18.253,22.697,34.691c0,19.894-15.495,37.551-22.156,44.22C293.145,400.344,275.589,415.799,256.001,415.799"})),i.createElement("path",{style:{fill:"#BDBDBF"},d:"M452.645,218.335c0,0.052,0,0.108,0,0.16l0,0C452.645,218.442,452.645,218.388,452.645,218.335  M452.645,218.189c0,0.017,0,0.028,0,0.046C452.645,218.219,452.645,218.203,452.645,218.189 M462.949,75.35v0.001V75.35  M462.915,75.219c0.001,0.003,0.001,0.003,0.001,0.006L462.915,75.219 M462.882,75.09c0.001,0.003,0.001,0.004,0.002,0.007 C462.883,75.095,462.883,75.093,462.882,75.09 M462.847,74.957c0.001,0.005,0.002,0.009,0.004,0.016 C462.85,74.967,462.849,74.962,462.847,74.957 M462.815,74.828c0.001,0.005,0.002,0.01,0.004,0.016 C462.817,74.838,462.816,74.834,462.815,74.828 M462.779,74.693c0.002,0.008,0.004,0.017,0.006,0.025 C462.784,74.71,462.781,74.701,462.779,74.693 M462.745,74.558c0.003,0.012,0.005,0.022,0.008,0.033 C462.75,74.581,462.747,74.569,462.745,74.558 M462.711,74.429c0.003,0.012,0.005,0.022,0.008,0.032 C462.717,74.451,462.714,74.44,462.711,74.429 M462.678,74.302c0.003,0.012,0.005,0.02,0.008,0.031 C462.683,74.323,462.681,74.313,462.678,74.302 M462.642,74.167c0.003,0.012,0.007,0.027,0.01,0.038 C462.649,74.192,462.646,74.181,462.642,74.167 M462.607,74.031c0.004,0.017,0.007,0.029,0.012,0.045 C462.615,74.063,462.61,74.045,462.607,74.031 M462.568,73.885c0.005,0.019,0.011,0.044,0.017,0.064 C462.58,73.927,462.573,73.907,462.568,73.885 M256.46,72.791c0.006,0,0.006,0,0.013,0C256.467,72.791,256.465,72.791,256.46,72.791  M256.001,72.791L256.001,72.791c0.126,0,0.251,0,0.377,0C256.253,72.791,256.125,72.791,256.001,72.791 M426.253,0l-72.843,84.787 l0,0L426.253,0l11.554,16.747c0.638,0.925,15.729,23.038,24.708,56.943c0.012,0.044,0.022,0.085,0.035,0.129 c-0.011-0.043-0.023-0.087-0.035-0.129c-8.979-33.905-24.07-56.017-24.708-56.943L426.253,0"}),i.createElement("path",{style:{fill:"#A0A1A5"},d:"M306.852,246.372c-11.195,0-20.277-9.205-20.277-20.561s9.082-20.561,20.277-20.561 c11.182,0,20.263,9.205,20.263,20.561C327.116,237.166,318.034,246.372,306.852,246.372 M256.001,72.791v236.162 c20.878,0,33.407,1.69,43.243,5.835c14.849,6.257,22.697,18.253,22.697,34.692c0,19.894-15.495,37.551-22.156,44.22 c-4.791,4.797-15.27,14.181-28.095,19.033v98.644c-5.05,0.409-10.232,0.621-15.561,0.624c45.357-0.027,80.458-14.687,107.311-44.815 c24.94-27.981,39.662-65.8,51.857-102.499c4.758-14.319,9.345-26.547,13.782-38.373c13.167-35.099,23.567-62.823,23.567-107.819 c0-0.052,0-0.108,0-0.16c0-0.033,0-0.067,0-0.101c0-0.017,0-0.028,0-0.046c-0.01-6.207-0.321-12.23-0.902-18.08 c0.004-0.009,0.01-0.022,0.015-0.031c-1.982-19.966-7.277-37.818-15.821-53.309c-1.273-2.307-2.616-4.56-4.033-6.762 c-11.376-17.683-27.453-32.054-47.826-42.765c-1.303-0.685-2.622-1.354-3.96-2.009c-8.61-4.215-17.587-7.65-26.707-10.444l0,0 l-0.006,0.007c-34.197-10.48-70.413-11.987-96.931-12.005c-0.006,0-0.006,0-0.013,0c-0.027,0-0.054,0-0.083,0 C256.253,72.791,256.126,72.791,256.001,72.791"}),i.createElement("path",{style:{fill:"#323132"},d:"M299.243,314.787c-9.836-4.145-22.365-5.835-43.243-5.835v106.847V512c0.042,0,0.086,0,0.128,0 c5.329-0.003,10.511-0.215,15.561-0.624v-98.644c12.825-4.852,23.304-14.238,28.095-19.033c6.662-6.669,22.156-24.326,22.156-44.22 C321.94,333.04,314.093,321.045,299.243,314.787z"}),K||(K=i.createElement("g",null)),Q||(Q=i.createElement("g",null)),$||($=i.createElement("g",null)),ee||(ee=i.createElement("g",null)),te||(te=i.createElement("g",null)),ne||(ne=i.createElement("g",null)),ie||(ie=i.createElement("g",null)),re||(re=i.createElement("g",null)),oe||(oe=i.createElement("g",null)),ae||(ae=i.createElement("g",null)),ce||(ce=i.createElement("g",null)),le||(le=i.createElement("g",null)),se||(se=i.createElement("g",null)),de||(de=i.createElement("g",null)),ue||(ue=i.createElement("g",null)))}var we,xe,ye,Ee,ke,Ce,Se,Be,Me,Te,We,ze,De,Ve,Le,Re=i.forwardRef(Oe),Ne=(n.p,["title","titleId"]);function Ae(){return Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ae.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Fe(e,t){var n=e.title,r=e.titleId,o=Ie(e,Ne);return i.createElement("svg",Ae({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 330 330",style:{enableBackground:"new 0 0 330 330"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},o),n?i.createElement("title",{id:r},n):null,i.createElement("g",null,i.createElement("path",{style:{fill:"#EDC07B"},d:"M231.666,64.444h-1.044C207.291,29.969,168.018,8.889,126.111,8.889C56.573,8.889,0,65.462,0,135v60 c0,69.538,56.573,126.111,126.111,126.111h105.555c54.222,0,98.334-44.112,98.334-98.334v-60 C330,108.557,285.888,64.444,231.666,64.444z"}),i.createElement("path",{style:{fill:"#FFFFFF"},d:"M126.111,90c-24.813,0-45,20.188-45,45c0,2.091,0.155,4.145,0.433,6.161 C84.558,163.068,103.389,180,126.111,180c19.837,0,36.705-12.907,42.678-30.761c1.498-4.479,2.322-9.263,2.322-14.239 C171.111,110.188,150.925,90,126.111,90z M126.111,150c-4.806,0-9.08-2.281-11.827-5.807c-1.98-2.543-3.173-5.729-3.173-9.193 c0-8.271,6.729-15,15-15s15,6.729,15,15c0,4.459-1.966,8.458-5.065,11.208C133.398,148.559,129.924,150,126.111,150z"}),i.createElement("path",{style:{fill:"#D7143A"},d:"M126.111,120c-8.271,0-15,6.729-15,15c0,3.465,1.192,6.65,3.173,9.193 c2.747,3.525,7.021,5.807,11.827,5.807c3.813,0,7.286-1.441,9.935-3.792c3.1-2.75,5.065-6.749,5.065-11.208 C141.111,126.729,134.383,120,126.111,120z"}),i.createElement("path",{style:{fill:"#D7143A"},d:"M231.666,94.444h-9.336c-5.354,0-10.303-2.854-12.983-7.488 c-17.153-29.65-49.048-48.067-83.235-48.067C73.115,38.889,30,82.004,30,135c0,0.465,0.011,0.928,0.018,1.391 c0.747,52.357,43.563,94.721,96.094,94.721h105.555c37.68,0,68.334-30.654,68.334-68.334c0-0.467-0.026-0.928-0.035-1.393 C299.218,124.349,268.879,94.444,231.666,94.444z M126.111,180c-22.723,0-41.554-16.932-44.567-38.839 c-0.277-2.016-0.433-4.07-0.433-6.161c0-24.813,20.187-45,45-45c24.814,0,45,20.188,45,45c0,4.977-0.824,9.761-2.322,14.239 C162.816,167.093,145.948,180,126.111,180z"})),we||(we=i.createElement("g",null)),xe||(xe=i.createElement("g",null)),ye||(ye=i.createElement("g",null)),Ee||(Ee=i.createElement("g",null)),ke||(ke=i.createElement("g",null)),Ce||(Ce=i.createElement("g",null)),Se||(Se=i.createElement("g",null)),Be||(Be=i.createElement("g",null)),Me||(Me=i.createElement("g",null)),Te||(Te=i.createElement("g",null)),We||(We=i.createElement("g",null)),ze||(ze=i.createElement("g",null)),De||(De=i.createElement("g",null)),Ve||(Ve=i.createElement("g",null)),Le||(Le=i.createElement("g",null)))}var Pe,Ue,Ze,He=i.forwardRef(Fe),qe=(n.p,["title","titleId"]);function Ge(){return Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ge.apply(this,arguments)}function Xe(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Je(e,t){var n=e.title,r=e.titleId,o=Xe(e,qe);return i.createElement("svg",Ge({id:"cookie",xmlns:"http://www.w3.org/2000/svg",width:48,height:48,viewBox:"0 0 48 48",ref:t,"aria-labelledby":r},o),n?i.createElement("title",{id:r},n):null,Pe||(Pe=i.createElement("defs",null,i.createElement("style",null,"\n      .vi-primary {\n        fill: #ffb500;\n      }\n\n      .vi-primary, .vi-accent {\n        fill-rule: evenodd;\n      }\n\n      .vi-accent {\n        fill: #070b2c;\n      }\n    "))),Ue||(Ue=i.createElement("path",{className:"vi-primary",d:"M41,28.6a17.976,17.976,0,0,1-29.265,7.655,18.08,18.08,0,0,1,7.36-29.259A5.373,5.373,0,0,0,20.779,9.1a5.812,5.812,0,0,0,1.06,1.075c-0.424,1.105-1.643,4.895.9,6.37,0.534,0.958,1.616,1.66,3.613,1.7,0.02,1.381.325,3.629,1.969,4.624,0.925,1.482,2.811,2.365,6.6.751A5.55,5.55,0,0,0,37,27.228,3.282,3.282,0,0,0,41,28.6Z"})),Ze||(Ze=i.createElement("path",{className:"vi-accent",d:"M13.5,25A1.5,1.5,0,1,1,12,26.5,1.5,1.5,0,0,1,13.5,25Zm9,9A1.5,1.5,0,1,1,21,35.5,1.5,1.5,0,0,1,22.5,34Zm0-10A1.5,1.5,0,1,1,21,25.5,1.5,1.5,0,0,1,22.5,24Zm-6-10A1.5,1.5,0,1,1,15,15.5,1.5,1.5,0,0,1,16.5,14Zm17,15A1.5,1.5,0,1,1,32,30.5,1.5,1.5,0,0,1,33.5,29Z"})))}var _e=i.forwardRef(Je),Ye=(n.p,function(e){var t=e.color,n=e.size,i=e.mouseDown,r=e.mouseEnter,o=e.mouseUp,a=e.row,c=e.col,l=e.nodeType;return Object(x.jsxs)("div",{style:{width:"".concat(n,"px"),height:"".concat(n,"px"),display:"inline-block",background:"".concat(t)},className:"node",onMouseDown:function(){return i(a,c)},onMouseEnter:function(){return r(a,c)},onMouseUp:function(){return o(a,c)},id:"row".concat(a,"col").concat(c),children:[l===N.Start&&Object(x.jsx)(Re,{width:n,height:n}),l===N.End&&Object(x.jsx)(He,{width:n,height:n}),l===N.Crumb&&Object(x.jsx)(_e,{width:n,height:n})]})}),Ke=function(e){var t=e.grid,n=e.squareSize,i=e.mouseDown,r=e.mouseEnter,o=e.mouseUp,a=e.mousePressed,c=e.canvasWidth,l=e.canvasHeight;return Object(x.jsx)(je.a,{sx:{margin:1,marginLeft:2,outline:"1px solid rgba(0, 43, 162, 0.98)",width:c,height:l},children:t.map((function(e,t){return Object(x.jsx)("div",{style:{fontSize:0},children:e.map((function(e,t){var c={color:e.getColor(),size:n,row:e.coords.row,col:e.coords.col,mouseIsPressed:a,mouseEnter:r,mouseUp:o,mouseDown:i,key:t,nodeType:e.nodeType};return Object(x.jsx)(Ye,Object(pe.a)({},c))}))},t)}))})};function Qe(e,t,n,i,r,o,a){if(e){if(n-t<2)return;var c=2*Math.floor($e(i,r)/2);!function(e,t,n,i,r){var o=2*Math.floor($e(e,t)/2)+1;i[n][o].isVisited=!0;for(var a=e;a<=t;a++)a===o||i[n][a].isVisited||(i[n][a].isWall=!0,r.push.apply(r,Object(T.a)(L(i[n][a]))))}(t,n,c,a,o),Qe(!e,t,n,i,c-1,o,a),Qe(!e,t,n,c+1,r,o,a)}else{if(r-i<2)return;var l=2*Math.floor($e(t,n)/2);!function(e,t,n,i,r){var o=2*Math.floor($e(e,t)/2)+1;i[o][n].isVisited=!0;for(var a=e;a<=t;a++)a===o||i[a][n].isVisited||(i[a][n].isWall=!0,r.push.apply(r,Object(T.a)(L(i[a][n]))))}(i,r,l,a,o),Qe(!e,t,l-1,i,r,o,a),Qe(!e,l+1,n,i,r,o,a)}}function $e(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var et=function(e){return Math.round(e)%2===0?Math.round(e)+1:Math.round(e)};function tt(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function nt(e,t,n){var i,r=0,o=Object(W.a)(function(e,t){var n=q(e,t),i=e.coords.row-1,r=e.coords.col-1;return G(i,r,t)&&n.push(t[i][r]),G(i=e.coords.row+1,r=e.coords.col-1,t)&&n.push(t[i][r]),G(i=e.coords.row+1,r=e.coords.col+1,t)&&n.push(t[i][r]),G(i=e.coords.row-1,r=e.coords.col+1,t)&&n.push(t[i][r]),n}(n[e][t],n));try{for(o.s();!(i=o.n()).done;){i.value.isWall&&r++}}catch(a){o.e(a)}finally{o.f()}return r<2}var it=function(){function e(t,n,i){Object(M.a)(this,e),this.animations=void 0,this.name=void 0,this.text=void 0,this.animations=t,this.name=n,this.text=i}return Object(B.a)(e,[{key:"create",value:function(){return[]}}]),e}();it.Custom=new it((function(){return[]}),"Custom","\n        The CUSTOM Maze is a blank canvas that lets you create mazes & patterns by\n        clicking on the canvas and dragging!\n    "),it.Random=new it((function(e,t,n){var i=[],r=function(e){for(var t=[],n=0;n<e.length;n++)for(var i=0;i<e[0].length;i++)t.push([n,i]);return t}(e);for(!function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}}(r);0!==r.length;){var o=r.pop(),a=Object(c.a)(o,2),l=a[0],s=a[1];nt(l,s,e)&&(i.push.apply(i,Object(T.a)(L(e[l][s]))),e[l][s].isWall=!0)}return i}),"Random"," The RANDOM maze  works as a variation of kruskal algorithm but it doesnt\n      generate a minimum spanning tree (there doesn't exist a single connected path of empty nodes\n      that passes through all the walls) "),it.RecursiveDivison=new it((function(e,t,n){var i=[];return function(e,t){for(var n=0;n<e.length;n++)if(0===n||n===e.length-1)for(var i=0;i<e[0].length;i++)e[n][i].isWall=!0,t.push.apply(t,Object(T.a)(L(e[n][i])));else e[n][0].isWall=!0,t.push.apply(t,Object(T.a)(L(e[n][0]))),e[n][e[0].length-1].isWall=!0,t.push.apply(t,Object(T.a)(L(e[n][e[0].length-1])))}(e,i),Qe(!0,1,e[0].length-2,1,e.length-2,i,e),i}),"Recursive","\n        RECURSIVE Maze works by recursively dividing the canvas either horizontally or vertically,\n        by adding a wall with a hole, until it can't divide the portion of the canvas any more\n        in which point it backtracks and continues. It guarantees the existance of a solution to\n        the maze\n    "),it.Default=it.Custom;var rt=function(e){var t=e.width,n=e.clicked,r=e.isBusy,o=e.mazeSelected,a={backgroundColor:"rgb(255,189,177)",width:.75*t},c=Object(i.useRef)(null),l=function(e){c.current.click(),n(e)};return Object(x.jsx)(s.a,{direction:"column",width:t,marginLeft:1,children:Object(x.jsxs)(E.a,{sx:{backgroundColor:p,color:g,marginBottom:1},disabled:r,children:[Object(x.jsxs)(k.a,{expandIcon:Object(x.jsx)(fe.a,{sx:{color:g}}),"aria-controls":"panel1a-content",id:"panel1a-header",sx:{marginBottom:0},ref:c,children:[Object(x.jsx)(C.a,{fontWeight:"bold",fontSize:13,children:"MAZE: "}),Object(x.jsxs)(C.a,{paddingLeft:1,fontSize:13,children:["  ",o.name]})]}),Object(x.jsx)(S.a,{sx:{marginBottom:0},children:Object(x.jsxs)(d.a,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",sx:{marginTop:0},children:[Object(x.jsx)(u.a,{sx:a,onClick:function(){return l(it.RecursiveDivison)},children:" Recursive"}),Object(x.jsx)(u.a,{sx:a,onClick:function(){return l(it.Custom)},children:" Custom "}),Object(x.jsx)(u.a,{sx:a,onClick:function(){return l(it.Random)},children:" Random "})]})})]})})},ot=n(196),at=n(101),ct=n.n(at),lt=function(e){var t=e.minSpeed,n=e.maxSpeed,i=e.defaultSpeed,r=e.width,o=e.handleSpeedSlider,a=e.isBusy;return Object(x.jsxs)(s.a,{sx:{backgroundColor:j,marginBottom:1,color:"white"},children:[Object(x.jsx)(s.a,{children:Object(x.jsxs)(C.a,{id:"animation-slider",sx:{paddingTop:1,paddingLeft:2,marginRight:2,fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap",fontSize:14},children:[" Animation Speed",Object(x.jsx)(ct.a,{sx:{paddingLeft:1,height:17}})]})}),Object(x.jsx)(ot.a,{size:"small",max:n,min:t,defaultValue:i,sx:{marginLeft:2,marginBottom:1,width:.9*r,color:"#ff8181"},onChange:o,disabled:a},1)]})};function st(e,t,n){return e[t][n].nodeType===N.Start||e[t][n].nodeType===N.End?[]:(e[t][n].toggle(),L(e[t][n]))}var dt=function(e){var t=e.width,n=e.clicked,i=e.isBusy;return Object(x.jsx)(d.a,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",sx:{marginBottom:1},children:Object(x.jsx)(u.a,{sx:{backgroundColor:"rgba(123,152,248,0.98)",color:g,fontWeight:"bold",width:t},onClick:n,disabled:i,children:"CLEAR"})})},ut=n(191),ht=n(204),ft=n(36),bt=n.n(ft),pt=function(e){var t=e.algorithm,n=(e.width,Object(i.useState)(!1)),r=Object(c.a)(n,2),o=r[0],a=r[1];return Object(i.useEffect)((function(){a(!0)}),[t]),Object(x.jsx)(ut.a,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0,children:Object(x.jsxs)(s.a,{direction:"row",sx:{backgroundColor:b},children:[Object(x.jsxs)(C.a,{sx:{color:g,padding:3,paddingRight:0},children:[" ",t.text," "]}),Object(x.jsx)(ht.a,{href:"#",children:Object(x.jsx)(bt.a,{onClick:function(){return a(!1)},sx:{color:g,padding:1,paddingLeft:0},children:" "})})]})})},jt=function(e){e.width;var t=e.maze,n=Object(i.useState)(!1),r=Object(c.a)(n,2),o=r[0],a=r[1];return Object(i.useEffect)((function(){a(!0)}),[t]),Object(x.jsx)(ut.a,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0,children:Object(x.jsxs)(s.a,{direction:"row",sx:{backgroundColor:p},children:[Object(x.jsxs)(C.a,{sx:{color:g,padding:2.5,paddingRight:.5},children:[" ",t.text," "]}),Object(x.jsx)(ht.a,{href:"#",children:Object(x.jsx)(bt.a,{onClick:function(){return a(!1)},sx:{color:g,padding:1,paddingLeft:0},children:" "})})]})})},gt=function(e){var t=e.clicked,n=e.algorithm,r=Object(i.useState)(!1),o=Object(c.a)(r,2),a=o[0],l=o[1];return Object(i.useEffect)((function(){l(n.isWeighted)}),[n]),Object(x.jsx)(ut.a,{direction:"up",in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(x.jsxs)(s.a,{direction:"column",sx:{backgroundColor:"#ff2b86"},children:[Object(x.jsxs)(s.a,{direction:"row",children:[Object(x.jsx)(C.a,{sx:{color:g,padding:2.5,paddingRight:.5,paddingBottom:0},children:"This algorithm can deal with weighted graphs, thus you have the option to change to add elevation to the maze and find the shortest path given the elevation selected!"}),Object(x.jsx)(ht.a,{href:"#",children:Object(x.jsx)(bt.a,{onClick:function(){return l(!1)},sx:{color:g,padding:1,paddingLeft:0},children:" "})})]}),Object(x.jsx)(u.a,{sx:{marginLeft:5,marginRight:5,color:g,margin:1},onClick:t,children:" ADD ELEVATION "})]})})};var mt=function(e){var t=e.algorithm,n=(e.width,Object(i.useState)(!1)),r=Object(c.a)(n,2),o=r[0],a=r[1];return Object(i.useEffect)((function(){a(!t.isWeighted)}),[t]),Object(x.jsx)(ut.a,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0,children:Object(x.jsxs)(s.a,{direction:"row",sx:{backgroundColor:"#969696"},children:[Object(x.jsx)(C.a,{sx:{color:g,padding:3,paddingRight:0},children:"This algorithm is unweighted so it will disregard both elevation and crumbs in the maze"}),Object(x.jsx)(ht.a,{href:"#",children:Object(x.jsx)(bt.a,{onClick:function(){return a(!1)},sx:{color:g,padding:1,paddingLeft:0},children:" "})})]})})},vt=void 0,Ot=function(e){var t=e.stackWidth,n=e.columns,r=e.rows,o=e.squareSize,a=100,l=Object(i.useState)(50),d=Object(c.a)(l,2),u=d[0],h=d[1],f=Object(i.useState)(!1),b=Object(c.a)(f,2),p=b[0],j=b[1],g=Object(i.useState)(!1),m=Object(c.a)(g,2),v=m[0],O=m[1],w=Object(i.useState)(new A(tt(0,r-1),tt(0,n-1))),E=Object(c.a)(w,2),k=E[0],C=E[1],S=Object(i.useState)(new A(tt(2,r-2),tt(2,n-2))),B=Object(c.a)(S,2),M=B[0],T=B[1],L=Object(i.useState)(!1),R=Object(c.a)(L,2),F=R[0],P=R[1],U=Object(i.useState)(!1),G=Object(c.a)(U,2),X=G[0],J=G[1],_=Object(i.useState)(Y.Bfs),K=Object(c.a)(_,2),Q=K[0],$=K[1],ee=Object(i.useState)(it.Default),te=Object(c.a)(ee,2),ne=te[0],ie=te[1],re=Object(i.useState)([]),oe=Object(c.a)(re,2),ae=oe[0],ce=oe[1];function le(e,t){for(var i=function(i){setTimeout((function(){e[i].apply(),i===e.length-1&&(O(!1),ce(Z(ae,n,r,k,M)))}),t*i)},o=0;o<e.length;o++)i(o)}return Object(i.useEffect)((function(){ce(function(e,t,n,i){for(var r=[],o=0;o<t;o++){for(var a=[],c=0;c<e;c++)a.push(new I(N.Empty,o,c));r.push(a)}return r[n.row][n.col]=new I(N.Start,n.row,n.col),r[i.row][i.col]=new I(N.End,i.row,i.col),r}(n,r,k,M))}),[]),Object(x.jsxs)(s.a,{direction:"row",children:[Object(x.jsxs)(s.a,{direction:"column",sx:{width:t,margin:1},children:[Object(x.jsxs)(s.a,{direction:"row",children:[Object(x.jsx)(dt,{width:t/2,clicked:function(){ce(function(e,t,n,i,r){for(var o=[],a=0;a<n;a++){for(var c=[],l=0;l<t;l++)e[a][l].isWall&&(new V(z.WallNode,e[a][l]).apply(),new V(D.Empty,e[a][l]).apply()),new V(D.Empty,e[a][l]).apply(),c.push(new I(N.Empty,a,l));o.push(c)}return o[i.row][i.col]=new I(N.Start,i.row,i.col),o[r.row][r.col]=new I(N.End,r.row,r.col),o}(ae,n,r,k,M))}.bind(vt),isBusy:v}),Object(x.jsx)(y,{width:t/2,clicked:function(){O(!0);var e=ae[k.row][k.col],t=ae[M.row][M.col];le(Q.getAnimations(ae,e,t),u)}.bind(vt),isBusy:v})]}),Object(x.jsx)(lt,{minSpeed:2.5,maxSpeed:a,defaultSpeed:50,width:t,handleSpeedSlider:function(e,t){h(a-t)}.bind(vt),isBusy:v}),Object(x.jsxs)(s.a,{direction:"row",children:[Object(x.jsx)(be,{width:t/2,isBusy:v,defaultAlgorithm:Q,clicked:function(e){$(e)}.bind(vt)}),Object(x.jsx)(rt,{width:t/2,clicked:function(e){e!==it.Default&&O(!0),le(e.animations(ae,k,M),u/50),ie(e)}.bind(vt),isBusy:v,mazeSelected:ne})]}),Object(x.jsx)(pt,{algorithm:Q,width:t}),Object(x.jsx)(jt,{width:t,maze:ne}),Object(x.jsx)(mt,{algorithm:Q,width:t}),Object(x.jsx)(gt,{clicked:function(){!function(e,t){var n=[];for(n.push(t),t.isVisited=!0;0!==n.length;){var i=n.shift();if(void 0===i)return[];e[i.coords.row][i.coords.col].elevation=tt(0,5);var r,o=Object(W.a)(q(i,e));try{for(o.s();!(r=o.n()).done;){var a=r.value;a.isVisited||a.isWall||(n.push(a),a.isVisited=!0,a.previous=i)}}catch(c){o.e(c)}finally{o.f()}}}(ae,ae[k.row][k.col]),ce(Z(ae,n,r,k,M))}.bind(vt),algorithm:Q})]}),Object(x.jsx)(Ke,{grid:ae,squareSize:o,mouseUp:function(e,t){j(!1)}.bind(vt),mouseDown:function(e,t){if(!v)return F?(C(new A(e,t)),P(!1),void ce(Z(ae,n,r,new A(e,t),M))):X?(T(new A(e,t)),J(!1),void ce(Z(ae,n,r,k,new A(e,t)))):(j(!0),t===k.col&&e===k.row?(P(!0),void ce(H(ae,new A(e,t)))):t===M.col&&e===M.row?(J(!0),void ce(H(ae,new A(e,t)))):void le(st(ae,e,t),u))}.bind(vt),mouseEnter:function(e,t){v||(F||X?new V(z.SelectedNode,ae[e][t]).apply():p&&le(st(ae,e,t),u))}.bind(vt),mousePressed:function(){return j((function(e){return!e}))},canvasHeight:r*o,canvasWidth:n*o})]})},wt=n(192),xt={color:f,"&:hover":{backgroundColor:"#fff",color:"#3c52b2"}},yt=function(e){var t=e.display,n=e.close,i=e.width,r=e.height,o=e.startTutorial,a=i/4,c=r/4;return Object(x.jsx)(wt.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(je.a,{sx:{backgroundColor:p,width:a,height:c,marginLeft:i/20-a/50,marginTop:r/20-c/50,padding:3},children:[Object(x.jsx)(C.a,{sx:{fontSize:40,color:f,fontWeight:"bold"},children:"Welcome,"}),Object(x.jsx)(C.a,{sx:{color:f,fontWeight:"bold",paddingTop:2},children:"This is a small app made in React designed to visualise different graph algorithms through maze generation and path finding"}),Object(x.jsxs)(s.a,{direction:"row",sx:{paddingTop:4},children:[Object(x.jsx)(u.a,{onClick:n,sx:xt,children:" CLOSE "}),Object(x.jsx)(u.a,{onClick:o,sx:xt,style:{marginLeft:i/7},children:" TUTORIAL"})]})]})})},Et=function(e){var t=e.display,n=e.close,i=e.marginTop;return Object(x.jsx)(wt.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(s.a,{direction:"row",sx:Object(pe.a)(Object(pe.a)({},Tt),{},{marginTop:i}),children:[Object(x.jsx)(C.a,{sx:Mt,children:"With these controllers we can clear the whole canvas, solve the maze as well as controlling the speed of the animation"}),Object(x.jsx)(u.a,{sx:Bt,onClick:n,children:" NEXT "})]})})},kt=function(e){var t=e.display,n=e.close,i=e.marginTop;return Object(x.jsx)(wt.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(s.a,{direction:"row",style:Tt,sx:{marginTop:i},children:[Object(x.jsx)(C.a,{sx:Mt,children:"The two dropdowns allows us to pick the algorithm to solve the maze and shortest path, as well as different options for generating a maze!"}),Object(x.jsx)(u.a,{sx:Bt,onClick:n,children:" NEXT "})]})})},Ct=function(e){var t=e.display,n=e.close,i=e.marginTop;return Object(x.jsx)(wt.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(s.a,{direction:"row",style:Tt,sx:{marginTop:i},children:[Object(x.jsx)(C.a,{sx:Mt,children:"Here information will pop up explaining both the algorithm selected to solve the maze as well as the maze generation selected."}),Object(x.jsx)(u.a,{sx:Bt,onClick:n,children:" NEXT "})]})})},St=function(e){var t=e.display,n=e.close,i=e.marginTop;return Object(x.jsx)(wt.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(s.a,{direction:"row",sx:Object(pe.a)(Object(pe.a)({},Tt),{},{marginTop:i}),children:[Object(x.jsx)(C.a,{sx:Mt,children:"Finally we have the canvas, we can move the dog and the steak around by simply clicking them and them clicking where we want them. By default the maze is custom, that means if click in any empty box it becomes a wall"}),Object(x.jsx)(u.a,{sx:Bt,onClick:n,children:" LETS PLAY!  "})]})})},Bt={color:"#fff",margin:2,"&:hover":{backgroundColor:"#fff",color:"#f38d8d"}},Mt={padding:2,color:"white",fontWeight:"bold"},Tt={backgroundColor:"#ff8181",width:730,"margin-left":350},Wt=function(e){var t=e.start,n=e.height,r=Object(i.useState)(0),o=Object(c.a)(r,2),a=o[0],l=o[1],s=["none","functionButtons","algorithmButtons","infoBox","canvas"];Object(i.useEffect)((function(){l(t?1:0)}),[t]);var d=function(){l((function(e){return e+1}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Et,{display:"functionButtons"===s[a],close:d,marginTop:n/500}),Object(x.jsx)(kt,{display:"algorithmButtons"===s[a],close:d,marginTop:n/50}),Object(x.jsx)(Ct,{display:"infoBox"===s[a],close:d,marginTop:n/34}),Object(x.jsx)(St,{display:"canvas"===s[a],close:d,marginTop:n/11.2})]})},zt=function(){var e=Object(l.a)(),t=e.height,n=e.width,r=.22*n,o=Object(i.useState)(!0),a=Object(c.a)(o,2),s=a[0],d=a[1],u=Object(i.useState)(!1),h=Object(c.a)(u,2),f=h[0],b=h[1],p=Object(i.useState)(24),j=Object(c.a)(p,1)[0],g=et(.665*n/j),m=et(.8*t/j);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(yt,{startTutorial:function(){b(!0),d(!1)},close:function(){return d((function(){return!1}))},display:s,width:n,height:t}),Object(x.jsx)(Wt,{start:f,height:t}),Object(x.jsx)(Ot,{stackWidth:r,columns:g,rows:m,squareSize:j})]})};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(zt,{})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.b1d086c6.chunk.js.map