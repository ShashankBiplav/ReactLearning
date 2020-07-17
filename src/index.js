import React,{Component} from 'react'
import ReactDOM from 'react-dom'


// function Input() {
    //     return (
        //         <div className="form">
        //             <input type="text" placeholder="Enter any todo"/>
        //             <button type="submit">Submit</button>
        //         </div>
        //     );
        // }
        
        class Input extends Component {
            render() {
                return (
                    <div className="form">
                <input type="text" placeholder="Enter any todo"/>
                <button type="submit">Submit</button>
            </div>
        );
    }
}
ReactDOM.render(<Input />, document.getElementById('root'));
