import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Like from "./components/Like";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <h1>Welcome to Gateway Gamers.</h1>
      {[...Array(1000)].map((item, index) => {
        return (
          <Like
            key={item}
            index={index}
            onClick={() => console.log("clicked on heart number " + index)}
          />
        );
      })}
    </>
  );
}

export default App;
