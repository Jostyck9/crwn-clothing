import React from "react";

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel,
} from "./form-input.styles";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer className="group">
        <FormInputContainer
            className="form-input"
            onChange={handleChange}
            {...otherProps}
        />
        {label ? (
            <FormInputLabel
                className={`${
                    otherProps.value.length ? "shrink" : ""
                } form-input-label`}
            >
                {label}
            </FormInputLabel>
        ) : null}
    </GroupContainer>
);

export default FormInput;
