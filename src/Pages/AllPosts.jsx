import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard, Container } from '../compenents'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPost([]).then(posts => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {posts.map((posts)=> {
                    <div key={posts.$id} className='p-2 w-1/4'>
                        <PostCard posts={posts} />  // Replace PostCard with the actual component you want to use for each post card.
                        
                    </div>  // Replace posts={posts} with the actual props you want to pass to PostCard component.
                })}
            </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
