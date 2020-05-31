<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div data-aos="fade-in">
            <img :src="post.featured_image" :alt="post.post_title">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div class="container-text-about" data-aos="fade-up">

            <form class="form-contact form-submit" data-abide novalidate>

               <!-- grid container -->
               <div class="grid-container">

                <!-- grid x -->
                <div class="grid-x grid-padding-x">

                  <div class="medium-12 cell">
                    <div data-abide-error class="alert callout" style="display: none;">
                      <p><i class="fi-alert"></i> There are some errors in your form.</p>
                    </div>
                  </div>

                  <div class="large-6 medium-12 cell">
                    <label>Name
                      <input type="text" name="sender-name" class="form-input" placeholder="(required)" required>
                      <span class="form-error">Please fill this out, it's required.</span>
                    </label>
                  </div>

                  <div class="large-6 medium-12 cell">
                    <label>Email
                      <input type="email" name="sender-email" class="form-input" placeholder="(required)" pattern="email" required>
                      <span class="form-error">Please fill this out, it's required. Or, it is invalid.</span>
                    </label>
                  </div>

                  <div class="medium-12 cell">
                    <label>Subject
                      <input type="text" name="sender-subject" class="form-input" placeholder="(required)" required>
                      <span class="form-error">Please fill this out, it's required.</span>
                    </label>
                  </div>

                  <div class="medium-12 cell">
                    <label>Messager
                      <textarea placeholder="(required)" name="sender-message" class="form-input" rows="10" required></textarea>
                      <span class="form-error">Please fill this out, it's required.</span>
                    </label>
                  </div>

                  <div class="cell small-12">
                    <input type="submit" class="button button-submit" value="Submit">
                    <input type="hidden" name="task" value="message" />
                  </div>

                  <div class="cell small-12">
                    <div class="success callout" style="display: none;">
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
  <!-- row -->

</template>

<script>
import $ from 'jquery'

export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.get('/api/page/contact')
      return {
        post: data
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },

  head () {
    return {
      title: this.post.post_title || 'all',
    }
  },

  mounted() {
    $(document).foundation()
  }
}
</script>
