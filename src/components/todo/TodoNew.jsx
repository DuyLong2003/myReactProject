import { useState } from "react";

const TodoNew = (props) => {
    // console.log("Check", props)
    // const valueInput = "long";

    //useState hook (getter/setter)
    //const [tenState, setTenState] = useState(giaTriBanDau);
    const [valueInput, setValueInput] = useState("")

    const { addNewTodo } = props;

    // addNewTodo("Long")//fire
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;