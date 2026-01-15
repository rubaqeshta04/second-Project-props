import Button from "../Button/Button";

function Side() {
  return (
    <div className="border-4 border-teal-800 border-solid text-center p-5 m-6.25px w-70 flex flex-wrap gap-4">
      <Button name="جديدة" icon="❤️❤️❤️❤️❤️" />
      <Button name="الاكثر قراءة" img="./../../../public/assets/19.jpeg" />
      <Button
        name="مقالات مميزة"
        icon="💕💕💕"
        img="./../../../public/assets/19.jpeg"
      />
    </div>
  );
}

export default Side;
