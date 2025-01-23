import Link from "next/link"
import "../app/ui/navbar.css"

export default function Navbar() {
    return (
        <div className="wrapp">
            <div className="navbar">
                <p>Navbar</p>
                <div className="link">
                    <Link href={"/"} className="home"><p>Home</p></Link>
                    <Link href={"/about"} className="about"><p>About</p></Link>
                    <Link href={"/login"} className="login"><p>Login</p></Link>
                </div>
            </div>
        </div>
    )
}