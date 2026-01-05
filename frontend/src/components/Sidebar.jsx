import React from 'react'

export const Sidebar = () => {
  return (
    <aside className="w-[25%] bg-gray-800 p-4">
      <ul className="space-y-3">
        <li className="hover:text-red-400 cursor-pointer">Home</li>
        <li className="hover:text-red-400 cursor-pointer">Trending</li>
        <li className="hover:text-red-400 cursor-pointer">Top Rated</li>
        <li className="hover:text-red-400 cursor-pointer">Upcoming</li>
      </ul>
    </aside>
  )
}
