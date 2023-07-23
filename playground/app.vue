<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
const { $logger } = useNuxtApp();
$logger.debug({ data: ["data"], obj: { nested: ["test"], deepNested: { nested: "test" } } });
</script>
