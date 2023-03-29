<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Tentang <strong>SIKM KemenagPessel</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">SIKM KemenagPessel</a></li>
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
                            <h4 class="card-title m-0">Tentang SIKM KemenagPessel </h4>
                        </div>

                        <div class="card-body">
                            <div class="row p-2 m-2">

                                <p>
                                    Survei Kepuasan Masyarakat dilaksanakan sesuai dengan ketentuan dalam Peraturan Menteri
                                    Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 14 Tahun 2017 tentang
                                    Pedoman Penyusunan Survei Kepuasan Masyarakat. Pedoman ini menggantikan pedoman
                                    sebelumnya dalam Permenpanrb No. 16 Tahun 2014 tentang Pedoman Survei Kepuasan
                                    Masyarakat Terhadap Penyelenggaraan Pelayanan Publik. Peraturan sebelumnya dipandang
                                    tidak operasional dan memerlukan penjabaran teknis dalam pelaksanaannya. Sehingga perlu
                                    untuk disesuaikan dengan metode survei yang aplikatif dan mudah untuk dilaksanakan.
                                    Selain itu, Peraturan ini dimaksudkan untuk memberikan arahan dan pedoman yang jelas dan
                                    tegas bagi penyelenggara pelayanan publik.
                                </p>

                                <p>
                                    Dalam Permenpan No. 14 Tahun 2017 disebutkan bahwa SKM ini bertujuan untuk mengukur
                                    tingkat kepuasan masyarakat sebagai pengguna layanan dan meningkatkan kualitas
                                    penyelenggaraan pelayanan publik. Dengan sasaran :
                                </p>

                                <ol>
                                    <li>Mendorong partisipasi masyarakat sebagai pengguna layanan dalam menilai kinerja
                                        penyelenggara pelayanan;</li>
                                    <li>Mendorong penyelenggara pelayanan untuk meningkatkan kualitas pelayanan publik;</li>
                                    <li>Mendorong penyelenggara pelayanan menjadi lebih inovatif dalam menyelenggarakan
                                        pelayanan publik;</li>
                                    <li>Mengukur kecenderungan tingkat kepuasan masyarakat terhadap pelayanan publik.</li>
                                </ol>

                                <p>
                                    Unsur-unsur yang menjadi fokus dalam pelaksanaan Survei Kepuasan Masyarakat terdiri dari
                                    9 unsur yang terdiri dari :
                                </p>

                                <ol>
                                    <li>Persyaratan adalah syarat yang harus dipenuhi dalam pengurusan suatu jenis
                                        pelayanan, baik persyaratan teknis maupun administratif</li>
                                    <li>Sistem, mekanisme dan prosedur adalah tata cara pelayanan yang dilakukan bagi
                                        pemberi dan penerima pelayanan termasuk pengaduan</li>
                                    <li>Waktu penyelesaian adalah jangka waktu yang diperlukan untuk menyelesaikan seluruh
                                        proses pelayanan dari setiap jenis pelayanan</li>
                                    <li>Biaya/Tarif adalah ongkos yang dikenakan kepada penerima layanan dalam mengurus dan
                                        atau memperoleh pelayanan dari penyelenggara yang besarnya ditetapkan Berdasarkan
                                        kesepakatan antara penyelenggara dan masyarakat</li>
                                    <li>Produk Spesifikasi Jenis Pelayanan adalah hasil pelayanan yang diberikan dan
                                        diterima sesuai dengan ketentuan yang ditetapkan. Produk pelayanan ini merupakan
                                        hasil dari setiap spesifikasi jenis pelayanan</li>
                                    <li>Kompetensi Pelaksana adalah kemampuan yang harus dimiliki oleh pelaksana meliputi
                                        pengetahuan keahlian keterampilan dan pengalaman.</li>
                                    <li>Perilaku Pelaksana adalah sikap petugas memberikan pelayanan</li>
                                    <li>Penanganan pengaduan, saran dan masukan adalah tata cara pelaksanaan penanganan
                                        pengaduan dan tindak lanjut</li>
                                    <li>Sarana adalah segala sesuatu yang dapat dipakai sebagai alat dalam mencapai maksud
                                        dan tujuan. Prasarana adalah segala sesuatu yang merupakan penunjang utama
                                        terselenggaranya suatu proses(usaha,pembangunan, proyek). Sarana yang digunakan
                                        untuk benda yang bergerak (komputer,mesin) dan prasarana untuk benda yang tidak
                                        bergerak (gedung).</li>
                                </ol>

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
  
<style scoped>.content-wrapper {
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
}</style>