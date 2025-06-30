import React, { useState } from "react";

const KeywordForm = ({
  addKeyword,
}: {
  addKeyword: (keyword: string) => void;
}) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addKeyword(keyword);
    setKeyword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleKeyword}
        placeholder="등록하고자 하는 키워드를 입력해주세요."
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default KeywordForm;
