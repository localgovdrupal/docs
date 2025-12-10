<script setup lang="ts">
import VPEditIcon from '@vuepress/theme-default/lib/client/components/VPEditIcon.vue'
import { useEditLink } from '@vuepress/theme-default/lib/client/composables/useEditLink.js'
import { useLastUpdated } from '@vuepress/plugin-git/client'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import { AutoLink } from 'vuepress/client'

const themeLocale = useThemeLocaleData()
const editLink = useEditLink()
const lastUpdated = useLastUpdated()
</script>

<template>
  <footer class="vp-page-meta">
    <div v-if="editLink" class="vp-meta-item edit-link">
      <AutoLink class="label" :config="editLink">
        <template #before>
          <VPEditIcon />
        </template>
      </AutoLink>
    </div>

    <div class="vp-meta-item git-info">
      <div v-if="lastUpdated" class="vp-meta-item last-updated">
        <span class="meta-item-label">{{ themeLocale.lastUpdatedText ?? 'Last Updated' }}: </span>
        <ClientOnly>
          <time class="meta-item-info" :datetime="lastUpdated.iso" data-allow-mismatch>{{ lastUpdated.text }}</time>
        </ClientOnly>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';
@import '@vuepress/theme-default/styles/variables';

.vp-page-meta {
  @include mixins.content-wrapper;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  overflow: auto;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  @media print {
    margin: 0 !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  @media (max-width: $MQMobile) {
    display: block;
  }

  .vp-meta-item {
    flex-grow: 1;

    .vp-meta-label {
      font-weight: 500;

      &:not(a) {
        color: var(--c-text-lighter);
      }
    }

    .vp-meta-info {
      color: var(--c-text-quote);
      font-weight: 400;
    }
  }

  .git-info {
    text-align: end;
  }

  .edit-link {
    margin-top: 0.25rem;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
    font-size: 14px;

    @media print {
      display: none;
    }

    .edit-icon {
      position: relative;
      bottom: -0.125em;

      width: 1em;
      height: 1em;
      margin-right: 0.25em;
    }
  }

  .last-updated,
  .contributors {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 14px;

    @media (max-width: $MQMobile) {
      font-size: 13px;
      text-align: start;
    }
  }
}
</style>