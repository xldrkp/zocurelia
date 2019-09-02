<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="$i18nRoute({ name: 'home' })">
        <i class="fa fa-users"></i>
        &nbsp;
        <b>Zocurelia</b>
        <span class="subline">Zotero Curated Reading Lists Annotated</span>
      </router-link>
      <button
        class="navbar-toggler navbar-toggler-right border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbar16"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar16">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'help' })">{{ $t('navigation.help') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'about' })">{{ $t('navigation.about') }}</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'settings' })" replace>{{ $t('navigation.settings') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="btn navbar-btn ml-md-2 btn-sm btn-light text-dark"
              :to="$i18nRoute({ name: 'new' })"
              replace
            >{{ $t('navigation.new') }}</router-link>
          </li>
          <li class="nav-item">
            <ShowHypothesisAccess />
          </li>
          <li class="nav-item">
            <LangSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ShowHypothesisAccess from "@/components/ShowHypothesisAccess";
import LangSwitcher from "@/components/LangSwitcher";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navigation",
  components: {
    ShowHypothesisAccess,
    LangSwitcher
  },
  methods: {
    ...mapActions(["create"])
  },
  computed: {
    ...mapGetters(["get_init"])
  }
};
</script>
