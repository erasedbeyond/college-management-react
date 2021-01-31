import React from 'react';
import Axios from 'axios';
import URL from '../assets/url'

import '../css/StudentDashboard.css'



class StudentDashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            student_id:'',
            subject:[],
            assigments:[],
            submitted:[],
            remaining:[],


            current_subject:'',


            assigment_grades:{},
            logs:[],

            //uploaded assignment detail
            document:null,
            assigment_id:null //to match the correct  assignment is submitted

        }
    }


    setFile = (e) => {
        this.setState({
            assigment_id:e.target.name,
            document:e.target.files[0]
        })
    }
    

    getUser = ()=>{
        Axios({
            method:'GET',
            // url:'http://localhost:8000/student/get-user',
            // url:'https://college-management-portal-app.herokuapp.com/student/get-user',
            url:URL+'student/get-user',

            withCredentials:true
        }).then((res)=>{
            console.log('Student Details',res.data);
            if(res.data.status)
            this.setState({
                name:res.data.user.name,
                student_id:res.data.user._id,
                subject:res.data.user.courses,
                logs:res.data.user.log
            })
        });
    }

    componentDidMount(){
        this.getUser();
    }

    setCurrentSubject  = (e) => {
        let subject  = e.target.value;

        this.setState({current_subject:subject},() => this.getAssignment());
        
    }

    getAssignment = ()=>{
        console.log('hello')
        let subject = this.state.current_subject;
        Axios({
            method:'GET',
            // url:`http://localhost:8000/student/assignments/${subject}`,
            // url:`https://college-management-portal-app.herokuapp.com/student/assignments/${subject}`,
            url:URL+`student/assignments${subject}`,

            withCredentials:true
        }).then(
            (res)=>{
                console.log('Assignment data for student',res.data);
                this.setState({assigments:res.data},() => {

                    let submitted=[];
                    let remaining=[];
                    this.state.assigments.forEach(assigment => {
                        if(assigment.students.length>0 && assigment.students.indexOf(this.state.student_id)!=-1){
                            submitted.push(assigment);
                        }else remaining.push(assigment);
                    });


                    Promise.all(submitted,remaining).then(this.setState({
                        submitted:submitted,
                        remaining:remaining
                    }))


                   
                });

               

            })
        .catch((err)=>{console.log(err)});
    }

    submitAssignment= (e)=>{

        // submit button should match the assignment uploaded id
        if(this.state.document && this.state.assigment_id == e.target.value){

            let data = new FormData()
            data.append('document',this.state.document);
            data.append('assignment_id',this.state.assigment_id);
            console.log(this.state.document,'-------',data)
            Axios({
                method:'POST',
                data,
                headers: {
                    'content-type': 'multipart/form-data'
                },
                // url:`http://localhost:8000/student/submit-assignment/?id=${e.target.value}&&student=${this.state.name}`,
                // url:`https://college-management-portal-app.herokuapp.com/student/submit-assignment/?id=${e.target.value}&&student=${this.state.name}`,
                url:URL+`student/submit-assignment/?id=${e.target.value}&&student=${this.state.name}`,

                
                withCredentials:true
            })
            .then(
                (res)=>{
                    console.log(res.data);
                    if(res.data.status)
                        this.getAssignment();

                })
            .catch((err)=>{console.log(err)}); 
        }
    }

    
    


    
    render(){
         

            let obj= {}
            this.state.logs.forEach(log => {
                let id = log.assignment;
                let grade = log.grade
    
                obj[id] = grade
            });



            return(
            <div className='student-dashboard'>

                <h1>{this.state.name}</h1>

                <div className='subject'> 
                    {this.state.subject.map((subject,index)=>(
                        <button
                            className="subject-tab" 
                            key={index} value={subject} 
                            onClick={this.setCurrentSubject}>{subject}</button>
                        ))}
                </div>

                <h2>{this.state.current_subject}</h2>
                {this.state.current_subject? 
                    <div className='student-assignment-section'>
                    
                    
                    <div>
                        <h2>
                            { this.state.remaining.length===0?"No assignmnent Remaining":'Remaining Assignment'}
                        </h2>
                        
                        <ul>
                            {this.state.remaining.map((assigment,index)=>(<li key={index}>
                                <p><b>Topic:</b> {assigment.topic}</p>
                                <h3>{assigment.content}</h3>
                            


                                <input  name={assigment._id} type="file"  onChange= {this.setFile} />
                                <button className='submit-assignment' value={assigment._id} onClick={this.submitAssignment}>Submit Assignment</button>

                            </li>))}
                        </ul>
                        
                    </div>

                    <div>
                        <h2>
                            {this.state.submitted.length===0?"No assignmnent Submitted yet":'Submitted Assignment'}
                        </h2>
                        <ul>
                            {this.state.submitted.map((assigment,index)=>(<li key={index}>
                            <span><b>{assigment.topic}: </b>{assigment.content} </span>

                            <small className='grade'>{ typeof obj[assigment._id]==='undefined' || obj[assigment._id]==-1?' Not Reviewed':'Score: '+obj[assigment._id]}</small>
                            </li>))}
                        </ul>
                        
                    </div>
                    
                </div>
                    : <p>Click on course tab</p>}
            </div>
        );
    }
}

export default StudentDashboard;