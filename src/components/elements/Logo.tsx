import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="text-3xl text-white font-semibold tracking-[2px]">
            SOU<span className="text-blue-100">ZZ</span>S
        </Link>
    )
}

export default Logo;