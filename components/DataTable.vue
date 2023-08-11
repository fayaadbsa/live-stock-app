<template>
  <div class="my-8">
    <UTable :columns="column" :rows="stockData" class="border border-zinc-500">
      <template #id-header="{ column }">
        <span class="text-lg font-bold text-primary-400">{{ column.label }}</span>
      </template>
      <template #name-header="{ column }">
        <span class="text-lg font-bold text-primary-400">{{ column.label }}</span>
      </template>
      <template #value-header="{ column }">
        <span class="text-lg font-bold text-primary-400">{{ column.label }}</span>
      </template>

      <template #id-data="{ row }">
        <span class="text-lg text-white">{{ row.id }}</span>
      </template>
      <template #name-data="{ row }">
        <span class="text-lg text-white">{{ row.name }}</span>
      </template>
      <template #value-data="{ row }">
        <DataTableCell :value="row.value" />
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
const stockData = ref([])

const runtimeConfig = useRuntimeConfig();
const EVENT_SOURCE_URL = runtimeConfig.public.rootApi + "/api/stock"
const sse = new EventSource(EVENT_SOURCE_URL);

const handleErrorStream = () => {
  sse.close();
}

const handleDataStream = (data: any) => {
  stockData.value = data
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
