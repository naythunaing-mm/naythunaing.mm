import { create } from "zustand";

const useTermAndCondition = create(() => ({
    About: "I'm Nay Thu Naing, a passionate full-stack developer with experience in PHP, Laravel, Java, Vue, and React. I enjoy building clean, scalable, and user-friendly applications for real-world use.",
    PrivacyAndPolicy:
        "This portfolio does not collect personal data. Any information shared via the contact form will be kept confidential and used solely for communication purposes.",
    Licensing:
        "All content, code samples, and designs showcased on this portfolio are the intellectual property of Nay Thu Naing. Please do not reuse or reproduce without permission.",
    Contact:
        "Feel free to reach out for freelance work, collaborations, or tech discussions. Email: naythunaing.jp@gmail.com Phone: +1234567890",
}));
export default useTermAndCondition;
