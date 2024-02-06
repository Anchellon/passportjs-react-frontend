import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        // await delay(500);
        console.log(`Username :${inputUsername}, Password :${inputPassword}`);
        // if (inputUsername !== "admin" || inputPassword !== "admin") {
        //     setShow(true);
        // }
        setLoading(false);
        let data = {
            email: inputUsername,
            password: inputPassword,
        };
        console.log(data);
        const user = await fetch("http://localhost:3000/login", {
            method: "post",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((user) => {
                setLoading(false);
                setShow(false);
                console.log(user);

                //  update gloabl context- state
                // redirect
            })
            .catch((err) => {
                setShow(true);
                console.log(err);
            });
    };

    const handlePassword = () => {};

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <div
            className="sign-in__wrapper"
            // style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* Overlay */}
            <div className="sign-in__backdrop"></div>
            {/* Form */}
            <Form
                className="shadow p-4 bg-white rounded"
                onSubmit={handleSubmit}
            >
                {/* Header */}
                <img
                    className="img-thumbnail mx-auto d-block mb-2"
                    // src={Logo}
                    alt="logo"
                />
                <div className="h4 mb-2 text-center">Welcome Back!</div>
                {/* ALert */}
                {show ? (
                    <Alert
                        className="mb-2"
                        variant="danger"
                        onClose={() => setShow(false)}
                        dismissible
                    >
                        Incorrect username or password.
                    </Alert>
                ) : (
                    <div />
                )}
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputUsername}
                        placeholder="Username"
                        onChange={(e) => setInputUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={inputPassword}
                        placeholder="Password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-2 d-flex justify-content-between"
                    controlId="checkbox"
                >
                    <Form.Check
                        className="py-2"
                        type="checkbox"
                        label="Remember me"
                    />
                    <Button
                        className="text-muted mb-1"
                        variant="link"
                        onClick={handlePassword}
                    >
                        Forgot password?
                    </Button>
                </Form.Group>
                <div className="pb-3">
                    Don't have an account?{" "}
                    <Link className="link" to="/signup">
                        Sign up!
                    </Link>
                </div>

                {!loading ? (
                    <Button className="w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                ) : (
                    <Button
                        className="w-100"
                        variant="primary"
                        type="submit"
                        disabled
                    >
                        Logging In...
                    </Button>
                )}
                <div className="text-center">
                    <hr />
                    <p>or Sign in with</p>
                </div>
            </Form>

            {/* Footer */}
            <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
                Made by Hendrik C | &copy;2022
            </div>
        </div>
    );
};

export default Login;
