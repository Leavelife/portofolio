import Navbar from "../../components/Navbar";

export default function Login() {
    return (
        <div className="content">
            <Navbar/>
            <div className="wrapp-login">
                <p>Login</p>
                <div className="login-input">
                    <p>Username</p>
                    <input placeholder="username"/>
                    <p>Email</p>
                    <input placeholder="email"/>
                    <p>Password</p>
                    <input placeholder="password"/>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>Terima Persyaratan dan Ketentuan</p>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}