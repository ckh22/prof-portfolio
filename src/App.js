import Nav from "./Components/Nav/Nav";
import "./App.scss"
import teamLab from './Assets/teamlab.png'

function App() {
    return (<div className="App">
        <Nav/>
        <div className='body'>
            <div>
                <p>Hello!</p>
                <p>I'm Kei Hartley, a software engineer.</p>
                <p>Specialized in web dev and data visualization</p>
                <div>
                    <button>
                        Resume
                    </button>
                    <button>
                        Cover Letter
                    </button>
                </div>
            </div>
            <img src={teamLab}
                alt='teamLab'/>
        </div>
    </div>);
}

export default App;
