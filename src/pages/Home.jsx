import React, { useEffect, useState } from "react";
import authservice from "../appwrite/conf";
import authservices from "../appwrite/auth";
import { Container, PostCard } from "../components";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

function Home() {
  const [posts, setPost] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    authservices.isLoggedIn().then((loggedIn) => {
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        // Fetch posts if user is logged in
        authservice.getPosts().then((posts) => {
          if (posts) {
            setPost(posts.documents);
          }
        });
      }
    });
  }, []);

  if (!isLoggedIn) {
    return (


      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24">
        <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[3rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unleash your inner blogger: Write freely, edit flawlessly
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
              Create beautiful blog posts and share your ideas with the world. 
              Our platform makes it easy to write, edit, and publish your content, all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Learn More
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => navigate('/signup')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>


      // <div className="w-full py-8 mt-4 text-center">
      //   <Container>
      //     <div className="flex flex-wrap">
      //       <div className="p-2 w-full">
      //         <h1 className="text-2xl font-bold hover:text-gray-500">
      //           Login to read posts
      //         </h1>
      //       </div>
      //     </div>
      //   </Container>
      // </div>
    );
  } else if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No posts available
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 h-screen">
        <Container>
          <div>
            <h1 className=" text-2xl font-semibold mb-4  text-black">Posts</h1>
          </div>
          <div className="flex flex-wrap">
            {posts.map((post) => {
              return(
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;









     
