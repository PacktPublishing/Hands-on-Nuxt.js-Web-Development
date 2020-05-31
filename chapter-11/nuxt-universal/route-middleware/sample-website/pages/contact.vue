<template>
  <!-- article -->
  <div class="row">

    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div data-aos="fade-in">
            <img :src="requireImage(post.image.src)" :alt="post.image.alt">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div class="container-text-about" data-aos="fade-up">

            <p>{{ userAgent }}</p>

            <form class="form-contact form-submit" v-on:submit.prevent="processForm" novalidate action="/">

               <!-- grid container -->
               <div class="grid-container">

                <!-- grid x -->
                <div class="grid-x grid-padding-x">

                  <div class="medium-12 cell">
                    <div class="alert callout" v-show="errors.any()">
                      <p><i class="fi-alert"></i> There are some errors in your form.</p>
                    </div>
                  </div>

                  <div class="large-6 medium-12 cell">
                    <label v-bind:class="{'is-invalid-label': errors.has('name')}">Name
                      <input
                        type="text"
                        name="name"
                        placeholder="(required)"
                        v-bind:class="{'form-input': 'form-input', 'is-invalid-input': errors.has('name')}"
                        v-model.trim="name"
                        v-validate="'required|min:3'"
                      >
                      <span class="form-error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </label>
                  </div>

                  <div class="large-6 medium-12 cell">
                    <label v-bind:class="{'is-invalid-label': errors.has('email')}">Email
                      <input
                        type="email"
                        name="email"
                        placeholder="(required)"
                        v-bind:class="{'form-input': 'form-input', 'is-invalid-input': errors.has('email')}"
                        v-model.trim="email"
                        v-validate="'required|email'"
                      >
                      <span class="form-error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </label>
                  </div>

                  <div class="medium-12 cell">
                    <label v-bind:class="{'is-invalid-label': errors.has('subject')}">Subject
                      <input
                        type="text"
                        name="subject"
                        placeholder="(required)"
                        v-bind:class="{'form-input': 'form-input', 'is-invalid-input': errors.has('subject')}"
                        v-model.trim="subject"
                        v-validate="'required|min:3'"
                      >
                      <span class="form-error" v-show="errors.has('subject')">{{ errors.first('subject') }}</span>
                    </label>
                  </div>

                  <div class="medium-12 cell">
                    <label v-bind:class="{'is-invalid-label': errors.has('message')}">Message
                      <textarea
                        placeholder="(required)"
                        name="message"
                        rows="10"
                        v-bind:class="{'form-input': 'form-input', 'is-invalid-input': errors.has('message')}"
                        v-model.trim="message"
                        v-validate="{ required: true, regex: /^(?!.*<[^>]+>).*/ }"
                      ></textarea>
                      <span class="form-error" v-show="errors.has('message')">{{ errors.first('message') }}</span>
                    </label>
                  </div>

                  <div class="cell small-12">
                    <input type="submit" class="button button-submit" value="Submit">
                    <input type="hidden" name="task" value="message" />
                  </div>

                  <div class="cell small-12">
                    <div class="success callout" v-show="validated">
                      <p><i class="fi-like"></i>&nbsp; Thank you for contacting me.</p>
                    </div>
                  </div>

                </div>
                <!-- grid x -->

              </div>
              <!-- grid container -->

            </form>
          </div>

        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- article -->
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import AOS from 'aos'

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
  layout: 'contact',
  asyncData (context) {
    context.app.$myInjectedCombinedFunction('works with context')

    return {
      userAgent: context.userAgent
    }
  },
  data () {
    return {
      post: post,
      validated: false,
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
  beforeCreate () {
    // console.log(this.$myFooClientMethod('test')) // get an error: this.$myFooClientMethod is not a function
    // Only run this on the server-side.
    if (process.server) {
      console.log(this.$myBarServerMethod('test'))
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
      this.validated = false
      this.$validator.validate().then(valid => {
        if (!valid) {
          // do stuff if not valid.
          return
        }
        var form = document.getElementById('form')
        var formData = new FormData(form)

        this.validated = true
        this.clear()
        this.$validator.reset()

        axios.post('/contact/', formData)
        .then((response) => {
          // success callback
        }, (response) => {
          // error callback
        })
      })
    }
  },
  mounted () {
    this.$myInjectedCombinedFunction('works in mounted')
    console.log(this.$myFooClientMethod('test')) // This is a foo example: test foo client only!
    // console.log(this.$myBarServerMethod('test')) // TypeError: this.$myBarServerMethod is not a function
    // AOS scroll reveal.
    // http://michalsnik.github.io/aos/
    AOS.init({
      duration: 1200,
    })
  }
}
</script>

<style lang="less">
.form-error {
  display: block;
}
</style>
