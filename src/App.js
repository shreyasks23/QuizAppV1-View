import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import { Typography } from '@material-ui/core';

import Header from './components/header/Header';
//import Footer from './components/footer/Footer';



export default function App() {
  return (    
    <>
      <Typography variant='h1' align='center' gutterBottom>Shreyas</Typography>
    <div className="App">
        
        <Header appName="Test & Assessment" />
        {/* <ViewQuestions /> */}
        <Footer />
      </div>
    </>
  );
}
