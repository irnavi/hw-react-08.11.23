import Info from "./Info"


function User(props) {

    const { age, name, adult, data} = props
    return(
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{adult}</p>
            <p>{data.name}</p>
            <Info props={props}/>
        </div>
    )
}

export default User