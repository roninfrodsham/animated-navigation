import { motion } from "framer-motion";
import { Navigation } from "./Components/Navigation";
import "./App.css";

function App() {
  return (
    <div className='antialiased tracking-wider fixed top-0 left-0 w-72 flex flex-col h-dvh'>
      <div className='p-6'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className='text-5xl'
        >
          RONIN JS
        </motion.h1>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
