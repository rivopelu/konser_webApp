import React, { useState } from "react";
import { BtnComp, InputComp, ToggleTheme } from "../../components";
import { BrandName } from "../../utils";
import "./auth.scss";
import Slider from "react-slick";

import gambar1 from "./img/iklan1.jpg";
import gambar2 from "./img/iklan2.png";
import gambar3 from "./img/iklan3.jpg";

import icon1 from "./img/logo/google.png";
import icon2 from "./img/logo/facebook.svg";
import icon3 from "./img/logo/apple.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LoginPage() {

  const [mata, setMata] = useState(false)

  const authApi = [
    { icon: icon1, title: "Goggle" },
    { icon: icon2, title: "Facebook" },
    { icon: icon3, title: "Apple" },
  ];

  const iklanItems = [{ bg: gambar1 }, { bg: gambar2 }, { bg: gambar3 }];

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className=" min-h-screen authPage ">
      <div className=" group flex flex-col lg:flex-row flex-1">
        <div className="kiri-auth w-[60%]  lg:inline-block  h-screen fixed"></div>
        <div className="kiri-authd w-[60%]  lg:inline-block  h-screen"></div>

        <div className="kanan flex flex-col justify-between   lg:w-[40%] lg:container">
          <div>

            <h1 className="text-2xl mx-[20px] lg:mx-0 font-bold  my-3">{BrandName}</h1>
            <Slider className="" {...settings}>
              {iklanItems.map((list) => (
                <a
                  href="#"
                  className="h-56 w-full  flex text-center justify-center items-center rounded-lg shadow-lg"
                >
                  <div
                    className="inline-block my-auto mx-auto w-full h-full bg-cover lg:rounded-lg "
                    style={{
                      backgroundImage: `url(${list.bg})`,
                    }}
                  ></div>
                </a>
              ))}
            </Slider>
          </div>
          <div className="px-3 lg:px-0">
            <div className="card  w-full rounded-md shadow-lg border-[1px] dark:border-gray-600 m-auto px-3 py-4 mt-10  ">
              <p>Login / Daftar</p>
              <p className=" mb-6 text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet consectetur.
              </p>

              <div className="relative ">

                <InputComp
                  title={"Nomor Ponsel Atau Email"}
                  id={"formUtama"}
                  type={'text'}
                  placeholder={"Example@mail.com"}
                  className={"mb-3 w-full pr-9 "}
                />

                <FontAwesomeIcon icon={faUser} className='absolute right-3 bottom-6 text-gray-600' />
              </div>

              <div className="relative ">

                <InputComp
                  title={"Password"}
                  id={"formPassword"}
                  placeholder={"*******"}
                  type={mata ? 'password' : 'text'}
                  className={"mb-3 w-full pr-9 "}
                />

                <FontAwesomeIcon onClick={() => setMata(!mata)} icon={mata ? faEye : faEyeSlash} className='absolute right-3 bottom-6 text-gray-600 cursor-pointer' />
              </div>

              <p className="text-sm text-gray-400">Belum Mempunyai Akun ? <Link className="text-blue-500 cursor-pointer" to={'/register'}>Silahkan Daftar</Link></p>
              <BtnComp
                title={"lanjutkan"}
                className={
                  "flex w-full text-center items-center justify-center py-2 mt-5"
                }
              />

              <div className="relative garis border-b-2 w-full dark:border-gray-700 mt-5 flex items-center">
                <p className=" bg-white px-2 text-[13px] text-gray-500 dark:bg-gray-800 mx-auto translate-y-[10px]">
                  Atau
                </p>
              </div>

              <div className="flex flex-col mt-10">
                {authApi.map((item) => (
                  <div className="flex  items-center border relative rounded-sm cursor-pointer dark:border-gray-500 dark:hover:border-gray-50 hover:border-gray-700 mb-3">
                    <img
                      className="absolute left-3"
                      width={"25px"}
                      src={item.icon}
                      alt=""
                    />
                    <p className="text-center mx-auto py-2 w-full">
                      Masuk Dengan {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>

            <p className="flex w-full justify-center mt-9 mb-5 text-gray-400 text-sm">	&copy; 2022 - <a href="#" className="cursor-pointer text-blue-500 text-center ml-1"> NamaTimDeveloper</a></p>
          </div>
        </div>

      </div>
      <ToggleTheme />
    </div>
  );
}

export default LoginPage;
