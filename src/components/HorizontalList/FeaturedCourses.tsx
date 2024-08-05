import { Card, CardContent } from '../ui/card'

const FeaturedCourses = () => {
  return (
    <Card>
      <CardContent className="jb gap-2 justify-center p-3">
        <div className="fc gap-1 lg:gap-3">
            <h3 className='leading-5 lg:text-lg font-semibold'>Grammar Quiz</h3>
            <p className='lg:text-sm text-xs leading-4'>Business English</p>
            <h5 className='max-sm:text-sm'>2 hours</h5>
        </div>
        <div className="w-20 aspect-square bg-success-400"></div>
      </CardContent>
  </Card>
  )
}

export default FeaturedCourses
