import "tailwindcss/tailwind.css"
import logo from "./logo.svg"
import "./App.css"
function App() {
    const myName = "Sergej"
    return (
        <div className="App">
            <header className="flex mh-100 flex-col bg-blue-400 items-center justify-center fz-calc(10px + 2vmin) color-white">
                <img src={logo} className="h-40 animate-spin " alt="logo" />
                <p className="text-red-400"> Hello, {myName}.</p>
                <a
                    className="text-black-900"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
