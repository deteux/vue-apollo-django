<template>
  <header id="top">
    <nav class="flex justify-between my-10 py-10 mx-8 font-bold items-center">
      <p class="text-xl text-center dark:text-gray-200 mx-10">
        From candid shots of people going about their day to stunning
        landscapes, I'm always on the lookout for that perfect shot. And hey, if
        you ever find yourself in need of a helping hand on a photography
        project, don't hesitate to slide into my DMs.
      </p>
      <a @click="show = !show" class="cursor-pointer flex gap-1">
        <font-awesome-icon :icon="['fas', 'fa-plus']" />
        <h1 class="text-xl hidden md:block">Information</h1>
      </a>
    </nav>
    <div
      v-if="show"
      class="w-screen mt-20 flex-col md:flex-row justify-start md:justify-between items-center md:items-start text-center"
    >
      <div class="flex flex-col md:w-1/3">
        <h2 class="my-4 text-2xl uppercase font-bold">About</h2>
        <p class="text-base mx-4 md:mx-0 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ipsam ullam laudantium quia quibusdam, eligendi aliquam atque
          provident quasi rerum, omnis sint tempore perspiciatis cum!
        </p>
        <a href="#">contact@lizz.com</a>
      </div>
      <div class="flex flex-col md:w-1/3">
        <ul>
          <h2 class="my-4 text-2xl uppercase font-bold">Equipment</h2>
          <li>Nikon</li>
          <li>iPhone</li>
          <li>GoPro</li>
        </ul>
      </div>
      <div class="flex flex-col md:w-1/3">
        <h2 class="my-4 text-xl uppercase font-bold">Social</h2>
        <div class="flex">
          <a href="#"
            ><font-awesome-icon :icon="['fab', 'fa-instagram']" /> blah</a
          >
          <a href="#"
            ><font-awesome-icon :icon="['fab', 'fa-linkedin']" />blah</a
          >
        </div>
      </div>
    </div>
  </header>

  <main
    v-if="result && result.allPhotos !== null && result.allPhotos.length > 0"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-12 mx-8"
  >
    <!-- Begin Project Grid -->
    <section
      v-for="(image, key) in result.allPhotos"
      :key="key"
      :style="`background-image: url('/dmedia/${image.image}')`"
      :class="`col-span-1 md:col-span-${
        key % 2 == 0 ? (key % 2) + 2 : key % 2
      } row-span-1 md:row-span-${
        key % 3 == 0 ? (key % 3) + 1 : key % 3
      } gap-4 relative bg-cover bg-center`"
    >
      <div class="absolute bottom-8 left-8 text-gray-100 uppercase text-left">
        <h1 class="text-2xl md:text-4xl font-bold">{{ image.location }}</h1>
        <h3 class="text-base">
          {{
            new Date(image.dateTaken).toLocaleString("en-us", {
              month: "long",
              year: "numeric",
            })
          }}
        </h3>
      </div>
      <div class="img-overlay absolute inset-0 h-full w-full opacity-0">
        <a
          href="#"
          class="absolute inset-0 text-center text-5xl text-gray-100 transform translate-y-1/2"
        >
          <font-awesome-icon :icon="['fas', 'fa-images']" />
          <h2 class="text-2xl uppercase">View</h2>
        </a>
      </div>
    </section>
  </main>

  <footer class="flex flex-cols justify-center text-center my-8">
    <a href="#top">
      <font-awesome-icon
        class="animate-bounce"
        :icon="['fas', 'fa-circle-arrow-up']"
      />
      <p class="text-xl text-gray-400">Back To Top</p></a
    >
  </footer>
</template>
<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, watch } from "vue";

export default {
  setup() {
    const show = ref(false);
    const query = gql`
      query {
        allPhotos {
          name
          location
          image
          height
          width
          dateTaken
        }
      }
    `;
    const { result, loading, error } = useQuery(query);
    watch(result, (value) => {
      console.log(value);
    });
    return { result, loading, error, show };
  },
};
</script>
<style lang="css">
html {
  scroll-behavior: smooth;
}

body {
  background-color: #121212;
  color: #ededed;
}

main {
  grid-auto-rows: minmax(300px, auto);
  grid-auto-flow: dense;
}

section {
  cursor: pointer;
  border-radius: 2px;
}

.img-overlay {
  transition: 0.3s ease-in;
  background-color: rgba(0, 0, 0, 0.65);
}

section:hover .img-overlay {
  opacity: 1;
}

h1,
h2 {
  letter-spacing: 2px;
}

.show {
  display: flex;
  height: 50vh;
}

@media screen and (max-width: 480px) {
  .show {
    height: 100%;
  }
}

#plus {
  position: relative;
}

nav a:before {
  position: absolute;
  top: 4px;
  right: 110%;
  font-family: "Font Awesome\ 5 Free";
  content: "\f067"; /* FontAwesome Unicode */
}
</style>
