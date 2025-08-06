import React, {useState} from 'react'

function Hudini () {
const [show, setShow] = useState(false)

const showOrHide = () => {
    setShow(!show)

}

return (
    <>
    <div>
        {show ? "Now you can see me" : "Now you don't"}
         <br />
         <br />
        <button onClick={showOrHide}>Show/Hide</button>
    </div>
    </>
)

}

export default Hudini