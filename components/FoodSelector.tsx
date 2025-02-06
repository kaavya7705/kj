import type React from "react"

interface FoodOption {
  id: string
  name: string
  image: string
}

interface FoodSelectorProps {
  onFoodSelect: (food: FoodOption) => void
}

const foodOptions: FoodOption[] = [
  { id: "1", name: "Romantic Dinner", image: "https://th.bing.com/th/id/OIP.0HvUVw1Z4pVwYa2OePA0zwHaE8?w=292&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7" },
  { id: "2", name: "Momos", image: "https://th.bing.com/th/id/OIP.1eIZR0QZOlQy5GaF12btNQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.4&pid=1.7" },
  { id: "3", name: "Pasta", image: "https://th.bing.com/th/id/OIP.odDTLFzcZlPGNUGqAFIDVwHaKX?w=192&h=268&c=7&r=0&o=5&dpr=1.4&pid=1.7" },
  { id: "4", name: "Chocolate Brownie", image: "https://th.bing.com/th/id/OIP.FDHMEXwmiZ12Ts_vuVEIKgHaJ7?w=192&h=258&c=7&r=0&o=5&dpr=1.4&pid=1.7" },
]

// Custom Button Component
const CustomButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-black flex flex-col items-center p-2 border border-gray-300 rounded-lg hover:bg-red-100 transition"
    >
      {children}
    </button>
  )
}

const FoodSelector: React.FC<FoodSelectorProps> = ({ onFoodSelect }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Choose a meal</h2>
      <div className="grid grid-cols-2 gap-4">
        {foodOptions.map((food) => (
          <CustomButton key={food.id} onClick={() => onFoodSelect(food)}>
            <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-24 h-24 object-cover mb-2" />
            <span>{food.name}</span>
          </CustomButton>
        ))}
      </div>
    </div>
  )
}

export default FoodSelector
