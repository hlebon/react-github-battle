import React from 'react'
import { NavLink } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
            <div>
                <h1 style={styles.title}>Welcome to Github Battle</h1>
            </div>
        )
    }
}

const styles = {
    title: {
        textAlign: "center",
        fontSize: "30px"
    }
}

export default Home