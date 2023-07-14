import { useEffect } from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        uname: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
            <div className="max-w-screen">
                <div className="container flex flex-row items-center justify-center">
                    <div className="w-[65%] bg-login h-screen flex items-center justify-center">
                        <img
                            src="/images/PixelBook-register.png"
                            alt="register"
                        />
                    </div>
                    <div className="w-[35%] flex flex-col px-[60px] h-screen justify-center">
                        <div className="flex items-center justify-center">
                            <img src="/images/GameOnU-v2.png" alt="logo" />
                        </div>
                        <div className="mt-[60px]">
                            <h1 className="font-sans text-[24px] font-bold leading-normal">
                                Create an account
                            </h1>
                            <p className="font-text text-[16px] font-normal leading-normal">
                                Let’s get started to become a great Game
                                Developer
                            </p>
                            <form onSubmit={submit}>
                                <div className="mt-[24px]">
                                    <div className="mt-4">
                                        <TextInput
                                            type="text"
                                            name="fullname"
                                            placeholder="Full Name"
                                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                            id="name"
                                            value={data.name}
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <TextInput
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                            id="email"
                                            value={data.email}
                                            autoComplete="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <TextInput
                                            type="text"
                                            name="uname"
                                            placeholder="Username"
                                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                            value={data.uname}
                                            autoComplete="uname"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("uname", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.uname}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <TextInput
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                            id="password"
                                            value={data.password}
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="Password Confirmation"
                                            value={data.password_confirmation}
                                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-[16px]">
                                        <PrimaryButton
                                            type="submit"
                                            className="w-full"
                                            disabled={processing}
                                        >
                                            Register
                                        </PrimaryButton>
                                        <div className="flex mt-[8px] gap-[3px]">
                                            <p className="font-text text-[16px] font-normal leading-normal">
                                                Already have an account?
                                            </p>
                                            <Link
                                                href={route("login")}
                                                className="font-text text-[16px] font-normal leading-normal text-secondary"
                                            >
                                                Sign In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
