<template>
    <div class="flex justify-start bg-white">
        <div class="mx-auto w-100">
            <h1 class="text-xl font-small">{{ $t("contact.label") }}</h1>
            <p class="mt-3 text-md-left">{{ $t("contact.heading") }}</p>

            <form class="mt-10">
                <div class="grid gap-6 row-cols-2">
                    <div class="form-floating mb-3">
                        <input type="email"
                               class="form-control form-input"
                               id="email"
                               placeholder="name@example.com"
                               required />
                        <label for="email">
                            {{
                            $t("contact.placeholder_email")
                            }}
                        </label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text"
                               class="form-control form-input"
                               id="name"
                               placeholder="Joe Jack"
                               required />
                        <label for="name">
                            {{
                            $t("contact.placeholder_name")
                            }}
                        </label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea :model="message"
                                  rows="5"
                                  class="form-control form-input"
                                  id="message"
                                  placeholder="Your message"
                                  required />
                        <label for="message">
                            {{
                            $t("contact.placeholder_message")
                            }}
                        </label>
                    </div>
                </div>
                <button @click="sendForm"
                        type="submit"
                        class="mt-5 rounded-3 bg-black px-10 py-2 text-white">
                    {{ $t("contact.submit") }}
                </button>
            </form>
        </div>
    </div>
</template>
<script>
// import axios from "axios";
import { ref } from "vue";
export default {
    setup() {
        const message = ref(null);
        function sendForm() {
            // try {
            //     axios.post("contact.submit");
            // } catch (e) {
            //     console.log(e);
            // }
        }
        return { message, sendForm };
    },
};
</script>
<style scoped>
    .form-input {
        background-color: white !important;
        border: 0px 0px 1px 0px !important;
        border-color: black !important;
        border-radius: 0px;
    }
</style>
