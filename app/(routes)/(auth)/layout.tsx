import { Logo } from "@/components/shared/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <div className="relative h-full">
        <div className="absolute inset-0 bg-black bg-[url('/login-bg.jpg')] bg-cover bg-center opacity-40 bg-no-repeat -z-10" />
        <div className="px-8 py-5 max-w-7xl mx-auto">
          <Logo />
        </div>
        <div className="h-full w-full max-w-md mx-auto">
          <div className="bg-black/70 px-14 py-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
