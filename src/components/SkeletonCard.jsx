import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="animate-pulse border rounded-lg shadow-lg p-4 max-w-sm h-80 flex flex-col space-y-4">
            <div className="bg-gray-200 h-40 w-full rounded-md"></div>
            <div className="bg-gray-200 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
            <div className="bg-gray-200 h-4 w-full rounded mt-auto"></div>
        </div>
    );
};

export default SkeletonCard;
