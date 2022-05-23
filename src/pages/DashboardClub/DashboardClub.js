/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getClubByOwnerId } from "../../api/user.api";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { UserContext } from "../../providers/UserProvider";

const actions = [
  {
    title: "Evenimente",
    href: "/club/events",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Oferte",
    href: "/club/offers",
    icon: BadgeCheckIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Recenzii",
    href: "/club/reviews",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Rezervari",
    href: "/club/reservations",
    icon: CashIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardClub() {
  const { user } = useContext(UserContext);

  const [haveClub, setHaveClub] = useState();
  const [club, setClub] = useState({});

  useEffect(() => {
    getClubByOwnerId(user._delegate.uid).then((res) => {
      if (res) {
        console.log("da", res);
        setHaveClub(true);
        setClub(res.club);
      } else {
        console.log("nu");
        setHaveClub(false);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8 rounded-lg overflow-hidden">
        {!haveClub ? (
          <div>
            Nu exista un club alocat acestui cont.
            <Link to="/user/addclub">APASA AICI</Link>
          </div>
        ) : (
          ""
        )}

        {club && club.approved == false ? (
          <div>Contul tau de club asteapta aprobarea unui administrator.</div>
        ) : (
          ""
        )}
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8 rounded-lg overflow-hidden divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {haveClub &&
          club.approved &&
          actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "rounded-lg inline-flex p-3 ring-4 ring-white"
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link to={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Doloribus dolores nostrum quia qui natus officia quod et
                  dolorem. Sit repellendus qui ut at blanditiis et quo et
                  molestiae.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}
