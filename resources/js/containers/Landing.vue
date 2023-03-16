<template>
    <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div class="container">
            <a href="/landing" class="navbar-brand">
                <img src="http://res.cloudinary.com/kemenagpessel/image/upload/v1678080743/arsip_masuk/o2w50c0hdc98alyizelk.jpg"
                    alt="AdminLTE Logo" class="brand-image" style="opacity: .8">
                <span class="brand-text font-weight-light">Buku Tamu Digital</span>
            </a>
            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-3" id="navbarCollapse">

                <ul class="navbar-nav">
                    <!-- <li class="nav-item">
                        <router-link to="daftar-tamu" class="nav-link">Daftar Tamu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="dashboard" class="nav-link">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="https://ptsp.kemenagpessel.com" class="nav-link">Pelayanan Publik</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://ppid.kemenagpessel.com" class="nav-link">Pelayanan Informasi</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://datuak.kemenagpessel.com" class="nav-link">Satu Data</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Kontak</a>
                    </li>

                    <li v-if="!currentUser" class="nav-item">
                        <router-link to="login" class="nav-link">Login</router-link>
                    </li>

                    <li v-if="currentUser" class="nav-item">
                        <a @click.prevent="logOut" class="nav-link">
                            <p>Logout</p>
                        </a>
                    </li> -->

                    <li class="nav-item">
                        <router-link to="landing" class="nav-link">Isi Buku Tamu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="daftar-tamu" class="nav-link">Daftar Tamu</router-link>
                    </li>
                    <li v-if="currentUser" class="nav-item">
                        <router-link to="dashboard" class="nav-link">Dashboard</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="tentang" class="nav-link">Tentang</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="kontak" class="nav-link">Kontak</router-link>
                    </li>

                    <li v-if="!currentUser" class="nav-item">
                        <router-link to="login" class="nav-link">Login</router-link>
                    </li>

                    <li v-if="currentUser" class="nav-item">
                        <a @click.prevent="logOut" class="nav-link">
                            <p>Logout</p>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">

                <!-- <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="nav-icon fas fa-house"></i>
                        <span class="badge badge-danger navbar-badge">3</span>
                    </a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="fas fa-bell nav-icon "></i>
                        <span class="badge badge-warning navbar-badge">15</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        <i class="fas fa-th-large nav-icon "></i>
                    </a>
                </li> -->

                <!-- <li class="nav-item">
                    <a href="https://ptsp.kemenagpessel.com" class="nav-link">Pelayanan Publik</a>
                </li>
                <li class="nav-item">
                    <a href="https://ppid.kemenagpessel.com" class="nav-link">Pelayanan Informasi</a>
                </li>
                <li class="nav-item">
                    <a href="https://datuak.kemenagpessel.com" class="nav-link">Satu Data</a>
                </li> -->

            </ul>
        </div>
    </nav>

    <div class="content-wrapper">

        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>

    </div>

    <footer class="main-footer">

        <div class="float-right d-none d-sm-inline">
            SIMBUKTU KMGPESSSEL
        </div>

        <strong>Copyright &copy; 2023 <a href="https://adminlte.io">Developed By Yuda Pramana</a>.</strong> All rights reserved.
    </footer>
</template>
  
<script>

export default {
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.content-wrapper {
    margin-left: 0 !important;
}

.main-footer {
    margin-left: 0 !important;
}

.main-header {
    margin-left: 0 !important;
}

.main-header {
    --bs-navbar-padding-x: 1rem !important;
}

.router-link-exact-active {
    background-color: #f8fafc !important;
    color: rgba(0, 0, 0, 0.5) !important;
    font-weight: bold;
}
</style>