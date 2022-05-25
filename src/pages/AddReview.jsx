import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createReview, getClubById } from "../api/user.api";
import Header from "../components/Header/Header";
import { UserContext } from "../providers/UserProvider";

const AddReview = () => {
  const { id } = useParams();
  const [club, setClub] = useState();
  const [review, setReview] = useState();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getClubById(id).then((res) => setClub(res.club));
  }, []);

  const handleChange = (e) => {
    setReview(e.target.value);
    console.log(review);
    console.log(user);
  };

  const handleSubmit = () => {
    const reviewSend = {
      clubId: club._id,
      userId: "Cosmin",
      date: "10-10-2022",
      review: review,
      approved: false,
    };

    createReview(reviewSend).then((res) => console.log(res));
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <p>Numele clublui: {club ? club.name : ""}</p>
          </div>
          <form>
            <div>
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700"
              >
                Adauga review
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="review"
                  id="review"
                  onChange={handleChange}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>
            <button type="button" onClick={handleSubmit}>
              Salveaza
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReview;
