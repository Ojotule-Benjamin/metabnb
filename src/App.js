import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Place from "./pages/Place";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/placetostay",
    element: <Place />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
