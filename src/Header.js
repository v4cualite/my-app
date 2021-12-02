/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from "./logo.svg"
import React, { useState } from "react"

function Header(props) {
    const [myName, setMyName] = useState(props.myName)
    return (
        <header className="flex min-h-screen flex-col bg-blue-400 items-center justify-center text-4xl">
            <img src={logo} className="h-40 animate-spin " alt="logo" />
            <p className="text-red-400"> Hello, {props.myName || "world"}.</p>
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
