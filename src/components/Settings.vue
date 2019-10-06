<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-1 justify-content-center">
        <div class="col-12">
          <div class="mt-4">
            <div class="pt-3">
              <div class="container">
                <div class="row">
                  <h1 class="mb-4">{{ $t('settings.headline') }}</h1>
                  <HypothesisKey />
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
import HypothesisKey from "@/components/HypothesisKey";

export default {
  components: {
    HypothesisKey
  }
};
</script>
