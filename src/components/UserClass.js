import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            userInfo : {
                name: "user",
                location: "null",
                html_url: "user.html",
                avatar_url: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            }            
        }; 
    };

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Neha-Shirsath");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    render(){

        const {name, location, html_url, avatar_url} = this.state.userInfo;

        return(
            <div className="user">
                <h1 className="font-medium mt-8 mb-1">About Developer...</h1>
                <img className="w-35" src={avatar_url} />
                <h2 className="font-medium">Name : {name}</h2>
                <h2 className="font-medium">Location : {location}</h2>
                <h2 className="font-medium">Contact : neha@gmail.com</h2>
                <a className="text-blue-500" href={html_url}>Reach</a>
                
        </div>
        )
    }
}

export default UserClass;