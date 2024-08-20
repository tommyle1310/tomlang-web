import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { courses } from "@/lib/constants/courses"
import { Link } from "react-router-dom";

const getStatusClasses = (status: string) => {
    let classes = "jb p-3 border-2 ";

    if (status === 'locked') {
        classes += "bg-gray-200 ";
    } else if (status === 'learned') {
        classes += "bg-success-100 border-success-400 cursor-pointer border-1 hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md";
    } else if (status === 'unlocked') {
        classes += "cursor-pointer hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md ";
    }

    return classes;
};


const Lesson = () => {
    return (
        <div className="p-3 max-w-screen-md mx-auto">
            <Link to='/lesson/new' className="w-full flex justify-end my-4">
                <Button className="bg-info-600 text-white" >Create a lesson</Button>
            </Link>

            <Tabs defaultValue="lessons" className="max-w-screen-md mx-auto">
                <TabsList className="mx-auto bg-danger-300 w-full">
                    <TabsTrigger className="w-full" value="lessons">Lessons</TabsTrigger>
                    <TabsTrigger className="w-full" value="exercises">Exercises</TabsTrigger>
                </TabsList>
                <TabsContent value="lessons" className="fc gap-3">
                    {courses.map((item, index) => (
                        <div key={index} className={getStatusClasses(item.status)}>
                            <div className="gap-3 ic">
                                <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                <div className="fc">
                                    <h5 className="font-semibold text-lg">{item.title}</h5>
                                    <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                </div>
                            </div>
                            {item.status === 'locked' && <div className="">locked</div>}
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="exercises">exercises.</TabsContent>
            </Tabs>
        </div>

    )
}

export default Lesson
