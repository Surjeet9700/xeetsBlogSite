import React from 'react'

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6">
      <div className="px-2 md:px-12">
        <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
        <p className="mt-4 text-lg text-gray-600">
          I would love to hear from you.
        </p>
        <form action="" className="mt-8 space-y-4">
          <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone_number"
            >
              Phone number
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="tel"
              id="phone_number"
              placeholder="Phone number"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              id="message"
              placeholder="Leave us a message"
              rows={5} // Changed cols to rows for textarea
            />
          </div>
          <button
            type="submit" // Changed button type to submit for form
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
      <img
        alt="Contact us"
        className="hidden mt-[50px] h-[800px] w-[700px] rounded-lg  lg:block"
        src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
      />
    </div>
  )
}
