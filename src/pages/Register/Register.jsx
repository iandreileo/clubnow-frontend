import { useState } from "react";
import { toast } from "react-toastify";
import { registerWithEmailAndPassword } from "../../api/firebaseConfig";
import bg from "../../assets/cluburi-de-noapte.jpg";

const Register = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    let fieldsCopy = Object.assign({}, fields);

    fieldsCopy[e.target.id] = e.target.value;

    setFields(fieldsCopy);

    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fields);
    registerWithEmailAndPassword(fields);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Înregistrare CLUBNOW
              </h2>
            </div>

            <div className="mt-8">
              <div></div>

              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresă de email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        value={fields.email}
                        onChange={handleInputChange}
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Parolă
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        value={fields.password}
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Înregistrare
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Register;
