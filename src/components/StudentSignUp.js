import React from 'react';
import Axios from 'axios';
import URL from '../assets/url'


class StudentSignUp extends React.Component{

    constructor(){
        super();
        this.state ={

            all_course:[],

            next:false,
            
            email:'',
            name:'',
            password:'',
            confirm_Password:'',
            courses:[],

            signedUp:false
        }
    }

    textToUpperCase = (e) => {
        //To convert first letter of everyword to Upper Case
        let str = e.target.value.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

        return str;

   }

    handleChangeCheck = (e) =>{ //selecting courses student want to enroll in

        if(this.state.courses.indexOf(e.target.value)!=-1){
        console.log('if')

            let index = this.state.courses.indexOf(e.target.value);
            this.setState({ 
                courses: [...this.state.courses.slice(0,index), ...this.state.courses.slice(index+1)]
              });
        }else {
        console.log('else')

            this.setState({courses:[...this.state.courses, e.target.value]})
        }

       
    }


    handleNext = () =>{ //take to next form of sign up (fill courses)
        if(this.state.next){
            this.setState({next:false})
        }else this.setState({next:true})
    }
    

    //------setting up the input to the state
    setEmail= (e) =>{
        this.setState({
            email:e.target.value
        });
    }
    setName = (e) =>{

        let str = this.textToUpperCase(e);
        this.setState({
            name:str
        });
    }
    setPassword = (e) =>{
        this.setState({
            password:e.target.value
        });
    }
    setConfirmPassword = (e) =>{
        this.setState({
            confirm_password:e.target.value
        });
    }

    signUp = () =>{        
        Axios({
            method: "POST",
            data: {
              name:this.state.name,
              email:this.state.email,
              courses:this.state.courses,
              password:this.state.password,
              confirmed_password:this.state.confirm_password

            },
            // url: "http://localhost:8000/student/create",
            // url: "https://college-management-portal-app.herokuapp.com/student/create",
            url:URL+'student/create'

          }).then((res)=>{
              console.log(res.data);
              if(res.data.status){
                this.setState({signedUp:true})
            }
        
        }).catch((error)=>{console.log(error)});
          
    }

    componentDidMount(){

        Axios({
            method: "GET",
            // url: "http://localhost:8000/student/get-courses",
            // url: "https://college-management-portal-app.herokuapp.com/student/get-courses",
            url:URL+'student/get-courses'

        })
        .then((res)=>{

            res.data.map((item,index)=>(
                this.setState({all_course:[...this.state.all_course,item.subject]})
            ));
            
        
        }).catch((error)=>{console.log(error)});
    }

    render(){
        let input;
        if(!this.state.next){
            input = <form>
                        <input type='text' name='name' placeholder='Name*' onChange={this.setName} required/>
                        <input type='email' name='email' placeholder='Email*' onChange={this.setEmail}required/>
                        <input type='password' name='password' placeholder='Password*' onChange={this.setPassword} required/>
                        <input type='text' name='confirm_password' placeholder='Confirm Password*' onChange={this.setConfirmPassword} required/>
                        <input type='button' value='next' onClick={this.handleNext}/>
                    </form>
        }else{
            input = <form>

                {this.state.all_course.map((item,index)=>(
                    <label key={index}> {item}
                        <input type="checkbox"  value={item} onChange={this.handleChangeCheck} />
                    </label>
                ))}
                

                

                <input type='button' value='prev' onClick={this.handleNext}/>
                <input type='button' value='sign-up' onClick={this.signUp}/>


                

            </form>
        }

        return(
            <div className="student-sign-up">
                <h3>Student Registration</h3>
               
                {this.state.signedUp?  <div>signed Up Succesfully</div>:  input}
                {/* {this.state.signedUp?   {input}:  <div>signed Up Succesfully</div>} */}

                     
                     

               

                
            </div>
        );
    }
}

export default StudentSignUp;