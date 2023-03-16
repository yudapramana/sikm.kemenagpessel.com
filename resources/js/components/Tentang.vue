<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Tentang <strong>Buku Tamu Digital</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Buku Tamu</a></li>
                        <li class="breadcrumb-item"><a href="#">Tentang</a></li>
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
                        <div class="card-header">
                            <h4 class="card-title m-0">Tentang Buku Tamu Digital </h4>
                        </div>

                        <div class="card-body">
                            <div class="row">

                                <h5>
                                    <p>
                                        Kita semua menyadari, penggunaan buku tamu digital di masa pandemi seperti saat ini
                                        bermanfaat untuk mencegah penyebaran Covid-19. Dengan hadirnya buku tamu digital,
                                        memungkinkan pemilik bisnis untuk menjaga kapasitas pengunjung agar tetap terkendali
                                        dan sesuai dengan protokol kesehatan yang berlaku.
                                    </p>

                                    <p>
                                        Buku tamu digital biasanya berbentuk QR Code. Seperti yang Anda temui saat ini, ada
                                        prosedur yang harus Anda lakukan sebelum memasuki suatu lokasi tertentu. Terdapat QR
                                        Code yang dapat dipindai oleh smartphone Anda, lalu Anda diminta untuk mengisi data
                                        informasi diri.
                                    </p>

                                    <p>
                                        Buku Tamu Digital merupakan salah satu proses untuk mencatat data pengunjung yang
                                        telah
                                        mengunjungi Kantor Kementerian Agama Kab. Pesisir Selatan (KEMENAGPESSEL)
                                        yang berguna untuk mencatat siapa saja dengan keperluan apa saja sehingga mereka
                                        datang ke KEMENAGPESSEL.
                                    </p>
                                </h5>

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
    name: "Tentang",
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