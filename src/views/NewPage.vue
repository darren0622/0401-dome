<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/NewPage/a" class="list-group-item list-group-item-action">
          元件 A
        </router-link>
        <router-link to="/NewPage/b" class="list-group-item list-group-item-action">
          元件 B
        </router-link>
        <router-link to="/NewPage/NameView/c2a" class="list-group-item list-group-item-action">
          命名路由 c2a
        </router-link>
        <router-link to="/NewPage/NameView/a2b" class="list-group-item list-group-item-action">
          命名路由 a2b
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
