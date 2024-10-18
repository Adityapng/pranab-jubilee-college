import React from "react";
import Header from "./Components/Header";
import "../styles/globals.css";
import HeadBackground from "./Components/HeadBackground";
import Footer from "./Components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body class="">
        <main>
          <Header />
          <HeadBackground />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
