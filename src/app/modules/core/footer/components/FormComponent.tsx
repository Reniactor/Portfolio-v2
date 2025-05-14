import { env } from "@/env";
import { nunitoSans, roboto } from "@/utils/fontIndex";
import emailjs, { type EmailJSResponseStatus } from "emailjs-com";
import { type NextResponse } from "next/server";
import { useState } from "react";
import FormDialog from "./FormDialog";
import FormDialogError from "./FormDialogError";

const emailJsServiceId: string = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJsTemplateId: string = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailJsUserId: string = env.NEXT_PUBLIC_EMAILJS_USER_ID;

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const openErrorDialog = () => {
    setIsErrorDialogOpen(true);
  };

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
        openDialog();
      })
      .catch((error: NextResponse) => {
        openErrorDialog();
      });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${roboto.className} mt-8 w-full max-w-md rounded-lg bg-[#0f0f0f] p-6 shadow-md`}
    >
      <FormDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
      <FormDialogError
        isOpen={isErrorDialogOpen}
        setIsOpen={setIsErrorDialogOpen}
      />
      <h2
        className={`${nunitoSans.className} text-center text-2xl font-extrabold text-color30`}
      >
        Contact me
      </h2>
      <div className="mb-4">
        <label
          id="name-input-label"
          className="mb-2 block text-sm font-medium text-color30"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded border border-color60shade bg-color60 p-2 text-color30 outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          id="email-input-label"
          className="mb-2 block text-sm font-medium text-color30"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded border border-color60shade bg-color60 p-2 text-color30 outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          id="message-textarea-label"
          className="mb-2 block text-sm font-medium text-color30"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded border-color60shade bg-color60 p-2 text-color30 outline-none"
          required
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
