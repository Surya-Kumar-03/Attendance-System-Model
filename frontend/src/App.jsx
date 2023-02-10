import Navbar from "./components/Navbar/navbar";
import Content from "./components/Content/content";
import 'animate.css';

function App() {
  return (
    <div
      className="flex flex-col h-screen w-screen justify-start 
    items-center"
    >
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
