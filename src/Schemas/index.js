import * as Yup from "yup";

export const validation = Yup.object({
    name:Yup.string().min(3).max(15).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    message:Yup.string().min(20).max(500).required("Please enter your message")
}) 