import React from 'react'
import PropTypes from 'prop-types';
import '../css/Card.css';

export default function Card({ id, title, content ,img, progress=50}) {
    Card.defaultProps = {
        id: 0,
        title: 'Default Title',
        content: 'Default Content',
        img: 'src/Images/smart-wojak1.avif',
        progress: 20,
        topic: "something",
    };

    

    Card.propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        img: PropTypes.string,
        progress: PropTypes.number,
        topic: PropTypes.string,
    };

    
    return (
    <div className=' card transition mx-10 my-5 delay-400 hover:shadow-xl hover:transform-gpu shadow-lg flex flex-col items-center justify-center w-[18vw] h-[50vh] bg-white rounded'>
        <div className='card-title text-semibold mb-2'>{title}</div>
        <div className=' card-image w-100 h-28 border-2 border-gray-300 rounded-lg overflow-hidden block'>
            <img src={img} alt='Wojak-py' className='w-full h-full object-contain'></img>
        </div>
        <div className='info m-2'>{content}Lorem</div>
        <div className="w-full relative rounded-full">
        <div className='progress-bar place-self-end mx-4 mb-10'>
        {progress}%</div>
            <div
                className=" absolute m-2 bg-black h-1 rounded-full transition-all duration-400"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    </div>
  )
}
