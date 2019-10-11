<template>
  <div>
    <div class="keyvisual">
      <div class="container">
        <div class="align-items-center d-flex" style="height: 90vh">
          <div class="container">
            <div class="row">
              <div class="col-md-12 px-md-5">
                <h1 class="display-3 mb-4">{{ $t('home.mainclaim') }}</h1>
                <p class="lead mb-4">
                  {{ $t('home.subclaim') }}
                </p>
                <router-link
                  class="btn btn-primary btn-lg my-4"
                  :to="$i18nRoute({ name: 'list', query: { groupID: '2362604', list_collections: 1 } })"
                >{{ $t('home.action-button') }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-3">
      <div class="container">
        <div class="row pb-1 justify-content-center">
          <div class="col-12">
            <div class="mt-2">
              <div class="container">
                <div class="row pt-5">
                  <div class="col-lg-6 col-md-12 text-center text-md-left">
                    <h1>{{ $t('home.motivation-idea.headline') }}</h1>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <p class="lead text-break">
                      <img
                        class="float-left img-fluid motivation-logo"
                        src="@/assets/img/zotero.png"
                        alt
                      />
                      <span v-html="$t('home.motivation-idea.zotero')"></span>
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <p class="lead text-break">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="float-left img-fluid motivation-logo"
                        height="28"
                        viewBox="0 0 24 28"
                        width="24"
                      >
                        <path d="M3.886 3.945H21.03v16.047H3.886z" fill="#fff" />
                        <path
                          d="M0 2.005C0 .898.897 0 2.005 0h19.99C23.102 0 24 .897 24 2.005v19.99A2.005 2.005 0 0 1 21.995 24H2.005A2.005 2.005 0 0 1 0 21.995V2.005zM9 24l3 4 3-4H9zM7.008 4H4v16h3.008v-4.997C7.008 12.005 8.168 12.01 9 12c1 .007 2.019.06 2.019 2.003V20h3.008v-6.891C14.027 10 12 9.003 10 9.003c-1.99 0-2 0-2.992 1.999V4zM19 19.987c1.105 0 2-.893 2-1.994A1.997 1.997 0 0 0 19 16c-1.105 0-2 .892-2 1.993s.895 1.994 2 1.994z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <span v-html="$t('home.motivation-idea.hypothesis')"></span>
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center text-center">
                  <div class="col-6 pt-4">
                    <p class="lead">
                      <span v-html="$t('home.motivation-idea.zocurelia')"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row pt-5">
                  <div class="col-md-12 text-center text-md-left">
                    <h1>{{ $t('home.features.headline') }}</h1>
                    <p class="lead">
                      <span v-html="$t('home.features.subline')"></span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- <div class="py-3"> -->
              <!-- First row -->
              <div>
                <div class="row d-flex justify-content-between">
                  <div class="col-md-4 col-lg-3 p-4">
                    <h4 class="my-3">
                      <b>{{ $t('home.features.collect.headline') }}</b>
                    </h4>
                    <img
                      class="img-fluid d-block img-feature"
                      src="@/assets/img/features1.png"
                      width="1500"
                    />
                    <p>{{ $t('home.features.collect.description') }}</p>
                  </div>
                  <div class="col-md-4 col-lg-3 p-4">
                    <h4 class="my-3">
                      <b>{{ $t('home.features.curate.headline') }}</b>
                    </h4>
                    <img
                      class="img-fluid d-block img-feature"
                      src="@/assets/img/features2.png"
                      width="1500"
                    />
                    <p>{{ $t('home.features.curate.description') }}</p>
                  </div>
                  <div class="col-md-4 col-lg-3 p-4">
                    <h4 class="my-3">
                      <b>{{ $t('home.features.tag.headline') }}</b>
                    </h4>
                    <img
                      class="img-fluid d-block img-feature"
                      src="@/assets/img/features3.png"
                      width="1500"
                    />
                    <p>{{ $t('home.features.tag.description') }}</p>
                  </div>
                </div>
                <!-- Second row -->
                <div class="row d-flex justify-content-between">
                  <div class="col-md-4 col-lg-3 p-4">
                    <h4 class="my-3">
                      <b>{{ $t('home.features.annotate.headline') }}</b>
                    </h4>
                    <img
                      class="img-fluid d-block img-feature"
                      src="@/assets/img/features4.png"
                      width="1500"
                    />
                    <p>{{ $t('home.features.annotate.description') }}</p>
                  </div>
                  <div class="col-md-4 col-lg-3 p-4">
                    <h4 class="my-3">
                      <b>{{ $t('home.features.share.headline') }}</b>
                    </h4>
                    <img
                      class="img-fluid d-block img-feature"
                      src="@/assets/img/features5.png"
                      width="1500"
                    />
                    <p>{{ $t('home.features.share.description') }}</p>
                  </div>
                  <div class="col-md-4 col-lg-3 p-4">
                    <h4 class="my-3">
                      <b>{{ $t('home.features.track.headline') }}</b>
                    </h4>
                    <img
                      class="img-fluid d-block img-feature"
                      src="@/assets/img/features6.png"
                      width="1500"
                    />
                    <p>{{ $t('home.features.track.description') }}</p>
                  </div>
                </div>
              </div>
              <hr />
              <!-- blog post -->
              <!-- <div class="py-5 text-center">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <p
                        class="mb-3"
                      >Want to read more on the motivation and idea behind Zocurelia and how you could use it?</p>
                      <a class="btn btn-primary" href="#">Read a Blog Post</a>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
