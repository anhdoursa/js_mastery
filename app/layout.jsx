import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Js Mastery title",
  description: "Js Mastery description",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <section>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </section>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
