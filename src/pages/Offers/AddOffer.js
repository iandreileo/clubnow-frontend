import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent, createOffer, getClubByOwnerId } from "../../api/user.api";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { UserContext } from "../../providers/UserProvider";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function AddOffer() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    clubId: "",
    name: "",
    startDate: "",
    endDate: "",
    price: "",
    products: "",
  });

  const handleInputChange = (e) => {
    let fieldsCopy = Object.assign({}, fields);

    fieldsCopy[e.target.id] = e.target.value;

    setFields(fieldsCopy);

    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user._delegate.uid);
    getClubByOwnerId(user._delegate.uid).then((res) => {
      let fieldsCopy = Object.assign({}, fields);

      fieldsCopy["clubId"] = res.club._id;

      setFields(fieldsCopy);

      console.log(fields);

      createOffer(fields).then((response) => {
        console.log(response);
        if (response.user.clubId) {
          navigate("/club/dashboard");
        }
        // setFields({
        //   clubId: "",
        //   date: "",
        //   description: "",
        // });
      });
    });

    console.log(fields);
  };
  return (
    <>
      <Header />
      <form className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Adauga Oferta
              </h3>
            </div>
          </div>

          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Denumire oferta
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="first-name"
                    id="name"
                    value={fields.name}
                    onChange={handleInputChange}
                    autoComplete="given-name"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Data inceput
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="last-name"
                    id="startDate"
                    value={fields.startDate}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Data sfarsit
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="last-name"
                    id="endDate"
                    value={fields.endDate}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Pret
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="last-name"
                    id="price"
                    value={fields.price}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Produse
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="street-address"
                    id="products"
                    value={fields.products}
                    onChange={handleInputChange}
                    autoComplete="street-address"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Salveaza
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
}
