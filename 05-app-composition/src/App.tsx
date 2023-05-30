import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./shared/ui/Footer";
import { Header } from "./shared/ui/Header";

export function App() {
  return (
    <main>
      <Header />
      <Dashboard />
      <Footer />
    </main>
  );
}
