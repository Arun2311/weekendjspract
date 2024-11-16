import React from "react";

import { useForm } from "react-hook-form";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  console.log(errors ,"sasa");
  
  return (
    <div>
      <label>Name</label>

      <input {...register("name" , {required:"name is required"})} placeholder="enter u r name" />

<p>{errors?.name?.message}</p>
      <br />
      <br />
      <br />

      <label>Age</label>

      <input {...register("age"  ,{required:"age is required"})} placeholder="enter u r age" />
      <p>{errors?.age?.message}</p>

      <br />
      <br />
      <br />

      <button onClick={handleSubmit(onsubmit)}>Submit</button>
    </div>
  );
}

// react hook form
