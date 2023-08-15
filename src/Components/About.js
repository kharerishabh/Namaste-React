import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component{
    render(){
        return (<div>
            <h1>About</h1>
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