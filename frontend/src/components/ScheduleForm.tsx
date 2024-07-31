import React, { useState } from "react"
import axios from "axios"

const ScheduleForm = () => {
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [platforms, setPlatforms] = useState<string[]>([])


  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const scheduleDateTime = new Date(`${date}T${time}`)
    try {
      await axios.post('/api/schedule', { content, platforms, scheduleDateTime })
      //Clear the form
      setContent('')
      setDate('')
      setTime('')
      setPlatforms([])
    } catch (error) {
      console.error('Scheduling failed:', error);
    }
  }
  const handlePlatformChange = (platform: string) => {
    setPlatforms(prev => prev.includes(platform) ? prev.filter(p => p != platform) : [...prev, platform])
  }

  return (
    <form onSubmit={HandleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* check this */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Platforms</label>
        <div className="flex items-center">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(platform => (
            <label key={platform} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value={platform}
                onChange={() => handlePlatformChange(platform)}
                checked={platforms.includes(platform)}
                className="form-checkbox"
              />
              <span className="ml-2">{platform}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Schedule
      </button>
    </form>
  )
}

export default ScheduleForm