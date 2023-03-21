<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0"> Rekapitulasi Tahun <strong> {{ year }}</strong></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Survey IKM</a></li>
                        <li class="breadcrumb-item"><a href="#">Rekapitulasi</a></li>
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
                            <h4 class="card-title m-0">Rekapitulasi Tahun <strong> {{ year }}</strong></h4>
                        </div>

                        <div class="card-body">

                                <DataTable :columns="columns" :data="data" class="display table table-hover table-bordered" width="100%"
                                    :options="{ order: false, sort: false, paging: false }" >
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th  width="35%">Nama Layanan</th>
                                            <th class="text-center">Nilai Index Pelayanan</th>
                                            <th>Konversi</th>
                                            <th>Mutu Pelayanan</th>
                                            <th>Jumlah Responden</th>
                                            <th width="10%">Aksi</th>
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
            year: 2023,
            loading: false,
            disabled: false,
            editModal: false,
            columns: [
                { data: 'DT_RowIndex', className: "text-center" },
                { data: 'layanan.name' },
                { data: 'index_pelayanan', className: "text-center" },
                { data: 'konversi', className: "text-center" },
                { data: 'mutu_pelayanan', className: "text-center" },
                { data: 'jumlah_responden', className: "text-center" },
                { data: 'aksi', className: "text-center" },
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
                .get('/api/get/rekapitulasi/' + this.$route.query.year)
                .then((response) => {
                    console.log('response getRekapTahunan');
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
        // alert(this.$route.query.year);
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