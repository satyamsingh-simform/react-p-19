export const MenuSkeletonCard = () => {
  return (
    <div className="flex flex-col">
        
        <div className="w-[50%] mx-auto flex flex-wrap text-black">
            <div className="w-full mt-10">
                <input type="text"
                    className="w-full border bg-gray-200 border-gray-300 rounded-2xl p-3"
                />
            </div>
            <div className="w-full mt-10 flex gap-4">
                <button className={`text-black border p-4 bg-gray-200 border-gray-300 rounded-2xl w-20 hover:cursor-pointer`} ></button>
                <button className={`text-black border p-4 bg-gray-200 border-gray-300 rounded-2xl w-20 hover:cursor-pointer`} ></button>
            </div>
            <div className='w-full mt-7 mb-3 text-gray-300'><hr /></div>

            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold"></h1>
                </div>
            </div>
            <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                <hr />
            </div>
            <div className="flex justify-between w-full mb-10">
                <div className="w-[70%]">
                    <p className="text-lg text-gray-700 font-bold border h-38 bg-gray-200 border-gray-300"></p>
                </div>
                <div className="w-[25%] relative">
                    <img className="w-39 h-36 object-cover rounded-2xl bg-gray-200"/>
                    (<button className='text-white border border-gray-300 absolute top-30 left-4.5 px-10 py-1.5 bg-white rounded-lg shadow-md font-bold text-lg hover:cursor-pointer' >ADD</button>)
                </div>
            </div>

            <div className="w-full mb-10 text-gray-300">
                <hr />
            </div>

            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold"></h1>
                </div>
            </div>
            <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                <hr />
            </div>
            <div className="flex justify-between w-full mb-10">
                <div className="w-[70%]">
                    <p className="text-lg text-gray-700 font-bold border h-38 bg-gray-200 border-gray-300"></p>
                </div>
                <div className="w-[25%] relative">
                    <img className="w-39 h-36 object-cover rounded-2xl bg-gray-200"/>
                    (<button className='text-white border border-gray-300 absolute top-30 left-4.5 px-10 py-1.5 bg-white rounded-lg shadow-md font-bold text-lg hover:cursor-pointer' >ADD</button>)
                </div>
            </div>

            <div className="w-full mb-10 text-gray-300">
                <hr />
            </div>

            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold"></h1>
                </div>
            </div>
            <div className="w-full mb-10 h-4 bg-gray-200 text-gray-300">
                <hr />
            </div>
            <div className="flex justify-between w-full mb-10">
                <div className="w-[70%]">
                    <p className="text-lg text-gray-700 font-bold border h-38 bg-gray-200 border-gray-300"></p>
                </div>
                <div className="w-[25%] relative">
                    <img className="w-39 h-36 object-cover rounded-2xl bg-gray-200"/>
                    (<button className='text-white border border-gray-300 absolute top-30 left-4.5 px-10 py-1.5 bg-white rounded-lg shadow-md font-bold text-lg hover:cursor-pointer' >ADD</button>)
                </div>
            </div>

            <div className="w-full mb-10 text-gray-300">
                <hr />
            </div>
        </div>
    </div>
  )
}
