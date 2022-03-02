import { db } from '../firebase'
import { collection, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from './Post'

const Posts = ()=>{
  const posts = collection(db, 'posts')
  const q = query(posts, orderBy('timestamp', 'desc'))

  const [values] = useCollection(q)


  return (
    <div>
    
      {values?.docs.map(post => <Post key={post.id} post={post.data()}/>)}
    </div>
)}

export default Posts
