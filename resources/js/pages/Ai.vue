<script setup lang="ts">
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import Chat from '@/components/Chat.vue';

const chatInput = ref('Почему небо голубое?');

const submitChat = () => {
  console.log('submitting chat', chatInput.value);
  chatInput.value = '';
};


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Чат с ИИ',
    href: '/ai'
  }
];

</script>

<template>

  <Head title="Чат с ИИ" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="space-y-4">
      <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <Chat />
      </div>

    </div>
  </AppLayout>

</template>

<style scoped>
#chatBox {
  display: flex;
  height: 100%;
  flex-direction: column;
}

#chatContainer {
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
}

#chatArea {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}
</style>
