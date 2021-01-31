import React from 'react';
import Axios from 'axios';
import URL from '../assets/url'


class StudentSignIn extends React.Component{
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',

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
              password:this.state.password
            },
            withCredentials: true,
            // url: "http://localhost:8000/student/login",
            // url: "https://college-management-portal-app.herokuapp.com/student/login",
            url:URL+'student/login'

          }).then(
              (res) => {
                  console.log(res.data)
              if(res.data.status)

                    this.props.getUser();
                })
          .catch((error)=>{console.log(error)});;
    }


    getUser
    render(){
        
        return(
            <div className="student-sign-in">
                <h3>Student Login</h3>
                        <form>
                                <input type='email' name='email' placeholder='Enter email' onChange={this.setEmail} required />
                                <input type='hidden' name='person' value='student'/>
                                <input type='password' name='password' placeholder='Enter password' onChange={this.setPassword} required />
                                <input type='button' value='Login' onClick={this.login}/>
                        </form>
            </div>
        );
    }
}

export default StudentSignIn;