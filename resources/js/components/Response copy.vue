<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0"> Daftar <strong> Jawaban Survey</strong></h1>
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
        <div class="container-fluid">
            <div class="row justify-content-md-center">

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Rekapitulasi Respon</h4>
                        </div>

                        <div class="card-body">

                            <DataTable :columns="columns" :data="data" class="display table table-hover table-bordered"
                                width="100%" :options="{ order: false, scrollX: true, sort: false }" @draw="draw">
                                <thead style="font-size:small!important;">
                                    <tr>
                                        <th class="text-center align-middle" rowspan="2">No</th>
                                        <th class="text-center align-middle" rowspan="2" width="20%">Layanan di Survey</th>
                                        <th class="text-center align-middle" rowspan="2" width="10%">Tanggal</th>
                                        <th class="text-center align-middle" rowspan="2" width="25%">Biodata</th>
                                        <!-- <th class="text-center align-middle" rowspan="2">Nama</th>
                                            <th class="text-center align-middle" rowspan="2">Alamat</th>
                                            <th class="text-center align-middle" rowspan="2">Jenis Kelamin</th>
                                            <th class="text-center align-middle" rowspan="2">Umur</th>
                                            <th class="text-center align-middle" rowspan="2">Pekerjaan</th>
                                            <th class="text-center align-middle" rowspan="2">Pendidikan</th> -->
                                        <th class="text-center align-middle" colspan="15">Jawaban</th>
                                        <th class="text-center align-middle" rowspan="2">avg</th>
                                        <th class="text-center align-middle" rowspan="2">improvement</th>
                                        <th class="text-center align-middle" rowspan="2">feedback</th>
                                        <th class="text-center align-middle" rowspan="2" width="10%">aksi</th>
                                    </tr>
                                    <tr>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">1</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">2</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">3</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">4</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">5</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">6</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">7</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">8</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">9</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">10</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">11</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">12</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">13</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">14</th>
                                        <th class="text-center align-middle" style="font-size:smaller!important;">15</th>
                                    </tr>
                                </thead>
                                <tbody class="table-sm fontsmall"></tbody>
                            </DataTable>

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
            columns: [
                { data: 'DT_RowIndex', className: 'text-center' },
                { data: 'layanan.name' },
                { data: 'date_string', className: 'text-center' },
                // { data: 'name', className: 'text-center' },
                // { data: 'address', className: 'text-center' },
                // { data: 'gender', className: 'text-center' },
                // { data: 'age', className: 'text-center' },
                // { data: 'work', className: 'text-center' },
                // { data: 'education', className: 'text-center' },
                { data: 'biodata' },
                { data: 'answer_1', className: 'text-center fontsmaller' },
                { data: 'answer_2', className: 'text-center fontsmaller' },
                { data: 'answer_3', className: 'text-center fontsmaller' },
                { data: 'answer_4', className: 'text-center fontsmaller' },
                { data: 'answer_5', className: 'text-center fontsmaller' },
                { data: 'answer_6', className: 'text-center fontsmaller' },
                { data: 'answer_7', className: 'text-center fontsmaller' },
                { data: 'answer_8', className: 'text-center fontsmaller' },
                { data: 'answer_9', className: 'text-center fontsmaller' },
                { data: 'answer_10', className: 'text-center fontsmaller' },
                { data: 'answer_11', className: 'text-center fontsmaller' },
                { data: 'answer_12', className: 'text-center fontsmaller' },
                { data: 'answer_13', className: 'text-center fontsmaller' },
                { data: 'answer_14', className: 'text-center fontsmaller' },
                { data: 'answer_15', className: 'text-center fontsmaller' },
                { data: 'average', className: 'text-center' },
                { data: 'improvement', className: 'text-center' },
                { data: 'feedback', className: 'text-center' },
                {
                    data: 'aksi',
                    className: 'text-center',
                },
            ]
        };
    },
    methods: {
        draw() {
            $('.button-accept').on('click', function() {
                alert('accept');
            });

            $('.button-reject').on('click', function() {
                alert('reject');
            })
        },
        rowClick: function (item, row) {
            console.log('item')
            console.log(item)
        },
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        loadData() {
            axios
                .get('/api/get/surveys/submitted')
                .then((response) => {
                    console.log('response getUsers');
                    console.log(response.data);
                    this.data = response.data.data;
                    this.$Progress.finish();
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
    },
    created() {
        this.$Progress.start();
    },
    mounted() {
        this.loadData();

    },
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
    font-size: x-small !important;
}

.fontsmall {
    font-size: small !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0 !important;
}

td {
    padding: 0;
    margin: 0;
}
</style>