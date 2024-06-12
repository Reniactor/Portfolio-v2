import { nunitoSans, roboto } from "@/utils/fontIndex";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { NextResponse } from "next/server";
import { env } from "process";
import { useState } from "react";

const emailJsServiceId: string = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const emailJsTemplateId: string = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const emailJsUserId: string = env.NEXT_PUBLIC_EMAILJS_USER_ID!;

const FormComponent = () => {
  interface FormState {
    name: string;
    email: string;
    message: string;
  }
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJsServiceId,
        emailJsTemplateId,
        e.target as HTMLFormElement,
        emailJsUserId,
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Message sent successfully!");
      })
      .catch((error: NextResponse) => {
        alert("Failed to send the message, please try again.");
      });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${roboto.className} mt-8 w-full max-w-md rounded-lg bg-[#0f0f0f] p-6 shadow-md`}
    >
      <h2
        className={`${nunitoSans.className} text-center text-2xl font-extrabold text-color30`}
      >
        Contact me
      </h2>
      <div className="mb-4">
        <label
          aria-labelledby="name-input-label"
          className="mb-2 block text-sm font-medium text-color30"
          htmlFor="name"
        >
          Name
        </label>
        <input
          aria-labelledby="name-input"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded border border-color60shade bg-color60 p-2 text-color30 outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          aria-labelledby="email-input-label"
          className="mb-2 block text-sm font-medium text-color30"
          htmlFor="email"
        >
          Email
        </label>
        <input
          aria-labelledby="email-input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded border border-color60shade bg-color60 p-2 text-color30 outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          aria-labelledby="message-textarea-label"
          className="mb-2 block text-sm font-medium text-color30"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          aria-labelledby="message-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="border-color60shader w-full rounded bg-color60 p-2 text-color30 outline-none"
        ></textarea>
      </div>
      <button
        aria-labelledby="submit-button"
        type="submit"
        className="w-full rounded bg-color30 px-4 py-2 font-bold text-color60 transition-colors duration-300 hover:bg-[#B8B8B8]"
      >
        Send
      </button>
    </form>
  );
};
export default FormComponent;
