import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// Named Export
export function Button(props: ButtonProps) {
  // Conceito de imutabilidade -> não modificamos um counter,
  // sempre um novo counter é criado a partir do valor anterior
  
  return (
    <button className="button" {...props} />
  )
}
