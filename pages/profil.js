export default function AboutUs() {
  return (
    <>
      {" "}
      <LogIn />
    </>
  );
}

function LogIn() {
  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 pt-60 pb-60 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="font-bold text-center text-3xl">
              <span className="text-slate-800">BOSS</span>
              <span className="text-yellow-400">BABE</span>
            </h1>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Logga in
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-slate-800 focus:border-slate-800 focus:z-10 sm:text-sm"
                  placeholder="Epost adress"
                />
              </div>
              <div>
                <label htmlFor="Lösenord" className="sr-only">
                  Lösenord
                </label>
                <input
                  id="Lösenord"
                  name="Lösenord"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-slate-800 focus:border-slate-800 focus:z-10 sm:text-sm"
                  placeholder="Lösenord"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-slate-800 focus:ring-slate-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Kom ihåg mig
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-slate-800 hover:text-slate-400"
                >
                  Glömt ditt lösenord?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
              >
                Logga in
              </button>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 mt-5"
              >
                Registrera ett nytt konto
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
