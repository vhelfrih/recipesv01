import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Food from "./components/Food";

import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="App bg-slate-900 min-h-screen">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/" element={<Food />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
