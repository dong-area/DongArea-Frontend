import React from "react";

const MackingClub = () => {
  return (
    <>
      <div>개설 글쓰기</div>
      <hr />
      <nav>
        <p>
          <span>제목</span>
          <input type="text" placeholder="게시 제목을 입력해주세요." />
          <hr />
        </p>
        <p>
          <span>이름</span>
          <input type="text" placeholder="작성자 이름을 입력해주세요." />
          <hr />
        </p>
      </nav>
      <p>내용</p>
      <textarea></textarea>
      <input type="file" accept="image/*" />
    </>
  );
};

export default MackingClub;
