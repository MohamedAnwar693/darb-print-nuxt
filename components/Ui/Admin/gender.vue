<template>
  <div class="flex flex-wrap gap-4">
    <button :style="buttonStyle(1)" @click="changeColor(1)" class="button_style">
        <img src="../../../public/images/Group-2814.png" alt=""/>
    </button>

    <button :style="buttonStyle(2)" @click="changeColor(2)" class="px-4 button_style">
        <img src="../../../public/images/Group-2824.png" alt=""/>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tracking which button is clicked
      activeButton: null,
      imageFilter: 'none',
    };
  },
  methods: {
    // Handle button click, setting which button is active
    changeColor(buttonNumber) {
      this.activeButton = buttonNumber;
      this.imageFilter = 'grayscale(100%)';
    },

    // Return dynamic style based on the active button
    buttonStyle(buttonNumber) {
      return {
        backgroundColor:
          this.activeButton === buttonNumber ? "rgb(147 197 253)" : "white",
        color: "black",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        border: this.activeButton === buttonNumber ? "1px solid #5D87FF" : "1px solid #7C8FAC",
      };
    },
  },
};
</script>

<style scoped>
.button_style{
    box-shadow: 0px 0px 4px 0px #7C8FAC;
    background: #FFFFFF;
    border-radius: 18px 18px 18px 18px;
}
</style>
