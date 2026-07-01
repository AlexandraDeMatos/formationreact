import FlexV3Grow from "../layouts/FlexV3Grow/FlexV3Grow";
import Footer from "../uis/Footer/Footer";
import Header from "../uis/Header/Header";
import Navbar from "../uis/Navbar/Navbar";
import '../../store/store';
import { Routes, Route } from 'react-router';
import home from "../../pages/home";
import editor from "../../pages/editor";

const App: React.FC = () => {
  
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/editor" Component={editor} />
          <Route path="/editor/:id" Component={editor} />
          <Route path="/" Component={home} />
        </Routes>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
