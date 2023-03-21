<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Kontak <strong>SIKM KemenagPessel</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">SIKM KemenagPessel</a></li>
                        <li class="breadcrumb-item"><a href="#">Kontak</a></li>
                        <li class="breadcrumb-item active">Index</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-lg-10">
                    <div class="card">
                        <div class="card-header text-center">
                            <h4 class="card-title m-0 text-center">Kontak / Pengaduan </h4>
                        </div>

                        <div class="card-body text-center">
                            <div class="text-center">

                                <p style="font-size:x-large">
                                    <i>
                                        <b>
                                            “Untuk Pengaduan, Laporan, Konsultasi mengenai Masalah, Bug, atau Saran pada
                                            Aplikasi Silahkan Langsung Hubungi Admin”
                                        </b>
                                    </i>
                                </p>

                                <p style="font-size:large">
                                    ADMIN : Pramana Yuda Sayeti, S.Kom <br>
                                    Kontak : 0896 7754 2744 <br>
                                </p> 
                                <br>
                                <small>(CPNS Pranata Komputer di Subbagian Tata Usaha Kantor Kementerian Agama Kab. Pesisir
                                    Selatan)</small>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Kontak",
    components: {
        'has-error': HasError,
        'alert-error': AlertError
    },
    data() {
        return {
            loading: false,
            disabled: false,
            editModal: false,
            form: new Form({
                id: "",
                name: "",
                gender: "",
                no_hp: "",
                email: "",
                address: "",
                organisasi: "",
                jabatan: "",
                keperluan: "",
                tujuan: "",
            }),
        };
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        submitAnother() {
            return this.$router.push({ name: "Landing" });
            this.$router.push('/landing');
        },
    },
    created() {
        this.$Progress.start();
    },
    mounted() {
        this.$Progress.finish();
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
</style>