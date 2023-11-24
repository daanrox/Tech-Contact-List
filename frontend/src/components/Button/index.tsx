import { StyledButton } from "./style";


interface ButtonProps{
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
};
