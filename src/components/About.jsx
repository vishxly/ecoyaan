/* eslint-disable react/no-unescaped-entities */

const AboutPage = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl animate-fade-in-up">
            <span className="block">About Ecoyaan</span>
          </h2>
          <p className="mt-4 text-xl text-gray-800 animate-fade-in-up delay-100">
            Building a community for a sustainable world.
          </p>
          <div className="relative mt-8 animate-fade-in-up delay-200">
            <img
              className="w-full h-auto shadow-md rounded-xl"
              src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
              alt="Ecoyaan sustainable lifestyle partner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl opacity-25 animate-pulse delay-500"></div>
          </div>
        </div>
        <div className="mt-12">
          <div className="bg-gradient-to-r from-rose-100 to-teal-100 shadow overflow-hidden sm:rounded-lg animate-fade-in delay-200">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Our Mission
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-800">
                At Ecoyaan, we are more than just a platform. Our goal is to
                build a community of eco-conscious people who share a common
                vision and passion for a more sustainable world.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-green-100 transition-colors duration-300">
                  <dt className="text-sm font-medium text-gray-800">
                    Tips and Tricks
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Find tips and tricks to adopt a more eco-friendly and
                    low-waste lifestyle on our platform and social media pages.
                  </dd>
                </div>
                <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-green-100 transition-colors duration-300">
                  <dt className="text-sm font-medium text-gray-800">
                    Educational Content
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Explore videos, posts, and quizzes on climate change and
                    sustainability.
                  </dd>
                </div>
                <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:bg-green-100 transition-colors duration-300">
                  <dt className="text-sm font-medium text-gray-800">
                    Engage and Pledge
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Join events and pledges that invite you to adopt a more
                    sustainable lifestyle.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-8 animate-fade-in delay-300">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Our Values
            </h3>
            <dl className="mt-5 grid grid-cols-1 rounded-md bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
              <div className=" bg-rose-100 px-4 py-5 sm:p-6 hover:bg-green-200 transition-colors duration-300">
                <dt className="text-base font-normal text-gray-900">Trust</dt>
                <dd className="mt-1 flex items-baseline md:block lg:items-baseline text-gray-500 text-sm">
                  We value the trust of our community. We strive to be
                  transparent and honest in everything we do, from the content
                  we share today to sourcing our products in the future.
                </dd>
              </div>
              <div className="bg-teal-100 px-4 py-5 sm:p-6 hover:bg-green-200 transition-colors duration-300">
                <dt className="text-base font-normal text-gray-900">
                  Authenticity
                </dt>
                <dd className="mt-1 flex items-baseline md:block lg:items-baseline text-gray-500 text-sm">
                  We are genuine in our mission to promote sustainability and
                  environmental awareness. An authentic community of
                  eco-conscious people can inspire each other on the journey
                  towards sustainability.
                </dd>
              </div>
              <div className="bg-teal-100 px-4 py-5 sm:p-6 hover:bg-green-200 transition-colors duration-300">
                <dt className=" text-base font-normal text-gray-900">Impact</dt>
                <dd className="mt-1 flex items-baseline md:block lg:items-baseline text-gray-500 text-sm">
                  We measure our success by our impact on the planet and our
                  community. We aim to empower our sellers and customers to make
                  responsible choices that benefit their well-being and the
                  well-being of others.
                </dd>
              </div>
              <div className="bg-rose-100 px-4 py-5 sm:p-6 hover:bg-green-200 transition-colors duration-300">
                <dt className="text-base font-normal text-gray-900">
                  Fun & Engaging
                </dt>
                <dd className="mt-1 flex items-baseline md:block lg:items-baseline text-gray-500 text-sm">
                  Moving towards a sustainable lifestyle and the constant news
                  around climate change can be stressful. We aim to inject fun
                  and creativity into everything we do, from designing our
                  products to providing services.
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 animate-fade-in delay-400 ">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Our Story
            </h3>
            <div className="rounded-lg overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-gray-900shadow-lg">
              <div className="p-6">
                <p className="text-sm  mb-4">
                  We started Ecoyaan after watching an episode of "Our Planet
                  II", where we saw the devastating impact of plastic pollution
                  and climate change on the albatross birds. That moment ignited
                  our mission.
                </p>
                <p className="text-sm  mb-4">
                  Our research suggests that many Indians understand global
                  warming, yet access to sustainable practices and products
                  remains limited. We also noticed that there is a lack of
                  support for eco-friendly businesses.
                </p>
                <p className="text-sm  mb-4">
                  We created Ecoyaan to connect consumers, businesses, and
                  sustainability experts. We want to make it easy and convenient
                  for people to access eco-friendly products and services, learn
                  and share best practices, and support sustainability
                  initiatives.
                </p>
                <p className="text-sm  mb-4">
                  As founders, we are not perfect, but we are passionate. We
                  believe that every small step matters. Join us and be a part
                  of the Ecoyaan community — together, we'll make a difference.
                </p>
                <p className="text-sm  mb-4">
                  Connect with the founders on LinkedIn here:{" "}
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-indigo-100 transition-colors duration-300"
                  >
                    Abhishek Rao
                  </a>{" "}
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-indigo-100 transition-colors duration-300"
                  >
                    Sarwan Singh
                  </a>
                </p>
                <div className="mt-8">
                  <button className="bg-white text-green-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-100 transition-colors duration-300">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 animate-fade-in delay-500">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Meet the Team
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-6 py-4">
                  <img
                    className="w-32 h-32 object-cover"
                    src="https://raw.githubusercontent.com/yadavvshall/ecoyaan/main/src/assets/user1.png"
                    alt="Shruthi's profile"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">
                      Shruthi{" "}
                      <span className="font-light text-lg">(Social Media)</span>
                    </div>

                    <p className="text-gray-700 text-base">
                      Shruthi is in charge of our Instagram. She is a practising
                      Vegan and cares deeply about sustainability. Follow her
                      small business{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-300"
                      >
                        here
                      </a>
                    </p>
                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #SocialMedia
                    </span>
                  </div> */}
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-6 py-4">
                  <img
                    className="w-32 h-32 object-cover"
                    src="https://raw.githubusercontent.com/yadavvshall/ecoyaan/main/src/assets/user1.png"
                    alt="Urmil's profile"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">
                      Urmil{" "}
                      <span className="font-light text-lg">(Social Media)</span>
                    </div>
                    <p className="text-gray-700 text-base">
                      Urmil creates engaging content for us. She runs her own
                      sustainable apparel store with her sister and advocates
                      for slow fashion. Check out her business{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-300"
                      >
                        here
                      </a>
                    </p>
                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #SocialMedia
                    </span>
                  </div> */}
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-6 py-4">
                  <img
                    className="w-32 h-32 object-cover "
                    src="https://raw.githubusercontent.com/yadavvshall/ecoyaan/main/src/assets/user1.png"
                    alt="Divya's profile"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">
                      Divya{" "}
                      <span className="font-light text-lg">(UX Design)</span>
                    </div>

                    <p className="text-gray-700 text-base mt-2">
                      Divya creates user-friendly and engaging interfaces for
                      our platform. Check out more of her work on{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-300"
                      >
                        Behance
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="py-6 px-4">
                  <img
                    className="w-32 h-32 object-cover  "
                    src="https://raw.githubusercontent.com/yadavvshall/ecoyaan/main/src/assets/user1.png"
                    alt="Prashanith's profile"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">
                      Prashanith{" "}
                      <span className="font-light text-lg">(Engineering)</span>
                    </div>

                    <p className="text-gray-700 text-base mt-2">
                      Prashanith is our front-end engineer, who brings the UX
                      designs to life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-6 py-4">
                  <img
                    className="w-32 h-32 object-cover"
                    src="https://raw.githubusercontent.com/yadavvshall/ecoyaan/main/src/assets/user1.png"
                    alt="Sai Abhilash's profile"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">
                      Sai Abhilash{" "}
                      <span className="font-light text-lg">(Engineering)</span>
                    </div>

                    <p className="text-gray-700 text-base mt-2">
                      Sai Abhilash is our back-end engineer, who manages and
                      optimizes the infrastructure and logic of our platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-6 py-4">
                  <img
                    className="w-32 h-32 object-cover "
                    src="https://raw.githubusercontent.com/yadavvshall/ecoyaan/main/src/assets/user1.png"
                    alt="Team Ecoyaan's profile"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">
                      ???{" "}
                      <span className="font-light text-lg">(Team Ecoyaan)</span>
                    </div>

                    <p className="text-gray-700 text-base mt-2">
                      This spot awaits you. Check out our{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 transition-colors duration-300"
                      >
                        open positions
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
