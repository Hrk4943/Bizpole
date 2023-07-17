import React from "react";

function Footer() {
  return (
    <>
      <div className="absolute bottom-0 w-full">
        <footer className="bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-auto mb-4 md:mb-0 mx-auto text-center">
                <p className="uppercase text-sm text-gray-500">
                  Powered By Quinoid Business Solutions
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
