import playerImage from "../images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`${classes.open} material-icons-outlined`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`${classes.close} material-icons-outlined`}>
        {" "}
        close{" "}
      </span>
      <img src={playerImage} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
