import useMediaQuery from "../Components/UseState";

const Summer = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <div>
      {isBreakpoint ? (
        <div className="pt-10">
          <div>
            <div className=" items-center relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                  Sommarens mode är äntligen här!
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Hoppa in och titta på våra nyheter
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className=" mt-10 inline-block bg-slate-800 border border-transparent rounded-md py-3 px-8 font-medium text-white"
                  >
                    Läs mer här..
                  </a>
                </div>
                <div className=" mt-10 px-5  ">
                  <img
                    src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
                    alt=""
                    className="w-full h-full object-center object-cover rounded overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-40">
          <div className=" pt-40">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                  Sommarens mode är äntligen här!
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Hoppa in och titta på våra nyheter
                </p>
                <a
                  href="#"
                  className="mt-10 inline-block bg-slate-800 border border-transparent rounded-md py-3 px-8 font-medium text-white md:hover:bg-slate-600"
                >
                  Läs mer här..
                </a>
              </div>

              <div className="md:pointer-events-none  md:inset-y-0 md::max-w-7xl md::mx-auto md::w-full">
                <div className=" md:relative ">
                  <div className="md:flex md:items-center md:space-x-6 md:space-x-8">
                    <div className="md:flex-shrink-0 md:grid md:grid-cols-1 md:gap-y-8 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-8 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1618073194091-9b24230ddb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-8 lg:gap-y-8">
                      <div className="  w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1624513764370-f29d72dc4e19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className=" w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1584863495140-a320b13a11a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Summer;
