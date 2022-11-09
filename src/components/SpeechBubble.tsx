import React from 'react';

const SpeechBubble = () => {
  return (
    <div className="sm:w-[600px] w-[350px]">
      <div>
        <blockquote className="bg-green-200 py-[1rem] pl-[4rem] pr-4 relative border-r-4 rounded-md italic text-sm mt-[2rem]">
          <svg
            aria-hidden="true"
            className="h-4 sm:h-8 text-lime-700 dark:text-gray-600 absolute left-10 sm:left-5 "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          dolores esse. Laborum iste cumque distinctio dolores provident dolore
          maxime ratione magnam fugiat quos! Eligendi incidunt, nam optio
          assumenda ullam reprehenderit.
        </blockquote>
      </div>
      <p className="mt-4 ml-5">Aleksandra Zajac</p>
    </div>
  );
};

export default SpeechBubble;
