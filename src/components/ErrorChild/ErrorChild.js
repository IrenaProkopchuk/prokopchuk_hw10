import React from 'react';
import { useState } from 'react';

// class ErrorChild extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({ count: prevState.count + 1 }), () => {
//             if (this.state.count === 5) {
//                 throw new Error('Error');
//             }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleClick}>Click me</button>
//             </div>
//         );
//     }
// }


const ErrorChild = () => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true)
    }
    
    if (error) {
        return new Error('ERROR! YOUR APP IS CRUSH')
    }

    return (
        <div>
            <button onClick={handleError}>
                Create Error!
                
            </button>
        </div>
    )
}

// export default ErrorButton;
export default ErrorChild;
