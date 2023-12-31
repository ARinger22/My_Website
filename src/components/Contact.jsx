import React from 'react'

export default function Contact() {
  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Contact_page">
      <section class="mx-6 dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl text-blue-600 tracking-tight font-extrabold text-center dark:text-white" data-aos="fade-up">Contact Me</h2>
          <p class="mb-4 lg:mb-10 font-light text-gray-200 dark:text-gray-200 sm:text-xl" data-aos="fade-up">If you need any help or want to contact me to contribute with any project or any idea. You can contact me here.</p>
          <form action="#" class="space-y-8" data-aos="fade-up">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Name</label>
              <input type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="write your name here" required />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button className='hover:bg-blue-700 items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-0.5 py-0.5'>
              <div className="flex h-10 w-20 items-center justify-center bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-400 hover:bg-orange-600">
                <button className="font-bold font-white text-white"> Send </button>
              </div>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
