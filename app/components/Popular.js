import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import * as api from '../utils/api'
import 'semantic-ui-react';

function SelectLanguage(props){
    let langs = [ "All", "Java", "C#", "PHP", "Javascript", "Python" ]
    return (
        <ul className="popular-lang-nav">
            {langs.map((lang) => {
                return (
                    <li className="popular-lang-nav-item" 
                        key={lang} 
                        onClick={() => props.onSelectLang(lang)}
                        style={lang === props.selectedLang ? { color: '#d0021b', backgroundColor: "rgba(0,0,0,.1)" } : {color: ''}}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

function RepoGrid(props){
    return(
        <ul className="popular">
            {props.repos.map((item, index)=>{
                return (
                    <li key={item.name} className="popular-item">
                        <div>#{index+1}</div>
                        <ul>
                            <li>
                                <img src={item.owner.avatar_url} alt={`Avatar for ${item.owner.login}`}></img>
                            </li>
                            <li>
                                <a href={item.html_url}>{item.name}</a>
                            </li>
                            <li>@{item.owner.login}</li>
                            <li>{item.stargazers_count}</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
}


SelectLanguage.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelectLang: PropTypes.func.isRequired
}


class Popular extends Component{
    state = {
        selectedLang : "Java",
        repos: []
    }

    componentDidMount(){
        this.updateLang(this.state.selectedLang)
    }

    updateLang = (lang) => {

        this.setState({
            repos: []
        })

        api.fetchPopularRepos(lang)
        .then((repos)=>{
            console.log(repos)
           this.setState({
               selectedLang: lang,
               repos: repos
           }) 
        })
    }

    render(){
        return (
            <div className="container">
                <SelectLanguage
                    selectedLang={this.state.selectedLang}
                    onSelectLang={this.updateLang}
                />
                {this.state.repos.length > 0 ? <RepoGrid repos={this.state.repos}/> : <p>LOADING...</p> }
            </div>
        )
    }
}

export default Popular