import { PropsWithChildren } from "react";

type AuthContainerProps = PropsWithChildren;

export function AuthContainer({ children }: AuthContainerProps): JSX.Element {
  return (
    <div className="flex flex-row h-screen overflow-hidden">{children}</div>
  );
}
