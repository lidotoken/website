import ButtonWrapper from "./Button.style";


const Button = ({ children, ...props }) => {
  return (
    <ButtonWrapper type="submit" className="bithu-btn" {...props}>
      {children}

    </ButtonWrapper>
  );
};

export default Button;
