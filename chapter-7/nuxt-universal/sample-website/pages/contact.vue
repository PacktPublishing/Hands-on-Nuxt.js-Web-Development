<template>
  <!-- article -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div data-aos="fade-in">
            <img :src="$loadAssetImage(post.image.src)" :alt="post.image.alt">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div class="container-text-about">

            <ValidationObserver v-slot="{ passes, dirty, invalid, validated }" ref="observer">
              <form class="form-contact form-submit" v-on:submit.prevent="passes(processForm)" novalidate>

                 <!-- grid container -->
                 <div class="grid-container">

                  <!-- grid x -->
                  <div class="grid-x grid-padding-x">

                    <div class="medium-12 cell">
                      <div class="alert callout" v-if="invalid && validated">
                        <p><i class="fi-alert"></i> There are some errors in your form.</p>
                      </div>
                    </div>

                    <div class="large-6 medium-12 cell">
                      <ValidationProvider name="name" rules="required|min:3" v-slot="{ errors, invalid, validated }">
                        <label v-bind:class="[invalid && validated ? {'is-invalid-label': '{_field_}'} : '']">Name
                          <input
                            type="text"
                            name="name"
                            v-model.trim="name"
                            v-bind:class="[invalid && validated ? {'is-invalid-input': '{_field_}'} : '']"
                          >
                          <span class="form-error">{{ errors[0] }}</span>
                        </label>
                      </ValidationProvider>

                    </div>

                    <div class="large-6 medium-12 cell">
                      <ValidationProvider name="email" rules="required|min:3" v-slot="{ errors, invalid, validated }">
                        <label v-bind:class="[invalid && validated ? {'is-invalid-label': '{_field_}'} : '']">Email
                          <input
                            type="email"
                            name="email"
                            v-model.trim="email"
                            v-bind:class="[invalid && validated ? {'is-invalid-input': '{_field_}'} : '']"
                          >
                          <span class="form-error">{{ errors[0] }}</span>
                        </label>
                      </ValidationProvider>

                    </div>

                    <div class="medium-12 cell">
                      <ValidationProvider name="subject" rules="required|min:3" v-slot="{ errors, invalid, validated }">
                        <label v-bind:class="[invalid && validated ? {'is-invalid-label': '{_field_}'} : '']">Subject
                          <input
                            type="text"
                            name="subject"
                            v-model.trim="subject"
                            v-bind:class="[invalid && validated ? {'is-invalid-input': '{_field_}'} : '']"
                          >
                          <span class="form-error">{{ errors[0] }}</span>
                        </label>
                      </ValidationProvider>

                    </div>

                    <div class="medium-12 cell">
                      <ValidationProvider name="message" rules="required|min:3" v-slot="{ errors, invalid, validated }">
                        <label v-bind:class="[invalid && validated ? {'is-invalid-label': '{_field_}'} : '']">Message
                          <textarea
                            type="text"
                            name="message"
                            rows="10"
                            v-model.trim="message"
                            v-bind:class="[invalid && validated ? {'is-invalid-input': '{_field_}'} : '']"
                          ></textarea>
                          <span class="form-error">{{ errors[0] }}</span>
                        </label>
                      </ValidationProvider>

                    </div>

                    <div class="cell small-12">
                      <input type="submit" class="button button-submit" value="Submit">
                      <input type="hidden" name="task" value="message" />
                    </div>

                    <div class="cell small-12">
                      <div class="success callout" v-if="submitted && !dirty">
                        <p><i class="fi-like"></i>&nbsp; Thank you for contacting me.</p>
                      </div>
                    </div>

                  </div>
                  <!-- grid x -->

                </div>
                <!-- grid container -->

              </form>
            </ValidationObserver>
          </div>

        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- article -->
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'

const post = {
  id: 4,
  slug: 'contact',
  title: 'Contact',
  excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  content: '<p>(Contact) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<\/p><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
  image: {
    src: '/contact.jpg',
    alt: 'Sample alt 1',
    caption: ''
  }
}

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },

  data () {
    return {
      post: post,
      submitted: false,
      name: null,
      email: null,
      subject: null,
      message: null
    }
  },

  head () {
    return {
      title: this.post.title || 'all',
    }
  },

  methods:{
    clear () {
      this.name = null
      this.email = null
      this.subject = null
      this.message = null
    },
    processForm (event) {
      alert('Processing!')
      console.log('Posting to the server...')

      // Set submitted to true.
      this.submitted = true

      // Clear the form.
      this.clear()

      // Reset the form.
      // https://logaretm.github.io/vee-validate/guide/validation-observer.html#resetting-forms
      this.$refs.observer.reset()
    }
  },
}
</script>
