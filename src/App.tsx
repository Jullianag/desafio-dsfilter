import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListingBody from "./routes/ ListingBody";
import Filter from "./routes/ ListingBody/Filter";
import Listing from "./routes/ ListingBody/Listing";

export default function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ListingBody/>} >
                  <Route index element={<Filter/>} />
                  <Route index element={<Listing/>} />

              </Route>
          </Routes>
      </BrowserRouter>
  );
}


