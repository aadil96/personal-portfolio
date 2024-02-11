import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const ContactPage: React.FC = () => {
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
          <div className="font-ibmplexsans h-[280px] md:h-[357px] ml-12 md:ml-[0] mr-[142px] mt-[101px] relative w-[34%]">
            <Line className="absolute bg-gradient  bottom-[4%] h-1 inset-x-[0] mx-auto w-full" />
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
                size="txtIBMPlexSans20"
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
        <div className="bg-white-A700 flex flex-1 md:flex-col flex-row font-ibmplexsans gap-[30px] items-center justify-start p-[114px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[31%] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="italic text-gray-900_01 text-lg w-auto"
                size="txtIBMPlexSansSemiBoldItalic18"
              >
                Contact
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 uppercase w-auto"
                size="txtIBMPlexSansBold48"
              >
                Reach out me
              </Text>
            </div>
            <Text
              className="leading-[24.00px] mt-[25px] text-base text-gray-900_01 tracking-[-0.48px]"
              size="txtIBMPlexSansRegular16"
            >
              <>
                249 king Sir, 05th Floor, Ultra House Building,
                <br />
                Melboune, VIC 3000, London.
              </>
            </Text>
            <Text
              className="mt-[93px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
              size="txtIBMPlexSansBold32Gray90001"
            >
              +77 022 444 05 05
            </Text>
            <Text
              className="mt-5 md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
              size="txtIBMPlexSansBold32Gray90001"
            >
              jacob360@gmail.com
            </Text>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[75px] w-auto sm:w-full">
              <Text
                className="text-base text-gray-900_01 tracking-[-0.48px] uppercase w-auto"
                size="txtIBMPlexSansMedium16Gray90001"
              >
                Facebook
              </Text>
              <Text
                className="text-base text-gray-900_01 tracking-[-0.48px] uppercase w-auto"
                size="txtIBMPlexSansMedium16Gray90001"
              >
                Twitter
              </Text>
              <Text
                className="text-base text-gray-900_01 tracking-[-0.48px] uppercase w-auto"
                size="txtIBMPlexSansMedium16Gray90001"
              >
                Instagram
              </Text>
              <Text
                className="text-base text-gray-900_01 tracking-[-0.48px] uppercase w-auto"
                size="txtIBMPlexSansMedium16Gray90001"
              >
                Linkedin
              </Text>
            </div>
          </div>
          <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-start md:mt-0 my-[97px] p-[63px] md:px-10 sm:px-5 w-[56%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                    size="txtIBMPlexSansBold40WhiteA700"
                  >
                    any project?
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-[45px] items-center justify-between mt-[46px] w-full">
                    <Input
                      name="name"
                      placeholder="Name"
                      className="font-medium p-0 placeholder:text-white-A700_a2 text-base text-left uppercase w-full"
                      wrapClassName="sm:flex-1 sm:w-full"
                      type="text"
                    ></Input>
                    <Input
                      name="email_One"
                      placeholder="Email"
                      className="font-medium p-0 placeholder:text-white-A700_a2 text-base text-left uppercase w-full"
                      wrapClassName="sm:flex-1 sm:w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start mt-14 w-[605px] md:w-full">
                    <Text
                      className="text-base text-white-A700_a2 uppercase w-auto"
                      size="txtIBMPlexSansMedium16WhiteA700a2"
                    >
                      Message
                    </Text>
                    <Line className="bg-white-A700 h-px w-full" />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start mt-4 w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_mdilinkvariant.svg"
                      alt="mdilinkvariant"
                    />
                    <Text
                      className="text-base text-white-A700_a2 uppercase w-auto"
                      size="txtIBMPlexSansMedium16WhiteA700a2"
                    >
                      Attach file
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
                  <Button
                    className="cursor-pointer flex h-14 items-center justify-center min-w-[211px]"
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
                      Submit now
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
