import React from 'react'
import ImageDaniel from '../assets/images/image-daniel.jpg'
import { Testimonials } from './Testimonials'
import TestimonialsCard from './TestimonialsCard'

const TestimonialsSection = () => {
  return (
    <div className='grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-5 max-w-6xl mx-5 my-10 lg:my-1'>
        <div className='md:col-span-2'>
            <TestimonialsCard testimonial={Testimonials[0]}/>
        </div>
        <div className=''>
            <TestimonialsCard testimonial={Testimonials[1]}/>
        </div>
        <div className='md:row-span-2 order-last md:order-none'>
            <TestimonialsCard testimonial={Testimonials[4]}/>
        </div>
        <div className=''>
            <TestimonialsCard testimonial={Testimonials[2]}/>
        </div>
        <div className='md:col-span-2'>
            <TestimonialsCard testimonial={Testimonials[3]}/>
        </div>
    </div>
  )
}

export default TestimonialsSection