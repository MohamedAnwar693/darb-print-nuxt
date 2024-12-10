<template>
    <div class="flex flex-col gap-4 py-8 text-sm lg:text-base">
        <!-- comment //////// -->
        <div class="flex items-center gap-4">
            <div>
                <div class="rounded-full bg-smooky-50 w-12 h-12 lg:w-16 lg:h-16 flex items-center flex-col">
                    <client-only>
                        <fa-icon class="m-auto text-2xl lg:text-4xl text-primary-800" :icon="['far' ,'circle-user']"/>
                    </client-only>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <span class="font-bold">{{ comment.user }}</span>
                <span>{{ comment.content }}</span>
            </div>
            <span class="font-bold mr-auto">{{ comment.created_at }}</span>
        </div>

        <!-- replies ///////////// -->
        <div class="flex-col flex gap-4 mr-10">
            <div class="flex items-center gap-4" v-for="reply in comment.replies">
                <div>
                    <client-only>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 14L3.64645 13.6464L3.29289 14L3.64645 14.3536L4 14ZM20.5 6C20.5 5.72386 20.2761 5.5 20 5.5C19.7239 5.5 19.5 5.72386 19.5 6L20.5 6ZM8.64645 8.64645L3.64645 13.6464L4.35355 14.3536L9.35355 9.35355L8.64645 8.64645ZM3.64645 14.3536L8.64645 19.3536L9.35355 18.6464L4.35355 13.6464L3.64645 14.3536ZM4 14.5L14 14.5L14 13.5L4 13.5L4 14.5ZM20.5 8L20.5 6L19.5 6L19.5 8L20.5 8ZM14 14.5C17.5899 14.5 20.5 11.5898 20.5 8L19.5 8C19.5 11.0376 17.0376 13.5 14 13.5L14 14.5Z" fill="#222222"/>
                        </svg>
                    </client-only>
                </div>

                <div>
                    <div class="rounded-full bg-smooky-50 w-12 h-12 lg:w-16 lg:h-16 flex items-center flex-col">
                        <client-only>
                            <svg class="m-auto w-10 h-10" version="1.2" xmlns="http://www.w3.org/2000/svg">
                            	<title>favicon</title>
                            	<defs>
                            		<image class="w-8 h-8" id="img1" href="data:image/png;base64,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"/>
                            	</defs>
                            	<use id="Background" href="#img1" x="5" y="2"/>
                            </svg>
                            
                        </client-only>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <span class="font-bold">{{ reply.user }}</span>
                    <span>{{ reply.content }}</span>
                </div>
                <span class="font-bold mr-auto">{{ reply.created_at }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['comment']
}
</script>