import { useEffect } from 'react'
import { getPosts } from '../../../feature/post/postSlice'
import { useDispatch, useSelector } from 'react-redux'

function Posts() {
  const { posts , loading } = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch( getPosts())
    }, [])
  
  return (
    <>
      <h1>List of Posts</h1>
      { loading ? "Loading..." : posts.map(post => ( 
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default Posts