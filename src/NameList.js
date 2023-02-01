import React, { useState } from "react";
import "./NameList.css";

const NameList = () => {
  const [names, setNames] = useState([
    { id: 1, text: "봄" },
    { id: 2, text: "여름" },
    { id: 3, text: "가을" },
    { id: 4, text: "겨울" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextID, setNextID] = useState(5);
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextID,
      text: inputText,
    });
    setNextID(nextID + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div className="list-area">
      <h1>List 관리하기</h1>
      <div className="text-area">
        <input
          value={inputText}
          onChange={onChange}
          onKeyDown={onKeyPress}
          placeholder="추가할 항목 입력"
        />
        <button onClick={onClick}>추가</button>
      </div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default NameList;
