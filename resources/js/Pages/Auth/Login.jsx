import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        uname: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <>
            <Head title="Login" />
            <div className="max-w-screen">
                <div className="container flex flex-row items-center justify-center">
                    <div className="w-[35%] flex flex-col px-[60px] h-screen justify-center">
                        <div className="flex items-center justify-center">
                            <img src="/images/GameOnU-v2.png" alt="logo" />
                        </div>

                        <h1 className="font-sans text-[24px] font-bold leading-normal mt-[60px]">
                            Wellcome Back, brodi!
                        </h1>
                        <div className="flex gap-[3px] mt-[8px]">
                            <p className="font-text text-[16px] font-normal leading-normal">
                                New to GameOnU?
                            </p>
                            <Link
                                href={route("register")}
                                className="font-text text-[16px] font-normal leading-normal text-secondary"
                            >
                                Sign Up for free.
                            </Link>
                        </div>

                        <div className="mt-[24px]">
                            <p className="font-text text-[16px] font-normal leading-normal">
                                Please enter your details.
                            </p>
                            <form onSubmit={submit}>
                                <div className="mt-4">
                                    <TextInput
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        placeholder="Username or Email"
                                        className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                        autoComplete="email"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <TextInput
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Password"
                                        className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-[8px]">
                                    <Link className="font-text text-[16px] font-bold leading-normal text-secondary">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="mt-[24px]">
                                    <PrimaryButton
                                        type="submit"
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Login
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-[65%] bg-login h-screen flex items-center justify-center">
                        <img src="/images/mac-login.png" alt="gameonu" />
                    </div>
                </div>
            </div>
        </>
    );
}
