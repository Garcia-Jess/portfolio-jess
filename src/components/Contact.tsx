import ButtonEmail from "@/components/ButtonEmail";
import ButtonHome from "@/components/ButtonHome";

export default function Contact() {
  return (
    <div
      id="contact"
      className="max-w-auto flex flex-col items-center justify-center mt-20"
    >
      <ButtonHome />
      <h1 className="text-indigo-700 font-bold text-2xl mt-10">
        LETS WORK TOGETHER? 👩🏾‍💻
      </h1>
      <p className="text-white text-center mt-10 px-5 max-w-2xl">
        Need a website or a custom UI design? I can help you create clean,
        modern, and responsive designs that bring your vision to life. Let’s
        collaborate and build something great together!
      </p>
      <div className="mt-5">
        <ButtonEmail />
      </div>
    </div>
  );
}
