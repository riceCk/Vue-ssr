<template>
    <div id="App">
        <p>我是组件入口文件</p>
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/show">show</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    #App {
        color: red
    }
</style>