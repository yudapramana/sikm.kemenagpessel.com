<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0"> Daftar <strong> Jawaban Survey</strong> <span class="text-muted">{{ status }}</span>
                    </h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Survey IKM</a></li>
                        <li class="breadcrumb-item"><a href="#">Respon</a></li>
                        <li class="breadcrumb-item active">Index</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Rekapitulasi Respon | <span class="text-muted">status {{ status
                            }}</span> </h4>
                        </div>

                        <div class="card-body" style="overflow-x:auto;">

                            <table class="table">
                                <thead style="font-size:small!important;">
                                    <tr>
                                        <th class="text-center align-middle" rowspan="2">No</th>
                                        <th class="text-center align-middle" rowspan="2" width="20%">Layanan di Survey</th>
                                        <th class="text-center align-middle" rowspan="2" width="15%">Tanggal</th>
                                        <!-- <th class="text-center align-middle" rowspan="2" width="25%">Biodata</th> -->
                                        <th class="text-center align-middle one " colspan="2" width="20%">Indeks Kepuasan</th>
                                        <!-- <th class="text-center align-middle" rowspan="2">Rerata</th> -->
                                        <th class="text-center align-middle one" rowspan="2">Kritik Saran</th>
                                        <!-- <th class="text-center align-middle one" rowspan="2">feedback</th> -->
                                        <th class="text-center align-middle" rowspan="2" width="10%">aksi</th>
                                    </tr>
                                    <tr>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">Kepuasan Masyarakat</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">Persepsi Korupsi</th>
                                        <!-- <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">3</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">4</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">5</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">6</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">7</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">8</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">9</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">10</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">11</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">12</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">13</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">14</th>
                                        <th class="one text-center align-middle fontsmaller font-smaller" style="font-size:smaller!important;">15</th> -->
                                    </tr>
                                </thead>
                                <!-- <tbody class="table-sm fontsmall"> -->
                                <!-- <tbody class="table-sm fontsmall"> -->
                                <tbody class="table-sm fontsmall">

                                    <tr v-for="item in data" :key="item.id_survey">
                                        <td class="text-center font-smaller align-center">{{ item.DT_RowIndex }}</td>
                                        <td class="font-smaller align-center">{{ item.layanan.name }}</td>
                                        <td class="text-center font-smaller align-center">{{ item.date_string }}</td>
                                        <!-- <td class="font-smaller align-center">{{ item.name }}</td> -->
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.nilai_ikm }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.nilai_ipk }}
                                        </td>
                                        <!-- <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_3 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_4 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_5 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_6 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_7 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_8 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_9 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_10 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_11 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_12 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_13 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_14 }}
                                        </td>
                                        <td class="one text-center font-smaller fontsmaller align-center">{{ item.answer_15 }}
                                        </td> -->
                                        <!-- <td class="text-center font-smaller fontsmaller align-center">{{ item.average }}
                                        </td> -->
                                        <td class="one text-center font-smaller  align-center">{{ item.improvement }} <br> {{ item.feedback }} </td>
                                        <!-- <td class="one text-center font-smaller  align-center">{{ item.feedback }}</td> -->
                                        <td v-if="status == 'submitted'" class="text-center font-smaller  align-center">
                                            <a class="button-accept badge badge-primary nav-link text-white"
                                                style="cursor: pointer !important;"
                                                @click="approve(item.id_survey)">setujui</a>&nbsp;&nbsp;
                                            <a class="button-reject badge badge-secondary nav-link text-white"
                                                style="cursor: pointer !important;"
                                                @click="reject(item.id_survey)">tolak</a>
                                        </td>

                                        <td v-if="status != 'submitted'" class="text-center font-smaller  align-center">
                                            -- no action --
                                        </td>
                                    </tr>

                                    <tr v-if="data.length == 0">
                                        <td class="text-center align-middle" style="font-size:large;" colspan="23">
                                            .: Belum ada data :.
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

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
// import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select';


import DataTable from 'datatables.net-vue3';
import DataTableBs5 from 'datatables.net-bs5';
DataTable.use(Select);
DataTable.use(DataTableBs5);

import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Thanks",
    components: {
        'has-error': HasError,
        'alert-error': AlertError,
        'DataTable': DataTable
    },
    data() {
        return {
            data: [],
            loading: false,
            disabled: false,
            editModal: false,
        };
    },
    methods: {
        approve(id) {
            Swal.fire({
                title: "Anda Yakin ingin ACC ?",
                text: "Klik Batal untuk membatalkan",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ACC",
            }).then((result) => {
                if (result.value) {
                    Swal.fire({
                        title: 'Loading, Harap menunggu!',
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                        },
                    });

                    axios
                        .get('/api/survey/approved/' + id)
                        .then((response) => {
                            console.log(response.data);
                            // this.data = response.data.data;
                            this.loadData();
                        });
                }
            });
        },
        reject(id) {
            Swal.fire({
                title: "Anda Yakin ingin TOLAK ?",
                text: "Klik Batal untuk membatalkan",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "TOLAK",
            }).then((result) => {
                if (result.value) {

                    Swal.fire({
                        title: 'Loading, Harap menunggu!',
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                        },
                    });

                    axios
                        .get('/api/survey/rejected/' + id)
                        .then((response) => {
                            console.log(response.data);
                            // this.data = response.data.data;
                            this.loadData();
                        });
                }

            });
        },
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        loadData() {
            axios
                .get('/api/get/surveys/' + this.$route.query.status)
                .then((response) => {
                    console.log('response getUsers');
                    console.log(response.data);
                    this.data = response.data.data;
                    this.$Progress.finish();
                    Swal.close()
                });
        },
        clickHandlerAccept(event, index) {
            console.log(`button ${index} clicked`)
        },
        clickHandlerReject(event, index) {
            console.log(`button ${index} clicked`)
        }
    },
    mounted() {
        this.loadData();
        this.status = this.$route.query.status;
    },
    created() {
        this.$Progress.start();
    },
    watch: {
        '$route.query.status': {
            handler: function (status) {
                console.log('status');
                console.log(status);
                this.status = this.$route.query.status;
                this.loadData();
            },
            deep: true,
            immediate: true
        }
    }
};
</script>
  
<style scoped>
@import 'datatables.net-dt';
@import 'bootstrap';
@import 'datatables.net-bs5';

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

.fontsmaller {
    font-size:xx-small!important;
}

.fontsmall {
    font-size: small !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0 !important;
}

/* td {
    padding: 0;
    margin: 0;
} */

.font-smaller {
    vertical-align: middle !important;
    font-size:xx-small!important;
}


table {
    /* display: block !important; */
    overflow-x: auto !important;
    /* white-space: nowrap !important; */
}

table tbody {
    /* display: table !important; */
    /* width: 100% !important; */
}

@media only screen and (max-width: 700px) {
        .one{
            display: none;
        }
    }

</style>