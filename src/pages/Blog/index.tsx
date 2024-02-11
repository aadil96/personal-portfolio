import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const BlogPage: React.FC = () => {
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
          <div className="flex font-ibmplexsans h-[280px] md:h-[357px] justify-end ml-12 md:ml-[0] mr-[145px] mt-[101px] relative w-[33%]">
            <Line className="bg-gradient  h-1 mb-[60px] mt-auto w-[77%]" />
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
                size="txtIBMPlexSans20"
              >
                Works
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSansBold20"
              >
                Blogs
              </Text>
              <Text
                className="text-center text-white-A700 text-xl uppercase w-auto"
                size="txtIBMPlexSansBold20"
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
        <div className="bg-white-A700 flex flex-1 flex-col font-ibmplexsans items-start justify-start p-[100px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start mb-[75px] md:ml-[0] ml-[15px] w-[79%] md:w-full">
            <div className="flex flex-col gap-[46px] items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Text
                  className="italic text-center text-gray-900_01 text-lg w-auto"
                  size="txtIBMPlexSansSemiBoldItalic18"
                >
                  Blog
                </Text>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 uppercase w-auto"
                  size="txtIBMPlexSansBold48"
                >
                  Read my blog
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[86px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_img_260x315.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-[315px]">
                      <Text
                        className="italic text-gray-900_01 text-lg w-auto"
                        size="txtIBMPlexSansSemiBoldItalic18"
                      >
                        10 July, 2022
                      </Text>
                      <Text
                        className="leading-[30.00px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                        size="txtIBMPlexSansBold24"
                      >
                        <>
                          12 unique example of
                          <br />
                          portfolio websites
                        </>
                      </Text>
                    </div>
                    <Line className="bg-gray-900_6c h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_img_4.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-[315px]">
                      <Text
                        className="italic text-gray-900_01 text-lg w-auto"
                        size="txtIBMPlexSansSemiBoldItalic18"
                      >
                        10 July, 2022
                      </Text>
                      <Text
                        className="leading-[30.00px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                        size="txtIBMPlexSansBold24"
                      >
                        <>
                          12 unique example of
                          <br />
                          portfolio websites
                        </>
                      </Text>
                    </div>
                    <Line className="bg-gray-900_6c h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_img_5.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-[315px]">
                      <Text
                        className="italic text-gray-900_01 text-lg w-auto"
                        size="txtIBMPlexSansSemiBoldItalic18"
                      >
                        10 July, 2022
                      </Text>
                      <Text
                        className="leading-[30.00px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                        size="txtIBMPlexSansBold24"
                      >
                        <>
                          12 unique example of
                          <br />
                          portfolio websites
                        </>
                      </Text>
                    </div>
                    <Line className="bg-gray-900_6c h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col items-center justify-start w-[18%] md:w-full">
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
        </div>
      </div>
    </>
  );
};

export default BlogPage;
