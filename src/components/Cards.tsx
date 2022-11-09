import React from 'react';
import onlineLearning from '../assets/images/onlineLearning.svg';
import conversationEnglish from '../assets/images/conversation.svg';
import businessEnglish from '../assets/images/businessEnglish.svg';
import outdoors from '../assets/images/outdoors.svg';

const Cards = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-6 ">
        <div className="border-2 w-fit p-2 flex flex-col gap-5 items-center">
          <img src={onlineLearning} alt="" className="h-32" />
          <h2 className="text-md font-semibold">Online learning made easy</h2>
          <p className="text-[.8rem] w-72 p-1">
            Our classes will be remote first on Microsoft Teams. Pick which
            times are best for you. Or if you're located in Lodz in-person
            lessons can be aranged!
          </p>
        </div>
        <div className="border-2 w-fit p-2 flex flex-col gap-5 items-center">
          <img src={conversationEnglish} alt="" className="h-32" />
          <h2 className="text-md font-semibold">Conversations First!</h2>
          <p className="text-[.8rem] w-72 p-1">
            Our lessons are focused on real life situations. No Textbooks! We
            practice english that will help you have fun, deep, and meaningful
            conversations
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="border-2 w-fit p-2 flex flex-col gap-5 items-center">
          <img src={businessEnglish} alt="" className="h-32" />
          <h2 className="text-md font-semibold">Specialized English</h2>
          <p className="text-[.8rem] w-72 p-1">
            Business, medical, technical, whatever specific kind of english you
            need. We'll make sure you speak with confidence in the professional
            setting
          </p>
        </div>
        <div className="border-2 w-fit p-2 flex flex-col gap-5 items-center">
          <img src={outdoors} alt="" className="h-32" />
          <h2 className="text-md font-semibold">Diverse Topics</h2>
          <p className="text-[.8rem] w-72 p-1">
            Our lessons will cover all kinds of topics including technology,
            sports, music, politics, dating, travel etc. We'll talk about
            anything an everything so you feel comfortable in any situation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
