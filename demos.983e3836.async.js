"use strict";(self.webpackChunkperfect_warehouse=self.webpackChunkperfect_warehouse||[]).push([[433],{85477:function(he,u,n){n.r(u),n.d(u,{default:function(){return fe}});var l=n(79685),N=n(7863),T=n.n(N),i=n(11386),F=n(49813),I=n(78810),L=n(34324),B=n(47663),E=n(3729),A=n.n(E),w=n(98158),o={prefectFontXs:"10px",prefectFontSm:"12px",prefectFontMd:"14px",prefectFontLg:"16px",prefectIconXs:"16px",prefectIconSm:"18px",prefectIconMd:"20px",prefectIconLg:"22px",prefectPrimaryColor:"#325dff",prefectDangerColor:"#f53f3f",prefectInfoColor:"#00b42a",prefectWarningColor:"#ff7d00",prefectDisabledColor:"#f2f3f5",prefectTextColor:"#ffffff",prefectDarkPrimaryColor:"#3C7EFF",prefectDarkDangerColor:"rgba(183, 63, 63, 0.6)",prefectDarkInfoColor:"rgba(39, 195, 70, 0.6)",prefectDarkWarningColor:"rgba(255, 150, 38, 0.6)",prefectDarkDisabledColor:"#f2f3f5",prefectDarkTextColor:"#ffffff",prefectDarkFontColor:"#ffffffe6",prefectRadiusXs:"5px",prefectRadiusSm:"10px",prefectRadiusMd:"20px",prefectRadiusLg:"50%",prefectTransformXs:"5px",prefectTransformSm:"10px",prefectTransformMd:"15px",prefectTransformLg:"20px"},g,X="#e8f3ff",Z="#e8ffea",M="#fef7e8",R="#feece8",P="#253757",W="#22482c",G="#573d25",H="#553332",O="#4e5969",z="#1d2129",$="#ffffffb3",V="#ffffff",J=o.prefectFontMd,K=o.prefectRadiusXs,Q=o.prefectPrimaryColor,U=o.prefectInfoColor,Y=o.prefectWarningColor,q=o.prefectDangerColor,_=o.prefectFontLg,ee=o.prefectFontXs,x=o.prefectTransformSm,ne=`
.prefect-alert,
.prefect-dark-alert {
  padding: 12px 15px;
  font-size: `.concat(J,`;
  text-align: left;
  display: flex;
  border-radius: `).concat(K,`;
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: `).concat(O,`;

    .alert-icon {
      margin-right: `).concat(x,`;

      &-info {
        color: `).concat(Q,`;
      }

      &-success {
        color: `).concat(U,`;
      }

      &-warning {
        color: `).concat(Y,`;
      }

      &-error {
        color: `).concat(q,`;
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: `).concat(_,`;
        margin-bottom: `).concat(x,`;
        color: `).concat(z,`;
      }
    }
  }

  .close-icon {
    font-size: `).concat(ee,`;
    cursor: pointer;
  }
}

.prefect-dark-alert-info {
  background-color: `).concat(P,`;
}

.prefect-dark-alert-success {
  background-color: `).concat(W,`;
}

.prefect-dark-alert-warning {
  background-color: `).concat(G,`;
}

.prefect-dark-alert-error {
  background-color: `).concat(H,`;
}

.prefect-alert-info {
  background-color: `).concat(X,`;
}

.prefect-alert-success {
  background-color: `).concat(Z,`;
}

.prefect-alert-warning {
  background-color: `).concat(M,`;
}

.prefect-alert-error {
  background-color: `).concat(R,`;
}

.prefect-dark-alert {
  .alert-content {
    color: `).concat($,`;

    .alert-text .title {
      color: `).concat(V,`;
    }
  }
}
`),te=`
.fadeContent-enter,
.fadeContent-appear {
  opacity: 0;
}

.fadeContent-enter-active,
.fadeContent-appear-active {
  opacity: 1;
  transition: opacity 200ms;
}

.fadeContent-exit {
  opacity: 1;
}

.fadeContent-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
`,re=w.ZP.div(g||(g=A()([`
	`,`
	`,`
`])),ne,te),e=n(63342),m=(0,l.createContext)({}),je=function(t){var a=t.children;return _jsx(m.Provider,{value:t,children:a})},ke=null,oe=n(77566),ae=n.n(oe);function ce(){for(var r=[],t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return a.forEach(function(f){f!==void 0&&f!==""&&r.push(f)}),ae()(new Set(r)).join(" ")}var le=function(t,a){var c=t.style,f=t.className,C=t.type,p=C===void 0?"info":C,v=t.title,se=t.content,y=t.showClear,ie=y===void 0?!1:y,h=t.showIcon,pe=h===void 0?!0:h,de=t.closeElement,j=t.onClose,ue=(0,l.useState)(!0),k=T()(ue,2),ge=k[0],xe=k[1],D=(0,l.useContext)(m),me=D.prefixCls,S=D.darkTheme,Ce=ce(me,f,"prefect-".concat(S?"dark-":"","alert-").concat(p),S?"prefect-dark-alert":"prefect-alert"),ve=(0,l.useMemo)(function(){switch(p){case"info":return(0,e.jsx)(i.Z,{className:"alert-icon-info"});case"success":return(0,e.jsx)(F.Z,{className:"alert-icon-success"});case"warning":return(0,e.jsx)(i.Z,{className:"alert-icon-warning"});case"error":return(0,e.jsx)(I.Z,{className:"alert-icon-error"});default:return(0,e.jsx)(i.Z,{className:"alert-icon-info"})}},[p]),ye=function(){xe(!1),j&&j()};return(0,e.jsx)(re,{children:(0,e.jsx)(B.Z,{in:ge,timeout:200,appear:!0,mountOnEnter:!0,classNames:"fadeContent",unmountOnExit:!0,onEnter:function(d){d.style.display="flex"},onExited:function(d){d.style.display="none"},children:(0,e.jsxs)("div",{className:Ce,style:c,ref:a,children:[(0,e.jsxs)("div",{className:"alert-content",children:[pe&&(0,e.jsx)("div",{className:"alert-icon",children:ve}),(0,e.jsxs)("div",{className:"alert-text",children:[v&&(0,e.jsx)("div",{className:"title",children:v}),se]})]}),ie&&(0,e.jsx)("div",{className:"close-icon",onClick:ye,children:de||(0,e.jsx)(L.Z,{})})]})})})},s=(0,l.forwardRef)(le),De=function(){},Se=null;function fe(){var r={margin:"15px 0"};return(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{type:"info",content:"Here is an info text",style:r}),(0,e.jsx)(s,{type:"success",content:"Here is an success text",style:r}),(0,e.jsx)(s,{type:"warning",content:"Here is an warning text",style:r}),(0,e.jsx)(s,{type:"error",content:"Here is an error text",style:r})]})}}}]);
