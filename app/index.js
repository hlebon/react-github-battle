const React = require('react')
const ReactDOM = ('react-dom')



class App extends React.Component{
    render(){
        return (
        <div>
            <h1>Hola Mundo</h1>
        </div>)
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);