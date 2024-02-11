import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-ibmplexserif sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[285px] bg-gray-900_01 border-gray-900_19 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col items-center justify-start ml-12 md:ml-[0] mr-[180px] mt-14 w-1/5">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                size="txtIBMPlexSerifBold30"
              >
                Jac.
              </Text>
            </div>
          </div>
          <div className="font-ibmplexsans h-[280px] md:h-[357px] ml-12 md:ml-[0] mr-[145px] mt-[101px] relative w-[33%]">
            <Line className="bg-gradient  h-1 mt-[17px] w-[71%]" />
            <div className="absolute flex flex-col gap-5 h-full inset-[0] items-start justify-start m-auto w-auto">
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSansBold20"
              >
                Home
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSans20"
              >
                About
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSans20"
              >
                Services
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSans20"
              >
                Works
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSans20"
              >
                Blogs
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSans20"
              >
                Contact
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start ml-12 md:ml-[0] mr-[197px] mt-[218px] w-auto">
            <div className="bg-white-A700 flex flex-col h-10 items-center justify-start p-[9px] rounded-[50%] w-10">
              <Img
                className="h-3.5 my-1"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-10 items-center justify-start p-2.5 rounded-[50%] w-10">
              <Img className="h-5 w-5" src="images/img_globe.svg" alt="globe" />
            </div>
            <div className="bg-white-A700 flex flex-col h-10 items-center justify-start p-[9px] rounded-[50%] w-10">
              <Img className="h-5 w-5" src="images/img_info.svg" alt="info" />
            </div>
          </div>
          <div className="flex flex-col font-ibmplexsans items-center justify-start mb-12 mt-[30px] mx-auto">
            <Text
              className="leading-[22.00px] text-base text-white-A700 w-full"
              size="txtIBMPlexSans16"
            >
              Copyright ©2023 Jacob Jones. All right reserved.
            </Text>
          </div>
        </Sidebar>
        <div className="bg-white-A700 flex flex-1 md:flex-col flex-row font-ibmplexsans md:gap-5 items-center justify-end p-[50px] md:px-5 w-full">
          <div className="md:h-[510px] h-[538px] sm:h-[614px] relative w-[39%] md:w-full">
            <Img
              className="absolute h-[177px] left-[0] object-cover top-[0]"
              src="images/img_vector_177x246.png"
              alt="vector"
            />
            <div className="absolute flex flex-col md:gap-10 gap-16 h-max inset-y-[0] items-start justify-start my-auto right-[0] w-auto">
              <div className="flex flex-col gap-12 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="leading-[90.00px] md:text-5xl text-[102px] text-black-900 uppercase"
                    size="txtPoppinsMedium102"
                  >
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-normal">
                      <>
                        My name
                        <br />
                        is
                      </>
                    </span>
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-bold">
                      <>
                        Jacob
                        <br />
                        Jones...
                      </>
                    </span>
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 tracking-[-0.96px]"
                    size="txtIBMPlexSansMedium32"
                  >
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-bold italic">
                      Product Designer
                    </span>
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-normal">
                      based in{" "}
                    </span>
                    <span className="text-gray-900_01 font-ibmplexsans text-left font-bold italic">
                      London
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[48%] md:w-full">
                  <Button
                    className="cursor-pointer flex h-14 items-center justify-center min-w-[258px]"
                    rightIcon={
                      <div className="h-6 mb-px ml-2 pl-1 pr-[5px] w-6 bg-gradient  py-1">
                        <Img
                          className="h-3.5"
                          src="images/img_arrowleft.svg"
                          alt="arrow_left"
                        />
                      </div>
                    }
                    color="gray_900_01"
                    size="md"
                  >
                    <div className="font-medium text-left text-lg">
                      Let’s talk with me
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-12 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    size="xs"
                  >
                    <Img
                      className="h-5"
                      src="images/img_communicationscommunication.svg"
                      alt="communicationsc"
                    />
                  </Button>
                  <Text
                    className="italic text-gray-900_01 text-lg w-auto"
                    size="txtIBMPlexSansBoldItalic18"
                  >
                    +77 022 444 05 05
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    size="xs"
                  >
                    <Img
                      className="h-5"
                      src="images/img_communicationscommunication_gray_900_01.svg"
                      alt="communicationsc_One"
                    />
                  </Button>
                  <Text
                    className="italic text-gray-900_01 text-lg w-auto"
                    size="txtIBMPlexSansBoldItalic18"
                  >
                    jacob360@gmail.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 my-[55px] w-[43%] md:w-full">
            <div className="md:h-[691px] sm:h-[712px] h-[750px] relative w-full">
              <div className="md:h-[691px] sm:h-[712px] h-[750px] m-auto w-full">
                <div className="absolute md:h-[691px] sm:h-[712px] h-[748px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute md:h-[691px] sm:h-[712px] h-[748px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[121px] justify-start w-full">
                        <Img
                          className="h-80 md:h-auto mr-[212px] object-cover"
                          src="images/img_vector_320x446.png"
                          alt="vector_One"
                        />
                        <Img
                          className="h-[271px] md:h-auto md:ml-[0] ml-[268px] object-cover"
                          src="images/img_vector_177x246.png"
                          alt="vector_Two"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-[691px] inset-x-[0] mx-auto object-cover top-[0] w-[81%]"
                      src="images/img_img.png"
                      alt="img"
                    />
                  </div>
                  <Img
                    className="absolute h-[443px] object-cover right-[0] top-[8%]"
                    src="images/img_vector_443x589.png"
                    alt="vector_Three"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[467px] inset-x-[0] items-end justify-end mx-auto p-[73px] md:px-10 sm:px-5 w-[92%]"
                  style={{ backgroundImage: "url('images/img_group126.png')" }}
                >
                  <Img
                    className="h-[103px] mb-3.5 mt-[201px]"
                    src="images/img_elements.svg"
                    alt="elements"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[467px] left-[9%] top-[4%]"
                src="images/img_star.svg"
                alt="star"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[110px] w-[3%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Button
                className="flex h-10 items-center justify-center rotate-[90deg] rounded-[50%] w-10"
                shape="circle"
                color="gray_900_63"
                variant="outline"
              >
                <Img
                  className="h-[15px]"
                  src="images/img_info_gray_900_01.svg"
                  alt="info_One"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center rotate-[90deg] rounded-[50%] w-10"
                shape="circle"
                color="gray_900_63"
                variant="outline"
              >
                <Img
                  className="h-[15px]"
                  src="images/img_vector.svg"
                  alt="vector_Four"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center rotate-[90deg] rounded-[50%] w-10"
                shape="circle"
                color="gray_900_63"
                variant="outline"
              >
                <Img src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
            <Line className="bg-gray-900_75 h-[131px] w-0.5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
