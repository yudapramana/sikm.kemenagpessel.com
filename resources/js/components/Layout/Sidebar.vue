<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="/landing" class="brand-link">
            <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">SIM - BUTU</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div v-if="currentUser" class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="currentUser.profile_photo_url" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">
                        {{ currentUser.username }} <br>
                    </a>


                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library -->


                    <li class="nav-item">
                        <router-link to="dashboard" class="nav-link">
                            <i class="nav-icon fas fa-house"></i>
                            <p>
                                Dashboard
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="profile" class="nav-link">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                                Profile
                            </p>
                        </router-link>
                    </li>

                    <li class="nav-header">USER & ROLES</li>

                    <li class="nav-item">
                        <router-link to="data-user" class="nav-link">
                            <i class="fas fa-users nav-icon"></i>
                            <p>Data User</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="data-role" class="nav-link">
                            <i class="fas fa-layer-group nav-icon"></i>
                            <p>Data Role</p>
                        </router-link>
                    </li>


                    <li class="nav-header">AUTHENTICATE</li>
                    <li v-if="!currentUser" class="nav-item">
                        <router-link to="login" class="nav-link">
                            <i class="fas fa-sign-in-alt nav-icon"></i>
                            <p>Login</p>
                        </router-link>
                    </li>
                    <li v-if="!currentUser" class="nav-item">
                        <router-link to="register" class="nav-link">
                            <i class="fas fa-sign-out-alt nav-icon"></i>
                            <p>Register</p>
                        </router-link>
                    </li>
                    <li v-if="currentUser" class="nav-item">
                        <a @click.prevent="logOut" class="nav-link">
                            <i class="fas fa-sign-out-alt nav-icon"></i>
                            <p>Logout</p>
                        </a>
                    </li>

                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
    name: "Sidebar",
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    created: function () {
        console.log('user data from parent component:');
        console.log('this.user')
        console.log(this.user)
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
};
</script>