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
const childCom1 = () => import("childCom1");
export default {
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