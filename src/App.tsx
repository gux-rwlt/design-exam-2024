import "./App.css";
import { AppProvider } from "./providers";
import { AppRoutes } from "./routes";
import "@acab/reset.css";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
