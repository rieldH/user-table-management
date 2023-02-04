const UserForm = (props) => {
    return (
        <form style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            width: "50%"
        }}>
            <input name="name" placeholder="Name" onChange={props.getUserInputs} />
            <input name="surname" placeholder="Surname" onChange={props.getUserInputs} />
            <input name="city" placeholder="City" onChange={props.getUserInputs} />
            <input name="age" placeholder="Age" type="number" onChange={props.getUserInputs} />
        </form>
    )
}

export default UserForm;