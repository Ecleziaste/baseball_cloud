import React from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputProfile: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  val,
  secure,
}) => {
  // const handleChange = (e: any): void => {
  //   // (e: React.ChangeEvent<HTMLInputElement>)
  //   console.log(e.target.value);
  // };

  const labelText = "First Name *";

  return (
    <Container>
      <Input
        // onChange={() => input.onChange(handleChange)}
        {...input}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
      <Label className="VisibleLabel">{labelText}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
`;
const Label = styled.label`
  /* display: block; */
  display: none;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: transparent;
  text-decoration: none;
`;
const Input = styled.input`
  /* z-index: 1; */
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: none;
  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #48bbff;
  }
  &:focus ~ ${Label} {
    display: flex;
    position: absolute;
    top: 2px;
    left: 6px;
    font-size: 10px;
    color: #667784;
    transform: none;
    translate: none;
    cursor: pointer;
    &:hover {
      color: #48bbff;
      text-decoration: underline;
    }
  }
`;

export default InputProfile;

type Props = {
  placeholder: string;
  input: any;
  val: string;
  secure?: boolean;
};
