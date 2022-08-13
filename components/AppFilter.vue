<template>
  <div class="filter-wrapper" @click="changeShowFilter">
    <div class="filter-header">
      <span
        class="filter-active"
        :class="{'no-active': !Object.keys(selected).length}"
      >
        {{ selected?.text || 'По умолчанию' }}
      </span>
      <i
        class="arrow"
        :class="{'no-active': !Object.keys(selected).length}"
      />
    </div>
    <ul
      v-show="showFilter"
      class="filter-wrapper filter-list"
      @click.stop
    >
      <li
        v-for="{value, text} of options"
        :key="value"
        :value="value"
        class="filter-list__option"
        @click="changeSelect({ value, text })"
      >
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: {},
      showFilter: false
    }
  },
  watch: {
    selected() {
      this.changeShowFilter()
    }
  },
  methods: {
    changeSelect(option) {
      this.selected = option
      this.$emit('selectedFilter', option)
    },
    changeShowFilter() {
      this.showFilter = !this.showFilter
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";

%filter-select {
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
}

.arrow {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  position: relative;

  &:after, &:before {
    content: '';
    position: absolute;
    bottom: 0;
    background-color: colors.$text;
    width: 100%;
    height: 1px;
  }

  &.no-active {
    &:after, &:before {
      background-color: colors.$placeholder;
    }
  }

  &:after {
    transform: translate(29%, -50%) rotate(-45deg);
  }

  &:before {
    transform: translate(-29%, -50%) rotate(45deg);
  }
}

.filter {
  &-wrapper {
    position: relative;
    box-shadow: colors.$input-shadow;
    border-radius: params.$substrate-border-radius;
    background-color: colors.$substrate-fon;
    display: block;
    width: max-content;
    padding: 10px 16px;
    cursor: pointer;
    margin: 0 0 16px auto;
    z-index: 2;
  }

  &-header {
    display: flex;
    align-items: center;
  }

  &-active {
    @extend %filter-select;
    color: colors.$text;

    &.no-active {
      color: colors.$placeholder;
    }
  }

  &-list {
    list-style-type: none;
    margin: 6px 0 0 0;
    position: absolute;
    top: 100%;
    right: 0;
    min-width: calc(100% - 32px);
    padding: 10px 0;
    cursor: default;

    &__option {
      @extend %filter-select;
      cursor: pointer;
      padding: 0 16px;
      color: colors.$placeholder;

      &:hover {
        color: colors.$text;
      }

      &:not(:last-child) {
        margin-bottom: 3px;
      }
    }
  }
}
</style>
