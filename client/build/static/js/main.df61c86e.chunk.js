(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(17),s=a(35),o=a(81),l=a(82),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",f=Object(s.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.filter((function(e){return e._id!==t.payload}));case j:return t.payload;case d:case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);default:return e}}}),m=a(52),h=a(160),x=a(161),O=a(153),g=a(164),v=a(159),y=a.p+"static/media/memories.9cfa8a46.png",C=a(19),w=a(149),k=Object(w.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),N=a(84),I=a(162),E=a(163),S=a(76),D=a.n(S),T=a(20),_=a.n(T),z=a(36),A=a(37),W=a.n(A),B="https://owrmemories.herokuapp.com/posts",F=function(e,t){return W.a.patch("".concat(B,"/").concat(e),t)},L=function(e){return W.a.delete("".concat(B,"/").concat(e))},M=function(e){return W.a.patch("".concat(B,"/").concat(e,"/likePost"))},R=a(5),H=function(e){var t=e.setCurrentId,a=e.currentId,r=Object(i.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),s=Object(m.a)(c,2),o=s[0],l=s[1],u=k(),p=Object(i.b)();Object(n.useEffect)((function(){r&&l(r)}),[r]);var j=function(){t(null),l({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(R.jsx)(N.a,{className:u.paper,children:Object(R.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(u.root," ").concat(u.form),onSubmit:function(e){e.preventDefault(),p(a?function(e,t){return function(){var a=Object(z.a)(_.a.mark((function a(n){var r,c;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,o):function(e){return function(){var t=Object(z.a)(_.a.mark((function t(a){var n,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,W.a.post(B,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(o)),j()},children:[Object(R.jsxs)(O.a,{variant:"h6",children:[a?"Editng":"Creating"," a Memory"]}),Object(R.jsx)(I.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:o.creator,onChange:function(e){return l(Object(C.a)(Object(C.a)({},o),{},{creator:e.target.value}))}}),Object(R.jsx)(I.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(C.a)(Object(C.a)({},o),{},{title:e.target.value}))}}),Object(R.jsx)(I.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(C.a)(Object(C.a)({},o),{},{message:e.target.value}))}}),Object(R.jsx)(I.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(C.a)(Object(C.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(R.jsx)("div",{className:u.fileInput,children:Object(R.jsx)(D.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(C.a)(Object(C.a)({},o),{},{selectedFile:t}))}})}),Object(R.jsx)(E.a,{className:u.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(R.jsx)(E.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0,children:"Clear"})]})})},J=a(18),P=Object(w.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),K=a(154),U=a(155),V=a(156),q=a(157),G=a(79),Q=a.n(G),X=a(80),Y=a.n(X),Z=a(78),$=a.n(Z),ee=a(77),te=a.n(ee),ae=function(e){var t,a=e.post,n=e.setCurrentId,r=P(),c=Object(i.b)();return Object(R.jsxs)(K.a,{className:r.card,children:[Object(R.jsx)(U.a,{className:r.media,image:a.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:a.title}),Object(R.jsxs)("div",{className:r.overlay,children:[Object(R.jsx)(O.a,{variant:"h6",children:a.creator}),Object(R.jsx)(O.a,{variant:"body2",children:te()(a.createdAt).fromNow()})]}),Object(R.jsx)("div",{className:r.overlay2,children:Object(R.jsx)(E.a,{style:{color:"white"},size:"small",onClick:function(){return n(a._id)},children:Object(R.jsx)($.a,{fontSize:"default"})})}),Object(R.jsx)("div",{className:r.details,children:Object(R.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"h2",children:a.tags.map((function(e){return"#".concat(e," ")}))})}),Object(R.jsx)(O.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2",children:a.title}),Object(R.jsx)(V.a,{children:Object(R.jsx)(O.a,(t={variant:"body2",color:"textSecondary"},Object(J.a)(t,"variant","h5"),Object(J.a)(t,"component","p"),Object(J.a)(t,"children",a.message),t))}),Object(R.jsxs)(q.a,{className:r.cardActions,children:[Object(R.jsxs)(E.a,{size:"small",color:"primary",onClick:function(){return c((e=a._id,function(){var t=Object(z.a)(_.a.mark((function t(a){var n,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:n=t.sent,r=n.data,a({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(R.jsx)(Q.a,{fontSize:"small"})," Like ",a.likeCount," "]}),Object(R.jsxs)(E.a,{size:"small",color:"primary",onClick:function(){return c((e=a._id,function(){var t=Object(z.a)(_.a.mark((function t(a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(R.jsx)(Y.a,{fontSize:"small"})," Delete"]})]})]})},ne=Object(w.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),re=a(158),ce=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts}));console.log(a);var n=ne();return a.length?Object(R.jsx)(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){var a;return Object(R.jsx)(v.a,(a={item:!0,xs:12,sm:6},Object(J.a)(a,"item",!0),Object(J.a)(a,"children",Object(R.jsx)(ae,{post:e,setCurrentId:t})),a),e._id)}))}):Object(R.jsx)(re.a,{})},ie=Object(w.a)((function(e){return Object(J.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),se=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=ie(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(z.a)(_.a.mark((function e(t){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get(B);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(R.jsxs)(h.a,{maxidth:"lg",children:[Object(R.jsxs)(x.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(R.jsx)(O.a,{className:c.heading,variant:"h2",align:"center",children:"Memories"}),Object(R.jsx)("img",{className:c.image,src:y,alt:"memories",height:"60"})]}),Object(R.jsx)(g.a,{in:!0,children:Object(R.jsx)(h.a,{children:Object(R.jsxs)(v.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(R.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(R.jsx)(ce,{setCurrentId:r})}),Object(R.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(R.jsx)(H,{currentId:a,setCurrentId:r})})]})})})]})},oe=(a(119),Object(s.d)(f,Object(s.c)(Object(s.a)(o.a))));c.a.render(Object(R.jsx)(i.a,{store:oe,children:Object(R.jsx)(se,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.df61c86e.chunk.js.map