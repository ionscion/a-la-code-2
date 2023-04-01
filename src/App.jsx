import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import SidebarPage from "./pages/SidebarPage";

function App() {
  return (
    <div >
      <Header className="deep-purple lighten-2"/>
      <SidebarPage />
    </div>
  );
}

export default App;
