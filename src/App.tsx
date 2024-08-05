import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import 'react-circular-progressbar/dist/styles.css'; // Ensure this is relevant
import HorizontalList from "./components/HorizontalList/HorizontalList";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const App = () => {
  return (
    <div className='text-primary-700'>
      {/* Hello section */}
      <div className="lap-hidden p-4 bg-primary-500 text-white">
        <div className="jb">
          <div className=''>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=''>bell</div>
        </div>
        <div className="fc">
          <h3 className="text-lg font-bold">
            Hello, <span>Tommy</span>
          </h3>
          <p>What would you like to learn today?</p>
        </div>
      </div>

      {/* Continue Courses */}
      <div className="lg:max-w-screen-lg mx-auto">
        <HorizontalList title='Continue Courses' />
        <HorizontalList title='Featured Courses' />
        <HorizontalList title='Relevant Courses' />
        <div className="p-4">

        <Bar
          data={{
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
              label: 'Monthly Statistics',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 1
            }]
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if (context.parsed.y !== null) {
                      label += context.parsed.y;
                    }
                    return label;
                  }
                }
              }
            },
            scales: {
              x: {
                beginAtZero: true
              },
              y: {
                beginAtZero: true
              }
            }
          }}
        />
        </div>

      </div>

    </div>
  );
};

export default App;
