(function(e){function n(n){for(var o,r,c=n[0],l=n[1],s=n[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var l=t[c];0!==i[l]&&(o=!1)}o&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},i={app:0},a=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"15cf":function(e,n,t){},"164f":function(e,n,t){"use strict";t("baba")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),i={id:"mainHolder"},a={key:0,id:"Welcome"},r={key:1},c={key:1,id:"mainView"},l={id:"Navigation"},s=Object(o["f"])("h1",{id:"siteTitle"},"WELCOME",-1),u={ref:"mbgm",controls:"",autoplay:"",loop:"",hidden:"true"},d=Object(o["f"])("source",{src:"/bgm.wav"},null,-1),f=Object(o["g"])(" Your browser does not support the audio element. "),b=[d,f];function p(e,n,t,d,f,p){var m=this,h=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["e"])("div",i,[e.firstEnter?(Object(o["q"])(),Object(o["e"])("section",a,[e.loaded?(Object(o["q"])(),Object(o["e"])("button",{key:0,id:"Enter",onClick:n[0]||(n[0]=function(){return p.toMyWorld&&p.toMyWorld.apply(p,arguments)})},"↓ Enter My World ↓ ")):Object(o["d"])("",!0),e.loaded?Object(o["d"])("",!0):(Object(o["q"])(),Object(o["e"])("h2",r," loading "+Object(o["z"])(e.loadingProgress)+" % ",1))])):Object(o["d"])("",!0),e.loaded?(Object(o["q"])(),Object(o["e"])("section",c,[Object(o["f"])("span",l,[s,Object(o["f"])("button",{onClick:n[1]||(n[1]=function(e){m.$router.push("/AboutMe")}),id:"NavButton"},"About Me"),Object(o["f"])("button",{onClick:n[2]||(n[2]=function(e){m.$router.push("/Projects")}),id:"NavButton"},"Projects"),Object(o["f"])("button",{onClick:n[3]||(n[3]=function(e){m.$router.push("/Gallery")}),id:"NavButton"},"Gallery")]),Object(o["h"])(h,{class:"content"})])):Object(o["d"])("",!0),Object(o["f"])("audio",u,b,512)])}t("d3b7"),t("cfc3"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("159b");var m=t("5a89"),h=t("34ad"),g=new m["cb"];g.background=new m["k"](1184274);var j=new m["T"](75,window.innerWidth/window.innerHeight,.1,1e3),y=new m["pb"]({alpha:!0}),w=new m["p"];g.add(w),w.add(j);var O=new m["a"](16777215,.75),v=new m["U"](16777215,110,10);v.position.z=10,g.add(O),g.add(v),v.castShadow=!0;var x={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(function(){x.width=window.innerWidth,x.height=window.innerHeight,j.aspect=x.width/x.height,j.updateProjectionMatrix(),y.setSize(x.width,x.height),y.setPixelRatio(Math.min(window.devicePixelRatio,2))}));for(var P=200,A=new Float32Array(3*P),M=0;M<P;M++)A[3*M+0]=10*(Math.random()-.5),A[3*M+1]=10*(Math.random()-.5),A[3*M+2]=10*(Math.random()-.5);var S=new m["W"]({color:"#212121",sizeAttenuation:!0,size:.1}),z=new m["h"];z.setAttribute("position",new m["g"](A,3));var T=new m["V"](z,S);g.add(T);var k=new m["f"](1,1,1),q=new m["L"]({color:16711680}),E=new m["I"](k,q);g.add(E);var C,I=4,W=0,F=0,N=0,H=0,D=0;function _(){var e=new h["a"];e.load("/cutie.glb",(function(e){C=e.scene,C.position.z=-1,C.scale.x=.4,C.scale.y=.4,C.scale.z=.4,g.add(C),U()}),(function(e){var n=e.loaded/e.total;E.scale.x=2*n,E.scale.z=2*n,E.scale.y=2*n,F=100*n,fn.loadingProgress=(F+N+H+D)/4,console.log(n+"% loaded")}),(function(e){console.error(e)}))}var G,B,L,Y=[];function V(){var e=new h["a"];e.load("/realAsteroid.glb",(function(e){e.scene.scale.x=.5,e.scene.scale.y=.5,e.scene.scale.z=.5,Y[0]=e.scene,Y[1]=e.scene.clone(),g.add(Y[0]),g.add(Y[1]),Y[0].position.x=-5,Y[1].position.x=5,U()}),(function(e){var n=e.loaded/e.total;E.scale.x=2*n,E.scale.z=2*n,E.scale.y=2*n,H=100*n,fn.loadingProgress=(F+N+H+D)/4,console.log(n+"% loaded")}),(function(e){console.error(e)}))}function $(){var e=new h["a"];e.load("/asteroidBonny.glb",(function(e){G=e.scene,G.scale.x=1,G.scale.y=1,G.scale.z=1,g.add(G),G.rotation.y-=.8,G.rotation.z+=.1,console.log(G),B=new m["c"](e.scene),e.animations.forEach((function(e){B.clipAction(e).play()})),U()}),(function(e){var n=e.loaded/e.total;E.scale.x=2*n,E.scale.z=2*n,E.scale.y=2*n,N=100*n,fn.loadingProgress=(F+N+H+D)/4,console.log(n+"% loaded")}),(function(e){console.error(e)}))}function R(){var e=new h["a"];e.load("/asteroidBonnyFraction.glb",(function(e){L=e.scene,L.scale.x=.2,L.scale.y=.2,L.scale.z=.2,L.position.y=2,U()}),(function(e){var n=e.loaded/e.total;E.scale.x=2*n,E.scale.z=2*n,E.scale.y=2*n,D=100*n,fn.loadingProgress=(F+N+H+D)/4,console.log(n+"% loaded")}),(function(e){console.error(e)}))}function U(){W++,W==I&&(console.log("All models loaded"),cancelAnimationFrame(ee),g.remove(E),fn.loaded=!0,re(),X(),ce())}var J,K=new m["j"];function X(){J=requestAnimationFrame(X),G.rotation.y+=.01;var e=K.getDelta();G.position.y+=.01,G.position.y>2&&cancelAnimationFrame(J),B&&B.update(e),y.render(g,j)}var Q=new m["mb"];function Z(e){Q.x=e.clientX/window.innerWidth-.5,Q.y=e.clientY/window.innerHeight-.5}window.addEventListener("mousemove",Z);var ee,ne,te=0,oe=!1;function ie(){for(var e=0;e<P;e++){var n=T.geometry.attributes.position.array;n[3*e+2]-=.001,n[3*e]-=.005,T.geometry.attributes.position.needsUpdate=!0}}function ae(){ee=requestAnimationFrame(ae),E.rotation.y+=.05,E.rotation.z+=.05,y.render(g,j)}function re(){requestAnimationFrame(re),Y[0].rotation.y+=.2,Y[0].rotation.z+=.2,Y[1].rotation.y+=.2,Y[1].rotation.z+=.2}function ce(){requestAnimationFrame(ce),G.rotation.y+=.01;var e={};e.x=Q.x,e.y=-Q.y;var n=.02;j.position.x+=(e.x-j.position.x)*n,j.position.y+=(e.y-j.position.y)*n,w.position.y=3*-te/x.height,y.render(g,j)}window.addEventListener("scroll",(function(){te=window.scrollY;var e=Math.round(te/x.height);console.log(te+" "+x.height),1!=e||oe||(oe=!0,fn.hideEntrance(),be())}));var le=1,se=.05,ue=1;function de(){ne=requestAnimationFrame(de),se-=5e-4,L.scale.x+=se*le,L.scale.y+=se*le,L.scale.z+=se*le,C.position.x-=.02*ue,C.position.y-=.01*ue,C.rotation.y+=.005*ue,ie(),C.position.x<-5&&(ue=0),1==le&&L.scale.x>2&&(le=-1,j.rotation.x+=.1),-1==le&&(L.position.x-=.15,L.scale.x>500&&(fe(),cancelAnimationFrame(ne)))}function fe(){requestAnimationFrame(fe),L.rotation.y+=1e-4}function be(){g.remove(G),g.remove(Y[0]),g.remove(Y[1]),g.add(L),de()}function pe(){y.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(y.domElement),y.render(g,j),j.position.z=5,ae(),$(),V(),_(),R()}var me=pe,he={name:"App",components:{},data:function(){return{loadingProgress:0,loaded:!1,firstEnter:!0}},methods:{playMusic:function(){this.$refs.mbgm.play()},toMyWorld:function(){var e=document.getElementById("mainView");e.scrollIntoView({behavior:"smooth"}),this.hideEntrance(),be()},hideEntrance:function(){this.firstEnter=!1}},mounted:function(){window.history.scrollRestoration="manual",window.scrollTo(0,0),this.playMusic()}},ge=(t("164f"),t("6b0d")),je=t.n(ge);const ye=je()(he,[["render",p]]);var we=ye,Oe=t("6c02"),ve=function(e){return Object(o["t"])("data-v-00e3958c"),e=e(),Object(o["r"])(),e},xe={id:"Gallery"},Pe=ve((function(){return Object(o["f"])("h2",{class:"imageSection"}," Digital Drawing & Design : ",-1)})),Ae=["src"],Me=ve((function(){return Object(o["f"])("h2",{class:"imageSection"}," 3D Modeling & Rendering : ",-1)})),Se=["src"];function ze(e,n,t,i,a,r){return Object(o["q"])(),Object(o["e"])("span",xe,[Pe,(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.digitalThumbs,(function(e){return Object(o["q"])(),Object(o["e"])("img",{key:e,src:e},null,8,Ae)})),128)),Me,(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.modelThumbs,(function(e){return Object(o["q"])(),Object(o["e"])("img",{key:e,src:e},null,8,Se)})),128))])}var Te={name:"Gallery",data:function(){return{modelThumbs:["/ImgThumbNail/originAsteroid.jpg","/ImgThumbNail/normalAsteroid.jpg"],digitalThumbs:["/ImgThumbNail/backKnight copy.jpg","/ImgThumbNail/m0.jpg","/ImgThumbNail/chaos.jpg","/ImgThumbNail/fuckFinal.jpg"]}},mounted:function(){}};t("7871"),t("90e5");const ke=je()(Te,[["render",ze],["__scopeId","data-v-00e3958c"]]);var qe=ke,Ee={id:"AboutMe"},Ce=Object(o["f"])("h3",null," Hi, I'm 博尼! Welcome to my world! ",-1),Ie=Object(o["f"])("h3",null," I'm currently study Electrical Engineering at the Cooper Union. ",-1),We=Object(o["f"])("h3",null," This site is for showing all my works and projects. ",-1),Fe=Object(o["f"])("h3",null," Hope you enjoy it! ",-1),Ne=Object(o["f"])("h3",null," Here's my CV: any communication is welcome ",-1),He=Object(o["f"])("a",{href:"fefase"},"fasdfasdf",-1),De=[Ce,Ie,We,Fe,Ne,He];function _e(e,n,t,i,a,r){return Object(o["q"])(),Object(o["e"])("span",Ee,De)}var Ge={name:"AboutMe"};t("6115");const Be=je()(Ge,[["render",_e]]);var Le=Be,Ye={id:"projectList"},Ve=Object(o["f"])("h2",null,"Space Persona",-1),$e=Object(o["f"])("p",null,"A Personality Game About Finding Your Position in Space Mining Era",-1),Re=Object(o["f"])("img",{src:"/ImgThumbNail/spacePersona.jpg"},null,-1),Ue=[Ve,$e,Re],Je=Object(o["f"])("button",{class:"projectCard"},[Object(o["f"])("h2",null,"Space Telescope Data Center"),Object(o["f"])("p",null,"A Web Platform for Showing Data Obtained by Yangwang-1 Satellite"),Object(o["f"])("img",{src:"/ImgThumbNail/skyObserver.jpg"})],-1),Ke=Object(o["f"])("button",{class:"projectCard"},[Object(o["f"])("h2",null,"Chinese Poem Auto Generation"),Object(o["f"])("p",null,"A Web Platform for Showing Data Obtained by Yangwang-1 Satellite"),Object(o["f"])("img",{src:"/ImgThumbNail/skyObserver.jpg"})],-1);function Xe(e,n,t,i,a,r){var c=this;return Object(o["q"])(),Object(o["e"])("span",Ye,[Object(o["f"])("button",{onClick:n[0]||(n[0]=function(e){c.$router.push("/Projects/SpacePersona")}),class:"projectCard"},Ue),Je,Ke])}var Qe={name:"Project"};t("cbe6");const Ze=je()(Qe,[["render",Xe]]);var en=Ze,nn=Object(o["f"])("h1",{class:"projectTitle"}," Space Persona ",-1),tn=Object(o["f"])("h2",{class:"projectSubTitle"}," Created for Origin Space ",-1),on=[nn,tn];function an(e,n,t,i,a,r){return Object(o["q"])(),Object(o["e"])("span",null,on)}var rn={name:"SpacePersona"};t("86dc");const cn=je()(rn,[["render",an]]);var ln=cn,sn=[{path:"/Gallery",component:qe},{path:"/",component:Le},{path:"/Projects",component:en},{path:"/Projects/SpacePersona",component:ln},{path:"/AboutMe",component:Le}],un=Object(Oe["a"])({history:Object(Oe["b"])(),routes:sn});me();var dn=Object(o["c"])(we).use(un).mount("#app"),fn=n["default"]=dn},6115:function(e,n,t){"use strict";t("7cdd")},7871:function(e,n,t){"use strict";t("be5a")},"7cdd":function(e,n,t){},"86dc":function(e,n,t){"use strict";t("15cf")},"90e5":function(e,n,t){"use strict";t("9963")},9963:function(e,n,t){},baba:function(e,n,t){},be5a:function(e,n,t){},cbe6:function(e,n,t){"use strict";t("f6af")},f6af:function(e,n,t){}});
//# sourceMappingURL=app.e809657f.js.map