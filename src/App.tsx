import "./App.css";
import ButtonSwitch from "./components/Buttons/ButtonSwitch";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import QuestionsFieldEmpty from "./components/QuestionsFieldEmpty";
import QuestionsList from "./components/QuestionsList";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/Test/Test";

function App() {
  const { currentMode, setThemeMode, activeMenu } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="bg-main-bg dark:bg-main-dark-bg min-h-screen flex">
          <div
            className={`transition-[left] ease-linear duration-200 w-72 ${
              activeMenu ? "left-0" : "left-[-18rem]"
            } fixed sidebar bg-main-bg dark:bg-main-dark-bg`}
          >
            <Sidebar />
          </div>
          <div
            className={`flex flex-col transition-[margin] ease-linear duration-200 bg-main-bg dark:bg-main-dark-bg min-h-screen w-full ${
              activeMenu ? "xl:ml-72" : "flex-[2_2_0%]"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div className="grow">
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<QuestionsList />} />
                <Route path="/questions" element={<QuestionsList />} />
                <Route path="/passage" element={<QuestionsFieldEmpty />} />
                <Route path="/passage/:id" element={<Test />} />

                {/* Pages */}
                <Route path="/orders" element={<div>GG</div>} />
                <Route path="/employees" element={<div>GG</div>} />
                <Route path="/customers" element={<div>GG</div>} />

                {/* Apps */}
                <Route path="/kanban" element={<div>GG</div>} />
                <Route path="/editor" element={<div>GG</div>} />
                <Route path="/calendar" element={<div>GG</div>} />
                <Route path="/color-picker" element={<div>GG</div>} />

                {/* Charts */}
                <Route path="/line" element={<div>GG</div>} />
                <Route path="/area" element={<div>GG</div>} />
                <Route path="/bar" element={<div>GG</div>} />
                <Route path="/pie" element={<div>GG</div>} />
                <Route path="/financial" element={<div>GG</div>} />
                <Route path="/color-mapping" element={<div>GG</div>} />
                <Route path="/pyramid" element={<div>GG</div>} />
                <Route path="/stacked" element={<div>GG</div>} />

                {/* Notfound */}
                <Route path="*" element={<Notfound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
