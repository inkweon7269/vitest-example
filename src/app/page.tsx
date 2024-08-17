"use client";

import TextField from "@/components/TextField";
import Label from "@/components/atoms/Label";
import { useState } from "react";

const Home = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <TextField
        iconPath="https://via.placeholder.com/24"
        alt="삭제"
        onClick={(e) => console.log(e)}
        errorMessage="에러"
        placeholder="아이디를 입력하세요"
        onChange={(e) => console.log(e)}
        id="email"
        value=""
        isError={isError}
      />
      <hr />
      <Label htmlFor="address">주소</Label>
      <TextField
        iconPath="https://via.placeholder.com/24"
        alt="삭제"
        onClick={(e) => console.log(e)}
        errorMessage="에러"
        placeholder="주소를 입력하세요"
        onChange={(e) => console.log(e)}
        id="address"
        value=""
        isError={isError}
      />
      <hr />
      <button onClick={() => setIsError(!isError)}>에러 토글</button>
    </>
  );
};

export default Home;
