import PopularStores from "./components/sections/PopularStores";
import TopCategories from "./components/sections/TopCategories";
import TrendingDeals from "./components/sections/TrendingDeals";
import HomePage from "./homepage/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <TopCategories />
      <PopularStores />
      <TrendingDeals />
    </>
  );
}

export default App;
