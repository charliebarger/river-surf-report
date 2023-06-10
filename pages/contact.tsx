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
    <main className="m-auto my-8 max-w-screen-md px-5">
      <form
        className="grid grid-cols-3 gap-2 p-4"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label className="flex ">
          <span className="flex-1">Wave Name</span>
          <input
            className="flex-1 py-1 px-2"
            {...register("waveName", { required: "This is requires" })}
          />
        </label>
        <input
          className="py-1 px-2"
          {...register("parkingAddress", { required: "This is requires" })}
          placeholder="Parking Address"
        />
        <input
          className="py-1 px-2"
          {...register("state", { required: "This is requires" })}
          placeholder="Province/State"
        />
        <input
          className="py-1 px-2"
          {...register("country", { required: "This is requires" })}
          placeholder="Country"
        />
        <input
          className="py-1 px-2"
          {...register("goodCondition")}
          placeholder="Good"
          type="number"
        />
        <input
          className="py-1 px-2"
          {...register("fairCondition")}
          placeholder="Fair"
          type="number"
        />
        <input
          className="py-1 px-2"
          {...register("flowSite")}
          placeholder="Site you Check your Flows at"
        />
        <textarea
          className="py-1 px-2"
          {...register("other")}
          placeholder="Other"
        />
        <input className="py-1 px-2" type="submit" value="Submit" />
      </form>
    </main>
  );
};

export default Contact;
