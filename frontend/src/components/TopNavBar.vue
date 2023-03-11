<template>
  <div>
    <header>
      <nav class="px-4 fixed top-0 left-0 w-full h-12 md:h-16 z-20 bg-black shadow-lg shadow-gray-800">
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <a href="/" class="flex items-center pt-3 md:pt-1">
            <img
              src="/static/img/logo site.png"
              class="h-6 mr-3 md:h-9 rounded-lg"
              alt="Logo"
            />
          </a>
          <div class="hidden lg:flex md:order-2">
            <button
            to="/contact"
              type="button"
              class="md:text-white md:bg-brightteal md:hover:bg-emerald-800 focus:ring-4 md:font-medium md:rounded-lg md:text-base px-5 py-2.5 text-center mr-3 md:mr-0"
            >
              Contact
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base font-bold md:border-0 rounded-sm"
            >
              <li class="group hover:rounded hover:bg-brightteal p-2">
                <RouterLink
                  to="/"
                  class="text-brightteal font-bold group-hover:text-gray-50 p-4 transition-colors"
                  aria-current="page"
                  ><span class=" ">Home</span></RouterLink
                >
              </li>
              <li
                class="group hover:rounded hover:text-gray-50 hover:bg-brightteal p-2"
              >
                <RouterLink
                  to="/blog"
                  class="text-brightteal font-bold group-hover:text-gray-50 p-4 transition-colors"
                  aria-current="page"
                >
                  Blog</RouterLink
                >
              </li>
              <li
                class="group hover:rounded hover:bg-brightteal hover:text-gray-50 p-2"
              >
                <RouterLink
                  to="/project"
                  class="text-brightteal font-bold group-hover:text-gray-50 p-4 transition-colors"
                  aria-current="page"
                >
                  Models</RouterLink
                >
              </li>
              <li
                class="group hover:rounded hover:bg-brightteal hover:text-gray-50 p-2"
              >
                <RouterLink
                  to="/photography"
                  class="text-brightteal font-bold group-hover:text-gray-50 p-4 transition-colors"
                  aria-current="page"
                >
                  Photography</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
