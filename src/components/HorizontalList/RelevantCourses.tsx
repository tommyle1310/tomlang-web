import { Card, CardContent } from '../ui/card'

const RelevantCourses = () => {
    return (
        <Card>
            <CardContent className="jb gap-4 justify-center p-3">
                <div className="fc gap-2">
                    <div className="w-20 aspect-square bg-success-400"></div>
                    <h5 className='txt-3 font-semibold text-success-500'>$3,000</h5>
                </div>
                <div className="fc gap-3">
                    <h3 className='leading-5 text-lg font-semibold text-primary-500'>Spanish Courses</h3>
                    <p className='text-sm leading-4'>All levels</p>
                    <h5>112 hours</h5>
                </div>
            </CardContent>
        </Card>
    )
}

export default RelevantCourses
