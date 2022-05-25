// function Welcome({name}){
//     return <h1>Salut {name}</h1>
// }

// ReactDOM.render(<Welcome name="valentin"/>, document.body)
function NavButton({name}){
return <button>{name}</button>
}
function Nav() {
    return <nav>
        <NavButton name="accueil"/>
        <NavButton name="compétences"/>
        <NavButton name="contact"/>
        {/* <div className="center">
            <ul className="flex">
                <li><navButton name="accueil"></navButton></li>
                <li><button>{children}</button></li>
                <li><button>{children}</button></li>
            </ul>
        </div> */}
    </nav>
}
ReactDOM.render(<Nav></Nav>, document.body.querySelector('header'))
// ReactDOM.render(<NavButton name="accueil"/>, document.body.querySelector('header'))
