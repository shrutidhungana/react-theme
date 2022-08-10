import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const PageLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <header>HEADER</header>
      <main>TOGGLING THEME USING USE CONTEXT</main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default PageLayout;
