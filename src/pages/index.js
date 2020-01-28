import React from "react"

export default () => {
    let yelo = "yellow"
    let read = "red"
    let gren = "green"

    return (
        <div style={{ color: `${gren}`, fontSize: `12px` }}>
            <h1>Hello Gatsby!</h1>
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    )
}
