import "./style/globals.scss";
import Nav from "@/components/nav/Nav"


export const metadata = {
  title: "tele2",
  description: "tele2 app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <header>
        <Nav/>
    </header>
    <main>
      {children}
    </main>
    <footer/>
    </body>
    </html>
  );
}
