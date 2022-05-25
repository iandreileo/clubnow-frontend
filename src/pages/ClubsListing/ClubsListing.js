import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClubs } from "../../api/user.api";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    name: "BAMBUU",
    _id: "#",
    musicGenre: "POPULARA",
    foundationDate: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    city: "Bucharest",
  },
  {
    name: "BAMBUU",
    _id: "#",
    musicGenre: "POPULARA",
    foundationDate: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    city: "Bucharest",
  },
  {
    name: "BAMBUU",
    _id: "#",
    musicGenre: "POPULARA",
    foundationDate: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    city: "Bucharest",
  },
  {
    name: "BAMBUU",
    _id: "#",
    musicGenre: "POPULARA",
    foundationDate: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    city: "Bucharest",
  },
  {
    name: "BAMBUU",
    _id: "#",
    musicGenre: "POPULARA",
    foundationDate: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    city: "Bucharest",
  },
];

export default function ClubsListing() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getClubs().then((response) => {
      setClubs(response.clubs);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Cluburi din apropiere
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {clubs.map((post) =>
              post.approved ? (
                <div
                  key={post.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <Link to={`/user/club/${post._id}`}>
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={post.profileImage?post.profileImage:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <a href="#" className="hover:underline">
                            {post.musicGenre}
                          </a>
                        </p>
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.name}
                          </p>
                          <p className="text-l font-semibold text-gray-900">
                            {post.city}
                          </p>
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
