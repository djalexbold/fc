<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';

import AppearanceTabs from '@/components/AppearanceTabs.vue';
import HeadingSmall from '@/components/HeadingSmall.vue';
import { SharedData, type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { useOnlinePresenceStore } from '@/stores/onlinePresence';
import { onMounted, onUnmounted } from 'vue';
import { useToast } from 'vue-toastification';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Настройки внешнего вида',
        href: '/settings/appearance',
    },
];

const onlinePresenceStore = useOnlinePresenceStore();
const page = usePage<SharedData>();
const toast = useToast();

onMounted(() => {
    window.Echo.private(`chat.${page.props.auth.user.id}`).listen('MessageSent', (response: any) => {
        const incomingMessage = response.chatMessage;
        toast.info(`${incomingMessage.sender.name}: ${incomingMessage.message}`);
    });

    onlinePresenceStore.joinPresence()
});
onUnmounted(() => {
    window.Echo.private(`chat.${page.props.auth.user.id}`).stopListening('MessageSent');
    onlinePresenceStore.leavePresence()
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Настройки внешнего вида" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall title="Настройки внешнего вида" description="Обновите настройки внешнего вида вашей учетной записи." />
                <AppearanceTabs />
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
