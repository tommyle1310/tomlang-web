import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LessonItem, courses as initialCourses } from "@/lib/constants/courses";
import { Link } from "react-router-dom";
import DisplayBtnsAddStatus from '../components/DisplayBtnsAddStatus';
import { ExerciseItem, exercises as initialExercises } from '@/lib/constants/exercises';

const getStatusClasses = (value: string | number, type: 'lesson' | 'exercise' = 'lesson') => {
    let classes = "jb p-3 border-2 ";

    if (type === 'lesson') {
        if (value === 'locked') {
            classes += "bg-gray-200 rounded-md";
        } else if (value === 'learned') {
            classes += "bg-success-100 border-success-400 cursor-pointer border-1 hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md";
        } else if (value === 'unlocked') {
            classes += "cursor-pointer hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md ";
        }
    } else if (type === 'exercise') {
        if (typeof value === 'number') {
            if (value < 40) {
                classes += "bg-gray-200 rounded-md";
            } else if (value > 80) {
                classes += "bg-success-100 border-success-400 cursor-pointer border-1 hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md";
            } else if (value > 50) {
                classes += "cursor-pointer hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md ";
            }
        }
    }

    return classes;
};

const Lesson = () => {
    const [action, setAction] = useState<'ADD_LESSON' | 'DEFAULT_LESSON' | 'ADD_EXERCISE' | 'DEFAULT_EXERCISE'>('DEFAULT_LESSON');
    const [courses, setCourses] = useState<LessonItem[]>(initialCourses);
    const [isLesson, setIsLesson] = useState(true);
    const [exercises, setExercises] = useState<ExerciseItem[]>(initialExercises);

    const toggleAction = () => {
        if (isLesson) {
            setAction(prev => prev === 'ADD_LESSON' ? 'DEFAULT_LESSON' : 'ADD_LESSON');
        } else {
            setAction(prev => prev === 'ADD_EXERCISE' ? 'DEFAULT_EXERCISE' : 'ADD_EXERCISE');
        }
    };

    return (
        <div className="p-3 max-w-screen-md mx-auto">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Course abc</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="w-full flex justify-end my-4">
                <Button
                    onClick={toggleAction}
                    className={`${action.includes('ADD') ? 'bg-warning-600' : 'bg-info-600'} text-white ic gap-2`}
                >
                    <i className={`fa-solid fa-circle-plus mt-1 transform transition-transform duration-200 ${action.includes('ADD') ? 'rotate-45' : 'rotate-0'}`}></i>
                    {action.includes('ADD') ? 'Cancel' : isLesson ? 'Create a lesson' : 'Create an exercise'}
                </Button>
            </div>

            <Tabs defaultValue="lessons" className="max-w-screen-md mx-auto">
                <TabsList className="mx-auto bg-danger-300 w-full">
                    <TabsTrigger onClick={() => setIsLesson(!isLesson)} className="w-full" value="lessons">Lessons</TabsTrigger>
                    <TabsTrigger onClick={() => setIsLesson(!isLesson)} className="w-full" value="exercises">Exercises</TabsTrigger>
                </TabsList>
                <TabsContent value="lessons" className="fc gap-3">
                {courses.map((item, index) => (
                    <div key={item.id} className="ic gap-2 w-full">
                        {item.status !== 'locked' ? (
                            <>
                                <Link to={`/course/lesson/${item.id}`} className={`w-5/6 flex-1 ${getStatusClasses(item.status)}`}>
                                    <div className="gap-3 ic">
                                        <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                        <div className="fc">
                                            <h5 className="font-semibold text-lg">{item.title}</h5>
                                            <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                        </div>
                                    </div>
                                    {item.status === 'locked' && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                                </Link>
                                {action.includes('ADD') && (
                                    <DisplayBtnsAddStatus index={index} data={courses} setData={setCourses} type='lesson' />
                                )}
                            </>
                        ) : (
                            <>
                                <div className={`w-5/6 flex-1 ${getStatusClasses(item.status)}`}>
                                    <div className="gap-3 ic">
                                        <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                        <div className="fc">
                                            <h5 className="font-semibold text-lg">{item.title}</h5>
                                            <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                        </div>
                                    </div>
                                    {item.status === 'locked' && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                                </div>
                                {action.includes('ADD') && (
                                    <DisplayBtnsAddStatus index={index} data={courses} setData={setCourses} type='lesson' />
                                )}
                            </>
                        )}
                    </div>
                ))}
            </TabsContent>
            <TabsContent value="exercises" className='fc gap-3'>
                {exercises.map((item, index) => (
                    <div key={item.id} className="ic gap-2 w-full">
                        <Link to={`/course/exercise/${item.id}`} className={`w-5/6 flex-1 ${getStatusClasses(item.score, 'exercise')}`}>
                            <div className="gap-3 ic">
                                <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                <div className="fc">
                                    <h5 className="font-semibold text-lg">{item.title}</h5>
                                    <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                </div>
                            </div>
                            {item.score > 80 && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                        </Link>
                        {action.includes('ADD') && (
                            <DisplayBtnsAddStatus index={index} data={exercises} setData={setExercises} type='exercise' />
                        )}
                    </div>
                ))}
            </TabsContent>
            </Tabs>
        </div>
    );
}

export default Lesson;
