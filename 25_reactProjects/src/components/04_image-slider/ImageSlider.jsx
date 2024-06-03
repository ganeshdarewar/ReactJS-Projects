import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
const ImageSlider = ({ url, limit }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    async function fetchImages(getUrl) {
        try {
            const response = await fetch(`${getUrl}${limit}`)
            const data = await response.json()
            if (data) {
                setImages(data)
                setLoading(false)
            }
        }
        catch (e) {
            setErrorMessage(e.message)
            setLoading(false)
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])
    if (loading) {
        return <div>Loading data please wait</div>
    }
    if (errorMessage !== null) {
        return <div>error occured </div>
    }
    return (
        <div id='container' className='relative flex justify-center items-center w-[600px] h-[450px]'>
            <BsArrowLeftCircleFill onClick={handlePrevious} className='absolute w-8 h-8 text-white left-[1rem]' />
            {
                images && images.length ?
                    images.map(({ id, download_url }, index) => (
                        <img key={id} src={download_url} alt="" className={
                            currentSlide === index ? 'rounded shadow-[0px_0PX_7px_#666] w-full h-full' : 'hidden'
                        } />
                    )) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className='absolute w-8 h-8 text-white right-[1rem]' />
            <span className='flex absolute bottom-4 '>
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button onClick={() => setCurrentSlide(index)} key={index}
                                className={currentSlide === index ? 'bg-black h-4 w-4 rounded-full border-none outline-none m-[0_0.2rem] cursor-pointer' : 'bg-white h-4 w-4 rounded-full border-none outline-none m-[0_0.2rem] cursor-pointer'}></button>
                        ))
                        : null
                }
            </span>
        </div>
    )
}

export default ImageSlider
