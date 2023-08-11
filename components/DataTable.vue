<template>
  <div class="my-8">
    <UTable :columns="column" :rows="stockData" class="border border-zinc-500">
      <template #id-header="{ column }">
        <span class="text-lg font-bold text-white">{{ column.label }}</span>
      </template>
      <template #name-header="{ column }">
        <span class="text-lg font-bold text-white">{{ column.label }}</span>
      </template>
      <template #value-header="{ column }">
        <span class="text-lg font-bold text-white">{{ column.label }}</span>
      </template>

      <template #id-data="{ row }">
        <span class="text-lg text-white">{{ row.id }}</span>
      </template>
      <template #name-data="{ row }">
        <span class="text-lg text-white">{{ row.name }}</span>
      </template>
      <template #value-data="{ row }">
        <span :class="['text-lg text-primary-400']">{{ row.value }}</span>
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "../stores/store";

const appStore = useAppStore();
const { data: stockData } = storeToRefs(appStore)

const runtimeConfig = useRuntimeConfig();
const EVENT_SOURCE_URL = runtimeConfig.public.rootApi + "/api/stock"
const sse = new EventSource(EVENT_SOURCE_URL);

const handleErrorStream = () => {
  sse.close();
}

const handleDataStream = (data: any) => {
  appStore.updateData(data)
}

sse.onerror = () => handleErrorStream();

sse.onmessage = (event) => handleDataStream(JSON.parse(event.data));

const column = [
  {
    key: "id",
    label: "ID"
  },
  {
    key: "name",
    label: "Name"
  },
  {
    key: "value",
    label: "Value"
  },
]

</script>
