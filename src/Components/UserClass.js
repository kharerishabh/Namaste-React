import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default',
            }
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/kharerishabh')

        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo
        return (<div>
            <img className="object-none object-center" src={avatar_url}/>
            <div className="bg-blue-400 rounded-lg px-2  m-2">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @rishabh</h4>
            </div>
        </div>)
    }
} 

export default UserClass;