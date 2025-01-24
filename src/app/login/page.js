import "../ui/login.css"

export default function Login() {
    return (
        <div className="content">
            <div className="wrapp-login">
                <p className="login-text">Login</p>
                <div className="login-input" >
                    <p>Username</p>
                    <input placeholder="username"/>
                    <p>Email</p>
                    <input placeholder="email"/>
                    <p>Password</p>
                    <input placeholder="password"/>
                </div>
                <div className="check-text">
                    <input type="checkbox"/>
                    <p>Terima Persyaratan dan Ketentuan</p>
                </div>
                <button className="button">Submit</button>
            </div>
        </div>
    )
}