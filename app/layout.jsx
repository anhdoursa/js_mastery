import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Js Mastery title",
  description: "Js Mastery description",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Nav />
        <section>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">{children}</div>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
