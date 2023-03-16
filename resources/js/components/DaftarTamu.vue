<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0"> Daftar <strong> Tamu</strong></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Buku Tamu</a></li>
                        <li class="breadcrumb-item"><a href="#">Daftar Tamu</a></li>
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
                            <h4 class="card-title m-0">Daftar Buku Tamu</h4>
                        </div>

                        <div class="card-body">
                            <div class="row">

                                <DataTable :columns="columns" :data="data" class="display" width="100%"
                                    :options="{ order: false }">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Tanggal</th>
                                            <th>Nama</th>
                                            <th>Kelamin</th>
                                            <th>Email</th>
                                            <th>no_hp</th>
                                            <th>Organisasi</th>
                                            <th>Jabatan</th>
                                            <th>Keperluan - Tujuan</th>
                                        </tr>
                                    </thead>
                                </DataTable>

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
                { data: 'DT_RowIndex' },
                { data: 'date' },
                { data: 'name' },
                { data: 'gender' },
                { data: 'email' },
                { data: 'no_hp' },
                { data: 'organisasi' },
                { data: 'jabatan' },
                { data: 'keperluan_tujuan' },
            ]
        };
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        loadData() {
            axios
                .get('/api/guest')
                .then((response) => {
                    console.log('response getUsers');
                    console.log(response.data.data);
                    this.data = response.data.data;
                    this.$Progress.finish();
                });
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
</style>