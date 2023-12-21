import React from "react"
import { Button as StyledButton } from "./Button.styles"
import { ButtonProps } from "@mui/material"

interface Props extends ButtonProps {
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const { children } = props
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>

  )
}

export default Button