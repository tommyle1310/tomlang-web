import HorizontalList from '@/components/HorizontalList/HorizontalList';
import { Bar } from 'react-chartjs-2';

const Home = () => {
    return (
        <div className="">
            <HorizontalList title='Continue Courses' />
            <HorizontalList title='Featured Courses' />
            <HorizontalList title='Relevant Courses' />
            <div className="p-4 mx-auto">

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
    )
}

export default Home
