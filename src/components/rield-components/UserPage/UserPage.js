import { useEffect, useState } from "react"
import UserForm from "../UserForm/UserForm"
import UserTable from "../UserTable/UserTable"

const UserPage = () => {
    const [userInput, setUserInput] = useState(
        {
            name: "",
            surname: "",
            city: "",
            age: 0,
            editing: false
        }
    )
    const [userTableData, setUserTableData] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [editing, setEditing] = useState(false);

    const handleEditButton = (name) => {
        setUserTableData(prev => prev.map(item=>item.name===name ? {...item, editing: true} : item));
    }

    const getUserInputs = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value })
    }
    const handleAddToTable = (event) => {
        event.preventDefault();
        setUserTableData([...userTableData, userInput]);
    }

    const handleDeleteUser = (event) => {
        const deletedValue = [...userTableData]
        deletedValue.splice(event.target.name, 1)
        setUserTableData(deletedValue)
    }

    useEffect(() => {
        if (userInput.name.length > 3 && userInput.surname.length > 3 && userInput.city.length > 3 && userInput.age > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [userInput, userTableData])

    return (
        <div>
            <h3>UserPage</h3>
            <UserForm userInput={userInput} getUserInputs={getUserInputs} />
            <br />
            {
                <button onClick={handleAddToTable} disabled={disabled}>
                    Add user
                </button>
            }
            <br />
            <UserTable handleEditButton={handleEditButton} userTableData={userTableData} handleDeleteUser={handleDeleteUser} />
        </div>
    )
}

export default UserPage;