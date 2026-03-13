import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import DivideMenu from "./pages/Devide/DevideMenu";
import SkylinePage from "./pages/Devide/Skyline";
import GreedyMenu from "./pages/Greedy/GreedyAlgoMenu";
import DPMenu from "./pages/DP/DPMenu";
import WordBreakPage from "./pages/DP/WordBreak";
import MaxProductSubarrayPage from "./pages/DP/maxProductSubarray";
import MinPlatform from "./pages/Greedy/MinPlatform";
import MinFibTerms from "./pages/Greedy/MinFibTerms";
import MergeSort from "./pages/Devide/mergeSort";
import NpProblem from "./pages/NP/NpProblem";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divide" element ={<DivideMenu/>} />
        <Route path="/divide/Skyline" element = {<SkylinePage/>} />
        <Route path="/greedy" element={<GreedyMenu />} />
        <Route path="/dp" element={<DPMenu />} />
        <Route path="/dynamic/word-break"element = {<WordBreakPage/>}/>
        <Route path="/dynamic/max-product-subarray" element={<MaxProductSubarrayPage />} />
        <Route path="/greedy/minimum-platform" element={<MinPlatform />} />
        <Route path="/greedy/min-fibonacci" element={<MinFibTerms />} />
        <Route path="/divide/mergesort" element={<MergeSort />} />
        <Route path="/divide/skyline" element={<SkylinePage />} />
        <Route path="/NpProblem" element = {<NpProblem />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;