import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname : "",
      email : "",
      password : "",
      describe : "",
      gender : 1,
      language: "en",
      check: true
    };
  }
  onChange = (event)=>{
    var target =event.target;
    var name = target.name;
    var value =target.type === "checkbox"? target.checked: target.value;
    this.setState({
        [name]: value
    });
  }
  onSubmit =(event)=>{
    
    event.preventDefault();
    if(this.state.check===false){
      console.log("chua check box");
    }
    else
    console.log(this.state);
  }
  render() {
   
    return (
      <div className="App" >
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input type="text"
               className="form-control"
                id="fullname"
                placeholder="Enter Full Name"
                name="fullname"
                value = {this.state.fullname}
                onChange={ this.onChange }
                />
          </div>

          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="text"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={ this.onChange }
                 />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
                />
          </div>

          <div className="form-group">
                <label htmlFor="exampleInputEmail1">Describe</label>
                <textarea className="form-control"
                  rows="3"
                  name="describe"
                  value={this.state.describe}
                  onChange={this.onChange}
                  ></textarea>
          </div>

          <div className="form-group">
                <label htmlFor="exampleInputEmail1">Gender</label>
                <select className="form-control"
                 name = "gender"
                 value={this.state.gender}
                  onChange={this.onChange}
                 >
                  <option value={0} >Male</option>
                  <option  value={1} >Female</option>
                </select>
          </div>
          <div className="form-check">
                <label htmlFor="exampleInputEmail1">language</label><br/>
                  <input className="form-check-input" type="radio" name="language" 
                  value="en"
                  onChange={this.onChange}
                  checked={this.state.language ==="en"}
                  />
                  <span style={{fontSize:18}}><b>  English</b></span><br/>
                  <input className="form-check-input" type="radio"  name="language" 
                  value ="vi"
                  onChange={this.onChange}
                  checked={this.state.language ==="vi"}
                  />
                  <span style={{fontSize:18}}><b>  Vietnamese</b></span>
          </div>
          <div className="form-check">
              <input type="checkbox" className="form-check-input"
                  name="check"
                  onChange={this.onChange}
                  checked={this.state.check}
              />
              <span style={{fontSize:18}}><b>  Check me out</b></span>
          </div>

              <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
