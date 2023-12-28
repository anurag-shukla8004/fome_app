import React, { useState } from "react";
import Logo from "../components/Logo";
import Input from "../components/Input";
import { FomeButton } from "../components/Button";

function SignIn() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-9/12 h-5/6 flex">
        <div className="w-full md:w-3/5 max-h-[650px] h-full p-2 md:p-5 border rounded">
          <div className="my-4">
            <Logo width={153} height={39} />
          </div>
          <div className="flex flex-col m-4">
            <h1 className="text-2xl md:text-5xl font-bold text-[#171923] my-4">Sign In</h1>
            <span className="flex">
              <p className="text-sm md:text-lg font-normal text-[#718096] mr-2">
                Don't have an account?
              </p>
              <p className="underline text-sm md:text-lg font-normal text-[#1C4532]">
                Create now
              </p>
            </span>
            <div className="w-full">
              <Input
                labelName={"E-mail"}
                type={"text"}
                value={name}
                setValue={setName}
                placeholder={"example@gmail.com"}
              />
              <Input
                labelName={"Password"}
                type={"password"}
                value={password}
                setValue={setPassword}
                placeholder={"#@*%"}
              />
            </div>
            <div className="w-full flex md:flex-row flex-col justify-between sm:my-4">
              <span className="text-sm md:text-base font-normal text-[#718096]">
                <input type="checkbox" className="rounded pl-2" /> Remember me
              </span>
              <span className="text-sm md:text-base font-normal text-[#1C4532] underline">
                Forgot Password?
              </span>
            </div>
            <FomeButton title={"Sign In"} />
          </div>
          <div></div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center w-3/5 h-full bg-[#1C4532] rounded">
          <img
            src="https://png.pngtree.com/background/20230617/original/pngtree-green-geometric-shapes-in-abstract-composition-a-3d-rendering-picture-image_3707457.jpg"
            alt=""
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
