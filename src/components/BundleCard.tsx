import React from 'react';

interface BundleCardProps {
  bundle: {
    lessons: number;
    hourly: number;
    discount: number;
  };
}

const BundleCard: React.FC<BundleCardProps> = ({ bundle }) => {
  return (
    <div className="w-96 h-[20rem] self-center shadow-xl rounded-xl p-8 flex flex-col justify-around items-center transition-all hover:scale-110 hover:shadow-sky-200/50 hover:ring-2">
      <span className="text-xl3">{bundle.lessons} lessons</span>
      <h2 className="text-xl4 relative after:contents-[' '] after:absolute after:w-full after:border-solid after:border-b-[2rem] after:bottom-[.2rem] after:left-[-1rem] after:border-yellow-300 after:z-[-1]">
        {bundle.hourly * bundle.lessons -
          bundle.hourly * bundle.lessons * bundle.discount}{' '}
        PLN
      </h2>
      <h2 className="text-xl2 line-through">
        {bundle.hourly * bundle.lessons} PLN
      </h2>
      <span className="text-xl1 ">{bundle.discount * 100}% discount</span>
    </div>
  );
};

export default BundleCard;
