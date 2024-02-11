import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const WorksPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ibmplexserif items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
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
            <div className="flex font-ibmplexsans h-[280px] md:h-[357px] justify-end ml-12 md:ml-[0] mr-[145px] mt-[101px] relative w-[33%]">
              <Line className="bg-gradient  h-1 mb-[109px] mt-auto w-[87%]" />
              <div className="absolute flex flex-col gap-5 h-full inset-[0] items-start justify-start m-auto w-auto">
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
                  size="txtIBMPlexSans20"
                >
                  Services
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl uppercase w-auto"
                  size="txtIBMPlexSansBold20"
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
                <Img
                  className="h-5 w-5"
                  src="images/img_globe.svg"
                  alt="globe"
                />
              </div>
              <div className="bg-white-A700 flex flex-col h-10 items-center justify-start p-[9px] rounded-[50%] w-10">
                <Img className="h-5 w-5" src="images/img_info.svg" alt="info" />
              </div>
            </div>
            <div className="flex flex-col font-ibmplexsans items-center justify-start mb-[1129px] mt-[30px] mx-auto">
              <Text
                className="leading-[22.00px] text-base text-white-A700 w-full"
                size="txtIBMPlexSans16"
              >
                Copyright ©2022 Jacob Jones. All right reserved.
              </Text>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col font-ibmplexsans md:gap-10 gap-16 justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-end p-14 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[59px] mt-11 w-auto sm:w-full">
                <Text
                  className="italic text-gray-900_01 text-lg w-auto"
                  size="txtIBMPlexSansSemiBoldItalic18"
                >
                  Work
                </Text>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 uppercase w-auto"
                  size="txtIBMPlexSansBold48"
                >
                  Recent project
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[59px] mt-[43px] w-[82%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[145px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="italic text-gray-900_01 text-lg w-auto"
                            size="txtIBMPlexSansSemiBoldItalic18"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                            size="txtIBMPlexSansBold40"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          color="white_A700"
                        >
                          <Img
                            className="h-[38px]"
                            src="images/img_arrowleft_gray_900_01.svg"
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                      <Img
                        className="md:flex-1 h-[248px] sm:h-auto object-cover w-[315px] md:w-full"
                        src="images/img_img_248x315.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="italic text-gray-900_01 text-lg w-auto"
                            size="txtIBMPlexSansSemiBoldItalic18"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                            size="txtIBMPlexSansBold40"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          color="white_A700"
                        >
                          <Img
                            className="h-[38px]"
                            src="images/img_arrowleft_gray_900_01.svg"
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                      <Img
                        className="flex-1 md:flex-none h-[248px] sm:h-auto max-h-[248px] object-cover sm:w-[]"
                        src="images/img_img_1.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="italic text-gray-900_01 text-lg w-auto"
                            size="txtIBMPlexSansSemiBoldItalic18"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                            size="txtIBMPlexSansBold40"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          color="white_A700"
                        >
                          <Img
                            className="h-[38px]"
                            src="images/img_arrowleft_gray_900_01.svg"
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                      <Img
                        className="md:flex-1 h-[248px] sm:h-auto object-cover w-[315px] md:w-full"
                        src="images/img_img_2.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-[200px]">
                        <div className="flex flex-col gap-4 items-start justify-start w-[200px]">
                          <Text
                            className="italic text-gray-900_01 text-lg w-auto"
                            size="txtIBMPlexSansSemiBoldItalic18"
                          >
                            UX case study
                          </Text>
                          <Text
                            className="leading-[40.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                            size="txtIBMPlexSansBold40"
                          >
                            <>
                              Bally
                              <br />
                              Website
                              <br />
                              Research
                            </>
                          </Text>
                        </div>
                        <Button
                          className="flex h-16 items-center justify-center w-16"
                          color="white_A700"
                        >
                          <Img
                            className="h-[38px]"
                            src="images/img_arrowleft_gray_900_01.svg"
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                      <Img
                        className="md:flex-1 h-[248px] sm:h-auto object-cover w-[315px] md:w-full"
                        src="images/img_img_3.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[577px] mt-16 w-[14%] md:w-full">
                <Button
                  className="cursor-pointer flex h-14 items-center justify-center min-w-[199px]"
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
                  <div className="font-medium text-left text-lg">Load more</div>
                </Button>
              </div>
            </div>
            <div className="bg-gradient  flex flex-col gap-[47px] items-center justify-end md:ml-[0] ml-[115px] p-12 md:px-10 sm:px-5 w-[76%] md:w-full">
              <div className="flex flex-col gap-11 items-center justify-start mt-[52px] w-[89%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="italic text-center text-lg text-white-A700 w-auto"
                    size="txtIBMPlexSansSemiBoldItalic18WhiteA700"
                  >
                    Testimonial
                  </Text>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 uppercase w-auto"
                    size="txtIBMPlexSansBold48WhiteA700"
                  >
                    What they says
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="md:h-[476px] h-[477px] relative w-[35%] md:w-full">
                        <Img
                          className="absolute h-[242px] left-[0] object-cover top-[0]"
                          src="images/img_group468.png"
                          alt="group468"
                        />
                        <Img
                          className="absolute h-[476px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_img_476x345.png"
                          alt="img"
                        />
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-14 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="italic leading-[40.00px] max-w-[545px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                            size="txtIBMPlexSansSemiBoldItalic32"
                          >
                            “ File storage made easy – including powerful
                            features you won’t find anywhere else. Whether
                            you’re.”
                          </Text>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtIBMPlexSansSemiBold24"
                            >
                              -Larry Diamond
                            </Text>
                            <Text
                              className="text-base text-white-A700 tracking-[-0.16px] w-auto"
                              size="txtIBMPlexSansMedium16"
                            >
                              Chief Executive Officer, Besnik
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[60px] w-[134px]"
                          src="images/img_arrows.svg"
                          alt="arrows"
                        />
                      </div>
                    </div>
                    <Line className="bg-white-A700 h-px w-full" />
                  </div>
                </div>
              </div>
              <Img
                className="h-[88px] w-[1006px]"
                src="images/img_logos.svg"
                alt="logos"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
