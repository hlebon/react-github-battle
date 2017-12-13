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
    const data = repos.data
    const test = data.reduce((count, repo) => {
        console.log("1", repo.stargazers_count)
        console.log("2", typeof parseInt(count))
        console.log("3", count)
        console.log("4", typeof repo.stargazers_count)
        console.log("5", parseInt(count) + repo.stargazers_count)
        return count + repo.stargazers_count
    })

    console.log("25", test)
    return test
}

function calculateScore(profile, repos){
    console.log(profile, repos)
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
        .then((response)=>{
            console.log(response)
            return response.data.items;
        })
}