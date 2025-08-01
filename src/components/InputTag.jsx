import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiMail } from "react-icons/hi";
import toast, { Toaster } from 'react-hot-toast';

const InputTag = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_io3nngn',
            'template_bsn6s3q',
            form.current,
            'KIVsDZEUps24gjhd7'
        ).then((result) => {
            toast.success('Email sent successfully!');
        }, (error) => {
            toast.error('Failed to send email.');
        });

        e.target.reset();
    };

    return (
        <div className="max-w-md mx-auto">
            <Toaster position="top-right" reverseOrder={false} />

            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="title" value="Contact Us: Portfolio Email from Nay Thu Naing" />
                <input type="hidden" name="user_name" value="Nay Thu Naing" />
                <input
                    type="hidden"
                    name="message"
                    value="I am Nay Thu Naing, a web developer with 2 years of experience in PHP, Java, and Laravel. This is a test email from my portfolio site."
                />

                <label htmlFor="user_email" className="mb-2 text-base font-medium text-gray-900 sr-only dark:text-white">
                    Email
                </label>

                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <HiMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>

                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder="example@gmail.com"
                        required
                        className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                "
                    />

                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800
                                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                                    text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send
                    </button>
                </div>

            </form>
        </div>
    );
};

export default InputTag;
