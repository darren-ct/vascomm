import { AuthContainer } from "@/features/auth/components/layout/container";
import { AuthDisplay } from "@/features/auth/components/layout/display";
import { AuthFormWrapper } from "@/features/auth/components/layout/form-wrapper";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContainer>
      <AuthDisplay />
      <AuthFormWrapper>{children}</AuthFormWrapper>
    </AuthContainer>
  );
}
