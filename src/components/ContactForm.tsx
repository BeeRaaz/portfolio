"use client";

import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  // form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const formSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/contact", data);
      console.log(response);

      if (response.status !== 200) {
        throw new Error("Something went wrong while submitting the form.");
      }

      setIsFormSent(true);

      // reset the form fields
      reset({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert(`Error submitting form: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFormSent) {
    return (
      <div className="text-center">
        <h1>The message is sent!</h1>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="p-10 border rounded-xl space-y-5 max-w-md mx-auto"
      >
        <div>
          <h1 className="font-bold text-2xl md:text-3xl">Contact Bee!</h1>
        </div>
        <div className="space-y-1">
          <Label htmlFor="name">Name:</Label>
          <Input
            {...register("name", { required: "Name is required" })}
            id="name"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-sm font-medium">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email:</Label>
          <Input
            {...register("email", { required: "Email is required" })}
            id="email"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">Message:</Label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm font-medium">
              {errors.message.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isLoading} size={"lg"} className="flex w-full">
          {isLoading ? "Sending message..." : "Send Message"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
