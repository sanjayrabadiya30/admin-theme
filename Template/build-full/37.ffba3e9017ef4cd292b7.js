(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{CsB4:function(e,t,a){"use strict";a.r(t),a.d(t,"DashCryptoModule",(function(){return s}));var l=a("ofXK"),n=a("tyNb"),r=(a("afTD"),a("awsf"),a("lQzn"),a("xr3h"),a("dXp+"),a("IvVL"),a("d3ux"),a("QO40"),a("s3ub"),a("fXoL")),i=a("/n7v");const o=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){setTimeout(()=>{AmCharts.makeChart("line-area2",{type:"serial",theme:"light",marginTop:10,marginRight:0,dataProvider:[{year:"Jan",value:5,value2:80},{year:"Feb",value:30,value2:95},{year:"Mar",value:25,value2:87},{year:"Apr",value:55,value2:155},{year:"May",value:45,value2:140},{year:"Jun",value:65,value2:147},{year:"Jul",value:60,value2:130},{year:"Aug",value:105,value2:180},{year:"Sep",value:80,value2:160},{year:"Oct",value:110,value2:175},{year:"Nov",value:120,value2:165},{year:"Dec",value:150,value2:200}],valueAxes:[{axisAlpha:0,position:"left"}],graphs:[{id:"g1",balloonText:'[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',bullet:"round",lineColor:"#1de9b6",lineThickness:3,negativeLineColor:"#1de9b6",valueField:"value"},{id:"g2",balloonText:'[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',bullet:"round",lineColor:"#10adf5",lineThickness:3,negativeLineColor:"#10adf5",valueField:"value2"}],chartCursor:{cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.3,fullWidth:!0},categoryField:"year",categoryAxis:{minorGridAlpha:0,minorGridEnabled:!0,gridAlpha:0,axisAlpha:0,lineAlpha:0},legend:{useGraphSettings:!0,position:"top"}});const e={AU:{latitude:-27,longitude:133},BR:{latitude:-10,longitude:-55},BW:{latitude:-22,longitude:24},IN:{latitude:20,longitude:77},KE:{latitude:1,longitude:38},MX:{latitude:23,longitude:-102},MY:{latitude:2.5,longitude:112.5},NI:{latitude:13,longitude:-85},NZ:{latitude:-41,longitude:174},PH:{latitude:13,longitude:122},PL:{latitude:52,longitude:20},RU:{latitude:60,longitude:100},TH:{latitude:15,longitude:100},ZA:{latitude:-29,longitude:24}},t=[{code:"MX",name:"Mexico",value:114793341,color:"#a389d4"},{code:"BR",name:"Brazil",value:196655014,color:"#1de9b6"},{code:"PL",name:"Poland",value:38298949,color:"#f44236"},{code:"KE",name:"Kenya",value:41609728,color:"#1dc4e9"},{code:"ZA",name:"South Africa",value:50459978,color:"#f4c22b"},{code:"RU",name:"Russia",value:142835555,color:"#f4c22b"},{code:"IN",name:"India",value:241491960,color:"#1de9b6"},{code:"PH",name:"Philippines",value:94852030,color:"#04a9f5"},{code:"AU",name:"Australia",value:22605732,color:"#1dc4e9"},{code:"TH",name:"Thailand",value:69518555,color:"#f44236"},{code:"BW",name:"Botswana",value:2030738,color:"#04a9f5"},{code:"MY",name:"Malaysia",value:28859154,color:"#A389D4"},{code:"NZ",name:"New Zealand",value:4414509,color:"#04a9f5"},{code:"NI",name:"Nicaragua",value:5869859,color:"#A389D4"}];let a,l,n=1/0,r=-1/0;for(a=0;a<t.length;a++)l=t[a].value,l<n&&(n=l),l>r&&(r=l);const i=9800*Math.PI,o=18*Math.PI,d=[];for(a=0;a<t.length;a++){const u=t[a];l=u.value;let s=(l-n)/(r-n)*(i-o)+o;s<o&&(s=o);const m=Math.sqrt(s/(8*Math.PI)),c=u.code;d.push({type:"circle",theme:"light",width:m,height:m,color:u.color,longitude:e[c].longitude,latitude:e[c].latitude,title:u.name+"</br> [ "+l+" ]",value:l})}AmCharts.makeChart("world-low",{type:"map",projection:"eckert6",dataProvider:{map:"worldLow",images:d},export:{enabled:!0}}),AmCharts.makeChart("widget-line-chart",{type:"serial",addClassNames:!0,defs:{filter:[{x:"-50%",y:"-50%",width:"200%",height:"200%",id:"blur",feGaussianBlur:{in:"SourceGraphic",stdDeviation:"30"}},{id:"shadow",x:"-10%",y:"-10%",width:"120%",height:"120%",feOffset:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"20"},feGaussianBlur:{result:"blurOut",in:"offOut",stdDeviation:"10"},feColorMatrix:{result:"blurOut",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"},feBlend:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}}]},fontSize:15,dataProvider:[{day:"Mon",value:60},{day:"Tue",value:45},{day:"Wed",value:70},{day:"Thu",value:55},{day:"Fri",value:70},{day:"Sat",value:55},{day:"Sun",value:70}],autoMarginOffset:0,marginRight:0,categoryField:"day",categoryAxis:{color:"#fff",gridAlpha:0,axisAlpha:0,lineAlpha:0,offset:-20,inside:!0},valueAxes:[{fontSize:0,inside:!0,gridAlpha:0,axisAlpha:0,lineAlpha:0,minimum:0,maximum:100}],chartCursor:{valueLineEnabled:!1,valueLineBalloonEnabled:!1,cursorAlpha:0,zoomable:!1,valueZoomable:!1,cursorColor:"#fff",categoryBalloonColor:"#51b4e6",valueLineAlpha:0},graphs:[{id:"g1",type:"line",valueField:"value",lineColor:"#ffffff",lineAlpha:1,lineThickness:3,fillAlphas:0,showBalloon:!0,balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",fillAlphas:.2,bullet:"round",bulletBorderAlpha:1,bulletSize:5,hideBulletsCount:50,lineThickness:2,useLineColorForBulletBorder:!0,valueField:"value",balloonText:'<span style="font-size:18px;">[[value]]</span>'}}]});const u=[{year:"1999",value:30},{year:"2000",value:55},{year:"2001",value:80},{year:"2002",value:60},{year:"2003",value:70},{year:"2004",value:70},{year:"2005",value:110},{year:"2006",value:90},{year:"2007",value:130}],s=AmCharts.makeChart("Earnings-chart",{type:"serial",addClassNames:!0,defs:{filter:[{x:"-50%",y:"-50%",width:"200%",height:"200%",id:"blur",feGaussianBlur:{in:"SourceGraphic",stdDeviation:"30"}},{id:"shadow",x:"-10%",y:"-10%",width:"120%",height:"120%",feOffset:{result:"offOut",in:"SourceAlpha",dx:"0",dy:"20"},feGaussianBlur:{result:"blurOut",in:"offOut",stdDeviation:"10"},feColorMatrix:{result:"blurOut",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"},feBlend:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}}]},fontSize:15,dataProvider:u,dataDateFormat:"YYYY",autoMarginOffset:0,marginRight:-1,marginBottom:-2,categoryField:"year",categoryAxis:{color:"#fff",gridAlpha:0,axisAlpha:0,lineAlpha:0,offset:-20,inside:!0,parseDates:!0,minPeriod:"YYYY"},chartCursor:{valueLineEnabled:!1,valueLineBalloonEnabled:!1,cursorAlpha:0,zoomable:!1,cursorColor:"#fff",categoryBalloonColor:"#88dcef",valueZoomable:!1,valueLineAlpha:0},valueAxes:[{fontSize:0,inside:!0,gridAlpha:0,axisAlpha:0,lineAlpha:0}],graphs:[{id:"g1",type:"line",valueField:"value",fillColors:["#1dc4e9","#A389D4"],lineColor:"#1dc4e9",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",type:"smoothedLine"},lineAlpha:1,lineThickness:5,fillAlphas:.2,showBalloon:!0}]});setTimeout(()=>{s.zoomToIndexes(1,u.length-2)},400)},500)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-dash-crypto"]],decls:85,vars:6,consts:[[1,"row"],[1,"col-md-6","col-xl-4"],["cardClass","theme-bg bitcoin-wallet",3,"hidHeader","options"],[1,"text-white","mb-2"],[1,"text-white","mb-2","f-w-300"],[1,"text-white","d-block"],[1,"fab","fa-btc","f-70","text-white"],["cardClass","theme-bg2 bitcoin-wallet",3,"hidHeader","options"],[1,"fas","fa-dollar-sign","f-70","text-white"],["cardClass","bg-c-blue bitcoin-wallet",3,"hidHeader","options"],[1,"fas","fa-pound-sign","f-70","text-white"],[1,"col-xl-8","col-md-12"],["cardTitle","Statistics"],["id","line-area2",1,"lineAreaDashboard",2,"height","350px"],[1,"col-xl-4","col-md-12"],["cardTitle","Notifications","cardClass","note-bar","blockClass","p-0"],["href","javascript:",1,"media","friendlist-box"],[1,"mr-3","photo-table"],[1,"far","fa-bell","f-30"],[1,"media-body"],[1,"f-12","float-right","text-muted"],[1,"text-muted","m-0"],["href","javascript:",1,"media","friendlist-box","border-top"],[1,"col-xl-8","col-md-6"],["cardTitle","Users From United States"],["id","world-low",2,"height","350px"],[1,"card"],[1,"card-header"],[1,"card-block"],[1,"f-w-300"],["id","Earnings-chart",2,"height","300px"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"app-card",2),r["\u0275\u0275elementStart"](3,"h5",3),r["\u0275\u0275text"](4,"Bitcoin Wallet"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"h2",4),r["\u0275\u0275text"](6,"$9,302"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"span",5),r["\u0275\u0275text"](8,"Ratings by Market Capitalization"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"i",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",1),r["\u0275\u0275elementStart"](11,"app-card",7),r["\u0275\u0275elementStart"](12,"h5",3),r["\u0275\u0275text"](13,"Bitcoin Wallet"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"h2",4),r["\u0275\u0275text"](15,"$8,101"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"span",5),r["\u0275\u0275text"](17,"Ratings by Market Capitalization"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](18,"i",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"div",1),r["\u0275\u0275elementStart"](20,"app-card",9),r["\u0275\u0275elementStart"](21,"h5",3),r["\u0275\u0275text"](22,"Bitcoin Wallet"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](23,"h2",4),r["\u0275\u0275text"](24,"$7,501"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"span",5),r["\u0275\u0275text"](26,"Ratings by Market Capitalization"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](27,"i",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](28,"div",11),r["\u0275\u0275elementStart"](29,"app-card",12),r["\u0275\u0275element"](30,"div",13),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](31,"div",14),r["\u0275\u0275elementStart"](32,"app-card",15),r["\u0275\u0275elementStart"](33,"a",16),r["\u0275\u0275elementStart"](34,"div",17),r["\u0275\u0275element"](35,"i",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](36,"div",19),r["\u0275\u0275elementStart"](37,"h6"),r["\u0275\u0275text"](38,"New order received"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](39,"span",20),r["\u0275\u0275text"](40,"12.56"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"p",21),r["\u0275\u0275text"](42,"2 unread notification"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](43,"a",22),r["\u0275\u0275elementStart"](44,"div",17),r["\u0275\u0275element"](45,"i",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](46,"div",19),r["\u0275\u0275elementStart"](47,"h6"),r["\u0275\u0275text"](48,"New user register"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](49,"span",20),r["\u0275\u0275text"](50,"12.36"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](51,"p",21),r["\u0275\u0275text"](52,"xx messages"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](53,"a",22),r["\u0275\u0275elementStart"](54,"div",17),r["\u0275\u0275element"](55,"i",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](56,"div",19),r["\u0275\u0275elementStart"](57,"h6"),r["\u0275\u0275text"](58,"New order register"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](59,"span",20),r["\u0275\u0275text"](60,"11.45"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](61,"p",21),r["\u0275\u0275text"](62,"2 read notification"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](63,"a",22),r["\u0275\u0275elementStart"](64,"div",17),r["\u0275\u0275element"](65,"i",18),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](66,"div",19),r["\u0275\u0275elementStart"](67,"h6"),r["\u0275\u0275text"](68,"New order prepend"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](69,"span",20),r["\u0275\u0275text"](70,"9.39"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](71,"p",21),r["\u0275\u0275text"](72,"xx messages"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](73,"div",23),r["\u0275\u0275elementStart"](74,"app-card",24),r["\u0275\u0275element"](75,"div",25),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](76,"div",1),r["\u0275\u0275elementStart"](77,"div",26),r["\u0275\u0275elementStart"](78,"div",27),r["\u0275\u0275elementStart"](79,"h5"),r["\u0275\u0275text"](80,"Statistics"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](81,"div",28),r["\u0275\u0275elementStart"](82,"h3",29),r["\u0275\u0275text"](83,"$894.39"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](84,"div",30),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("hidHeader",!0)("options",!1),r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("hidHeader",!0)("options",!1),r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("hidHeader",!0)("options",!1))},directives:[i.a],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.i.forChild(o)],n.i]}),e})();var u=a("ebz3");let s=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.c,d,u.a]]}),e})()}}]);