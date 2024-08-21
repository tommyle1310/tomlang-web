import { UserStats } from '@/components/Graphs/userStats';
import HorizontalList from '@/components/HorizontalList/HorizontalList';

const Home = () => {
    return (
        <div className="">
            <HorizontalList title='Continue Courses' />
            <HorizontalList title='Featured Courses' />
            <HorizontalList title='Relevant Courses' />
            <div className="p-4 mx-auto">

               <UserStats />
            </div>

        </div>
    )
}

export default Home
