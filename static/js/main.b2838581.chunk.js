(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){},174:function(t,e,n){},175:function(t,e,n){},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},483:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(2),i=n.n(a),c=n(143),o=n.n(c),r=(n(150),n(3)),u=n(4),l=n(6),d=n(5),h=(n(151),n(152),n.p+"static/media/home.b5626aba.svg"),j="https://college-management-portal-app.herokuapp.com/",p=n(7),g=n.n(p),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).logout=function(){g()({method:"GET",url:j+"user/logout",withCredentials:!0}).then((function(e){console.log(e),t.setState({user:"No User"}),t.props.setLoginState(!1,"","No User")})).catch((function(t){return console.log(t)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("img",{id:"home",src:h}),Object(s.jsx)("h1",{children:"College Management Portal"}),Object(s.jsxs)("div",{className:"user",children:[Object(s.jsx)("h3",{children:this.props.user}),this.props.loggedIn?Object(s.jsx)("button",{onClick:this.logout,children:"Logout"}):""]})]})}}]),n}(i.a.Component),b=(n(170),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("p",{children:" Home"}),Object(s.jsx)("p",{children:"About"})]})}}]),n}(i.a.Component)),O=(n(171),n(45)),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).textToUpperCase=function(t){return t.target.value.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")},t.handleChangeCheck=function(e){if(-1!=t.state.courses.indexOf(e.target.value)){console.log("if");var n=t.state.courses.indexOf(e.target.value);t.setState({courses:[].concat(Object(O.a)(t.state.courses.slice(0,n)),Object(O.a)(t.state.courses.slice(n+1)))})}else console.log("else"),t.setState({courses:[].concat(Object(O.a)(t.state.courses),[e.target.value])})},t.handleNext=function(){t.state.next?t.setState({next:!1}):t.setState({next:!0})},t.setEmail=function(e){t.setState({email:e.target.value})},t.setName=function(e){var n=t.textToUpperCase(e);t.setState({name:n})},t.setPassword=function(e){t.setState({password:e.target.value})},t.setConfirmPassword=function(e){t.setState({confirm_password:e.target.value})},t.signUp=function(){g()({method:"POST",data:{name:t.state.name,email:t.state.email,courses:t.state.courses,password:t.state.password,confirmed_password:t.state.confirm_password},url:j+"student/create"}).then((function(e){console.log(e.data),e.data.status&&t.setState({signedUp:!0})})).catch((function(t){console.log(t)}))},t.state={all_course:[],next:!1,email:"",name:"",password:"",confirm_Password:"",courses:[],signedUp:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;g()({method:"GET",url:j+"student/get-courses"}).then((function(e){e.data.map((function(e,n){return t.setState({all_course:[].concat(Object(O.a)(t.state.all_course),[e.subject])})}))})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t,e=this;return t=this.state.next?Object(s.jsxs)("form",{children:[this.state.all_course.map((function(t,n){return Object(s.jsxs)("label",{children:[" ",t,Object(s.jsx)("input",{type:"checkbox",value:t,onChange:e.handleChangeCheck})]},n)})),Object(s.jsx)("input",{type:"button",value:"prev",onClick:this.handleNext}),Object(s.jsx)("input",{type:"button",value:"sign-up",onClick:this.signUp})]}):Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",name:"name",placeholder:"Name*",onChange:this.setName,required:!0}),Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Email*",onChange:this.setEmail,required:!0}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Password*",onChange:this.setPassword,required:!0}),Object(s.jsx)("input",{type:"text",name:"confirm_password",placeholder:"Confirm Password*",onChange:this.setConfirmPassword,required:!0}),Object(s.jsx)("input",{type:"button",value:"next",onClick:this.handleNext})]}),Object(s.jsxs)("div",{className:"student-sign-up",children:[Object(s.jsx)("h3",{children:"Student Registration"}),this.state.signedUp?Object(s.jsx)("div",{children:"signed Up Succesfully"}):t]})}}]),n}(i.a.Component),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).textToUpperCase=function(t){return t.target.value.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")},t.setEmail=function(e){t.setState({email:e.target.value})},t.setName=function(e){var n=t.textToUpperCase(e);t.setState({name:n})},t.setSubject=function(e){var n=t.textToUpperCase(e);t.setState({subject:n})},t.setPassword=function(e){t.setState({password:e.target.value})},t.setConfirmPassword=function(e){t.setState({confirm_password:e.target.value})},t.signUp=function(){g()({method:"POST",data:{name:t.state.name,email:t.state.email,subject:t.state.subject,password:t.state.password,confirmed_password:t.state.confirm_password},url:j+"teacher/create"}).then((function(e){console.log(e.data),e.data.status&&t.setState({signedUp:!0})})).catch((function(t){console.log(t)}))},t.state={email:"",name:"",subject:"",password:"",confirm_Password:"",signedUp:!1},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"teacher-sign-up",children:[Object(s.jsx)("h3",{children:"Teacher Registration"}),this.state.signedUp?Object(s.jsx)("div",{children:"signed Up Succesfully"}):Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",name:"name",placeholder:"Enter ur name",onChange:this.setName,required:!0}),Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",onChange:this.setEmail,required:!0}),Object(s.jsx)("input",{type:"text",name:"subject",placeholder:"Subject you teach",onChange:this.setSubject,required:!0}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.setPassword,required:!0}),Object(s.jsx)("input",{type:"text",name:"confirm_password",placeholder:"Confirm Password",onChange:this.setConfirmPassword,required:!0}),Object(s.jsx)("input",{type:"button",value:"sign-up",onClick:this.signUp})]})]})}}]),n}(i.a.Component),v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setEmail=function(e){t.setState({email:e.target.value})},t.setPassword=function(e){t.setState({password:e.target.value})},t.login=function(){g()({method:"POST",data:{email:t.state.email,password:t.state.password},withCredentials:!0,url:j+"student/login"}).then((function(e){console.log(e.data),e.data.status&&t.props.getUser()})).catch((function(t){console.log(t)}))},t.state={email:"",password:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"student-sign-in",children:[Object(s.jsx)("h3",{children:"Student Login"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",onChange:this.setEmail,required:!0}),Object(s.jsx)("input",{type:"hidden",name:"person",value:"student"}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",onChange:this.setPassword,required:!0}),Object(s.jsx)("input",{type:"button",value:"Login",onClick:this.login})]})]})}}]),n}(i.a.Component),C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setEmail=function(e){t.setState({email:e.target.value})},t.setPassword=function(e){t.setState({password:e.target.value})},t.login=function(){g()({method:"POST",data:{email:t.state.email,password:t.state.password,credential:"teacher"},withCredentials:!0,url:j+"teacher/login"}).then((function(e){console.log(e.data),e.data.status&&t.props.getUser()})).catch((function(t){console.log(t)}))},t.state={email:"",password:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"teacher-sign-in",children:[Object(s.jsx)("h3",{children:"Administration Login"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Enter email",onChange:this.setEmail,required:!0}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",onChange:this.setPassword,required:!0}),Object(s.jsx)("input",{type:"button",value:"Login",onClick:this.login})]})]})}}]),n}(i.a.Component),S=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).changeTab=function(e){"teacher"==e.target.value?t.setState({tab:!1}):t.setState({tab:!0})},t.getUser=function(){console.log("----get---user"),g()({method:"GET",url:j+"user/get-user",withCredentials:!0}).then((function(e){console.log(e),console.log("signed in as ",e.data.profile),t.props.setLoginState(!0,e.data.profile,e.data.name)}))},t.state={tab:!0},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsxs)("div",{className:"sign-up",children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsxs)("div",{id:"tab",children:[Object(s.jsx)("button",{value:"student",className:this.state.tab?"selected-tab":"not-selected-tab",onClick:this.changeTab,children:"As Student"}),Object(s.jsx)("button",{value:"teacher",className:this.state.tab?"not-selected-tab":"selected-tab",onClick:this.changeTab,children:"As Teacher"})]}),Object(s.jsx)("div",{id:"sign-up-container",children:this.state.tab?Object(s.jsx)(f,{}):Object(s.jsx)(x,{})})]}),Object(s.jsxs)("div",{className:"sign-in",children:[Object(s.jsx)("h1",{children:"Sign In"}),Object(s.jsxs)("div",{id:"sign-in-container",children:[Object(s.jsx)(v,{getUser:this.getUser}),Object(s.jsx)(C,{getUser:this.getUser})]})]})]})}}]),n}(i.a.Component),w=(n(172),n(173),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setTopic=function(e){t.setState({topic:e.target.value})},t.setContent=function(e){t.setState({content:e.target.value})},t.setDeadline=function(e){t.setState({deadline:e.target.value})},t.addAssignment=function(){g()({method:"POST",data:{content:t.state.content,topic:t.state.topic,deadline:t.state.deadline},url:j+"teacher/add-assignment",withCredentials:!0}).then((function(e){console.log(e),t.props.updateAssignment()})).catch((function(t){console.log(t)}))},t.state={topic:"",content:"",deadline:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"teacher-post",children:[Object(s.jsxs)("form",{children:[Object(s.jsxs)("select",{onChange:this.setTopic,name:"topics",required:!0,children:[Object(s.jsx)("option",{hidden:!0,value:"none",children:"Choose Topics"}),this.props.course.topics?this.props.course.topics.map((function(t,e){return Object(s.jsx)("option",{value:t,children:t},e)})):Object(s.jsx)("option",{value:"none",children:"No Topics"})]}),Object(s.jsx)("textarea",{name:"content",rows:"4",placeholder:"enter question",onChange:this.setContent,required:!0}),Object(s.jsx)("input",{type:"date",name:"deadline",onChange:this.setDeadline,required:!0}),Object(s.jsx)("input",{type:"button",value:"post",onClick:this.addAssignment})]}),Object(s.jsx)("div",{className:"assignment-container",children:this.props.assignments.length?this.props.assignments.map((function(t,e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h5",{children:t.topic}),Object(s.jsxs)("div",{className:"assignment-details",children:[Object(s.jsxs)("p",{children:[" ",t.content]}),Object(s.jsx)("small",{children:t.deadline.slice(0,10)})]}),Object(s.jsxs)("h6",{children:["Submitted by ",t.students.length," students"]})]},e)})):Object(s.jsx)("div",{children:"No Assignment Given"})})]})}}]),n}(i.a.Component)),y=(n(174),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setTopic=function(e){t.setState({topic:e.target.value})},t.addTopic=function(e){g()({method:"POST",url:j+"teacher/add-topic/".concat(t.state.topic),withCredentials:!0}).then((function(e){console.log(e.data),t.props.updateCourse()})).catch((function(t){console.log(t)}))},t.state={topic:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("-------",this.props,"-----------"),Object(s.jsxs)("div",{className:"teacher-dashboard",children:[Object(s.jsx)("h2",{children:this.props.course.subject}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",onChange:this.setTopic,name:"topic",placeholder:"Add Topic"}),Object(s.jsx)("input",{type:"button",onClick:this.addTopic,value:"+"})]}),this.props.course.topics?this.props.course.topics.map((function(t,e){return Object(s.jsx)("div",{className:"topic-container",children:Object(s.jsx)("p",{children:t})},e)})):Object(s.jsx)("p",{children:"No Added Topic"})]})}}]),n}(i.a.Component)),N=(n(175),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setCurrentStudent=function(e){t.state.current_student&&(document.getElementById(t.state.current_student).style.display="none"),t.setState({current_student:e.target.value,show:!0},(function(){t.getAssignment(),t.state.show&&(document.getElementById(t.state.current_student).style.display="block")}))},t.getAssignment=function(){var e={},n=t.props.assignments.forEach((function(t){var n=t._id,s=t.topic,a=t.content;e[n]={topic:s,content:a,show:!1}})),s=[],a=t.props.students.forEach((function(n){n._id==t.state.current_student&&n.log.length>0&&n.log.forEach((function(t){e.hasOwnProperty(t.assignment)&&(e[t.assignment].grade=t.grade,e[t.assignment].show=!0,e[t.assignment].path=t.document,e[t.assignment].id=t._id,console.log(e[t.assignment]),s.push(e[t.assignment]))}))}));console.log("-----------------------hello-----------"),Promise.all([n,a]).then(t.setState({assignments:s,all_assignment:e}))},t.getFile=function(t){g()({method:"GET",url:j+"teacher/get-file/?path=".concat(t.target.value),responseType:"blob",withCredentials:!0}).then((function(t){var e=new Blob([t.data],{type:"application/pdf"}),n=j.createObjectURL(e);window.open(n)})).catch((function(t){console.log(t)}))},t.setGrade=function(e){e.preventDefault(),t.setState({grade:e.target.value})},t.giveGrade=function(e){-1!=t.state.grade&&g()({method:"POST",url:j+"teacher/give-grades/?id=".concat(e.target.value,"&&grade=").concat(t.state.grade),data:{student:t.state.current_student,grade:t.state.grade},withCredentials:!0}).then((function(e){console.log(e.data,"---red data"),t.setState({grade:-1}),t.props.updateStudent()})).catch((function(t){console.log(t)}))},t.state={assignments:[],all_assignment:{},current_student:"",show:!1,grade:-1},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t){t.students!=this.props.students&&this.getAssignment()}},{key:"render",value:function(){var t=this,e=[-1,0,1,2,3,4,5,6,7,8,9,10];return console.log(this.state.grade,"--grade"),Object(s.jsxs)("div",{className:"student-section",children:[Object(s.jsx)("h3",{children:"Student Section"}),this.props.students.map((function(n,a){return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"student-container",value:n._id,onClick:t.setCurrentStudent,children:n.name}),Object(s.jsxs)("div",{className:"submitted-assignment",id:n._id,children:[Object(s.jsx)("div",{className:"submitted-assignment-heading",children:t.state.assignments.length?"Submitted Asigments":"No Submitted Asigments"}),t.state.assignments.map((function(n,a){return Object(s.jsx)("div",{className:"assignment-detail",children:Object(s.jsxs)("div",{className:"student-assignment",children:[Object(s.jsxs)("div",{className:"student-assignment-detail",children:[Object(s.jsx)("button",{className:"show-attached-file",onClick:t.getFile,value:n.path,children:"Show Attached File"}),Object(s.jsxs)("div",{className:"student-assignment-topic",children:[Object(s.jsx)("span",{children:Object(s.jsxs)("b",{children:[n.topic,": "]})}),Object(s.jsx)("span",{children:n.content})]})]}),Object(s.jsx)("div",{className:"assignment-detail-grade",children:-1===n.grade?Object(s.jsxs)("div",{className:"evalute",id:"show-"+t.state.current_student,children:[Object(s.jsxs)("select",{onChange:t.setGrade,children:[Object(s.jsx)("option",{selected:!0,children:"-Grade-"}),e.map((function(t,e){return Object(s.jsx)("option",{children:t})}))]}),Object(s.jsx)("button",{value:n.id,onClick:t.giveGrade,children:" Evaluate "})]}):Object(s.jsx)("div",{className:"score",children:Object(s.jsx)("h3",{children:n.grade})})})]})},a)}))]})]},a)}))]})}}]),n}(i.a.Component)),_=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).getCourse=function(){g()({method:"GET",url:j+"teacher/get-course",withCredentials:!0}).then((function(e){console.log(e.data),t.setState({course:e.data})})).catch((function(t){console.log(t)}))},t.getAssignmnets=function(){g()({method:"GET",url:j+"teacher/assignment-list",withCredentials:!0}).then((function(e){console.log(e.data),t.setState({assignments:e.data})})).catch((function(t){console.log(t)}))},t.getStudents=function(){g()({method:"GET",url:j+"teacher/get-students",withCredentials:!0}).then((function(e){console.log("-----getting Student---",e),t.setState({students:e.data})})).catch((function(t){console.log(t)}))},t.updateCourse=function(){t.getCourse()},t.updateAssignment=function(){t.getAssignmnets()},t.updateStudent=function(){t.getStudents()},t.state={assignments:[],course:{},students:[{}]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getCourse(),this.getAssignmnets(),this.getStudents()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"teacher",children:[Object(s.jsx)(y,{course:this.state.course,updateCourse:this.updateCourse}),Object(s.jsx)(w,{course:this.state.course,assignments:this.state.assignments,updateAssignment:this.updateAssignment}),Object(s.jsx)(N,{updateStudent:this.updateStudent,students:this.state.students,assignments:this.state.assignments})]})}}]),n}(i.a.Component),k=(n(176),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setFile=function(e){t.setState({assigment_id:e.target.name,document:e.target.files[0]})},t.getUser=function(){g()({method:"GET",url:j+"student/get-user",withCredentials:!0}).then((function(e){console.log("Student Details",e.data),e.data.status&&t.setState({name:e.data.user.name,student_id:e.data.user._id,subject:e.data.user.courses,logs:e.data.user.log})}))},t.setCurrentSubject=function(e){var n=e.target.value;t.setState({current_subject:n},(function(){return t.getAssignment()}))},t.getAssignment=function(){console.log("hello");var e=t.state.current_subject;g()({method:"GET",url:j+"student/assignments".concat(e),withCredentials:!0}).then((function(e){console.log("Assignment data for student",e.data),t.setState({assigments:e.data},(function(){var e=[],n=[];t.state.assigments.forEach((function(s){s.students.length>0&&-1!=s.students.indexOf(t.state.student_id)?e.push(s):n.push(s)})),Promise.all(e,n).then(t.setState({submitted:e,remaining:n}))}))})).catch((function(t){console.log(t)}))},t.submitAssignment=function(e){if(t.state.document&&t.state.assigment_id==e.target.value){var n=new FormData;n.append("document",t.state.document),n.append("assignment_id",t.state.assigment_id),console.log(t.state.document,"-------",n),g()({method:"POST",data:n,headers:{"content-type":"multipart/form-data"},url:j+"student/submit-assignment/?id=".concat(e.target.value,"&&student=").concat(t.state.name),withCredentials:!0}).then((function(e){console.log(e.data),e.data.status&&t.getAssignment()})).catch((function(t){console.log(t)}))}},t.state={name:"",student_id:"",subject:[],assigments:[],submitted:[],remaining:[],current_subject:"",assigment_grades:{},logs:[],document:null,assigment_id:null},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var t=this,e={};return this.state.logs.forEach((function(t){var n=t.assignment,s=t.grade;e[n]=s})),Object(s.jsxs)("div",{className:"student-dashboard",children:[Object(s.jsx)("h1",{children:this.state.name}),Object(s.jsx)("div",{className:"subject",children:this.state.subject.map((function(e,n){return Object(s.jsx)("button",{className:"subject-tab",value:e,onClick:t.setCurrentSubject,children:e},n)}))}),Object(s.jsx)("h2",{children:this.state.current_subject}),this.state.current_subject?Object(s.jsxs)("div",{className:"student-assignment-section",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:0===this.state.remaining.length?"No assignmnent Remaining":"Remaining Assignment"}),Object(s.jsx)("ul",{children:this.state.remaining.map((function(e,n){return Object(s.jsxs)("li",{children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Topic:"})," ",e.topic]}),Object(s.jsx)("h3",{children:e.content}),Object(s.jsx)("input",{name:e._id,type:"file",onChange:t.setFile}),Object(s.jsx)("button",{className:"submit-assignment",value:e._id,onClick:t.submitAssignment,children:"Submit Assignment"})]},n)}))})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:0===this.state.submitted.length?"No assignmnent Submitted yet":"Submitted Assignment"}),Object(s.jsx)("ul",{children:this.state.submitted.map((function(t,n){return Object(s.jsxs)("li",{children:[Object(s.jsxs)("span",{children:[Object(s.jsxs)("b",{children:[t.topic,": "]}),t.content," "]}),Object(s.jsx)("small",{className:"grade",children:"undefined"===typeof e[t._id]||-1==e[t._id]?" Not Reviewed":"Score: "+e[t._id]})]},n)}))})]})]}):Object(s.jsx)("p",{children:"Click on course tab"})]})}}]),n}(i.a.Component)),T=(n(177),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"student",children:Object(s.jsx)(k,{})})}}]),n}(i.a.Component)),E=(n(178),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"profile",children:"teacher"==this.props.profile?Object(s.jsx)(_,{}):Object(s.jsx)(T,{})})}}]),n}(i.a.Component)),A=(n(179),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).setLoginState=function(e,n,s){console.log(n,":",e),t.setState({logged_In:e,profile:n,user:s})},t.state={logged_In:!1,profile:"",user:"No User"},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;g()({method:"GET",url:j+"user/get-user",withCredentials:!0}).then((function(e){console.log(e.data),e.data.status&&(console.log(e.data),t.setState({logged_In:!0,profile:e.data.profile,user:e.data.name}))}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(m,{loggedIn:this.state.logged_In,user:this.state.user,setLoginState:this.setLoginState}),Object(s.jsx)("div",{className:"app-main",children:this.state.logged_In?Object(s.jsx)(E,{profile:this.state.profile}):Object(s.jsx)(S,{setLoginState:this.setLoginState})}),Object(s.jsx)(b,{})]})}}]),n}(i.a.Component));o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root"))}},[[483,1,2]]]);
//# sourceMappingURL=main.b2838581.chunk.js.map