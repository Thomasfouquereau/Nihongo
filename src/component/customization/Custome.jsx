import { Link } from "react-router-dom";
import Mode from "./mode/mode";

export default function Custome() {


    return (
        <div>
            <Link to="/color">color</Link>
            <Mode />
        </div>
    );
}