import { ButtonHTMLAttributes } from "react";
import '../styles/button.scss';

// tipagem do typescript
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

// Named Export
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  // Conceito de imutabilidade -> não modificamos um counter,
  // sempre um novo counter é criado a partir do valor anterior

  return (
    // spread operator - passando todas as props para o button
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  )
}
