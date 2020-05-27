<template>
  <div :class="$style.table_wrapper" :style="{ 'max-width': maxWidth }">
    <table :class="$style.table_style">
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    maxWidth: {
      type: String,
      default: 'none'
    }
  }
}
</script>

<style lang="scss" module>
.table_style {
  width: 100%;
  border-collapse: collapse;
}

.table_header {
  width: 100%;
  height: 28px;
  font-size: 12px;
  color: white;
  background-color: #3d6c7f;
  text-align: left;
}

.header_name {
  width: 13%;
  font-weight: 400;
  color: white;
  margin: 0 20px 0 12px;
  border-radius: 24px 0 0 24px;
  padding-left: 16px;
}

.header_position {
  width: 13%;
  font-weight: 400;
  color: white;
  margin: 0 12px 0 20px;
  padding-left: 16px;
}

.header_corporation {
  width: 37%;
  font-weight: 400;
  padding-left: 16px;
}

.header_date {
  width: 37%;
  font-weight: 400;
  border-radius: 0 24px 24px 0;
  padding-left: 16px;
}

.cell_name {
  padding-left: 16px;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.cell_position {
  padding-left: 16px;
  height: 62px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.cell_style {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.corporation_wrapper {
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 62px;
}

.corporation_name {
  padding-left: 12px;
}

.date_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 12px;
  height: 62px;
}
</style>
