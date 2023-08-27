import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component{
    render(){
        return (<div className=" text-center">
            <h1 className="bg-blue-400 rounded-lg py-3 px-1 m-2">About</h1>
            {/* <User name={'Rishabh Khare'} location={'U.P'}/> */}
            <UserClass name={'Rishabh khare'} location={'U.P'}/>
        </div>)
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={'Rishabh Khare'}/>
//             <UserClass name={'Rishabh Khare'} location={'U.P'}/>
//         </div>
//     )
// }

export default About