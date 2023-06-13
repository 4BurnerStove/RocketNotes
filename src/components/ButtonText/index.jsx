import { Container } from "./styles";

export function ButtonText({ name, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {name}
    </Container>
  );
}