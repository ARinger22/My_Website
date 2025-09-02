import React, { useRef, useState } from 'react'
import emailjs from "emailjs-com";
//service_ifewqyw

export default function Contact() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className='flex items-center justify-center bg-gradient-to-b from-black to-gray-700 w-full p-20' id="Contact_page">
      <section className=" dark:bg-gray-700 rounded-lg">
        <div className="p-10 mx-auto max-w-screen-md flex flex-col gap-5">
          <h2 className="text-4xl text-blue-600 tracking-tight font-extrabold text-center dark:text-white" data-aos="fade-up">Contact Me</h2>
          <p className="text-gray-200 dark:text-gray-200" data-aos="fade-up">If you need any help or want to contact me to contribute with any project or any idea. You can contact me here.</p>
          <form ref={form} onSubmit={sendEmail}  action="#" className="space-y-8" data-aos="fade-up">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required 
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={name} 
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="write your name here" required 
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className='hover:bg-blue-700 items-center justify-center rounded-md bg-white text-white px-0.5 py-0.5'>
              <div className="flex h-10 w-20 items-center justify-center bg-gray-800 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-400 hover:bg-orange-600">
                <p className="font-bold font-white text-white"> Send </p>
              </div>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
