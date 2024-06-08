import { useState } from 'react';
import { FeatureBox } from './components/feature-box';

export const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (email.trim() === '') {
      setMessage('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('Email is invalid.');
      return;
    }
    try {
      const response = await fetch('http://3.228.97.110:9000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setMessage('Email ends with @ez.works.');
      } else if (response.status === 200) {
        setMessage('Form Submitted');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row mx-5 my-32">
      <div className="flex-initial w-full lg:w-5/12 mx-auto md:mx-9">
        <img src="https://i.imgur.com/2P9VbCN.png" alt="" className="md:w-[400px] py-3 w-64 mx-auto md:mx-0" />
        <div className="text-4xl py-4 text-center md:text-left">Suite of Business Support Services</div>
        <div className="font-medium text-[1.4rem] py-8 text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officiis consequatur sunt ab quam voluptate
          excepturi accusantium odit tenetur qui a veritatis
        </div>
        <div className="hidden md:block">
          <input
            className="border-gray-300 border-2 rounded-md mr-3 p-2 w-8/12 h-[3.2rem]"
            type="email"
            id="email-desktop"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-orange-500 rounded-md ml-2 p-2 text-white w-3/12 h-[3.2rem] text-xl" onClick={handleSubmit}>
            Contact Me
          </button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
      <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <FeatureBox />
        <div className="block md:hidden mt-4 flex-col items-center">
          <div className="w-full flex justify-center">
            <input
              className="border-gray-300 border-2 rounded-md m-1 p-2 w-4/5"
              type="email"
              id="email-mobile"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-orange-500 rounded-md m-1 p-2 text-white w-1/2" onClick={handleSubmit}>
              Contact Me
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};
