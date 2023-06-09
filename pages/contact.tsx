import React from "react";
import { useForm } from "react-hook-form";

interface ContactForm {
  waveName: string;
  parkingAddress: string;
  state: string;
  country: string;
  goodCondition: number;
  fairCondition: number;
  poorCondition: number;
  flowSite: string;
  other: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactForm>();
  const wave = watch("waveName");
  return (
    <main className="m-auto max-w-screen-xl px-5">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("waveName", { required: "This is requires" })}
          placeholder="Wave Name"
        />
        <p>{wave}</p>
        <p>{errors.waveName?.message}</p>
        <input
          {...register("parkingAddress", { required: "This is requires" })}
          placeholder="Parking Address"
        />
        <input
          {...register("state", { required: "This is requires" })}
          placeholder="Province/State"
        />
        <input
          {...register("country", { required: "This is requires" })}
          placeholder="Country"
        />
        <input
          {...register("goodCondition")}
          placeholder="Good"
          type="number"
        />
        <input
          {...register("fairCondition")}
          placeholder="Fair"
          type="number"
        />
        <input
          {...register("flowSite")}
          placeholder="Site you Check your Flows at"
        />
        <textarea {...register("other")} placeholder="Other" />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
};

export default Contact;
