/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from "./logo.svg"
import React, { useState } from "react"

function Header(props) {
    const [myName, setMyName] = useState(props.myName)
    const [surName, setSurName] = useState("")
    return (
        <header className="flex min-h-screen flex-col bg-blue-400 items-center justify-center text-4xl">
            <img src={logo} className="h-40 animate-spin " alt="logo" />
            <input
                type="text"
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
                className="text-red-400 text-center"
            />

            <input
                type="text"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                className="  start text-red-400 text-center mt-6"
            />

            <p className="text-red-400"> Hello, {myName || "world"}.</p>
            <a
                className="text-black-900"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Push The Button
            </a>
        </header>
    )
}
export default Header
