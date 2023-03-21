<template>
    <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div class="container-fluid">
            <a href="/landing" class="navbar-brand">
                <img src="http://res.cloudinary.com/kemenagpessel/image/upload/v1678080743/arsip_masuk/o2w50c0hdc98alyizelk.jpg"
                    alt="AdminLTE Logo" class="brand-image" style="opacity: .8">
                <span class="brand-text font-weight-light">SIKM KemenagPessel</span>
            </a>
            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-3" id="navbarCollapse">

                <ul class="navbar-nav">

                    <li class="nav-item">
                        <router-link to="landing" class="nav-link">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="isi-survey" class="nav-link">Isi Survey</router-link>
                    </li>
                    <li v-if="currentUser" class="nav-item">
                        <router-link to="response" class="nav-link">Respon</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link dropdown-toggle">Rekap Tahunan</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow"
                            style="left: 0px; right: inherit;">
                            <li><router-link to="rekap-tahunan?year=2023" class="dropdown-item">Rekapitulasi Tahun 2023 </router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link dropdown-toggle">Rekap Triwulan tahun berjalan</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow"
                            style="left: 0px; right: inherit;">
                            <li><router-link to="rekap-triwulan?quarter=1" class="dropdown-item">Rekapitulasi Triwulan I</router-link></li>
                            <li><router-link to="rekap-triwulan?quarter=2" class="dropdown-item">Rekapitulasi Triwulan II</router-link></li>
                            <li><router-link to="rekap-triwulan?quarter=3" class="dropdown-item">Rekapitulasi Triwulan III</router-link></li>
                            <li><router-link to="rekap-triwulan?quarter=4" class="dropdown-item">Rekapitulasi Triwulan IV</router-link></li>
                        </ul>
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

                <!-- <ul class="navbar-nav">

                    <li class="nav-item">
                        <router-link to="landing" class="nav-link">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="isi-survey" class="nav-link">Isi Survey</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="daftar-tamu" class="nav-link">Daftar Tamu</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link dropdown-toggle">Rekap Tahunan</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow"
                            style="left: 0px; right: inherit;">
                            <li><a href="#" class="dropdown-item">Rekapitulasi Tahun 2023 </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link dropdown-toggle">Rekap Triwulan</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow"
                            style="left: 0px; right: inherit;">
                            <li><a href="#" class="dropdown-item">Triwulan I</a></li>
                            <li><a href="#" class="dropdown-item">Triwulan II</a></li>
                            <li><a href="#" class="dropdown-item">Triwulan III</a></li>
                        </ul>
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
                </ul> -->
            </div>
            <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">

                <!-- <ul class="navbar-nav">

                    <li class="nav-item">
                        <router-link to="landing" class="nav-link">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="isi-survey" class="nav-link">Isi Survey</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="daftar-tamu" class="nav-link">Daftar Tamu</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link dropdown-toggle">Rekap Tahunan</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow"
                            style="left: 0px; right: inherit;">
                            <li><a href="#" class="dropdown-item">Rekapitulasi Tahun 2023 </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link dropdown-toggle">Rekap Triwulan</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow"
                            style="left: 0px; right: inherit;">
                            <li><a href="#" class="dropdown-item">Triwulan I</a></li>
                            <li><a href="#" class="dropdown-item">Triwulan II</a></li>
                            <li><a href="#" class="dropdown-item">Triwulan III</a></li>
                        </ul>
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
                </ul> -->

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

        <strong>Copyright &copy; 2023 <a href="https://adminlte.io">Developed By Yuda Pramana</a>.</strong> All rights
        reserved.
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
        },
        // toggleDropdown() {
        //     $(".dropdown-toggle").dropdown('toggle');
        // }
    },
    created() {
        document.body.classList.add('hold-transition', 'layout-top-nav');
        document.body.classList.remove('hold-transition', 'sidebar-mini');
    },
    mounted() {
        document.body.classList.remove('hold-transition', 'sidebar-mini');
        document.body.classList.add('hold-transition', 'layout-top-nav');

        $('.navbar-toggler').on('click', function () {
            $('.navbar-collapse').collapse('toggle');
        });

        // $('[data-widget="treeview"]').Treeview('init');

        // $(".dropdown-toggle").dropdown();
        // $(".dropdown-toggle").dropdown('toggle');

    },
    destroyed() {
        document.body.classList.remove('hold-transition', 'layout-top-nav');
    },
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