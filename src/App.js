import { Highlight } from "./components/Highlight";
import { TopNavbar } from "./components/TopNavbar";


function App() {
  return (
    <div style={{ display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2rem',
   }}>
      <Highlight />
      <TopNavbar />
    </div>
  );
}

export default App;
