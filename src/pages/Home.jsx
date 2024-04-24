import React, { useEffect, useState } from "react";
import authservice from "../appwrite/conf";
import authservices from "../appwrite/auth";
import { Container, PostCard } from "../components";
import { useNavigate } from "react-router-dom";
import HomeForNotLoggedUser from './HomeForNotLoggedUser'



function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  


  useEffect(() => {
    authservices.isLoggedIn().then(async (loggedIn) => {
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        try {
          const currentUser = await authservices.getCurrentUser();
         
          
          if (currentUser) {
            const userId = currentUser.$id;
            
  
            authservice.getPosts().then((post) => {
              console.log("post from getPost", post);
              const currentUserPost = post.documents.filter((postData) => postData.userId === userId);
              if (currentUserPost.length > 0 ) {
            
                setPosts(currentUserPost);
              }
              setIsLoading(false);
            });
          }
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      }
    });
  }, []);

  


  if (!isLoggedIn) {
    return (   
      <div>
        <HomeForNotLoggedUser/>
      </div>
    );

  } else if(isLoading){
    return <div className="flex justify-center items-center font-mono text-xl text-bold">Loading posts...</div>;

  }
  else if ( posts.length === 0) {
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
        <div>
          <h1 className="text-2xl font-semibold mb-4 text-black">Posts</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5px] min-h-min-content"> 
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
    </div>
    
    );
  }
}

export default Home;









     
