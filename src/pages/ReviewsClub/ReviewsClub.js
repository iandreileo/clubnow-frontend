/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { approvereview, getPendingReviewsByClub, getReviewsByClub } from "../../api/user.api";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// const reviews = [
//   {
//     id: 1,
//     title: "Can't say enough good things",
//     rating: 5,
//     content: `
//       <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
//       <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
//     `,
//     author: "Risako M",
//     date: "May 16, 2021",
//     datetime: "2021-01-06",
//   },
//   // More reviews...
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ReviewsClub = () => {
  const [reviews, setReviews]= useState();
  const {id} = useParams();
  useEffect(() => {

    if (id !== undefined) {
      getPendingReviewsByClub(id).then((res) => setReviews(res.reviews));
    }
  }, [id]);

  const approveReview = (id) => {
    // console.log(event);
    // var id = event.target.name;
    if (id) approvereview(id);
  };
  return (
    <>
      <Header />
      <div className="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-medium text-gray-900">Recenzii club</h2>
          <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {!reviews?"":reviews.map((review) => (
            <div
              key={review._id}
              className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    {review.clientId}
                  </h3>

                  <div
                    className="mt-3 space-y-6 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.review }}
                  />
                </div>
                                    <button
                                      //   name={club._id}
                                      name={review._id}
                                    type="button"
                                    onClick={(e) => approveReview(e.target.name)}
                                      //   onClick={(e) =>
                                      // approveClub(e.target.name)
                                      //   }
                                      className="text-indigo-600 hover:text-indigo-900"
                                    >
                                      Aproba review
                                      <span className="sr-only">
                                        , {""}
                                      </span>
                                    </button>
              </div>

              <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{review.clientId}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReviewsClub;
