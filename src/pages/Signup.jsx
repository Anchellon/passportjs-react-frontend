import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastNane] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        console.log(
            `First Name :${inputFirstName},Last Name :${inputLastName},Email :${inputEmail}, Password :${inputPassword}`
        );
        if (inputEmail !== "admin" || inputPassword !== "admin") {
            setShow(true);
        }
        setLoading(false);
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

                <div className="h4 mb-2 text-center">Sign up!</div>

                {/* ALert */}

                <Form.Group className="mt-3 mb-2" controlId="Email">
                    <Form.Label>Firt Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputFirstName}
                        placeholder="First Name"
                        onChange={(e) => setInputFirstName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="Email">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputLastName}
                        placeholder="Last Name"
                        onChange={(e) => setInputLastName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputEmail}
                        placeholder="Email"
                        onChange={(e) => setinputEmail(e.target.value)}
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

                {!loading ? (
                    <Button className="w-100" variant="primary" type="submit">
                        Sign Up
                    </Button>
                ) : (
                    <Button
                        className="w-100"
                        variant="primary"
                        type="submit"
                        disabled
                    >
                        Creating Account ...
                    </Button>
                )}
                <div className="my-2">
                    Already have an account?
                    <Link className="link" to="/login">
                        Login!
                    </Link>
                </div>
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

export default Signup;
