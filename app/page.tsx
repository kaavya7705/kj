"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import HeartAnimation from "@/components/HeartAnimation"
import Button from "@/components/Button"
import DateSelector from "@/components/DateSelector"
import FoodSelector from "@/components/FoodSelector"
import useRandomPosition from "@/hooks/useRandomPosition"

export default function ValentinePage() {
  const [stage, setStage] = useState<"initial" | "dateSelection" | "foodSelection" | "final">("initial")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedFood, setSelectedFood] = useState<{ name: string } | null>(null)
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false)
  const noButtonRef = useRef<HTMLDivElement>(null)
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 })
  const { position, updatePosition } = useRandomPosition(buttonSize.width, buttonSize.height)

  useEffect(() => {
    if (noButtonRef.current) {
      const { width, height } = noButtonRef.current.getBoundingClientRect()
      setButtonSize({ width, height })
    }
  }, [])

  const handleYesClick = () => {
    setStage("dateSelection")
  }

  const handleNoHover = () => {
    if (!isNoButtonMoved) {
      setIsNoButtonMoved(true)
    }
    updatePosition()
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setStage("foodSelection")
    }
  }

  const handleFoodSelect = (food: { name: string }) => {
    setSelectedFood(food)
    setStage("final")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-pink-300 flex flex-col items-center justify-center p-6 relative overflow-hidden">

      <HeartAnimation />

      {stage === "initial" && (
        <>
          <h1 className="text-white text-5xl font-extrabold mt-8 mb-6 text-center drop-shadow-lg">Will you be my Valentine? ❤️</h1>
          <div className="flex justify-center items-center space-x-6 relative">
            <Button onClick={handleYesClick}>Yes 💖</Button>
            <motion.div
              ref={noButtonRef}
              className={isNoButtonMoved ? "absolute" : ""}
              animate={isNoButtonMoved ? position : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onHoverStart={handleNoHover}
            >
              <Button>No 💔</Button>
            </motion.div>
          </div>
        </>
      )}

      {stage === "dateSelection" && <DateSelector onDateSelect={handleDateSelect} />}

      {stage === "foodSelection" && <FoodSelector onFoodSelect={handleFoodSelect} />}

      {stage === "final" && selectedDate && selectedFood && (
        <div className="text-center p-6 bg-white/80 rounded-2xl shadow-xl">
          <p className="text-pink-700 text-3xl font-semibold">I knew it! Love you forever! 💕</p>
          <p className="text-black mt-4">Let's meet on <span className="font-bold">{selectedDate.toDateString()}</span> and enjoy {selectedFood.name} together! 🍽️</p>
          <div className="text-black mt-4">Contact 📞: 8847082881 </div>
        </div>
      )}
    </div>
  )
}