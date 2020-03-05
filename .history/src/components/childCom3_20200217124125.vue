<template>
  <div class="border">
    <p>childCom3: {{ $attrs }}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    coo: String,
    title: String
  }
};
</script>