<template>
    <!-- <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Silahkan isi <strong>Buku Tamu</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Buku Tamu</a></li>
                        <li class="breadcrumb-item"><a href="#">Formulir</a></li>
                        <li class="breadcrumb-item active">Isi Formulir</li>
                    </ol>
                </div>
            </div>
        </div>
    </div> -->

    <div class="container-fluid m-0 p-0">
        <div class="jumbotron jumbotron-fluid new-font">
            <div class="mx-5 text-white">
                <h1>{{ timestamp }}</h1>
                <h1 class="display-4">S-IKM</h1>
                <h2 style="font-size:x-large !important;">Kementerian Agama</h2>
                <h2 style="font-size:x-large !important;">Kabupaten Pesisir Selatan</h2>
                <p class="lead">
                    <router-link to="tentang" class="btn btn-primary btn-lg btn-sm" role="button">Pelajari Lebih
                        Lanjut</router-link>
                </p>
                <p class="lead">
                    <router-link to="isi-survey" class="btn btn-warning btn-lg btn-sm" role="button">Isi Survey</router-link>
                </p>
            </div>
        </div>
    </div>

    <div class="content">



    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import UserService from '../services/user.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Landing",
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    components: {
        'has-error': HasError,
        'alert-error': AlertError
    },
    data() {
        return {
            timestamp: "",
            loading: false,
            disabled: false,
            editModal: false,
            director: null,
            c_agenda: null,
            weekday: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
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
        getNow() {
            const today = new Date();
            const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
            const time = ('0' + (today.getHours() + 1)).slice(-2) + ":" + ('0' + (today.getMinutes() + 1)).slice(-2) + ":" + ('0' + (today.getSeconds() + 1)).slice(-2);
            const day_name = this.weekday[today.getDay()]
            const dateTime = day_name + ', ' + date + ' ' + time;
            this.timestamp = dateTime;
        },
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        // loadDirector() {
        //     UserService.getDirector().then(
        //         (response) => {
        //             console.log('response director');
        //             console.log(response);
        //             this.director = response.data.director;
        //             this.c_agenda = response.data.c_agenda;
        //         },
        //         (error) => {
        //             alert(error);
        //         }
        //     );
        // },
        saveData() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            console.log('this.form');
            console.log(this.form);

            console.log('this.form.name');
            console.log(this.form.name);



            GuestService.store(this.form).then(
                (response) => {
                    console.log('response');
                    console.log(response);
                    let data = response.data;

                    if (data.code == 200) {

                        Toast.fire({
                            icon: "success",
                            title: "Data saved successfully",
                        });

                        let timerInterval
                        Swal.fire({
                            title: 'Berhasil!',
                            icon: 'success',
                            text: 'Data Anda berhasil tersimpan!',
                            html: 'Data Anda berhasil tersimpan! <br> Modal akan ditutup dalam waktu <b></b> milliseconds.',
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log('I was closed by the timer');
                                this.$router.push('/thanks');
                            }
                        })

                        this.loading = false;
                        this.disabled = false;
                        this.$Progress.finish();
                    } else {
                        Swal.fire(
                            "Failed",
                            data.message,
                            "warning"
                        );
                    }
                },
                (error) => {
                    console.log('error local');
                    console.log(error);
                    console.log('error local message');
                    console.log(error.message);
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                    // Swal.fire(
                    //     "Failed",
                    //     'Mohon untuk mengisi kolom yang kosong',
                    //     "warning"
                    // );

                    Swal.fire(
                        "Failed",
                        error.message,
                        "warning"
                    );
                }
            );
        },
    },
    created() {
        this.$Progress.start();
        setInterval(this.getNow, 1000);
        // this.loadDirector();
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

.jumbotron {
    background-image: url(/img/sikm_beranda_3.png);
    background-size: cover;
    height: 100%;
}

.header-custom {
    background-color: transparent !important;
}

.table-borderless>tbody>tr>td,
.table-borderless>tbody>tr>th,
.table-borderless>tfoot>tr>td,
.table-borderless>tfoot>tr>th,
.table-borderless>thead>tr>td,
.table-borderless>thead>tr>th {
    border: none;
}

.table-sm> :not(caption)>*>* {
    padding: 0 !important;
}

.table-sm th,
.table-sm td {
    padding: 0 !important;
}

.new-font {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important;
}
</style>