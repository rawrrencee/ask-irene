<script setup>
import TransitionLayout from '@/views/Layouts/TransitionLayout.vue'

defineProps({
  currentPath: String,
  backPath: String,
  nextPath: String
})
</script>

<template>
  <TransitionLayout
    :current-path="currentPath"
    :back-path="backPath"
    :next-path="nextPath"
    @update:app-page="(val) => $emit('update:appPage', val)"
  >
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis cum dolor cumque
      ipsum illum error dolores veritatis quaerat molestias? Natus similique quos expedita explicabo
      aperiam tempore odit, sunt architecto?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus ullam dolores explicabo aliquam voluptas excepturi saepe doloremque numquam quae
      tempora sunt expedita odio, rerum ratione dignissimos totam autem, ipsam tempore?Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Quae voluptatum deserunt labore, quaerat quam
      nostrum pariatur odit? Libero ipsa, ipsum laboriosam eos, recusandae dolores maiores
      repellendus voluptatum nisi magni ratione. Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Voluptatum culpa fugit ullam perspiciatis officia aspernatur deserunt delectus nisi odio
      similique, animi corporis consectetur temporibus nostrum optio! Laudantium dolorem voluptate
      iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi temporibus, illo
      saepe dolore adipisci molestias repellendus exercitationem earum suscipit. Et repudiandae
      reiciendis necessitatibus nemo deleniti officiis totam qui. Ut!
    </div>
  </TransitionLayout>
</template>
