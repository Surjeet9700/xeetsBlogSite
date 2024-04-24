import React, { useEffect } from 'react'
import { useCallback } from 'react'
import {Button, Input, Select, RTE} from '../index'
import authservice from '../../appwrite/conf'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Loader from '../Loader/Loader'

export default function PostForm({post}) {

  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues:{
      title: post?.title || "" ,
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
      featuredImage: post?.featuredImage || null,

    },
  });



  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false)

  const submit = async (data) => {
    setLoading(true)
    if(post) {
      const file = data.image[0] ? await authservice.uploadFile(data.image[0]) : null

      if(file) {
        authservice.deleteFile(post.featuredImage)
      }
      const dbPost = await authservice.updatePost(post.$id,{
        ...data,
        featuredImage: file ? file.$id : undefined,
        
      })

        if(!dbPost) {
          console.error("`dbPost` is undefined after updatePost");
        }else{
          // navigate(`/post/${dbPost.$id}`);
          navigate('/')
        }
    }else{
      const file = await authservice.uploadFile(data.image[0])

      if(file){
        const fileId = file.$id

        data.featuredImage = fileId
  
        const dbPost = await authservice.createPost({
          ...data, userId: userData.$id},
        )

        if (!dbPost) {
          console.error("`dbPost` is undefined after createPost");
        }else{
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
    setLoading(false)

  }

  const slugTransform = useCallback((value) => {
  
    if(value &&  typeof value === 'string') return value
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s]+/g, "-")
      .replace(/\s/g, "-");
      
      return ''
    
  }, [])

  useEffect(() => {
    const subscription  = watch((value, {name}) => {
      if(name === 'title'){
        setValue('slug', slugTransform(value.title, {shouldValidate: true}))
      }
    });

    return () => {
      subscription.unsubscribe();
    }
  },[watch, slugTransform, setValue]);




  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2 text-black">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={authservice.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" 
        className="w-full"
        bgColor={post ? "bg-green-500" : undefined}
          >
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

