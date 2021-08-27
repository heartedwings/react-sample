import React from 'react';


// export const About = () => {
//         return <h2>Abouttttttt</h2>
// }


export class About extends React.Component {
        render() {
                const {params} = this.props.match
                return ( 
                <h2>Sbout : { params.aboutId }</h2>
                )
        }
}