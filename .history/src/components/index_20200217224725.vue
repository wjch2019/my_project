<template>
  <div>
    <h2>浪里行舟</h2>
    <childCom1
      :foo="foo"
      :boo="boo"
      :coo="coo"
      :doo="doo"
      title="前端工匠"
    ></childCom1>
  </div>
</template>
<script type="text/javascript">
import childCom1 from '@/components/childCom1';
export default {
  name:'index',
  components: { childCom1 },
  data() {
    return {
      foo: "Javascript",
      boo: "Html",
      coo: "CSS",
      doo: "Vue"
    };
  }
};
</script>