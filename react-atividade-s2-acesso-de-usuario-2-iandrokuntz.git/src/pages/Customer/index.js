import { Link } from "react-router-dom";
import { members } from "../members";
import { useParams } from "react-router";

const Customer = () => {

    const { id } = useParams()

    const member = members.find((item) => item.id === id)

    return(
        <div>
            <h1>Customer Details</h1>
            <Link to="/">Go Home</Link>
            <h3>name: {member && member.name}</h3>
        </div>

    )
}

export default Customer