import { Container } from "./styles";

export function ButtonText({ name, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      $isactive={isActive}
      {...rest}
    >
      {name}
    </Container>
  );
}