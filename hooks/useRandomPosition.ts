import { useState, useEffect, useCallback } from "react"

const useRandomPosition = (buttonWidth: number, buttonHeight: number) => {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  const updatePosition = useCallback(() => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight


    const padding = 20
    const minX = padding
    const minY = padding
    const maxX = viewportWidth - buttonWidth - padding
    const maxY = viewportHeight - buttonHeight - padding

    let newX, newY
    do {
      newX = position.x + (Math.random() * 200 - 100) // Limit movement within ±100px
      newY = position.y + (Math.random() * 200 - 100)
    } while (
      newX < minX || newX > maxX || 
      newY < minY || newY > maxY
    )

    setPosition({ x: newX, y: newY })
  }, [buttonWidth, buttonHeight, position])

  useEffect(() => {
    const handleResize = () => updatePosition()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [updatePosition])

  return { position, updatePosition }
}

export default useRandomPosition
