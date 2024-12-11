import { useEffect, useState } from "react";

export function Carousel() {
  const data = [{ item: "car" }, { item: "truck" }];

  const [index, setIndex] = useState(data.length > 3 ? data.length - 1 : 2);
  const [right, setRight] = useState(1);
  const [current, setCurrent] = useState(0);
  const [left, setLeft] = useState(-1);

  function next() {
    setCurrent(current === index ? 0 : current + 1);
    setRight(right === index ? 0 : right + 1);
    setLeft(left === left ? 0 : left + 1);
  }

  function prev() {
    setCurrent(current === 0 ? index : current - 1);
    setRight(right === 0 ? index : right - 1);
    setLeft(left === 0 ? index : left - 1);
  }

  return (
    <div className="flex flex-row ml-auto mr-auto">
      <button
        className="bg-stone-500 text-xl p-2"
        onClick={() => prev()}
      ></button>
      {[left, current, right].map((idx) => (
        <div
          key={idx}
          className="flex justify-center ml-5 mr-5 w-[15vw] h-[15vw] border-2 border-black"
        >
          {data[idx].item ? (
            <div className="flex flex-col items-center ml-5 w-[15vw] h-[15vh] border-2 border-black">
              {data[idx].item}
            </div>
          ) : (
            "_________"
          )}
        </div>
      ))}
      <button className="bg-stone-500 text-xl p-2" onClick={() => next()}>
        {"\u2771"}
      </button>
    </div>
  );
}
