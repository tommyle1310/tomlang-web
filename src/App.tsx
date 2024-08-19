import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Nav from "./components/Nav/Nav";
import { Outlet } from 'react-router-dom';
import CreateLesson from './components/CreateLesson';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const App = () => {
  return (
    <div className='text-primary-700'>
      {/* nav section */}
      <Nav />

      {/* content */}
      <div className="lg:max-w-screen-lg mx-auto">
        <CreateLesson />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
