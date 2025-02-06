// DateSelector.tsx
"use client"
import React, { useState } from "react"
interface DateSelectorProps {
  onDateSelect: (date: Date | undefined) => void
}
const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const minDate = new Date("2024-02-07")
  const maxDate = new Date("2024-02-14")

  const handleSelect = (date: Date) => {
    if (date >= minDate && date <= maxDate) {
      setSelectedDate(date)
    }
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl border-2 border-pink-600">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">Pick a Romantic Date 🌹</h2>
      <div className="grid grid-cols-4 gap-4 p-4 bg-pink-100 border border-gray-300 rounded-lg shadow-md">
        {Array.from({ length: 8 }).map((_, index) => {
          const currentDate = new Date(minDate)
          currentDate.setDate(minDate.getDate() + index)
          return (
            <button
              key={index}
              onClick={() => handleSelect(currentDate)}
              className={`p-3 text-xl font-medium rounded-lg transition-all duration-300 ${
                selectedDate?.toDateString() === currentDate.toDateString()
                  ? "bg-pink-600 text-white"
                  : "bg-white text-black hover:bg-pink-600 hover:text-white"
              }`}
            >
              {currentDate.toDateString().slice(4, 10)}
            </button>
          )
        })}
      </div>
      {selectedDate && (
        <div className="mt-6 text-center">
          <button
            onClick={() => onDateSelect(selectedDate)}
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300"
          >
            Confirm Date 💕
          </button>
        </div>
      )}
    </div>
  )
}
export default DateSelector
