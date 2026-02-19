<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3';

const props = usePage().props.auth as any;
</script>

<template>
  <Head title="Welcome">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <div
    class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
    <header class="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
      <nav class="flex items-center justify-end gap-4">
        <Link
          v-if="props.user"
          :href="route('dashboard')"
          class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
        >
          Панель управления
        </Link>
        <template v-else>
          <Link
            :href="route('login')"
            class="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
          >
            Вход
          </Link>
          <Link
            :href="route('register')"
            class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
          >
            Регистрация
          </Link>
        </template>
      </nav>
    </header>

    <div
      class="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-700 dark:bg-red-900 dark:text-red-100 mb-8"
    >
      Данный сайт предназначен исключительно для тестирования и демонстрации работы чата.
      Все сообщения будут автоматически удалены в полночь (по времени Найроби).
    </div>

    <div
      class="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
      <main
        class="flex w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-lg lg:max-w-4xl lg:flex-row">
        <div
          class="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
        >
          <h1 class="mb-1 font-medium">FreeConn - Закрытая платформа для общения и обмена.</h1>
          <ul class="mb-4 flex flex-col lg:mb-6">
            <li class="mt-2">
              <b>No Drama:</b> Мы здесь для дела и общения, а не для выяснения отношений.
            </li>
            <li class="mt-2">
              <b>Уважение — это база:</b> Не согласен? Аргументируй спокойно или пройди мимо.
            </li>
            <li class="mt-2">
              <b>Чистота:</b> Никакой рекламы, флуда и запрещенного контента.
            </li>
            <li class="mt-2">
              <b>Rule Zero:</b> Не будь занудой и не порти настроение окружающим.
            </li>
            <li class="mt-2">
              <b>Секретность — наш приоритет:</b> Всё, что сказано внутри платформы, остается здесь. Уважай приватность
              друзей.
            </li>
          </ul>
          <ul class="flex gap-3 text-sm leading-normal">
            <li>
              <a
                href="https://t.me/djalexbold"
                target="_blank"
                class="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
              >
                Есть вопросы?
              </a>
            </li>
          </ul>
        </div>
        <div
          class="relative justify-items-center content-center -mb-px aspect-335/376 w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]"
        >
          <div
            class="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:overflow-hidden lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
          />
          <svg class="w-full max-w-none translate-y-0 text-[#212121] opacity-100 transition-all duration-750 dark:text-[#f7f7f7] starting:translate-y-6 starting:opacity-0"
            xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 300 300"
               preserveAspectRatio="xMidYMid meet"
          >

            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
               fill="currentColor" stroke="none">
              <path d="M1565 2990 c-99 -12 -204 -33 -275 -57 l-55 -18 -3 -1042 -2 -1041
                      57 -36 c112 -70 303 -126 429 -126 l44 0 0 280 0 280 243 2 242 3 3 263 2 262
                      -245 0 -245 0 0 355 c0 340 1 355 19 355 42 0 191 -31 258 -54 104 -36 197
                      -87 292 -162 l84 -66 184 183 184 184 -64 61 c-177 168 -464 308 -736 359
                      -105 19 -312 27 -416 15z" />
              <path d="M974 2797 c-136 -81 -199 -130 -319 -251 -212 -212 -347 -469 -407
                      -768 -31 -159 -31 -397 0 -555 125 -633 600 -1095 1237 -1203 214 -37 470 -19
                      677 46 189 60 376 162 529 291 49 41 89 78 89 81 0 4 -83 90 -184 191 l-184
                      183 -65 -55 c-129 -110 -304 -191 -469 -217 -120 -20 -312 -8 -423 24 -334 99
                      -584 356 -677 696 -20 73 -23 108 -22 245 0 144 3 169 28 250 15 50 44 126 65
                      170 43 90 142 227 201 278 l40 34 0 306 c0 245 -3 307 -13 307 -7 0 -53 -24
                      -103 -53z" />
            </g>
          </svg>
        </div>
      </main>
    </div>
    <div class="hidden h-14.5 lg:block"></div>
  </div>
</template>
