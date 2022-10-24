import React from "react";
import 'react-circular-progressbar/dist/styles.css';

// export class ChangingProgressProvider extends React.Component {
//   state = {
//     valuesIndex: 0
//   };

//   componentDidMount() {
//     setTimeout(() => {
//         this.setState({
//             valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
//         });
//     }, 200);
//   }

//   render() {
//     return this.props.children(this.props.values[this.state.valuesIndex]);
//   }
// }

export const GradientSVG = () => {
  const css = "hello"
  const gradientTransform = `rotate(90)`;

  // alert("test")
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id = {css} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor="#c4c4c4" />
          <stop offset="100%" stopColor="#74717261"  />
        </linearGradient>
      </defs>
    </svg>
  );
}