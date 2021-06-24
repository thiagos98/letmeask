import { ButtonHTMLAttributes } from "react";
import '../styles/button.scss';

// tipagem do typescript
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// Named Export
export function Button(props: ButtonProps) {
  // Conceito de imutabilidade -> não modificamos um counter,
  // sempre um novo counter é criado a partir do valor anterior
  
  return (
    // spread operator - passando todas as props para o button
    <button className="button" {...props} />
  )
}

<Button  />