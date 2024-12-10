<template>
    <div class="star-rating">
      <span
        v-for="(star, index) in totalStars"
        :key="index"
        :class="['star', { filled: index < currentRating, hovered: index < hoveredRating }]"
        @click="setRating(index + 1)"
        @mouseover="setHoveredRating(index + 1)"
        @mouseleave="resetHoveredRating"
      >
        <fa-icon :icon="['fas', 'star']" />
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  // Props to customize the component
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0, // Default to 0 if no value is passed
    },
    totalStars: {
      type: Number,
      default: 5, // Default to 5 stars
    }
  })
  
  // Emit function to send updates to the parent component
  const emit = defineEmits(['update:modelValue'])
  
  // Reactive states
  const currentRating = ref(props.modelValue)  // Initial rating (controlled by parent)
  const hoveredRating = ref(0)  // Rating during hover
  
  // Watch for changes in modelValue (v-model)
  watch(() => props.modelValue, (newRating) => {
    currentRating.value = newRating
  })
  
  // Methods to handle the rating
  const setRating = (rating) => {
    currentRating.value = rating
    emit('update:modelValue', rating) // Emit the updated rating to parent
  }
  
  const setHoveredRating = (rating) => {
    hoveredRating.value = rating
  }
  
  const resetHoveredRating = () => {
    hoveredRating.value = 0
  }
  </script>
  
  <style scoped>
  .star-rating {
    font-size: 2rem;
    color: #ddd;
    cursor: pointer;
  }
  
  .star {
    padding: 5px;
  }
  
  .star.filled {
    color: gold;
  }
  
  .star.hovered {
    color: orange;
  }
  
  .star:hover {
    color: orange;
  }
  </style>
  