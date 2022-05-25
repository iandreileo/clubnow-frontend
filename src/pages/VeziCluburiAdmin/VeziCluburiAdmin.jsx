import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { approveclub, getClubs, getClubsPending } from "../../api/user.api";
import Header from "../../components/Header/Header";

const VeziCluburiAdmin = () => {
  const [clubs, setClubs] = useState();
  useEffect(() => {
    getClubs().then((res) => setClubs(res.clubs));
  }, []);

  const approveClub = (id) => {
    // console.log(event);
    // var id = event.target.name;
    if (id) approveclub(id);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">Toate cluburile aprobate</h1>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Nume
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Adresa
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Oras
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Gen muzica
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                          >
                            <span className="sr-only">Aproba</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {!clubs
                          ? ""
                          : clubs.map((club) => (
                              <tr key={club._id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {club.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {club.address}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {club.city}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {club.musicGenre}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <Link to={"/club/editclub/" + club._id}>
                                    <button
                                      //   name={club._id}
                                      type="button"
                                      //   onClick={(e) =>
                                      // approveClub(e.target.name)
                                      //   }
                                      className="text-indigo-600 hover:text-indigo-900"
                                    >
                                      Editeaza
                                      <span className="sr-only">
                                        , {club.name}
                                      </span>
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VeziCluburiAdmin;
