import React, {useState, useEffect} from 'react'
import {Container, Post, PostForm} from '../components'
import AppwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if (slug) {
            AppwriteService.getPost(slug).then(post => {
                if (post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    } , [slug,navigate])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  )
}

export default EditPost