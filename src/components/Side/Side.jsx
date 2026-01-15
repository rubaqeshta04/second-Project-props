import Button from "../Button/Button";

function Side() {
  return (
    <div className="border-4 border-teal-800 border-solid text-center p-5 m-[6.25px] inline-flex flex-wrap gap-4">
      <Button name="جديدة">
        <div className="flex flex-col items-center">
          <span>😊😊😊</span>
          <img src="../../../public/assets/19.jpeg" className="w-30" />
        </div>
      </Button>
      <Button name="جديدة">
        <div className="flex flex-col items-center">
          <span>😊😊😊</span>
          <img src="../../../public/assets/19.jpeg" className="w-30" />
        </div>
      </Button>
      <Button name="جديدة">
        <div className="flex flex-col items-center">
          <span>😊😊😊</span>
          <img src="../../../public/assets/19.jpeg" className="w-30" />
        </div>
      </Button>
      <Button name="جديدة">
        <div>
          <span>😊😊😊</span>
          <img src="../../../public/assets/19.jpeg" className="w-30" />
        </div>
      </Button>
    </div>
  );
}

export default Side;
