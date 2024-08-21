import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import ContinueCourses from './ContinueCourses'
import FeaturedCourses from './FeaturedCourses'
import RelevantCourses from './RelevantCourses'

const HorizontalList = ({ title }: { title: string }) => {
  return (
    <div className="fc gap-3 p-4 mb-6">
      <div className="jb">
        <h3 className="txt-3 font-bold">{title}</h3>
        <Link to='/' className='font-semibold text-info-500 '>See all</Link>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-5xl"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="max-sm:basis-1/1 
    md:basis-1/3 
    lg:basis-1/4 
    cursor-pointer 
    transition-transform 
    duration-500 
    transform 
    hover:scale-95 
    hover:shadow-lg
    hover:shadow-primary-200 
    hover:rounded-md">
              <div className="">
                {title === 'Continue Courses' &&
                  <ContinueCourses />
                }
                {
                  title === 'Featured Courses' &&
                  <FeaturedCourses />
                }
                {
                  title === 'Relevant Courses' &&
                  <RelevantCourses />
                }
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default HorizontalList
