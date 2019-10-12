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
  </div>
</template>


<script>
import HypothesisKey from "@/components/HypothesisKey";
import Back from "@/components/Back";

export default {
  components: {
    HypothesisKey,
    Back
  }
};
</script>
