import "./App.css";
import ButtonFill from "./Components/Global/ButtonFill/ButtonFill";
import CustomSec from "./Components/Global/CustomSec/CustomSec";
import Svg1 from "./Components/Global/Svg/Svg1/Svg1";
import Header from "./Components/Local/Header/Header";
import Sec2 from "./Components/Local/Sec2/Sec2";
import Sec3 from "./Components/Local/Sec3/Sec3";

function App() {
  return (
    <div className="App">
      <Header />
      <Sec2 />
      <CustomSec
        img={<Svg1 />}
        headline="Light, Fast & Powerful"
        des="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />
      <CustomSec
        img="./img/CustomSec2.png"
        headline="Light, Fast & Powerful"
        des="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />
      <CustomSec
        img="./img/CustomSec3.png"
        headline="Light, Fast & Powerful"
        des="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        CustomC={<ButtonFill val="Purchase Now" />}
      />
      <Sec3 />
    </div>
  );
}

export default App;
