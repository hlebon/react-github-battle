import React, { Component } from 'react'

class Popular extends Component{
    render(){
        let langs = [ "Java", "C#", "PHP", "Javascript" ]
        return (
            <ul>
                <li>8:27</li>
                {langs.map((lang) => {
                    return (
                        <li>{lang}</li>
                    )
                })}
            </ul>
        )
    }
}

export default Popular