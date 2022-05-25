// let welcome = React.createElement('h1', {}, 'cc le monde')
// ReactDOM.render(welcome, document.body)

function Welcome({name}){
    return <h1>Salut {name}</h1>
}

ReactDOM.render(<Welcome name="valentin"/>, document.body)

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);