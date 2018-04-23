<template>
  <div class="menu-wrapper">
    <template v-for="item in sidebarList" v-if="item.children">

      <router-link v-if="hasOneShowingChildren(item.children)" :to="item.path" :key="item.path">
        <el-menu-item :index="item.path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
          <span v-if="item.menuName">{{item.menuName}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.path" :key="item.path">
        <template slot="title">
          <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
          <span v-if="item.menuName">{{item.menuName}}</span>
        </template>

        <template v-for="child in item.children">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :sidebarList="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="child.path" :key="child.name">
            <el-menu-item :index="child.path">
              <svg-icon v-if="child.icon" :icon-class="child.icon"></svg-icon>
              <span v-if="child.menuName">{{child.menuName}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      sidebarList: {
        type: Array
      },
      isNest: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hasOneShowingChildren(children) {
        if (children.length === 0) {
          return true
        }
        return false
      }
    }
  }
</script>

