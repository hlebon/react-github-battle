import axios from 'axios'

export const fetchPopularRepos = (lang) => {
    const encodedURI = 
        window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ 
        lang + ' &sort=stars&order=desc&type=Repositories')

    return axios.get(encodedURI)
        .then((response)=>{
            console.log(response)
            return response.data.items;
        })
}