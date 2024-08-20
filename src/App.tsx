import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Nav from "./components/Nav/Nav";
import { Outlet } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const App = () => {
  return (
    <div className=''>
      {/* nav section */}
      <Nav />

      {/* content */}
      <div className="lg:max-w-screen-lg mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
