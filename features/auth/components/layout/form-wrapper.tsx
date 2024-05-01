import { PropsWithChildren } from "react";

type AuthFormWrapperProps = PropsWithChildren;

export function AuthFormWrapper({
  children,
}: AuthFormWrapperProps): JSX.Element {
  return (
    <div className="flex-1 h-full flex justify-center items-center bg-white">
      <div className="w-full max-w-96 px-4">{children}</div>
    </div>
  );
}
