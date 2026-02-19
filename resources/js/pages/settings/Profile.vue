<script setup lang="ts">
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';

import DeleteUser from '@/components/DeleteUser.vue';
import HeadingSmall from '@/components/HeadingSmall.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { useOnlinePresenceStore } from '@/stores/onlinePresence';
import { type BreadcrumbItem, type SharedData, type User } from '@/types';
import { onMounted, onUnmounted } from 'vue';
import { useToast } from 'vue-toastification';

interface Props {
  mustVerifyEmail: boolean;
  status?: string;
}

defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Управление профилем',
    href: '/settings/profile'
  }
];

const page = usePage<SharedData>();
const toast = useToast();
const onlinePresenceStore = useOnlinePresenceStore();
const user = page.props.auth.user as User;

const form = useForm({
  name: user.name,
  email: user.email
});

const submit = () => {
  form.patch(route('profile.update'), {
    preserveScroll: true
  });
};

onMounted(() => {
  window.Echo.private(`chat.${page.props.auth.user.id}`).listen('MessageSent', (response: any) => {
    const incomingMessage = response.chatMessage;
    toast.info(`${incomingMessage.sender.name}: ${incomingMessage.message}`);
  });

  onlinePresenceStore.joinPresence();
});
onUnmounted(() => {
  window.Echo.private(`chat.${page.props.auth.user.id}`).stopListening('MessageSent');
  onlinePresenceStore.leavePresence();
});
</script>

<template>
  <AppLayout :breadcrumbs="breadcrumbs">
    <Head title="Управление профилем" />

    <SettingsLayout>
      <div class="flex flex-col space-y-6">
        <HeadingSmall title="Информация профиля" description="Обновите свое имя и адрес электронной почты." />

        <form @submit.prevent="submit" class="space-y-6">
          <div class="grid gap-2">
            <Label for="name">Имя</Label>
            <Input id="name" class="mt-1 block w-full" v-model="form.name" required autocomplete="имя"
                   placeholder="Полное имя" />
            <InputError class="mt-2" :message="form.errors.name" />
          </div>

          <div class="grid gap-2">
            <Label for="email">Адрес электронной почты</Label>
            <Input
              id="email"
              type="email"
              class="mt-1 block w-full"
              v-model="form.email"
              required
              autocomplete="username"
              placeholder="Адрес электронной почты"
            />
            <InputError class="mt-2" :message="form.errors.email" />
          </div>

          <div v-if="mustVerifyEmail && !user.email_verified_at">
            <p class="text-muted-foreground -mt-4 text-sm">
              Ваш адрес электронной почты не подтвержден.

              <Link as="button"
                :href="route('verification.send')"
                method="post"
                class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
              >
                Нажмите здесь, чтобы повторно отправить письмо с подтверждением.
              </Link>
            </p>

            <div v-if="status === 'verification-link-sent'" class="mt-2 text-sm font-medium text-green-600">
              На ваш электронный адрес отправлена новая ссылка для подтверждения.
            </div>
          </div>

          <div class="flex items-center gap-4">
            <Button :disabled="form.processing">Сохранить</Button>

            <Transition
              enter-active-class="transition ease-in-out"
              enter-from-class="opacity-0"
              leave-active-class="transition ease-in-out"
              leave-to-class="opacity-0"
            >
              <p v-show="form.recentlySuccessful" class="text-sm text-neutral-600">Сохранено.</p>
            </Transition>
          </div>
        </form>
      </div>

      <DeleteUser />
    </SettingsLayout>
  </AppLayout>
</template>
