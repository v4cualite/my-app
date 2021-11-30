import "tailwindcss/tailwind.css"
import logo from "./logo.svg"

function App() {
    const myName = "Sergej"
    return (
        <div className="App">
            <header className="flex min-h-screen flex-col bg-blue-400 items-center justify-center text-4xl">
                <img src={logo} className="h-40 animate-spin " alt="logo" />
                <p className="text-red-400"> Hello, {myName}.</p>
                <a
                    className="text-black-900"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Push The Button
                </a>
            </header>
        </div>
    )
}

export default App
