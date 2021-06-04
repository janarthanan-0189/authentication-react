import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component{

    handlesubmit= e =>{
        e.preventDefault();
        console.log("works");
        const data = {
            first_name: this.firstname,
            last_name: this.lastname,
            e_mail: this.email,
            pass_word: this.password
        };
        console.log(data);

        axios.post('http://localhost:3000/Signup',data)
        .then(response=>{
            console.log(response)
        })
        .catch(error =>{
                console.log(error)
        })
        }

    render(){
        return(
        <form onSubmit={this.handlesubmit}>
            <h3> Registration </h3>
            
            <div className="form-group">
                <label>first name</label>
                <input type="text" className="form-control"
                onChange={a=> this.firstname=a.target.value}/>
            </div>

            <div className="form-group">
                <label>last name</label>
                <input type="text" className="form-control"
                onChange={a=> this.lastname=a.target.value}/>
            </div>

            <div className="form-group">
                <label>email</label>
                <input type="email" className="form-control"
                onChange={a=> this.email=a.target.value}/>
            </div>

            <div className="form-group">
                <label>password</label>
                <input type="password" className="form-control"
                onChange={a=> this.password=a.target.value}/>
            </div>

            <br></br>

            <button className="btn btn-primary btn-block" type="submit">SUBMIT</button>

            
        </form>
        )
    }
}
