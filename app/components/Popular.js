import React, { Component } from 'react'

class Popular extends Component{
    state = {
        selectedLang : "All"
    }

    updateLang = (lang) => {
        this.setState({
            selectedLang: lang
        })
    }

    render(){
        let langs = [ "All", "Java", "C#", "PHP", "Javascript" ]
        console.log(this.state.selectedLang)
        return (
            <ul>
                {langs.map((lang) => {
                    return (
                        <li 
                            key={lang} 
                            onClick={() => this.updateLang(lang)}
                            style={lang === this.state.selectedLang ? { color: '#d0021b' } : {color: ''}}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Popular