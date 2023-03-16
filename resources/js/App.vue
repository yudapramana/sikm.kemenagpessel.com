<template>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>

</template>
  
<script>
import Navbar from './components/Layout/Navbar.vue';
import Sidebar from './components/Layout/Sidebar.vue';
import Footer from './components/Layout/Footer.vue';
export default {
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        allUsers() {
            return this.$store.state.user.users;
        },
        allRoles() {
            return this.$store.state.user.roles;
        },
        showAdminBoard() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_ADMIN');
            }

            return false;
        },
        showModeratorBoard() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_MODERATOR');
            }

            return false;
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
};
</script>