export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
        <h1>AuthLayout</h1> 
          {children}
        </body>
      </html>
    );
  }
  