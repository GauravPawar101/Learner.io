import React, {useState, useEffect} from 'react'
import Card from '../components/Card';
import ExpandButton from '../components/ExpandButton';
import img from '../Images/sad-wojak.jpg';
import '../css/Dashboard.css';
import Footer from '../components/Footer';
import SkeletonCard from '../components/SkeletonCard';

export default function Dashboard() {
    const [cards, setCards] = useState([]); // State to hold fetched card data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
      };
    const defCards = [{
            id: 0,
            title: 'Default Title',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
        {
            id: 0,
            title: 'Default Title',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
        {
            id: 0,
            title: 'Default Title',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
        {
            id: 0,
            title: 'Default Title',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
        {
            id: 0,
            title: 'Default Title 5',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
        {
            id: 0,
            title: 'Default Title',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
        {
            id: 0,
            title: 'Default Title',
            content: 'Default Content',
            image: {img},
            progress: 20
        },
    ];

    const VisibleCards = isExpanded? defCards : defCards.slice(0,3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://your-server.com/api/cards'); // Replace with your API
                const data = await response.json();
                setTimeout(() => { // Simulate delay for better visibility
                    setCards(data);
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

  return (
    <div className='papa h-[200vh]'>
        <div className='hero overlay flex items-center justify-center h-[40vh]'>
            <h1 className='text-2xl font-bold'>Feeling lost?</h1>
            <p>WE ARE HERE</p>
        </div>
        <div className='flex flex-wrap flex-col justify-center items-center overflow-hidden'>
            <h1 className='text-white my-10 font-semibold text-2xl h-10'>Your Roadmaps</h1>
        <div className='CardContainer flex flex-wrap p-2 h-100 mx-5 justify-start items-start overflow-auto '>
        
        {VisibleCards.map((card) => (
    <Card
        key={card.id}
        title={card.title}
        description={card.content}
        image={card.image}
        progress={card.progress}
    />

))}

        </div>
        <ExpandButton onClick={handleToggle} isExpanded={isExpanded}></ExpandButton>
        </div>
    </div>
  )
}
