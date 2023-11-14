const Receipt = () => {
    return (
        <>
            <div className="pt-[16vh] flex flex-col items-center justify-center mb-[60px]">
                <div className="my-[30px] font-bold text-2xl">
                    Ordered
                </div>
                <div className="border flex flex-col w-[500px] p-[30px]">
                    <div className=" mb-[20px] text-lg">
                        Order Details
                    </div>
                    <div className="w-full flex items-center justify-between text-sm mb-[10px] px-[10px]">
                        <div>
                            Address
                        </div>
                        <div>
                            52/56/2 Lu Gia st, District 15, Ho Chi Minh city
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between text-sm pb-[20px] border-b px-[10px]">
                        <div>
                            Payment method
                        </div>
                        <div>
                            Paypal
                        </div>
                    </div>

                    <div className="mt-[40px] w-full flex items-center justify-between text-sm mb-[10px] px-[10px] ">
                        <div>
                            Subtotal
                        </div>
                        <div>
                            $69.36
                        </div>
                    </div>
                    <div className=" w-full flex items-center justify-between text-sm pb-[20px] border-b px-[10px]">
                        <div>
                            Shipping
                        </div>
                        <div>
                            $40
                        </div>
                    </div>

                    <div className="mt-[40px] w-full flex items-center justify-between text-sm mb-[50px]  px-[10px]">
                        <div>
                            Total
                        </div>
                        <div>
                            $109.36
                        </div>
                    </div>

                    <button className="mx-[30px] bg-black rounded-3xl py-[12px]">
                        View order status
                    </button>
                </div>
            </div>
        </>
    )
}

export default Receipt