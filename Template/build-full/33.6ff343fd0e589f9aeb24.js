(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{Q22p:function(e,t,n){"use strict";n.r(t),n.d(t,"TodoListModule",(function(){return f}));var l=n("ofXK"),o=n("tyNb"),a=n("fXoL"),r=n("/n7v"),d=n("3Pt+"),m=n("VU1P"),i=n("zCax"),s=n("ujr+");const c=["defaultClick"],u=function(e,t){return{"btn-danger":e,"btn-secondary":t}},p=function(e,t){return{"btn-danger":e,"btn-primary":t}},S=[{path:"",component:(()=>{class e{constructor(){this.newTodoCard="",this.newTodoList="",this.newTodoModal=""}ngOnInit(){}addTodoCard(){""===this.todoCardMessage||void 0===this.todoCardMessage?this.todo_card_message_error=!0:(this.newTodoCard=this.newTodoCard+"<li><p>"+this.todoCardMessage+"</p></li>",this.todoCardMessage="")}clearAllTodoCardTask(){const e=document.querySelectorAll("#task-list li");for(let t=0;t<e.length;t++)e[t].remove();this.newTodoCard=""}addTodoList(){if(""===this.todoListMessage||void 0===this.todoListMessage)this.todo_list_message_error=!0;else{const e=Math.floor(899999*Math.random())+1e5;this.newTodoList=this.newTodoList+'<div class="to-do-list mb-3"><div class="d-inline-block"><label class="check-task custom-control custom-checkbox d-flex justify-content-center"><input type="checkbox" class="custom-control-input" id="info_'+e+'" (change)="completeTodoList($event)"><span class="custom-control-label">'+this.todoListMessage+'</span></label></div><div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div></div>',this.todoListMessage=""}}completeTodoList(e){e.target.parentElement.classList.remove("done-task"),e.target.checked&&e.target.parentElement.classList.add("done-task")}addTodoModal(){if(""===this.todoModalMessage||void 0===this.todoModalMessage)this.todo_modal_message_error=!0;else{const e=Math.floor(899999*Math.random())+1e5;this.newTodoModal=this.newTodoModal+'<div class="to-do-list mb-3"><div class="d-inline-block"><label class="check-task custom-control custom-checkbox d-flex justify-content-center"><input type="checkbox" class="custom-control-input" id="info_'+e+'" (change)="completeTodoList($event)"><span class="custom-control-label">'+this.todoModalMessage+'</span></label></div><div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div></div>',this.todoModalMessage="",this.defaultClick.nativeElement.click()}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-todo-list"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](c,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.defaultClick=n.first)},decls:170,vars:21,consts:[[1,"row"],[1,"col-xl-6"],["cardTitle","To Do Card List",3,"options"],[1,"input-group","mb-3"],["type","text","autocomplete","off","name","task-insert","placeholder","Create your task list","required","",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"input-group-append"],["id","create-task",1,"btn","btn-icon",3,"ngClass","click"],[1,"fa","fa-plus"],["id","task-container"],["id","task-list"],["appTodoCardComplete",""],[3,"innerHTML"],[1,"text-center"],["id","clear-all-tasks","type","button",1,"btn","btn-primary","m-b-0",3,"click"],["cardTitle","To Do List",3,"options"],["type","text","autocomplete","off","name","task-insert","placeholder","Create your task list","required","",1,"form-control","add_task_todo",3,"ngModel","ngModelChange","keyup"],["id","add-btn",1,"btn","btn-icon",3,"ngClass","click"],[1,"new-task"],[1,"to-do-list","mb-3"],[1,"d-inline-block"],[1,"check-task","custom-control","custom-checkbox","d-flex","justify-content-center"],["type","checkbox","id","customCheck1",1,"custom-control-input",3,"change"],[1,"custom-control-label"],[1,"float-right"],["href","javascript:","appTodoListRemove","",1,"delete_todolist"],[1,"far","fa-trash-alt"],["type","checkbox","id","customCheck2",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck3",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck4",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck5",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck6",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck7",1,"custom-control-input",3,"change"],[1,"col-xl-12"],["cardTitle","To Do List in Modal",3,"options"],[1,"tasks-widget"],["type","checkbox","id","customCheck8",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck9",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck10",1,"custom-control-input",3,"change"],["type","checkbox","id","customCheck11",1,"custom-control-input",3,"change"],["type","button",1,"btn","btn-primary","btn-add-task","m-t-10",3,"click"],["modalDefault",""],[1,"app-modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","basic-close",3,"click"],["aria-hidden","true"],[1,"app-modal-body"],[1,"col-sm-12"],[1,"form-material"],[1,"right-icon-control"],["action","javascript:",1,"form-material"],[1,"form-group","form-primary"],["type","text","autocomplete","off","name","task-insert","placeholder","Create your task list","required","",1,"form-control","save_task_todo",3,"ngModel","ngModelChange","keyup"],[1,"form-bar"],[1,"app-modal-footer"],["type","button",1,"btn",3,"ngClass","click"],["type","button","data-dismiss","modal",1,"btn","btn-default",3,"click"],["defaultClick",""]],template:function(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"app-card",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"input",4),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.todoCardMessage=e}))("keyup",(function(){return t.todo_card_message_error=!1})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",5),a["\u0275\u0275elementStart"](6,"button",6),a["\u0275\u0275listener"]("click",(function(){return t.addTodoCard()})),a["\u0275\u0275element"](7,"i",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"section",8),a["\u0275\u0275elementStart"](9,"ul",9),a["\u0275\u0275elementStart"](10,"li",10),a["\u0275\u0275elementStart"](11,"p"),a["\u0275\u0275text"](12,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"li",10),a["\u0275\u0275elementStart"](14,"p"),a["\u0275\u0275text"](15,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"li",10),a["\u0275\u0275elementStart"](17,"p"),a["\u0275\u0275text"](18,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"li",10),a["\u0275\u0275elementStart"](20,"p"),a["\u0275\u0275text"](21,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](22,"li",10),a["\u0275\u0275elementStart"](23,"p"),a["\u0275\u0275text"](24,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](25,"li",10),a["\u0275\u0275elementStart"](26,"p"),a["\u0275\u0275text"](27,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](28,"span",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](29,"div",12),a["\u0275\u0275elementStart"](30,"button",13),a["\u0275\u0275listener"]("click",(function(){return t.clearAllTodoCardTask()})),a["\u0275\u0275text"](31,"Clear All Tasks"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"div",1),a["\u0275\u0275elementStart"](33,"app-card",14),a["\u0275\u0275elementStart"](34,"div",3),a["\u0275\u0275elementStart"](35,"input",15),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.todoListMessage=e}))("keyup",(function(){return t.todo_list_message_error=!1})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](36,"div",5),a["\u0275\u0275elementStart"](37,"button",16),a["\u0275\u0275listener"]("click",(function(){return t.addTodoList()})),a["\u0275\u0275element"](38,"i",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](39,"div",17),a["\u0275\u0275elementStart"](40,"div",18),a["\u0275\u0275elementStart"](41,"div",19),a["\u0275\u0275elementStart"](42,"label",20),a["\u0275\u0275elementStart"](43,"input",21),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](44,"span",22),a["\u0275\u0275text"](45,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](46,"div",23),a["\u0275\u0275elementStart"](47,"a",24),a["\u0275\u0275element"](48,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](49,"div",18),a["\u0275\u0275elementStart"](50,"div",19),a["\u0275\u0275elementStart"](51,"label",20),a["\u0275\u0275elementStart"](52,"input",26),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](53,"span",22),a["\u0275\u0275text"](54,"Industry's standard dummy text ever since the 1500s"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](55,"div",23),a["\u0275\u0275elementStart"](56,"a",24),a["\u0275\u0275element"](57,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](58,"div",18),a["\u0275\u0275elementStart"](59,"div",19),a["\u0275\u0275elementStart"](60,"label",20),a["\u0275\u0275elementStart"](61,"input",27),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](62,"span",22),a["\u0275\u0275text"](63,"The point of using Lorem Ipsum is that it has a more-or-less "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](64,"div",23),a["\u0275\u0275elementStart"](65,"a",24),a["\u0275\u0275element"](66,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](67,"div",18),a["\u0275\u0275elementStart"](68,"div",19),a["\u0275\u0275elementStart"](69,"label",20),a["\u0275\u0275elementStart"](70,"input",28),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](71,"span",22),a["\u0275\u0275text"](72,"Contrary to popular belief"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](73,"div",23),a["\u0275\u0275elementStart"](74,"a",24),a["\u0275\u0275element"](75,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](76,"div",18),a["\u0275\u0275elementStart"](77,"div",19),a["\u0275\u0275elementStart"](78,"label",20),a["\u0275\u0275elementStart"](79,"input",29),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](80,"span",22),a["\u0275\u0275text"](81,"There are many variations of passages of Lorem Ipsum"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](82,"div",23),a["\u0275\u0275elementStart"](83,"a",24),a["\u0275\u0275element"](84,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](85,"div",18),a["\u0275\u0275elementStart"](86,"div",19),a["\u0275\u0275elementStart"](87,"label",20),a["\u0275\u0275elementStart"](88,"input",30),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](89,"span",22),a["\u0275\u0275text"](90,"Sed ut perspiciatis unde omnis iste natus"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](91,"div",23),a["\u0275\u0275elementStart"](92,"a",24),a["\u0275\u0275element"](93,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](94,"div",18),a["\u0275\u0275elementStart"](95,"div",19),a["\u0275\u0275elementStart"](96,"label",20),a["\u0275\u0275elementStart"](97,"input",31),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](98,"span",22),a["\u0275\u0275text"](99," must explain to you how all this mistaken idea"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](100,"div",23),a["\u0275\u0275elementStart"](101,"a",24),a["\u0275\u0275element"](102,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](103,"span",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](104,"div",32),a["\u0275\u0275elementStart"](105,"app-card",33),a["\u0275\u0275elementStart"](106,"div",34),a["\u0275\u0275elementStart"](107,"div",18),a["\u0275\u0275elementStart"](108,"div",19),a["\u0275\u0275elementStart"](109,"label",20),a["\u0275\u0275elementStart"](110,"input",35),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](111,"span",22),a["\u0275\u0275text"](112,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](113,"div",23),a["\u0275\u0275elementStart"](114,"a",24),a["\u0275\u0275element"](115,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](116,"div",18),a["\u0275\u0275elementStart"](117,"div",19),a["\u0275\u0275elementStart"](118,"label",20),a["\u0275\u0275elementStart"](119,"input",36),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](120,"span",22),a["\u0275\u0275text"](121,"Contrary to popular belief"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](122,"div",23),a["\u0275\u0275elementStart"](123,"a",24),a["\u0275\u0275element"](124,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](125,"div",18),a["\u0275\u0275elementStart"](126,"div",19),a["\u0275\u0275elementStart"](127,"label",20),a["\u0275\u0275elementStart"](128,"input",37),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](129,"span",22),a["\u0275\u0275text"](130,"Lorem Ipsum Dolor Sit Amet"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](131,"div",23),a["\u0275\u0275elementStart"](132,"a",24),a["\u0275\u0275element"](133,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](134,"div",18),a["\u0275\u0275elementStart"](135,"div",19),a["\u0275\u0275elementStart"](136,"label",20),a["\u0275\u0275elementStart"](137,"input",38),a["\u0275\u0275listener"]("change",(function(e){return t.completeTodoList(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](138,"span",22),a["\u0275\u0275text"](139,"Sed ut perspiciatis unde omnis iste natus"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](140,"div",23),a["\u0275\u0275elementStart"](141,"a",24),a["\u0275\u0275element"](142,"i",25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](143,"span",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](144,"div"),a["\u0275\u0275elementStart"](145,"button",39),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275reference"](148).show()})),a["\u0275\u0275text"](146,"Add New Tasks"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](147,"app-ui-modal",null,40),a["\u0275\u0275elementStart"](149,"div",41),a["\u0275\u0275elementStart"](150,"h4",42),a["\u0275\u0275text"](151,"Add new todo"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](152,"button",43),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275reference"](148).hide()})),a["\u0275\u0275elementStart"](153,"span",44),a["\u0275\u0275text"](154,"\xd7"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](155,"div",45),a["\u0275\u0275elementStart"](156,"div",0),a["\u0275\u0275elementStart"](157,"div",46),a["\u0275\u0275elementStart"](158,"div",47),a["\u0275\u0275elementStart"](159,"div",48),a["\u0275\u0275elementStart"](160,"form",49),a["\u0275\u0275elementStart"](161,"div",50),a["\u0275\u0275elementStart"](162,"input",51),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.todoModalMessage=e}))("keyup",(function(){return t.todo_modal_message_error=!1})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](163,"span",52),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](164,"div",53),a["\u0275\u0275elementStart"](165,"button",54),a["\u0275\u0275listener"]("click",(function(){return t.addTodoModal()})),a["\u0275\u0275text"](166,"Save"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](167,"button",55,56),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275reference"](148).hide()})),a["\u0275\u0275text"](169,"Close"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("options",!1),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.todoCardMessage),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction2"](12,u,t.todo_card_message_error,!t.todo_card_message_error)),a["\u0275\u0275advance"](22),a["\u0275\u0275property"]("innerHTML",t.newTodoCard,a["\u0275\u0275sanitizeHtml"]),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("options",!1),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.todoListMessage),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction2"](15,u,t.todo_list_message_error,!t.todo_list_message_error)),a["\u0275\u0275advance"](66),a["\u0275\u0275property"]("innerHTML",t.newTodoList,a["\u0275\u0275sanitizeHtml"]),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("options",!1),a["\u0275\u0275advance"](38),a["\u0275\u0275property"]("innerHTML",t.newTodoModal,a["\u0275\u0275sanitizeHtml"]),a["\u0275\u0275advance"](19),a["\u0275\u0275property"]("ngModel",t.todoModalMessage),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction2"](18,p,t.todo_modal_message_error,!t.todo_modal_message_error)))},directives:[r.a,d.DefaultValueAccessor,d.RequiredValidator,d.NgControlStatus,d.NgModel,l.r,m.a,i.a,s.a,d["\u0275angular_packages_forms_forms_y"],d.NgControlStatusGroup,d.NgForm],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.i.forChild(S)],o.i]}),e})();var h=n("ebz3");let f=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.c,E,h.a]]}),e})()}}]);