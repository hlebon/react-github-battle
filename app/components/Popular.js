import React, { Component } from 'react'
import { PropTypes } from 'prop-types'


function SelectLanguage(props){
    let langs = [ "All", "Java", "C#", "PHP", "Javascript", "Python" ]
    return (
        <ul>
            {langs.map((lang) => {
                return (
                    <li 
                        key={lang} 
                        onClick={() => this.props.onSelectLang(lang)}
                        style={lang === this.props.selectedLang ? { color: '#d0021b' } : {color: ''}}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}


SelectLanguage.PropTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelectLang: PropTypes.func.isRequired
}


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
        return (
            <div>
                <SelectLanguage
                    selectedLang={this.state.selectedLang}
                    onSelectLang={this.updateLang}
                />
            </div>
        )
    }
}

export default Popular