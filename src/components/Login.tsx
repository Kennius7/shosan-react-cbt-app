import Button from "./Button"

//todo Database for user login will be MongoDB
//! Database for user login will be MongoDB
//* Database for user login will be MongoDB
//? Database for user login will be MongoDB
// Database for user login will be MongoDB


function Login() {
    const loginLink = "/home";

    return (
        <>
            <div>
                <div className="">
                    <img src="img/shosan.jpg" alt="logo" className=""/>
                    <div className="container">
                        <h1 className="">
                            Shosan Computer Based Test
                        </h1>
                        <h3 className="">
                            Welcome to your Computer Based Test
                        </h3>
                    </div>
                </div>


                <div className="">
                    <form name="cbtForm" className="">
                        <div className="mb-1">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                name="fullName" 
                                className="form-control"/>
                        </div>
                        <div className="mb-1">
                            <label className="form-label"></label>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                name="emailForm" 
                                className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"></label>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="passwordForm" 
                                className="form-control"/>
                        </div>

                        <Button 
                            linkVariable={loginLink} 
                            buttonText="Login"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login