import React, { useState } from "react"
import { Scrollama, Step } from "react-scrollama"
import "./App.css"

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null)

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data, element, direction }) => {
    setCurrentStepIndex(data)
    // if (direction === "down") {
    //   element.style.opacity = 1
    // } else {
    //   element.style.opacity = 0
    // }
  }
  // const onStepExit = ({ data, element }) => {
  //   setCurrentStepIndex(data)
  //   element.style.opacity = 0
  // }

  // const bgColor = (stepIndex) => {
  //   if (stepIndex === 0) {
  //     return "yellow"
  //   }
  //   if (stepIndex === 1) {
  //     return "green"
  //   }
  //   if (stepIndex === 2) {
  //     return "pink"
  //   }
  //   if (stepIndex === 3) {
  //     return "blue"
  //   }
  // }

  return (
    <div className="scrollama">
      <div className="scroller">
        <Scrollama onStepEnter={onStepEnter} debug offset="0.3">
          <Step data={0}>
            <div
              className="yellow-div step"
              style={{ opacity: currentStepIndex === 0 ? 1 : 0.2 }}
            >
              I'm a Scrollama Step of index 0
            </div>
          </Step>
          <Step data={1}>
            <div
              className="green-div step"
              style={{ opacity: currentStepIndex === 1 ? 1 : 0.2 }}
            >
              I'm a Scrollama Step of index 1
            </div>
          </Step>
          <Step data={2}>
            <div
              className="pink-div step"
              style={{ opacity: currentStepIndex === 2 ? 1 : 0.2 }}
            >
              I'm a Scrollama Step of index 2
            </div>
          </Step>
        </Scrollama>
      </div>
      <div className="sticky-white-div">
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div>
    </div>
  )
}

export default App

// import React, { useState } from "react"
// import { Scrollama, Step } from "react-scrollama"

// const ScrollamaDemo = () => {
//   const [currentStepIndex, setCurrentStepIndex] = useState(null)

//   // This callback fires when a Step hits the offset threshold. It receives the
//   // data prop of the step, which in this demo stores the index of the step.
//   const onStepEnter = ({ data }) => {
//     setCurrentStepIndex(data)
//   }

//   return (
//     <div style={{ margin: "50vh 0", border: "2px dashed skyblue" }}>
//       <div style={{ position: "sticky", top: 0, border: "1px solid orchid" }}>
//         I'm sticky. The current triggered step index is: {currentStepIndex}
//       </div>
//       <Scrollama onStepEnter={onStepEnter} debug>
//         {[1, 2, 3, 4].map((_, stepIndex) => (
//           <Step data={stepIndex} key={stepIndex}>
//             <div
//               style={{
//                 margin: "50vh 0",
//                 border: "1px solid gray",
//                 opacity: currentStepIndex === stepIndex ? 1 : 0.2,
//               }}
//             >
//               I'm a Scrollama Step of index {stepIndex}
//             </div>
//           </Step>
//         ))}
//       </Scrollama>
//     </div>
//   )
// }

// export default ScrollamaDemo
