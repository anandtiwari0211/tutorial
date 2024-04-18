import React,{Component} from 'react'
import User from './User';

class Home extends Component {
    constructor() {
        super();
        console.log('Constructor')
    }

    render() {
        return(
            <>
                <p>constructor component</p>
                <div><User data= {{fname : 'Rahul', lname : 'Sharma', 'age': 25, city : 'Indore'}} /></div>
            </>
            
            
        )
    }
}

export default Home;