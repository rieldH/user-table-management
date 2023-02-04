import { useCallback, useMemo } from "react"

const UserTable = (props) => {
    const renderCells = useCallback((user) => {
        return (
            <>
                <td>{user?.name}</td>
                <td>{user?.surname}</td>
                <td>{user?.city}</td>
                <td>{user?.age}</td>
            </>
        )
    }, []);
    const renderInputs = useCallback(() => {
        return (
            <>
                <td>
                    <input style={{
                        width: "85px"
                    }} name="name" placeholder="Name" onChange={props.getUserInputs} />
                </td>
                <td>
                    <input style={{
                        width: "85px"
                    }} name="surname" placeholder="Surname" onChange={props.getUserInputs} />
                </td>
                <td>
                    <input style={{
                        width: "85px"
                    }} name="city" placeholder="City" onChange={props.getUserInputs} />
                </td>
                <td>
                    <input type="number" style={{
                        width: "85px"
                    }} name="age" placeholder="Age" onChange={props.getUserInputs} />
                </td>
            </>
        )
    }, [])
    const renderTable = useMemo(() => {
        return (
            <table style={{
                width: "100%"
            }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{
                    maxWidth: "100%"
                }}>
                    {props.userTableData.map((user, key) => {
                        return (
                            <tr key={key}>
                                {user.editing ? renderInputs() : renderCells(user)}
                                <td>
                                    <button onClick={(e) => { !user.editing ? props.handleEditButton(user.name) : console.log("Changing......") }}>
                                        {user.editing ? "Ok" : "Edit"}
                                    </button>
                                    <button name={key} key={key} onClick={props.handleDeleteUser}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }, [props.userTableData])

    return (
        <div>
            {renderTable}
        </div>
    )
}

export default UserTable;