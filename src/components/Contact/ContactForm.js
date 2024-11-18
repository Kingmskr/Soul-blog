"use client";
import { createClient } from "@supabase/supabase-js";
import React,{useEffect} from "react";
import { useForm } from "react-hook-form";

// const supabase = createClientComponentClient("puprocess.env.NEXT_PUBLIC_SUPABASE_URL,);
// const session = supabase.auth.getSession();
//     console.log("Current session:", session);
export default function ContactForm() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  
  const onSubmit = async (data) => {
    console.log( {
      name: data.name,
      email: data.email,
      phone: data.phone_number,
      project: data.project_details,
    });
    const supabase =  createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    )
      
    // console.log(data);
    // const session = supabase.auth.getSession();
    // console.log("Current session:", session);
    try {
      
     
      const { error } = await supabase.from("contact").insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          project: data.project,
        },
      ]);
      console.log("data inserted");
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully");
      }
    } catch (error) {
      console.error(
        "An error occurred while incrementing the view count:",
        error
      );
    }

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {required:true})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="number"
        placeholder="your phone"
        {...register("phone", {required:true})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("project", {required:true})}
        placeholder="My project is about..."
        rows={3}
        
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="send request"

        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
}
