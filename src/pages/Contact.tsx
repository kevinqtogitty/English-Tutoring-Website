import React from 'react';
import { TextInput, Textarea, Box } from '@mantine/core';

import { useForm } from '@mantine/form';

interface ContactProps {
  contactRef: (node?: globalThis.Element | null | undefined) => void;
}

const Contact: React.FC<ContactProps> = (props) => {
  const form = useForm({
    initialValues: {
      email: '',
      fullName: '',
      message: '',
      termsOfService: false
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  });
  return (
    <div
      id="contactSection"
      className=" sm:h-96 flex flex-col sm:flex-row justify-around items-center w-full z-10 gap-5 mt-4 sm:gap-0 sm:mt-0"
      ref={props.contactRef}
    >
      <article>
        <h1 className="text-xl1 text-center sm:text-left sm:text-xl4">
          So what are you waiting for?
          <br />
          Let's take your English to the next level!
        </h1>
      </article>
      <Box sx={{ maxWidth: 900 }} className="">
        <form
          action="https://formsubmit.co/kevinq.to@gmail.com"
          method="POST"
          className="flex flex-col gap-3 h-fit px-6 pb-6 w-[25rem] sm:w-[35rem]"
        >
          <div className="flex flex-col sm:flex-row gap-5 justify-between">
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="flex flex-col relative after:content-['*'] after:text-red-600 after:absolute after:left-10"
              >
                Email
              </label>
              <input
                required
                type="email"
                placeholder="your@email.com"
                className="border-b-4 px-2 py-1 focus:outline-sky-500 radius-8 bg-slate-100"
              />
            </div>
            <div className="gap-1 flex flex-col">
              <label
                htmlFor=""
                className="flex flex-col relative after:content-['*'] after:text-red-600 after:absolute after:left-[4.6rem] "
              >
                Full Name
              </label>
              <input
                required
                placeholder="John Doe"
                className="border-b-4 px-2 py-1  focus:outline-sky-500 bg-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="relative after:content-['*'] after:text-red-600 after:absolute after:left-[4.1rem]"
            >
              Message
            </label>
            <textarea
              required
              name=""
              placeholder="Hey Kevin! Lets work together!"
              className="border-b-4 px-2 py-2 h-24  focus:outline-sky-500 bg-slate-100"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 self-end py-1 rounded-md"
          >
            Submit
          </button>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
