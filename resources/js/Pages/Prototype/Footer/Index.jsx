import TextInput from "@/Components/TextInput";
import Items from "./Items";
import { Contact, Social } from "./MenuList";
import SecondaryButton from "@/Components/SecondaryButton";
export default function Footer() {
    return (
        <div className="max-w-screen  w-full px-[20px] py-[20px]">
            <div className="bg-secondary px-[110px]">
                <div className="container mx-auto  flex w-full  pt-[60px]">
                    <div className="flex">
                        <h1 className="text-white font-sans text-[36px] font-bold leading-normal mr-[125px] ">
                            Subscribe to <br />
                            the page for <br />
                            more <br />
                            information
                        </h1>

                        <div className="flex-col flex">
                            <TextInput
                                type="text"
                                name="name"
                                placeholder="name"
                                className="border-white border-b-[1px] border-t-0 border-x-0 text-[#ccc]"
                            />
                            <TextInput
                                type="email"
                                name="email"
                                placeholder="mail"
                                className="mt-[20px] border-white border-b-[1px] border-t-0 border-x-0 text-[#ccc]"
                            />
                            <div className="mt-[54px] ">
                                <SecondaryButton>Subscribe</SecondaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-[125px]">
                        <h1 className="font-sans text-white text-[20px] font-bold leading-normal">
                            Contact Us
                        </h1>
                        <div className="mt-[8px]">
                            {Contact.map((item, index) => (
                                <Items
                                    key={`${index}-${item.index}`}
                                    link={item.link}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col ml-[125px]">
                        <h1 className="font-sans text-white text-[20px] font-bold leading-normal">
                            Social Media
                        </h1>
                        <div className="mt-[8px]">
                            {Social.map((item, index) => (
                                <Items
                                    key={`${index}-${item.index}`}
                                    link={item.link}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex mt-[120px] justify-center">
                    <img src="/images/GameOnU-2.png" alt="GameOnU" />
                </div>
                <div className="flex justify-center mt-[69px] pb-[20px]">
                    <p className="text-white text-[16px] font-text font-normal leading-normal">
                        Copyright © GameOnU 2023
                    </p>
                </div>
            </div>
        </div>
    );
}
