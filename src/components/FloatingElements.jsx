"use client"

import { useEffect, useState } from "react"

const FloatingElements = () => {
  const [elements, setElements] = useState([])

  useEffect(() => {
    const generateElements = () => {
      const newElements = []

      // Generate floating cars
      for (let i = 0; i < 3; i++) {
        newElements.push({
          id: `car-${i}`,
          type: "car",
          left: Math.random() * 80 + 10,
          top: Math.random() * 80 + 10,
          delay: Math.random() * 2,
        })
      }

      // Generate floating wheels
      for (let i = 0; i < 4; i++) {
        newElements.push({
          id: `wheel-${i}`,
          type: "wheel",
          left: Math.random() * 80 + 10,
          top: Math.random() * 80 + 10,
          delay: Math.random() * 2,
        })
      }

      // Generate floating engines
      for (let i = 0; i < 2; i++) {
        newElements.push({
          id: `engine-${i}`,
          type: "engine",
          left: Math.random() * 80 + 10,
          top: Math.random() * 80 + 10,
          delay: Math.random() * 2,
        })
      }

      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="bg-floating-elements">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`floating-${element.type}`}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            opacity: 0.1,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
