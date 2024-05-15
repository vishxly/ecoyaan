import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-green-500 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Join the Sustainable Movement
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Discover eco-friendly products and embrace a greener lifestyle.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Products
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-100"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-500">
              Our Story
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Creating a Sustainable Future
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Ecoyaan, we are more than just a platform. Our vision is to
              build an eco-conscious community for people and products. Join us
              in our mission to create a more sustainable future for everyone.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-8 text-gray-900">
                    Eco-friendly Products
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We carefully curate eco-friendly and sustainable products that
                  are selected based on their environmental and social benefits.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-8 text-gray-900">
                    Eco-conscious Community
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our platform is designed to connect eco-conscious consumers
                  with sustainable businesses, fostering a community that values
                  transparency, ethics, and innovation.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-500">
              Featured Products
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover Our Curated Selection
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our carefully curated collection of eco-friendly and
              sustainable products that are good for you and the planet.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src="https://ecoyaan.com/images/Impact.png"
                alt=""
              />
              <p className="text-xl font-semibold leading-8 text-gray-900">
                Join our community in creating a more sustainable future for
                everyone
              </p>
              <p className="text-base leading-7 text-gray-600">
                At Ecoyaan, we are more than just a platform. Our vision is to
                build an eco-conscious community for people and products.
                Consider us your partner for all things sustainable. To keep you
                motivated on the journey, we will provide you with engaging
                information about climate change, the latest updates on climate
                policies and lifestyle tips that you can adopt to reduce your
                impact on the environment.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src="file:///C:/Users/91866/Downloads/videoframe_7466.png"
                alt=""
              />
              <p className="text-xl font-semibold leading-8 text-gray-900">
                Carefully curated Eco-friendly products
              </p>
              <p className="text-base leading-7 text-gray-600">
                We believe that every purchase you make can have a positive
                impact on the planet and the future. Soon, we will be connecting
                you with eco-friendly and sustainable products that are
                carefully selected based on their environmental and social
                benefits.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src="https://ecoyaan.com/images/OurStory4.png"
                alt=""
              />
              <p className="text-xl font-semibold leading-8 text-gray-900">
                For businesses that care deeply about sustainability
              </p>
              <p className="text-base leading-7 text-gray-600">
                Do you run a business that is committed to sustainability in
                every aspect of your work? Do you want to showcase your products
                to an incredible audience of eco-conscious consumers who care?
                If yes, then you are the perfect fit for our platform. Our
                community appreciates and supports businesses that are
                transparent, ethical, and innovative in their approach to
                sustainability. Contact us today:
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="#"
              className="text-base font-semibold leading-7 text-green-500 hover:text-green-600"
            >
              View All Products <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
