
function Student(props){
    return(
        <div className="student">
            <h1>Student Name: {props.name}</h1>
            <h1>Student Age: {props.age}</h1>
            <h1>Student Roll: {props.isStudent ? "Yes" : "No"}</h1>
        </div>
    )
}

export default Student;