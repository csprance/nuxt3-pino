<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "nuxt/app";

const { $logger } = useNuxtApp();
const data = {
  data: ["data"],
  obj: { nested: ["test"], deepNested: { nested: "test" } }
};
$logger.trace({...data, level: 'trace'});
$logger.error({...data, level: 'error'});
$logger.debug({...data, level: 'debug'});
$logger.info({...data, level: 'info'});
$logger.warn({...data, level: 'warn'});
$logger.fatal({...data, level: 'fatal'});
</script>
