import axios from 'axios'

const id = "81a80971770ab73116f7"
const sec = "5e8b929e429bf8f2ff42e1877e6f2f6f5af43a30"
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
    console.log("repos: ", repos.data);
    const data = repos.data
    return data.reduce((count, repo) => {
        return count + repo.stargazers_count
    }, 0)
}

function calculateScore(profile, repos){
    const followers = profile.followers
    const totalStars = getStartCount(repos)
    return (followers * 3) + totalStars
}

function handleError(error){
    return null
}

function getUserData(player){
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then((data) => {
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
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}

export const fetchPopularRepos = (lang) => {
    const encodedURI = 
        window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ 
        lang + ' &sort=stars&order=desc&type=Repositories')

    return axios.get(encodedURI)
        .then((response) => {
            console.log(response)
            return response.data.items;
        })
}