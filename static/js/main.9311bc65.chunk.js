(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),i=t(9),c=t.n(i),s=(t(22),t(5)),l=t(6),p=t(8),h=t(7),u=t(10),d=(t(23),t(24),t(2)),g=t(3),b=g.a.section(a||(a=Object(d.a)(["\n  padding-bottom: 15px;\n"]))),m=t(1);var x,f=function(e){var n=e.children;return Object(m.jsx)(b,{children:n})},j=g.a.div(x||(x=Object(d.a)([""])));var O,y,v,w,k,S,C,I,M,z,F=function(e){var n=e.children;return Object(m.jsx)(j,{children:n})},P=g.a.header(O||(O=Object(d.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),Q=g.a.form(y||(y=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),N=g.a.button(v||(v=Object(d.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),L=g.a.span(w||(w=Object(d.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),A=g.a.input(k||(k=Object(d.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),E=function(e){Object(p.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(n){var t=n.currentTarget.value.toLowerCase();e.setState({searchQuery:t})},e.handleFormSubmit=function(n){n.preventDefault(),""===e.state.searchQuery&&u.b.warn("\ud83e\udd84 Enter yor query!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(m.jsx)(P,{className:"Searchbar",children:Object(m.jsxs)(Q,{className:"SearchForm",onSubmit:this.handleFormSubmit,children:[Object(m.jsx)(N,{type:"submit",className:"SearchForm-button",children:Object(m.jsx)(L,{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)(A,{className:"SearchForm-input",type:"text",autocomplete:"off",placeholder:"Search images and photos",onChange:this.handleInputChange,value:this.state.searchQuery})]})})}}]),t}(r.Component),D=t(13),q=g.a.ul(S||(S=Object(d.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),H=g.a.h1(C||(C=Object(d.a)(["\n  margin-top: 50px;\n\n  margin-bottom: 0;\n\n  font-size: 35px;\n  text-align: center;\n  color: #292f50;\n"]))),T=g.a.div(I||(I=Object(d.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),U=t(12),B=t.n(U),G=t(15),K=function(){function e(){Object(s.a)(this,e),this.url="https://pixabay.com/api/",this.key="21694306-d611e7839c34f02b2916a8d9a",this.page=1}return Object(l.a)(e,[{key:"fetchApiImage",value:function(){var e=Object(G.a)(B.a.mark((function e(n){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.url,"?image_type=photo&orientation=horizontal&q=").concat(n,"&page=").concat(this.page,"&per_page=12&key=").concat(this.key)).then((function(e){return e.ok?e.json():Promise.reject(new Error(u.b.error("\u2620\ufe0f Error, nothing found",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.page+=1}}]),e}(),J=g.a.li(M||(M=Object(d.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),R=g.a.img(z||(z=Object(d.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));var _,W=function(e){var n=e.smallImage,t=e.alt,a=e.onClick,r=e.largeImage;return Object(m.jsx)(J,{className:"ImageGalleryItem",onClick:a,children:Object(m.jsx)(R,{src:n,alt:t,"data-image":r,className:"ImageGalleryItem-image"})})},V=g.a.button(_||(_=Object(d.a)(["\n  display: block;\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:focus,\n  &:hover {\n    background-color: #303f9f;\n  }\n"])));var X,Y,Z,$=function(e){var n=e.onClick,t=e.children;return Object(m.jsx)(V,{type:"submit",onClick:n,children:t})},ee=t(16),ne=t.n(ee),te=new K,ae=function(e){Object(p.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={images:null,page:1,status:"idle",error:""},e.loadsMorePages=function(n){e.setState((function(e){return{page:e.page+1}})),te.incrementPage()},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,n){var t=this,a=e.searchQuery,r=this.props.searchQuery,o=n.page,i=this.state.page;a!==r&&""!==r&&(this.setState({status:"pending",page:1}),te.fetchApiImage(r,i).then((function(e){return t.setState({images:e.hits,status:"resolved"})})).catch((function(e){return t.setState({error:e,status:"rejected"})}))),o!==i&&(this.setState({status:"pending"}),te.fetchApiImage(r,o).then((function(e){return t.setState({images:[].concat(Object(D.a)(n.images),Object(D.a)(e.hits)),status:"resolved"})})).catch((function(e){return t.setState({error:e,status:"rejected"})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this,n=this.state,t=n.images,a=n.status;return"idle"===a?Object(m.jsx)(H,{children:"Find your image, wraith now. Please, write your image query"}):"pending"===a?Object(m.jsx)(T,{children:Object(m.jsx)(ne.a,{type:"Puff",color:"#1f2527",height:100,width:100,timeout:3e3})}):"resolved"===a?Object(m.jsxs)(m.Fragment,{children:[0===t.length&&Object(m.jsx)(H,{children:"Sorry, we didn't find anything of the request!"}),t.length>0&&Object(m.jsx)(q,{className:"ImageGallery",children:t.map((function(n){var t=n.id,a=n.webformatURL,r=n.tags,o=n.largeImageURL;return Object(m.jsx)(W,{smallImage:a,alt:r,largeImage:o,onClick:e.props.onOpenModal},t)}))}),t.length>=12&&Object(m.jsx)($,{onClick:this.loadsMorePages,children:"Load more"})]}):"rejected"===a?Object(m.jsx)(H,{children:"Uh, oh we have a problem: Error 404"}):void 0}}]),t}(r.Component),re=g.a.div(X||(X=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),oe=g.a.div(Y||(Y=Object(d.a)(["\n  max-width: calc(100vw - 100px);\n  max-height: calc(100vh - 30px);\n"]))),ie=g.a.img(Z||(Z=Object(d.a)(["\n  width: 700px;\n  height: 500px;\n"]))),ce=document.querySelector("#modal-root"),se=function(e){Object(p.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).handleKeyDown=function(n){"Escape"===n.code&&e.props.onClose()},e.onClickModalClose=function(n){n.currentTarget===n.target&&e.props.onClose()},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(i.createPortal)(Object(m.jsx)(re,{className:"Overlay",onClick:this.onClickModalClose,children:Object(m.jsx)(oe,{className:"Modal",children:Object(m.jsx)(ie,{src:this.props.modalImage,alt:""})})}),ce)}}]),t}(r.Component),le=function(e){Object(p.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={searchQuery:"",showModal:!1,largeImage:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.formSubmitHandler=function(n){e.setState({searchQuery:n.trim()})},e.getImageLargeSize=function(n){e.setState({largeImage:n.target.getAttribute("data-image")}),e.toggleModal()},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,n=e.searchQuery,t=e.showModal,a=e.largeImage;return Object(m.jsxs)("div",{className:"App",children:[t&&Object(m.jsx)(se,{onClose:this.toggleModal,modalImage:a}),Object(m.jsx)(f,{children:Object(m.jsxs)(F,{children:[Object(m.jsx)(E,{onSubmit:this.formSubmitHandler}),Object(m.jsx)(ae,{searchQuery:n,onOpenModal:this.getImageLargeSize})]})}),Object(m.jsx)(u.a,{})]})}}]),t}(r.Component),pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),o(e),i(e)}))};c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(le,{})}),document.getElementById("root")),pe()}},[[50,1,2]]]);
//# sourceMappingURL=main.9311bc65.chunk.js.map