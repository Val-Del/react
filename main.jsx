// function Welcome({name}){
//     return <h1>Salut {name}</h1>
// }

// ReactDOM.render(<Welcome name="valentin"/>, document.body)
function NavButton({name}){
return <button>{name}</button>
}
function Nav() {
    return <nav>
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

function Home(){
    return <div className="center">
        <img src="img/avatar.svg" alt="" />
        <h2>Bruneel</h2>
        <h2>Valentin</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque magni minima quaerat cum numquam maiores assumenda alias enim fugiat, consectetur similique iste, est, inventore ea! Nesciunt ad ducimus earum.</p>
    </div>
}
ReactDOM.render(<Home/>, document.body.querySelector('section'))
function Jpp(){
    return <div className="center">
        <h2>Technologies</h2>
        <div className="flex">
            <div className="card">
                
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
            <div className="card">
                <p>em ipsum dolor sit amet consectet</p>
                <p>em ipsum dolor sit amet consectetem ipsum dolor sit amet consectet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque natus aspernatur, quod delectus quas harum quia rem neque? Odit neque officiis minus facere architecto consequatur. Sit veniam repudiandae vitae.</p>
            </div>
        </div>
    </div>
}

 ReactDOM.render(<Jpp/>, document.getElementById("seconde"))


function Footer(){
    return <div className="center">
            <ul>
                <li>Valentin Bruneel 2022</li>
                <li><a target="blank" href="https://www.linkedin.com/in/valentin-bruneel-7880a8202/">Linkedin</a></li>
                <li><a href="">Github</a></li>
            </ul>
    </div>
}
ReactDOM.render(<Footer/>, document.body.querySelector('footer'))