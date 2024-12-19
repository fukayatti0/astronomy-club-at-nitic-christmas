import React from 'react'
import { ArrowLeft } from 'lucide-react'

const EventButton: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center">
      <a
        className="flex transform items-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 text-white shadow-lg transition duration-300 hover:scale-105 hover:from-green-500 hover:to-blue-600"
        href="/Event"
      >
        <ArrowLeft className="mr-2 h-6 w-6" />
        イベント一覧に戻る
      </a>
    </div>
  )
}

export default EventButton
