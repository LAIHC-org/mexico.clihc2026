<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const biographyLabel = computed(() => {
    switch (locale.value) {
        case 'es':
            return 'Biografia'
        case 'pt':
            return 'Biografia'
        default:
            return 'Biography'
    }
})
</script>

<template>
    <div class="row">
        <div class="row justify-content-center my-sm-1">
            <div class="col-lg-12 mx-auto">
                <div class="row py-lg-3 py-1">
                    <div class="col-lg-4 col-md-5 position-relative">
                        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 border-0 bg-transparent">
                                <div class="d-block blur-shadow-image">
                                    <slot name="image"></slot>
                                </div>
                                <slot name="image-shadow"></slot>
                            </div>
                            <div class="card-body text-center pb-3">
                                <h3 class="mt-3 h5 fw-bold">
                                    <slot name="name"></slot>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-7 z-index-2 position-relative px-md-3 px-sm-5 mt-4 mt-md-0">
                        <div class="card border-0 shadow-sm rounded-4 h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center" aria-hidden="true">
                                        <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                                    </span>
                                    <h4 class="text-uppercase text-xs font-weight-bold text-muted mb-0">{{ biographyLabel }}</h4>
                                </div>
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-4 mx-auto" style="width: 60%; opacity: 0.15;">
    </div>
</template>
