import React, { useEffect, useState } from "react";
import authservice from "../appwrite/conf";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    authservice.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    }).catch(error=>{
      console.error('Error while fetching post', error)
    })
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">  
          {posts && posts.map((post) => (
            <div key={post.$id} className="p-2 rounded-md shadow-sm"> 
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
  
}

export default AllPost;
