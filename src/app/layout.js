import "./globals.css";
import Providers from "@/providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body style={{backgroundColor: '#F0F2F5'}}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
