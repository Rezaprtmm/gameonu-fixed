export default function CardReviews({ name, job, review, thumbnail }) {
    return (
        <div className="w-[393px] border-secondary border-[1px] bg-white absolute mr-[31px]">
            <div className="px-[20px] pb-[20px]">
                <div className="flex items-center gap-[16px] mt-[23px]">
                    <img
                        src={thumbnail}
                        alt="image"
                        className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                        <h1 className="font-sans text-[16px] font-bold leading-normal">
                            {name}
                        </h1>
                        <p className="font-sans text-[12px] font-normal leading-normal">
                            {job}
                        </p>
                    </div>
                </div>
                <p className="font-text text-[12px] font-normal leading-normal mt-[26px]">
                    {review}
                </p>
                <div className="flex mt-[56px]">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div key={index}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4.85417 18.3333L6.20833 12.4792L1.66667 8.54167L7.66667 8.02083L10 2.5L12.3333 8.02083L18.3333 8.54167L13.7917 12.4792L15.1458 18.3333L10 15.2292L4.85417 18.3333Z"
                                    fill="#FFD02B"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
