(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5xEe":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("qCKp");e.Subject=o.Subject},"8yf6":function(t,e,n){},"n/Uz":function(t,e,n){"use strict";n.r(e),n.d(e,"AdvNotificationModule",(function(){return O}));var o=n("ofXK"),i=n("tyNb"),s=n("fXoL");function r(t){return"function"==typeof t}var a=n("8yf6"),l=function(){function t(){this.limit=5,this.showClose=!0,this.position="bottom-right",this.timeout=5e3,this.theme="default"}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),c=function(t){return t[t.ADD=0]="ADD",t[t.CLEAR=1]="CLEAR",t[t.CLEAR_ALL=2]="CLEAR_ALL",t}({}),m=function(){return function(t,e){this.type=t,this.value=e}}(),u=function(){function t(t){this.config=t,this.uniqueCounter=0,this.eventSource=new a.Subject,this.events=this.eventSource.asObservable()}return t.prototype.default=function(t){this.add(t,"default")},t.prototype.info=function(t){this.add(t,"info")},t.prototype.success=function(t){this.add(t,"success")},t.prototype.wait=function(t){this.add(t,"wait")},t.prototype.error=function(t){this.add(t,"error")},t.prototype.warning=function(t){this.add(t,"warning")},t.prototype.add=function(e,n){var o;if(!(o="string"==typeof e&&""!==e||function(t){return"number"==typeof t}(e)?{title:e.toString()}:e)||!o.title&&!o.msg)throw new Error("ng2-toasty: No toast title or message specified!");n=n||"default",this.uniqueCounter++;var i,s=this._checkConfigItem(this.config,o,"showClose");i=o.theme&&t.THEMES.indexOf(o.theme)>-1?o.theme:this.config.theme;var a={id:this.uniqueCounter,title:o.title,msg:o.msg,showClose:s,type:"toasty-type-"+n,theme:"toasty-theme-"+i,onAdd:o.onAdd&&r(o.onAdd)?o.onAdd:null,onRemove:o.onRemove&&r(o.onRemove)?o.onRemove:null};a.timeout=o.hasOwnProperty("timeout")?o.timeout:this.config.timeout,this.emitEvent(new m(c.ADD,a)),o.onAdd&&r(o.onAdd)&&o.onAdd.call(this,a)},t.prototype.clearAll=function(){this.emitEvent(new m(c.CLEAR_ALL))},t.prototype.clear=function(t){this.emitEvent(new m(c.CLEAR,t))},t.prototype._checkConfigItem=function(t,e,n){return!1!==e[n]&&(!!e[n]||t[n])},t.prototype.emitEvent=function(t){this.eventSource&&this.eventSource.next(t)},t.THEMES=["default","material","bootstrap"],t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](l))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),p=n("jhN1"),d=function(){function t(t){this.domSanitized=t}return t.prototype.transform=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.domSanitized.bypassSecurityTrustHtml(t)},t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](p.DomSanitizer))},t.\u0275pipe=s["\u0275\u0275definePipe"]({name:"safeHtml",type:t,pure:!0}),t}();function f(t,e){if(1&t){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",3),s["\u0275\u0275listener"]("click",(function(t){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().close(t)})),s["\u0275\u0275elementEnd"]()}}function h(t,e){if(1&t&&(s["\u0275\u0275element"](0,"span",8),s["\u0275\u0275pipe"](1,"safeHtml")),2&t){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("innerHTML",s["\u0275\u0275pipeBind1"](1,1,n.toast.title),s["\u0275\u0275sanitizeHtml"])}}function g(t,e){1&t&&s["\u0275\u0275element"](0,"br")}function y(t,e){if(1&t&&(s["\u0275\u0275element"](0,"span",9),s["\u0275\u0275pipe"](1,"safeHtml")),2&t){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("innerHtml",s["\u0275\u0275pipeBind1"](1,1,n.toast.msg),s["\u0275\u0275sanitizeHtml"])}}function b(t,e){if(1&t&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275template"](1,h,2,3,"span",5),s["\u0275\u0275template"](2,g,1,0,"br",6),s["\u0275\u0275template"](3,y,2,3,"span",7),s["\u0275\u0275elementEnd"]()),2&t){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.toast.title),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.toast.title&&n.toast.msg),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.toast.msg)}}var T=function(t,e){return[t,e]},v=function(){function t(){this.closeToastEvent=new s.EventEmitter}return t.prototype.close=function(t){t.preventDefault(),this.closeToastEvent.next(this.toast)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["ng2-toast"]],inputs:{toast:"toast"},outputs:{closeToastEvent:"closeToast"},decls:3,vars:6,consts:[[1,"toast",3,"ngClass"],["class","close-button",3,"click",4,"ngIf"],["class","toast-text",4,"ngIf"],[1,"close-button",3,"click"],[1,"toast-text"],["class","toast-title",3,"innerHTML",4,"ngIf"],[4,"ngIf"],["class","toast-msg",3,"innerHtml",4,"ngIf"],[1,"toast-title",3,"innerHTML"],[1,"toast-msg",3,"innerHtml"]],template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275template"](1,f,1,0,"div",1),s["\u0275\u0275template"](2,b,4,3,"div",2),s["\u0275\u0275elementEnd"]()),2&t&&(s["\u0275\u0275property"]("ngClass",s["\u0275\u0275pureFunction2"](3,T,e.toast.type,e.toast.theme)),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.toast.showClose),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.toast.title||e.toast.msg))},directives:[o.r,o.u],pipes:[d],encapsulation:2}),t}();function w(t,e){if(1&t){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ng2-toast",2),s["\u0275\u0275listener"]("closeToast",(function(){s["\u0275\u0275restoreView"](n);var t=e.$implicit;return s["\u0275\u0275nextContext"]().closeToast(t)})),s["\u0275\u0275elementEnd"]()}2&t&&s["\u0275\u0275property"]("toast",e.$implicit)}var S=function(t){return[t]},E=function(){function t(t,e){this.config=t,this.toastyService=e,this._position="",this.toasts=[],this.position=""}return Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(e){if(e){for(var n=!0,o=0;o<t.POSITIONS.length;o++)if(t.POSITIONS[o]===e){n=!1;break}n&&(e=this.config.position)}else e=this.config.position;this._position="toasty-position-"+e},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.toastyService.events.subscribe((function(e){e.type===c.ADD?t.add(e.value):e.type===c.CLEAR?t.clear(e.value):e.type===c.CLEAR_ALL&&t.clearAll()}))},t.prototype.closeToast=function(t){this.clear(t.id)},t.prototype.add=function(t){this.toasts.length>=this.config.limit&&this.toasts.shift(),this.toasts.push(t),t.timeout&&this._setTimeout(t)},t.prototype.clear=function(t){var e=this;if(!t)throw new Error("Please provide id of Toast to close");this.toasts.forEach((function(n,o){n.id===t&&(n.onRemove&&r(n.onRemove)&&n.onRemove.call(e,n),e.toasts.splice(o,1))}))},t.prototype.clearAll=function(){var t=this;this.toasts.forEach((function(e,n){e.onRemove&&r(e.onRemove)&&e.onRemove.call(t,e)})),this.toasts=[]},t.prototype._setTimeout=function(t){var e=this;window.setTimeout((function(){e.clear(t.id)}),t.timeout)},t.POSITIONS=["bottom-right","bottom-left","top-right","top-left","top-center","bottom-center","center-center"],t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](l),s["\u0275\u0275directiveInject"](u))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["ng2-toasty"]],inputs:{position:"position"},decls:2,vars:4,consts:[["id","toasty",3,"ngClass"],[3,"toast","closeToast",4,"ngFor","ngForOf"],[3,"toast","closeToast"]],template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275template"](1,w,1,1,"ng2-toast",1),s["\u0275\u0275elementEnd"]()),2&t&&(s["\u0275\u0275property"]("ngClass",s["\u0275\u0275pureFunction1"](2,S,e.position)),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.toasts))},directives:[o.r,o.t,v],encapsulation:2}),t}(),x=[l,{provide:u,useFactory:function(t){return new u(t)},deps:[l]}],C=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:x}},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},providers:x,imports:[[o.c]]}),t}(),k=n("/n7v");const I=[{path:"",component:(()=>{class t{constructor(t){this.toastyService=t,this.position="bottom-right",this.showClose=!0,this.theme="bootstrap",this.type="default",this.closeOther=!1}ngOnInit(){}addToast(t){t.closeOther&&this.toastyService.clearAll(),this.position=t.position?t.position:this.position;const e={title:t.title,msg:t.msg,showClose:t.showClose,timeout:t.timeout,theme:t.theme,onAdd:t=>{},onRemove:t=>{}};switch(t.type){case"default":this.toastyService.default(e);break;case"info":this.toastyService.info(e);break;case"success":this.toastyService.success(e);break;case"wait":this.toastyService.wait(e);break;case"error":this.toastyService.error(e);break;case"warning":this.toastyService.warning(e)}}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](u))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["app-adv-notification"]],decls:76,vars:1,consts:[[1,"row"],[1,"col-sm-12"],["cardTitle","Notification Default"],[1,"btn","btn-inverse","ripple","light",3,"click"],[1,"btn","btn-info","ripple","light",3,"click"],[1,"btn","btn-success","ripple","light",3,"click"],[1,"btn","btn-primary","ripple","light",3,"click"],[1,"btn","btn-warning","ripple",3,"click"],[1,"btn","btn-danger","ripple","light",3,"click"],["cardTitle","Notification Position"],["cardTitle","Notification Bootstrap"],["cardTitle","Notification Material"],[3,"position"]],template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"app-card",2),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4,"Notification All Options : "),s["\u0275\u0275elementStart"](5,"code"),s["\u0275\u0275text"](6," (click) with option, title, msg, showClose, timeout, position, theme, type"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"button",3),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Inverse Toasty",msg:"Turning standard Inverse alerts into awesome notifications",timeout:5e3,theme:"default",position:"bottom-right",type:"default"})})),s["\u0275\u0275text"](8,"Default"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"button",4),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Info Toasty",msg:"Turning standard Info alerts into awesome notifications",timeout:5e3,theme:"default",position:"bottom-right",type:"info"})})),s["\u0275\u0275text"](10,"Info"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"button",5),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Success Toasty",msg:"Turning standard Success alerts into awesome notifications",timeout:5e3,theme:"default",position:"bottom-right",type:"success"})})),s["\u0275\u0275text"](12,"Success"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Primary Toasty",msg:"Turning standard Primary alerts into awesome notifications",timeout:5e3,theme:"default",position:"bottom-right",type:"wait"})})),s["\u0275\u0275text"](14,"Primary/Wait"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"button",7),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Warning Toasty",msg:"Turning standard Warning alerts into awesome notifications",timeout:5e3,theme:"default",position:"bottom-right",type:"warning"})})),s["\u0275\u0275text"](16,"Warning"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"button",8),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Danger Toasty",msg:"Turning standard Danger alerts into awesome notifications",timeout:5e3,theme:"default",position:"bottom-right",type:"error"})})),s["\u0275\u0275text"](18,"Danger/Error"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"div",1),s["\u0275\u0275elementStart"](20,"app-card",9),s["\u0275\u0275elementStart"](21,"p"),s["\u0275\u0275text"](22,"This plugin has layout options where you can display it in any corner of the screen, simply click one layout corners and press the buttons on the other section to see the magic"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"top-left",closeOther:!0})})),s["\u0275\u0275text"](24,"Top Left"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](25,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"top-right",closeOther:!0})})),s["\u0275\u0275text"](26,"Top Right"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"top-center",closeOther:!0})})),s["\u0275\u0275text"](28,"Top Center"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"bottom-left",closeOther:!0})})),s["\u0275\u0275text"](30,"Bottom Left"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"bottom-right",closeOther:!0})})),s["\u0275\u0275text"](32,"Bottom Right"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](33,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"bottom-center",closeOther:!0})})),s["\u0275\u0275text"](34,"Bottom Center"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",showClose:!0,timeout:5e3,theme:"bootstrap",type:"wait",position:"center-center",closeOther:!0})})),s["\u0275\u0275text"](36,"Center Center"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](37,"div",1),s["\u0275\u0275elementStart"](38,"app-card",10),s["\u0275\u0275elementStart"](39,"p"),s["\u0275\u0275text"](40,"Change data-type : "),s["\u0275\u0275elementStart"](41,"code"),s["\u0275\u0275text"](42,' theme="bootstrap"'),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](43," to change notification color"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](44,"button",3),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",timeout:5e3,theme:"bootstrap",position:"bottom-right",type:"default"})})),s["\u0275\u0275text"](45,"Default"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](46,"button",4),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",timeout:5e3,theme:"bootstrap",position:"bottom-right",type:"info"})})),s["\u0275\u0275text"](47,"Info"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](48,"button",5),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",timeout:5e3,theme:"bootstrap",position:"bottom-right",type:"success"})})),s["\u0275\u0275text"](49,"Success"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](50,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",timeout:5e3,theme:"bootstrap",position:"bottom-right",type:"wait"})})),s["\u0275\u0275text"](51,"Primary/Wait"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](52,"button",7),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",timeout:5e3,theme:"bootstrap",position:"bottom-right",type:"warning"})})),s["\u0275\u0275text"](53,"Warning"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](54,"button",8),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Bootstrap Toasty",msg:"Turning standard Bootstrap alerts into awesome notifications",timeout:5e3,theme:"bootstrap",position:"bottom-right",type:"error"})})),s["\u0275\u0275text"](55,"Danger/Error"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](56,"div",1),s["\u0275\u0275elementStart"](57,"app-card",11),s["\u0275\u0275elementStart"](58,"p"),s["\u0275\u0275text"](59,"Change data-type : "),s["\u0275\u0275elementStart"](60,"code"),s["\u0275\u0275text"](61,' theme="material"'),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](62," to change notification color"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](63,"button",3),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Material Toasty",msg:"Turning standard Material alerts into awesome notifications",timeout:5e3,theme:"material",position:"bottom-right",type:"default"})})),s["\u0275\u0275text"](64,"Default"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](65,"button",4),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Material Toasty",msg:"Turning standard Material alerts into awesome notifications",timeout:5e3,theme:"material",position:"bottom-right",type:"info"})})),s["\u0275\u0275text"](66,"Info"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](67,"button",5),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Material Toasty",msg:"Turning standard Material alerts into awesome notifications",timeout:5e3,theme:"material",position:"bottom-right",type:"success"})})),s["\u0275\u0275text"](68,"Success"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](69,"button",6),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Material Toasty",msg:"Turning standard Material alerts into awesome notifications",timeout:5e3,theme:"material",position:"bottom-right",type:"wait"})})),s["\u0275\u0275text"](70,"Primary/Wait"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](71,"button",7),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Material Toasty",msg:"Turning standard Material alerts into awesome notifications",timeout:5e3,theme:"material",position:"bottom-right",type:"warning"})})),s["\u0275\u0275text"](72,"Warning"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](73,"button",8),s["\u0275\u0275listener"]("click",(function(){return e.addToast({title:"Material Toasty",msg:"Turning standard Material alerts into awesome notifications",timeout:5e3,theme:"material",position:"bottom-right",type:"error"})})),s["\u0275\u0275text"](74,"Danger/Error"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](75,"ng2-toasty",12)),2&t&&(s["\u0275\u0275advance"](75),s["\u0275\u0275property"]("position",e.position))},directives:[k.a,E],styles:[""]}),t})()}];let B=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.i.forChild(I)],i.i]}),t})();var A=n("ebz3");let O=(()=>{class t{}return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,B,A.a,C.forRoot()]]}),t})()}}]);