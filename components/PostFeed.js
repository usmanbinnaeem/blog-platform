import Link from 'next/link'

export default function PostFeed({ posts, admin }) {
    return  posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />);
     
  }
  
   function PostItem({post, admin = false}) {
       const wordcount = post?.content.trim().split(/\s+/g).length;
       const minutesToRead = (wordcount / 100 + 1).toFixed(0);

       return (
           <div className="card">
               <Link href={`/${post.username}`}>
                   <a>
                       <strong>By @{post.username}</strong>
                   </a>
               </Link>
               <Link href={`/${post.username}/${post.slug}`}>
                   <h2>
                   <a>
                      {post.title}
                   </a>
                   </h2>
                  
               </Link>
               <footer>
                   <span>
                       {wordcount} words. {minutesToRead } min read
                   </span>
                   <span>
                   :heart: {post.heartCount} Hearts
                   </span>
               </footer>
           </div>
       )

   }