import React from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our menus</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
