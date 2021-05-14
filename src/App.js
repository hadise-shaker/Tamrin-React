/* import footerLogo from "./footerLogo.png"; */
import "./App.css";
import Header from "./components/Header";
import MiddleRow from "./components/Rows";
import coins from "./components/Logos/coins.png";
import users from "./components/Logos/multipleUsers.png";
import leaf from "./components/Logos/leaf.png";
import bread from "./components/Logos/bread.png";
import hotel from "./components/Logos/hotel.png";
import fruits from "./components/Logos/fruits.png";
import restaurant from "./components/Logos/restaurant.png";

function App() {
  const square_sub = {
    fruits: "سوپرمارکت",
    hotel: "هتل",
    restaurant: "رستوران و کافه",
    bread: "نانوایی و قنادی",
  };
  const circle_sub = {
    coins: "درامد بیشتر",
    users: "مشتریان جدید",
    leaf: "اسراف کمتر",
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="first-row">
        <MiddleRow
          logo={coins}
          circle="circle"
          first_row_text={circle_sub.coins}
        ></MiddleRow>
        <MiddleRow
          logo={users}
          circle="circle"
          first_row_text={circle_sub.users}
        ></MiddleRow>
        <MiddleRow
          logo={leaf}
          circle="circle"
          first_row_text={circle_sub.leaf}
        ></MiddleRow>
      </div>
      <h2 className="second-row-title">بهترین همراهان ما</h2>
      <div className="second-row">
        <MiddleRow
          logo={fruits}
          square="square"
          second_row_text={square_sub.fruits}
        >
          {" "}
        </MiddleRow>
        <MiddleRow
          logo={hotel}
          square="square"
          second_row_text={square_sub.hotel}
        ></MiddleRow>
        <MiddleRow
          logo={restaurant}
          square="square"
          second_row_text={square_sub.restaurant}
        ></MiddleRow>
        <MiddleRow
          logo={bread}
          square="square"
          second_row_text={square_sub.bread}
        ></MiddleRow>
      </div>
    </div>
  );
}

export default App;
