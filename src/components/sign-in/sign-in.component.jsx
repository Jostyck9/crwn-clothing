import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInContainer, Buttons } from "./sign-in.styles";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (err) {
            console.error(err);
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <Buttons>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In with google
                        </CustomButton>
                    </Buttons>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;
