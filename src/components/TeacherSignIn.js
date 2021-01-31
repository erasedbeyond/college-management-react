import React from 'react';
import URL from '../assets/url'

import Axios from 'axios';

class TeacherSignIn extends React.Component{

    constructor(){
        super();
        this.state ={
            email:'',
            password:''
        }
    }
    setEmail= (e) =>{
        this.setState({
            email:e.target.value
        });
    }

    setPassword = (e) =>{
        this.setState({
            password:e.target.value
        });
    }
    login= () =>{
        Axios({
            method: "POST",
            data: {
              email:this.state.email,
              password:this.state.password,
              credential:'teacher'

            },
            withCredentials: true,
            // url: "http://localhost:8000/teacher/login",
            // url: "https://college-management-portal-app.herokuapp.com/teacher/login",
            url: URL+"teacher/login",

          }).then((res) => {
              console.log(res.data);
              if(res.data.status)
            this.props.getUser();
            })
          .catch((error)=>{console.log(error)});;
    }
    render(){
        return(
            <div className="teacher-sign-in">
                <h3>Administration Login</h3>
                <form>
                    <input type='email' name='email' placeholder='Enter email' onChange={this.setEmail} required />
                    <input type='password' name='password' placeholder='Enter password' onChange={this.setPassword} required />
                    <input type='button' value='Login' onClick={this.login}/>
                </form>
            </div>
        );
    }
}

export default TeacherSignIn;