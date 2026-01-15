function Button({ name, icon, img }) {
  return (
    <button className="bg-[#770071] text-white font-bold p-2 rounded-xl hover:bg-purple-400 hover:text-black">
      <h1>{name}</h1>
      <p>{icon}</p>
      <img src={img} className="w-[30px]" />
    </button>
  );
}

export default Button;
