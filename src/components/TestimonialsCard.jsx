import React from 'react'

// name, AvatarImage, reviewHeading, reviewParagraph, textColor, mainBgColor,imageRingColor, bgImage
const TestimonialsCard = ({testimonial}) => {
    return (
        <div className={`p-10 md:p-7 ${testimonial.mainBgColor}  rounded-xl shadow-md h-full space-y-4 ${testimonial.bgImage && testimonial.bgImage + ' bg-no-repeat bg-right-top bg-origin-content'} `}>
            <div className='flex gap-5'>
                <img className={`rounded-full w-10 h-10 ring-2 ${testimonial.imageRingColor} ring-offset-2 ring-off`} src={testimonial.AvatarImage} alt={testimonial.name} />
                <div>
                    <h2 className={`font-medium text-base ${testimonial.textColor}`}>{testimonial.name}</h2>
                    <h4 className={`text-xs ${testimonial.textColor} opacity-50`}>Verified Graduate</h4>
                </div>
            </div>
            <h1 className={`text-lg font-semibold ${testimonial.textColor}`}>{testimonial.reviewHeading}</h1>
            <p className={`${testimonial.textColor} opacity-70 tracking-tight`}>" {testimonial.reviewParagraph} "</p>
        </div>
    )
}

export default TestimonialsCard