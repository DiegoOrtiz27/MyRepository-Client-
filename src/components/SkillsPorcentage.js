import {
    CircularProgressbar,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import ChangingProgressProvider from "./ChangingProgressProvider";

export const SkillsPorcentage = ({ title, advance, percentage }) => {
  return (
    <div className="item">
      <ChangingProgressProvider values={advance}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            className="progressProvider"
          />
        )}
      </ChangingProgressProvider>
      <h5>{title}</h5>
    </div>
  );
};