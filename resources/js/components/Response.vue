<template>
    <div class="content-header">
        <div class="container">
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
        <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Daftar Buku Tamu</h4>
                        </div>

                        <div class="card-body">

                                <DataTable :columns="columns" :data="data" class="display table table-hover table-striped" width="100%"
                                    :options="{ order: false }" >
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Layanan di Survey</th>
                                            <th>Tanggal</th>
                                            <th>Nama</th>
                                            <th>Alamat</th>
                                            <th>Jenis Kelamin</th>
                                            <th>Umur</th>
                                            <th>Pekerjaan</th>
                                            <th>Pendidikan</th>
                                            <th>avg</th>
                                        </tr>
                                    </thead>
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
                { data: 'DT_RowIndex' },
                { data: 'layanan.name' },
                { data: 'date_string' },
                { data: 'name' },
                { data: 'address' },
                { data: 'gender' },
                { data: 'age' },
                { data: 'work' },
                { data: 'education' },
                { data: 'average' },
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
                .get('/api/get/surveys')
                .then((response) => {
                    console.log('response getUsers');
                    console.log(response.data);
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