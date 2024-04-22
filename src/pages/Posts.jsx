import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import authservice from "../appwrite/conf";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";


export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            authservice.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        authservice.deletepost(post.$id).then((status) => {
            if (status) {
                authservice.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={authservice.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl w-1/4"
                    />
                     <div className="w-full mb-6 mt-5">
                        {/* <div className="text-bold text-4xl justify-center ml-8">Title:</div> */}
                    <h1 className="text-3xl tblack ml-4 font-bold">{post.title}</h1>
                </div >
                <div className="flex justify-center w-full max-h-40 mr-80 mx-70 items-center ">
                    <div className="text-black/70 text-center ">
                    {parse(post.content)}
                    </div>
                </div>

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
               
            </Container>
        </div>
    ) : null;
}