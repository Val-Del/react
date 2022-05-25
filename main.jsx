// function Welcome({name}){
//     return <h1>Salut {name}</h1>
// }

// ReactDOM.render(<Welcome name="valentin"/>, document.body)
function NavButton({name}){
return <button>{name}</button>
}
function Nav() {
    return <nav>
        {/* <NavButton name="accueil"/>
        <NavButton name="compétences"/>
        <NavButton name="contact"/> */}
        <div className="center">
            <ul className="flex">
                <li><NavButton name="accueil"/></li>
                <li><NavButton name="compétences"/></li>
                <li><NavButton name="contact"/></li>
            </ul>
        </div>
    </nav>
}

ReactDOM.render(<Nav></Nav>, document.body.querySelector('header'))
// ReactDOM.render(<NavButton name="accueil"/>, document.body.querySelector('header'))

function Home(){
    return <div className="center">
        <h2>Nom</h2>
        <h2>Prénom</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque magni minima quaerat cum numquam maiores assumenda alias enim fugiat, consectetur similique iste, est, inventore ea! Nesciunt ad ducimus earum.</h3>
    </div>
}
ReactDOM.render(<Home/>, document.body.querySelector('section'))

// function Sectioncards(){
//     return
//         <div className="center">
//             {/* <h1></h1>
//             <div className="cards flex">
//                 <div className="card">
//                     <div className="cardIcon">

//                     </div>
//                     <div className="cardBody">
//                         <h2>technology</h2>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique eligendi, quisquam ut ab quia illo ipsam vitae rerum aliquid exercitationem cum rem harum dolorum quasi illum. Voluptatibus nisi aperiam error.</p>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
// }
// ReactDOM.render(<Sectioncards/>, document.body.querySelector('section'))
function Footer(){
    return <div className="center">
        <div className="ul">
            <li>Valentin Bruneel 2022</li>
            <li>Linkedin</li>
            <li>github</li>
        </div>
    </div>
}
ReactDOM.render(<Footer/>, document.body.querySelector('footer'))