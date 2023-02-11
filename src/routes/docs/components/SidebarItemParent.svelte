<script>
    import SidebarItem from "./SidebarItem.svelte";

    export let label = "[ParentNode]";
</script>
<li class="parent">
  <a href="#" class="employ up down transition active"><i class="fa fa-folder" aria-hidden="true"></i>{label}</a>
  <ul class="submenu" style="display: none;">
    <slot/>
  </ul>
</li>