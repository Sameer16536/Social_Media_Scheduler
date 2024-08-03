import axios from "axios"
import { useEffect, useState } from "react"

interface ScheduledPost {
    id: string;
    content: string;
    platforms: string[];
    scheduledDateTime: string;
  }
  
  interface AnalyticsData {
    platform: string;
    engagements: number;
    reach: number;
  }
  
  const Dashboard: React.FC = () => {
    const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([]);
    const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);

    //fetch data::
    useEffect(()=>{
        const fetchScheduledPosts = async()=>{
            const response = await axios.get('/api/schedule')
            setScheduledPosts(response.data)
        }
        const fetchAnalytics = async()=>{
            const response = await axios.get('/api/analytics')
            setAnalytics(response.data)
        } 
        fetchScheduledPosts()
        fetchAnalytics()
    },[])
  return (
    <div className="max w-4xl mx-auto mt-10">
        <h1 className="font-bold mb-4 text-2xl">Scheduled Posts</h1>
        <div className="mb-8">
            {scheduledPosts.map((posts)=>(
                <div key={posts.id} className="mb-4 p-4 bg-white shadow-md rounded">
                    <p>{posts.content}</p>
                    <p>{new Date(posts.scheduledDateTime).toLocaleString()}</p>
                    <p>{posts.platforms.join(', ')}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Dashboard