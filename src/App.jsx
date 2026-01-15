import Header from "./components/Header/Header.jsx";
import Post from "./components/Post/Post.jsx";
import Side from "./components/Side/Side.jsx";
import Button from "./components/Button/Button.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center m-10">
        <div className="flex justify-center items-center w-full gap-4">
          <div className=" text-center w-[70%] ">
            <Post
              number="20"
              name="اكاديمية ترميز"
              description="اكاديمية مخصصة لتعليم البرمجة بقنياتها "
            />
            <Post name="js" description="ppppppppppppppppp" />
            <Post name="react" description="cccccccccccccccc" />
          </div>
          <div className=" w-[30%]">
            <Side />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
