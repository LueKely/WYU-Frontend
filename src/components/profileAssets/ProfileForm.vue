<template>
  <div>
    <q-btn
      @click="cancelEdit"
      outline
      rounded
      color="negative"
      label="cancel"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["cancelEdit"]);
function cancelEdit() {
  emit("cancelEdit");
}
</script>

<style lang="scss" scoped></style>
