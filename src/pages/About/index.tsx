import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const AboutPage: React.FC = () => {
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
            <div className="font-ibmplexsans h-[280px] md:h-[357px] ml-12 md:ml-[0] mr-[145px] mt-[101px] relative w-[33%]">
              <Line className="bg-gradient  h-1 mt-[66px] w-3/4" />
              <div className="absolute flex flex-col gap-5 h-full inset-[0] items-start justify-start m-auto w-auto">
                <Text
                  className="text-center text-white-A700 text-xl uppercase w-auto"
                  size="txtIBMPlexSans20"
                >
                  Home
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl uppercase w-auto"
                  size="txtIBMPlexSansBold20"
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
            <div className="flex flex-col font-ibmplexsans items-center justify-start mb-[680px] mt-[30px] mx-auto">
              <Text
                className="leading-[22.00px] text-base text-white-A700 w-full"
                size="txtIBMPlexSans16"
              >
                Copyright ©2022 Jacob Jones. All right reserved.
              </Text>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[50px] items-start justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[145px] items-start justify-start p-[57px] md:px-10 sm:px-5 w-full">
              <div className="md:h-[584px] h-[750px] mb-[3px] md:mt-0 mt-[43px] relative w-[33%] md:w-full">
                <div className="absolute flex flex-col gap-4 items-start justify-start left-[12%] top-[0] w-auto">
                  <Text
                    className="italic text-gray-900_01 text-lg w-auto"
                    size="txtIBMPlexSansSemiBoldItalic18"
                  >
                    Nice to meet you!
                  </Text>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 uppercase w-auto"
                    size="txtIBMPlexSansBold48"
                  >
                    Welcome to...
                  </Text>
                </div>
                <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <div className="flex h-[581px] justify-end relative w-full">
                      <Img
                        className="h-[43px] mb-[218px] ml-28 mt-auto"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <div className="absolute h-[581px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[581px] m-auto object-cover w-full"
                          src="images/img_image_581x488.png"
                          alt="image"
                        />
                        <Img
                          className="absolute bottom-[14%] h-[111px] right-[8%]"
                          src="images/img_sign.svg"
                          alt="sign"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start ml-auto mt-[-14.25px] w-auto z-[1]">
                    <div className="flex flex-col gap-3 items-start justify-start w-[430px] sm:w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-5xl sm:text-[38px] md:text-[44px] text-center text-transparent tracking-[-2.40px] uppercase w-auto"
                        size="txtIBMPlexSansBold48Orange300"
                      >
                        Jacob Jones
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.72px] w-auto"
                        size="txtIBMPlexSansMedium24"
                      >
                        <span className="text-gray-900_01 font-ibmplexsans font-bold italic">
                          Product Designer
                        </span>
                        <span className="text-gray-900_01 font-ibmplexsans font-medium">
                          {" "}
                        </span>
                        <span className="text-gray-900_01 font-ibmplexsans font-normal">
                          based in{" "}
                        </span>
                        <span className="text-gray-900_01 font-ibmplexsans font-bold italic">
                          London
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[52%] md:w-full">
                      <Button
                        className="cursor-pointer flex h-14 items-center justify-center min-w-[222px]"
                        rightIcon={
                          <div className="h-6 mb-0.5 ml-2 pl-1 pr-[5px] w-6 bg-gray-900_01 py-1">
                            <Img
                              className="h-3.5"
                              src="images/img_arrowleft.svg"
                              alt="arrow_left"
                            />
                          </div>
                        }
                        color="white_A700"
                        size="md"
                      >
                        <div className="font-medium text-left text-lg underline">
                          Download CV
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[187px] w-[44%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-3 items-center pb-[33px] sm:pr-5 pr-[33px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 flex-row items-center justify-between mr-52 my-0 w-[67%] md:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              shape="circle"
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
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              shape="circle"
                            >
                              <Img
                                className="h-5"
                                src="images/img_usersuser25.svg"
                                alt="usersuserTwentyFive"
                              />
                            </Button>
                            <Text
                              className="italic text-gray-900_01 text-lg w-auto"
                              size="txtIBMPlexSansBoldItalic18"
                            >
                              25 yrs
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-gray-900_6c w-full" />
                        <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[84px] items-center justify-start mr-[60px] my-0 w-[91%] md:w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              shape="circle"
                            >
                              <Img
                                className="h-5"
                                src="images/img_communicationscommunication_gray_900_01.svg"
                                alt="communicationsc"
                              />
                            </Button>
                            <Text
                              className="italic text-gray-900_01 text-lg w-auto"
                              size="txtIBMPlexSansBoldItalic18"
                            >
                              jacob360@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-10 items-center justify-center rounded-[50%] w-10"
                              shape="circle"
                            >
                              <Img
                                className="h-5"
                                src="images/img_placesicon28.svg"
                                alt="placesiconTwentyEight"
                              />
                            </Button>
                            <Text
                              className="italic text-gray-900_01 text-lg w-auto"
                              size="txtIBMPlexSansBoldItalic18"
                            >
                              United kingdom, London
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto">
                        <div className="flex flex-row font-ibmplexsans gap-3 items-center justify-start w-[315px]">
                          <Text
                            className="bg-clip-text bg-gradient  text-5xl sm:text-[38px] md:text-[44px] text-center text-transparent tracking-[-2.40px] uppercase w-auto"
                            size="txtIBMPlexSansBold48Orange300"
                          >
                            10+
                          </Text>
                          <Text
                            className="italic leading-[20.00px] text-gray-900_01 text-lg"
                            size="txtIBMPlexSansBoldItalic18"
                          >
                            <>
                              Years
                              <br />
                              experience...
                            </>
                          </Text>
                        </div>
                        <Text
                          className="leading-[24.00px] text-gray-900_01 text-lg"
                          size="txtJostRomanRegular18"
                        >
                          <span className="text-gray-900_01 font-ibmplexsans text-left font-normal">
                            Hello there! My name is{" "}
                          </span>
                          <span className="text-purple-300 font-ibmplexsans text-left font-normal">
                            Jacob Jones
                          </span>
                          <span className="text-gray-900_01 font-ibmplexsans text-left font-normal">
                            <>
                              .<br />I am a web designer & developer, and
                              I&#39;m very passionate and dedicated to my work.
                            </>
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-auto">
                        <div className="flex flex-row gap-3 items-center justify-start w-[315px]">
                          <Text
                            className="bg-clip-text bg-gradient  text-5xl sm:text-[38px] md:text-[44px] text-center text-transparent tracking-[-2.40px] uppercase w-auto"
                            size="txtIBMPlexSansBold48Orange300"
                          >
                            14
                          </Text>
                          <Text
                            className="italic leading-[20.00px] text-gray-900_01 text-lg"
                            size="txtIBMPlexSansBoldItalic18"
                          >
                            <>
                              Clients
                              <br />
                              Worldwide...
                            </>
                          </Text>
                        </div>
                        <Text
                          className="leading-[24.00px] text-gray-900_01 text-lg"
                          size="txtIBMPlexSans18"
                        >
                          <>
                            With 10+ years experience as a professional a
                            graphic designer,
                            <br />I have acquired the skills and knowledge
                            necessary to make your project a success.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start p-10 sm:px-5 w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-[580px] sm:w-full">
                      <Img
                        className="h-16 w-16"
                        src="images/img_ridoublequotesr.svg"
                        alt="ridoublequotesr"
                      />
                      <Text
                        className="italic leading-[32.00px] max-w-[504px] md:max-w-full text-white-A700 text-xl"
                        size="txtIBMPlexSansSemiBoldItalic20"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Faucibus sed sit ultrices et sed metus
                        sollicitudin.”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[145px] items-center justify-start p-[115px] md:px-10 sm:px-5 w-[83%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                <div className="flex flex-col font-ibmplexsans gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="italic text-lg text-white-A700 w-auto"
                    size="txtIBMPlexSansSemiBoldItalic18WhiteA700"
                  >
                    Experience
                  </Text>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 uppercase w-auto"
                    size="txtIBMPlexSansBold48WhiteA700"
                  >
                    My experience
                  </Text>
                </div>
                <Text
                  className="leading-[28.00px] mt-[21px] text-lg text-white-A700"
                  size="txtJostRomanRegular18WhiteA700"
                >
                  <span className="text-white-A700 font-ibmplexsans text-left font-normal">
                    Hello there! My name is{" "}
                  </span>
                  <span className="text-white-A700 font-ibmplexsans text-left font-normal">
                    Jacob Jones
                  </span>
                  <span className="text-white-A700 font-ibmplexsans text-left font-normal">
                    <>
                      .<br />I am a web designer & developer, and I&#39;m very
                      passionate and dedicated to my work.
                    </>
                  </span>
                </Text>
                <div className="flex flex-col font-ibmplexsans items-center justify-start mt-12 w-[68%] md:w-full">
                  <Button
                    className="cursor-pointer flex h-14 items-center justify-center min-w-[291px]"
                    rightIcon={
                      <div className="h-6 mb-0.5 ml-2 pl-1 pr-[5px] w-6 bg-gradient  py-1">
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
                      Download my resume
                    </div>
                  </Button>
                </div>
              </div>
              <List
                className="flex flex-col gap-10 items-start md:mt-0 my-1 w-auto"
                orientation="vertical"
              >
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="italic text-lg text-white-A700 w-auto"
                            size="txtIBMPlexSansBoldItalic18WhiteA700"
                          >
                            -2018 - Present
                          </Text>
                        </div>
                        <Text
                          className="mt-[3px] text-base text-right text-white-A700"
                          size="txtIBMPlexSansMedium16"
                        >
                          -Rolling Thunder
                        </Text>
                      </div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase"
                        size="txtIBMPlexSansBold32"
                      >
                        Lead UI/UX Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_6c h-px w-full" />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="italic text-lg text-white-A700 w-auto"
                            size="txtIBMPlexSansBoldItalic18WhiteA700"
                          >
                            -2018 - 2010
                          </Text>
                        </div>
                        <Text
                          className="text-base text-right text-white-A700"
                          size="txtIBMPlexSansMedium16"
                        >
                          -Locost Accessories
                        </Text>
                      </div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase"
                        size="txtIBMPlexSansBold32"
                      >
                        Senior UI/UX Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_6c h-px w-full" />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="italic text-lg text-white-A700 w-auto"
                            size="txtIBMPlexSansBoldItalic18WhiteA700"
                          >
                            -2008 - 2006
                          </Text>
                        </div>
                        <Text
                          className="mt-[3px] text-base text-right text-white-A700"
                          size="txtIBMPlexSansMedium16"
                        >
                          -Sagebrush
                        </Text>
                      </div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase"
                        size="txtIBMPlexSansBold32"
                      >
                        Junior UI/UX Designer
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-white-A700_6c h-px w-full" />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
