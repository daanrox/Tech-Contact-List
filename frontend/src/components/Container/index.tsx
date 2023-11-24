import { ReactNode } from "react";
import { StyledContainer } from "./style";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};
