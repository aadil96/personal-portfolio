import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const ServicesPage: React.FC = () => {
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
          <div className="font-ibmplexsans h-[280px] md:h-[357px] ml-12 md:ml-[0] mr-[135px] mt-[101px] relative w-[36%]">
            <Line className="absolute bg-gradient  h-1 inset-x-[0] mx-auto top-[42%] w-full" />
            <div className="absolute flex flex-col gap-5 h-full inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSans20"
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
                size="txtIBMPlexSansBold20"
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
              Copyright ©2022 Jacob Jones. All right reserved.
            </Text>
          </div>
        </Sidebar>
        <div className="bg-white-A700 flex flex-1 flex-col font-ibmplexsans gap-11 items-start justify-start p-20 md:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[35px] w-auto sm:w-full">
            <Text
              className="italic text-gray-900_01 text-lg w-auto"
              size="txtIBMPlexSansSemiBoldItalic18"
            >
              Service
            </Text>
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 uppercase w-auto"
              size="txtIBMPlexSansBold48"
            >
              My Specialties
            </Text>
          </div>
          <div className="flex flex-col gap-[39px] items-center justify-start mb-[11px] md:ml-[0] ml-[35px] w-[84%] md:w-full">
            <List
              className="flex flex-col gap-[39px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 uppercase"
                      size="txtIBMPlexSansBold32Gray90001"
                    >
                      Web Design
                    </Text>
                    <Text
                      className="leading-[28.00px] md:ml-[0] ml-[325px] text-base text-gray-900_cc"
                      size="txtIBMPlexSans16Gray900cc"
                    >
                      <>
                        You can customize a template or make your own from
                        scratch, <br />
                        with an immersive library at your disposal. You can
                        customize a template
                      </>
                    </Text>
                    <Img
                      className="h-10 md:ml-[0] ml-[75px] w-10"
                      src="images/img_pluscircle.svg"
                      alt="pluscircle"
                    />
                  </div>
                  <Line className="bg-gray-900_6c h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 uppercase"
                      size="txtIBMPlexSansBold32Gray90001"
                    >
                      UI/UX Design
                    </Text>
                    <Text
                      className="leading-[28.00px] md:ml-[0] ml-[303px] text-base text-gray-900_cc"
                      size="txtIBMPlexSans16Gray900cc"
                    >
                      <>
                        You can customize a template or make your own from
                        scratch, <br />
                        with an immersive library at your disposal. You can
                        customize a template
                      </>
                    </Text>
                    <Img
                      className="h-10 md:ml-[0] ml-[75px] w-10"
                      src="images/img_pluscircle.svg"
                      alt="pluscircle"
                    />
                  </div>
                  <Line className="bg-gray-900_6c h-px w-full" />
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                  <Text
                    className="bg-clip-text bg-gradient  md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-transparent uppercase"
                    size="txtIBMPlexSansBold32Orange300"
                  >
                    Mobile Application
                  </Text>
                  <Img
                    className="h-[180px] md:h-auto md:mt-0 mt-0.5 object-cover"
                    src="images/img_img_180x430.png"
                    alt="img"
                  />
                  <Img
                    className="h-10 w-10"
                    src="images/img_pluscircle_gray_900_01.svg"
                    alt="pluscircle"
                  />
                </div>
                <Text
                  className="leading-[24.00px] mt-[30px] text-base text-gray-900_cc"
                  size="txtIBMPlexSans16Gray900cc"
                >
                  <>
                    You can customize a template or make your own from scratch,{" "}
                    <br />
                    with an immersive library at your disposal. You can
                    customize a template
                  </>
                </Text>
                <Line className="bg-gray-900_6c h-px mt-6 w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 uppercase"
                    size="txtIBMPlexSansBold32Gray90001"
                  >
                    User research
                  </Text>
                  <Text
                    className="leading-[28.00px] md:ml-[0] ml-[268px] text-base text-gray-900_cc"
                    size="txtIBMPlexSans16Gray900cc"
                  >
                    <>
                      You can customize a template or make your own from
                      scratch, <br />
                      with an immersive library at your disposal. You can
                      customize a template
                    </>
                  </Text>
                  <Img
                    className="h-10 md:ml-[0] ml-[75px] w-10"
                    src="images/img_pluscircle.svg"
                    alt="pluscircle_One"
                  />
                </div>
                <Line className="bg-gray-900_6c h-px w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
