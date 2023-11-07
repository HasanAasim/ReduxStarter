import { decNumber, incNumber } from "../Actions/Index";
import "../assets/App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
//dispatch triggers the action

const Counter = () => {
  const myState = useSelector((state: any) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>

          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Counter;
