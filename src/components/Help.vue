<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-1 justify-content-center">
        <div class="col-12">
          <div class="mt-4">
            <div class="pt-3">
              <div class="container">
                <div class="row">
                  <div>
                    <Back />
                    <h1>{{ $t('help.headline') }}</h1>
                    <p class="lead">{{ $t('help.introduction') }}</p>
                    <h2>{{ $t('help.groups.readers.headline') }}</h2>
                    <p class="lead" v-html="$t('help.groups.readers.introduction')"></p>
                    <ul>
                      <li>
                        <a
                          href="https://hypothes.is"
                          target="_blank"
                        >{{ $t('help.groups.readers.hypothesis') }}</a>
                      </li>
                      <li>
                        <a
                          href="https://www.zotero.org/groups/2362604/technik_ethik_zukunft_-_was_denkst_du/items"
                          target="_blank"
                        >{{ $t('help.groups.readers.zotero') }}</a>
                      </li>
                      <li>
                        <a
                          href="https://zocurelia.com/de/list?groupID=2362604&list_collections=1"
                          target="_blank"
                        >{{ $t('help.groups.readers.zocurelia') }}</a>
                      </li>
                    </ul>
                    <!-- <p class="lead">{{ $t('help.groups.readers.videointroduction') }}</p> -->
                    <h2>{{ $t('help.groups.organizers.headline') }}</h2>
                    <p class="lead">{{ $t('help.groups.organizers.introduction') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from "@/components/Back";

export default {
  components: {
    Back
  }
};
</script>
