<template>
  <div class="pt-20">
    <div
      class="text-gray-400 font-medium font-barlow py-4 lg:py-16 flex flex-col gap-4"
    >
      <div class="flex flex-col items-center">
        <p class="my-10">
          <span
            class="text-brightteal uppercase text-5xl font-extrabold light-rgb(177, 71, 150)"
          >
            Hi! I'm Lizz!</span
          >
        </p>

        <p>
          <span class="text-gray-300 uppercase text-3xl font-extrabold">
            Software Developer</span
          >
        </p>
      </div>
      
    </div>
  </div>
  <!-- html -->
</template>
<script setup></script>
<style lang="scss">
p {
  align-items: center;
  text-align: center;
}
.glow {
  font-size: 20px;
  font-weight: 100;
  font-style: italic;
  color: #fff;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
}
.glow::-moz-selection {
  background-color: rgb(53, 177, 156);
  color: rgb(177, 71, 150);
}
.glow::selection {
  background-color: rgb(53, 177, 156);
  color: rgb(177, 71, 150);
}
.glow:focus {
  outline: none;
} /* Animate neon flicker */
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
      0 0 2rem rgb(177, 71, 150), 0 0 2rem rgb(177, 71, 150),
      0 0 6rem rgb(177, 71, 150), 0 0 1rem rgb(177, 71, 150),
      0 0 10rem rgb(177, 71, 150);
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff,
      0 0 1rem rgb(53, 177, 156), inset 0 0 1rem rgb(53, 177, 156),
      0 0 1rem rgb(53, 177, 156), inset 0 0 1rem rgb(53, 177, 156);
  }
  20%,
  24%,
  55% {
    text-shadow: none;
    box-shadow: none;
  }
}
</style>
