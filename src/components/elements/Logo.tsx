import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="text-3xl text-white-100 font-semibold tracking-[2px]">
            SOU<span className="text-blue-100">Z</span>S
        </Link>
    )
}

export default Logo;