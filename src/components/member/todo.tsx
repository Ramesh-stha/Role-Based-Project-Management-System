"use client";
const Board = () => {
  const handleadd = () => {
    alert("clicked successfully");
  };
  return (
    <div className="">
      <h2>Task Board</h2>
      <div className="a">
        <p>TO DO</p>
        <input type="text" name="addtask" onChange={handleadd} />
        <button>Add</button>
      </div>
    </div>
  );
};
export default Board;
