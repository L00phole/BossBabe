import SummerStyle from "../Components/SummerStyle";
import Rekommenderas from "../Components/Rekommenderas";
import Kollektioner from "../Components/Kollektioner";

export default function Home() {
  return (
    <div className=" mt-70 ">
      {["header"].map((path) => {
        return (
          <div key={path}>
            <img
              className="pt-20 max-w-9xl"
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="header"
              style={{ width: "100vw", height: "auto" }}
            />
            <Rekommenderas />
            <SummerStyle />
            <Kollektioner />
          </div>
        );
      })}
    </div>
  );
}
