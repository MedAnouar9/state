import React from 'react';

class Profile extends React.Component {
constructor(){
  super();
   this.state = {
   fullName: "Kasraoui Mohamed Anouar",
   bio: " learning the web developement",
   photo: "./pic.jpg",
   job : "Full Stack JS student",
   show: true,
 };
}

componentDidMount(){
    setInterval(() => this.setState({count: this.state.count+1}),1000);
  }
  render() {
    return (
      <div className='Person'>
        <h1> {this.state.fullName}</h1>
        <h3>{this.state.job}</h3>
        <p>{this.state.bio}</p>
        <img 
          src={this.state.photo}
          alt='djoko'
          style={{ width: 350, height: 350, borderRadius: "50%" }}/>
      
      </div>
    )
  }
}

export default Profile;