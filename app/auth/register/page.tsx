"use client";

import React from 'react'
import styles from "@/styles/register/register.module.css"
import "@/styles/styles.css"
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { authRegistration } from '@/redux/slice/authSlice';
import { toast } from 'sonner';

const schema = yup.object().shape({
    full_name: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    // username: yup.string().required("Name is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password cannot exceed 20 characters")
        .required("Password is required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
});
export default function Register() {
    const dispatch = useDispatch();
    const router = useRouter()
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // const handleClick = async (data) => {
    //     const autoUsername = data.email.split("@")[0];

    //     const formData = new FormData();
    //     formData.append("name", data.full_name);
    //     formData.append("email", data.email);
    //     formData.append("username", autoUsername);
    //     formData.append("password", data.password);
    //     formData.append("confirmPassword", data.confirm_password);

    //     try {
    //         let res = await dispatch(authRegistration(formData)).unwrap();
    //         console.log(res, "ggghjcd")
    //         if (res.status == true) {
    //             router.push("/auth/otp")
    //         } else {
    //             // router.push("/auth/otp")
    //         }
    //     } catch (error) {

    //     }

    // };
    const onSubmit = async (data: any) => {
        const payload = {
            email: data.email,
            password: data.password,
            confirm_password: data.confirm_password,
            full_name: data.full_name,
        };
        try {
            await dispatch(authRegistration(payload)).unwrap();
            localStorage.setItem("email", data.email);
            router.push("/auth/otpverification");
        } catch (err: any) {
            if (err?.email || err?.username) {
                const messages = Object.entries(err)
                    .map(([field, msgs]: any) => `${field}: ${msgs.join(", ")}`)
                    .join(" | ");
                toast.error(messages);
            } else if (err?.message) {
                toast.error(err.message);
            } else {
                toast.error("Registration failed");
            }
        }

    };

    return (
        <>
            <div className="radialBlur"></div>
            <section className={styles.loginSec}>
                <div className="container">
                    <div className="row login-row">
                        <div className={styles.col5}>
                            <div className={styles.welcomeSec}>
                                <div className={styles.title}>Create an account</div>
                                <p className="subtitle">
                                    Please enter your details to create an account
                                </p>
                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <div className={styles.loginForm}>
                                        <label htmlFor="full-name">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Enter your name"
                                            {...register("full_name")}
                                        />
                                        {errors.full_name && <span style={{ color: "red" }}>{errors.full_name.message}</span>} <br />

                                        <label htmlFor="email">Email address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            {...register("email")}
                                        />
                                        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>} <br />

                                        <div className={styles.rowBetween}>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            {...register("password")}
                                        />
                                        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>} <br />

                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            name="confirm-password"
                                            placeholder="Re-enter your password"
                                            {...register("confirm_password")}
                                        />
                                        {errors.confirm_password && <span style={{ color: "red" }}>{errors.confirm_password.message}</span>} <br />

                                    </div>
                                    <div className={styles.terms}>
                                        <input type="checkbox" id="terms" />
                                        <label htmlFor="terms">
                                            <span>I agree to the</span>
                                        </label>
                                        <a href="#">Privacy Policy</a>
                                    </div>
                                    <input type="submit" defaultValue="Sign Up" className={styles.loginBtn} />
                                    <p className={styles.orText}>or log in with</p>
                                    <ul className={styles.socialLinks}>
                                        <li>
                                            <a href="" className={styles.socialBtn + " " + styles.circle}>
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_482_775)">
                                                        <path
                                                            d="M19.2487 0C17.7559 0.10325 16.0112 1.05875 14.9944 2.303C14.0669 3.43175 13.3039 5.10825 13.6014 6.7375C15.2324 6.78825 16.9177 5.81 17.8942 4.54475C18.8077 3.367 19.4989 1.701 19.2487 0Z"
                                                            fill="black"
                                                        />
                                                        <path
                                                            d="M25.1482 9.39394C23.715 7.59671 21.7007 6.55371 19.7985 6.55371C17.2872 6.55371 16.225 7.75595 14.4803 7.75595C12.6813 7.75595 11.3145 6.55721 9.14279 6.55721C7.00956 6.55721 4.73807 7.86095 3.29783 10.0904C1.27309 13.2299 1.61959 19.1326 4.90082 24.1604C6.07506 25.9593 7.64305 27.9823 9.69404 27.9998C11.5193 28.0173 12.0338 26.8291 14.5065 26.8168C16.9792 26.8028 17.4482 28.0156 19.27 27.9963C21.3227 27.9806 22.9765 25.7388 24.1507 23.9399C24.9925 22.6501 25.3057 22.0009 25.9584 20.5449C21.2107 18.7371 20.4495 11.9857 25.1482 9.39394Z"
                                                            fill="black"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_482_775">
                                                            <rect width={28} height={28} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className={styles.socialBtn + " " + styles.circle}>
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_482_781)">
                                                        <path
                                                            d="M6.20539 16.9207L5.23075 20.5592L1.66846 20.6346C0.603859 18.66 0 16.4008 0 14C0 11.6785 0.564594 9.4892 1.56538 7.56152H1.56614L4.73758 8.14296L6.12686 11.2954C5.83609 12.1431 5.6776 13.0531 5.6776 14C5.67771 15.0277 5.86387 16.0123 6.20539 16.9207Z"
                                                            fill="#FBBB00"
                                                        />
                                                        <path
                                                            d="M27.7552 11.3846C27.916 12.2315 27.9998 13.1062 27.9998 14C27.9998 15.0023 27.8945 15.98 27.6937 16.9231C27.0122 20.1323 25.2314 22.9346 22.7645 24.9177L22.7637 24.917L18.7691 24.7131L18.2038 21.1839C19.8407 20.2239 21.1199 18.7216 21.7938 16.9231H14.3076V11.3846H27.7552Z"
                                                            fill="#518EF8"
                                                        />
                                                        <path
                                                            d="M22.7643 24.9169L22.7651 24.9177C20.3659 26.8461 17.3182 28 14.0005 28C8.66895 28 4.03358 25.02 1.66895 20.6346L6.20587 16.9208C7.38816 20.0761 10.432 22.3223 14.0005 22.3223C15.5343 22.3223 16.9713 21.9077 18.2043 21.1838L22.7643 24.9169Z"
                                                            fill="#28B446"
                                                        />
                                                        <path
                                                            d="M22.9362 3.22306L18.4008 6.93613C17.1247 6.13845 15.6162 5.67766 14.0001 5.67766C10.3508 5.67766 7.25003 8.02687 6.12697 11.2954L1.5662 7.56153H1.56543C3.89545 3.06923 8.58927 0 14.0001 0C17.397 0 20.5116 1.21002 22.9362 3.22306Z"
                                                            fill="#F14336"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_482_781">
                                                            <rect width={28} height={28} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className={styles.socialBtn + " " + styles.circle}>
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11.3219 15.4465C11.234 15.4465 9.38966 15.447 8.53902 15.4462C8.1011 15.4459 7.94486 15.2885 7.94486 14.8478C7.94416 13.7158 7.94416 12.5837 7.94486 11.4517C7.94514 11.0166 8.11034 10.8505 8.54266 10.8503C9.3933 10.8497 11.2276 10.85 11.3219 10.85V8.38542C11.3225 7.2727 11.521 6.20758 12.0863 5.23234C12.6651 4.23414 13.5073 3.55038 14.5867 3.15502C15.2781 2.90162 15.9957 2.80054 16.7293 2.79998C17.6471 2.79942 18.565 2.80026 19.4831 2.80194C19.8776 2.8025 20.0526 2.97694 20.0535 3.37426C20.0551 4.4391 20.0551 5.50394 20.0535 6.5685C20.0529 6.97002 19.8852 7.1313 19.4817 7.13578C18.7293 7.1439 17.9764 7.13886 17.2249 7.1691C16.4658 7.1691 16.0665 7.53982 16.0665 8.3255C16.0483 9.15654 16.059 9.98842 16.059 10.8497C16.1301 10.8497 18.2903 10.8494 19.3 10.8497C19.7586 10.8497 19.9154 11.0073 19.9154 11.4685C19.9154 12.5944 19.9151 13.7205 19.9143 14.8464C19.914 15.3009 19.7667 15.4459 19.3053 15.4462C18.2956 15.4467 16.1438 15.4465 16.0497 15.4465V24.5591C16.0497 25.0449 15.8969 25.1997 15.4175 25.1997H11.9111C11.4874 25.1997 11.3222 25.0351 11.3222 24.6114L11.3219 15.4465Z"
                                                        fill="#3D6AD6"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className={styles.signupText}>
                                        Already have an account
                                        <a href="/auth/login" className={styles.signupLink}>
                                            Sign In
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className={styles.col7 + " " + styles.colRight}>
                            <div className={styles.imageCard}>
                                <img src="/images/modals/createac-img.png" alt="Login-side-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
