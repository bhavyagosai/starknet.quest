import React, { FunctionComponent } from "react";
import styles from "../../styles/components/shapes.module.css";
import Cross from "./cross";

type CrossesProps = {
  number?: number;
  xDecal?: number;
  leftSide?: boolean;
  rightSide?: boolean;
};

const Crosses: FunctionComponent<CrossesProps> = ({
  number = 2,
  xDecal = 0,
  leftSide = true,
  rightSide = true,
}) => {
  const computeStyle = (i: number) => {
    const mutliplier = i % 2 ? 1 : -1;
    return {
      transform: `translateX(${Math.cos(i) * 30 * mutliplier}px) translateY(${
        Math.sin(i) * 30 * mutliplier
      }px)`,
    };
  };
  return (
    <div className={styles.crossContainer}>
      {leftSide && (
        <div
          style={{
            left: `${xDecal}px`,
          }}
          className={styles.side}
        >
          {[...Array(number)].map((i) => (
            <div
              key={"cross_left_" + i}
              className={styles.cross}
              style={computeStyle(i - 5)}
            >
              <Cross />
            </div>
          ))}
        </div>
      )}
      {rightSide && (
        <div
          style={{
            right: `${xDecal}px`,
          }}
          className={styles.side}
        >
          {[...Array(number)].map((i) => (
            <div
              key={"cross_right_" + i}
              className={styles.cross}
              style={computeStyle(i)}
            >
              <Cross />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Crosses;
