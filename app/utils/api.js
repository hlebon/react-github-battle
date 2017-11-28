import axios from 'axios'

const id = "YOUR_CLIENT_ID"
const sec = "YOUR_SECRET_ID"
const param = `?client_id=${id}&client_secret=${sec}`

function getProfile(username){
    return axios.get(`https://api.github.com/users/${username}${param}`)
        .then((user) => {
            return user.data
        })
}

function getRepos(username){
    return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`)
}

function getStartCount(repos){
    console.log("19", repos)
    return repos.data.reduce((count = 0, repos) => {
        return count + repo.stargazers_count
    })
}

function calculateScore(profile, repos){
    const followers = profile.followers
    const totalStars = getStartCount(repos)
    console.log("27", totalStars)
    return (followers * 3) + totalStars
}

function handleError(error){
    console.warn(error)
    return null
}

function getUserData(player){
    console.log("38",player)
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then((data) => {
        console.log("42", data)
        const profile = data[0]
        const repos = data[1]
        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    })
}

function sortPlayers(players){
    return players.sort((a, b) => {
        return b.score - a.score
    })
}

export const battle = function(players){
    console.log("57",players)
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}

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