import {allBlogs} from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection';
import FeaturedPost from '../components/Home/FeaturedPost';
import RecentPosts from '../components/Home/RecentPosts';


export default function Home() {
  console.log(allBlogs);
  
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeCoverSection blogs={allBlogs}/>
      <FeaturedPost blogs={allBlogs}/>
      <RecentPosts blogs={allBlogs}/>
    </main>
  )
}