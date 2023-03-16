<template>
    <div class="content-wrapper">
        <div class="content">
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Data Level</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-success" @click="showModal()">
                                        Tambah Data Level
                                    </button>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="form-group">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Nama Level</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in levels" :key="item.id">
                                                    <td>{{ item.name }}</td>
                                                    <td>
                                                        <a href="#" @click="showModalEdit(item)">
                                                            <i class="fas fa-edit blue"></i>
                                                        </a>
                                                        |
                                                        <a href="#" @click="deleteData(item.id)">
                                                            <i class="fas fa-trash-alt red"></i>
                                                        </a>
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
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="fModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel" v-show="!editModal">
                        Tambah Level Pengguna
                    </h5>

                    <h5 class="modal-title" id="staticBackdropLabel" v-show="editModal">
                        Edit Level Pengguna
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="editModal ? updateData() : saveData()">
                    <div class="modal-body">
                        <div class="row card-body">
                            <div class="col-12">

                                <input type="hidden" name="id_role" id="id_role" v-model="form.id" />
                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Nama Level </label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="name" name="name" v-model="form.name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary" :disabled="disabled" v-show="!editModal">
                            <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                            Simpan
                        </button>

                        <button type="submit" class="btn btn-warning" :disabled="disabled" v-show="editModal">
                            <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                            Ubah
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import RoleService from '../../services/role.service';
import Form from 'vform';

export default {
    name: 'DataRole',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    data() {
        return {
            loggedIn: localStorage.getItem("loggedIn"),
            token: localStorage.getItem("token"),
            loading: false,
            disabled: false,
            editModal: false,
            levels: {},
            form: new Form({
                id: "",
                name: ""
            })
        };
    },
    methods: {
        loadRoles() {

            RoleService.getRoles().then(
                (response) => {
                    console.log('response')
                    console.log(response)
                    this.levels = response.data;
                },
                (error) => {
                    alert(error);
                }
            );
        },
        loadData() {
            this.$Progress.start();
            this.loadRoles();
            this.$Progress.finish();
        },
        saveData() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            RoleService.store(this.form).then(
                (response) => {
                    $("#fModal").modal("hide");
                    this.loadData();
                    Toast.fire({
                        icon: "success",
                        title: "Data saved successfully",
                    });

                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.finish();

                    console.log('response local');
                    console.log(response);
                },
                (error) => {
                    console.log('error local');
                    console.log(error);
                    console.log('error local message');
                    console.log(error.message);
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                    Swal.fire(
                        "Failed",
                        error.message,
                        "warning"
                    );
                }
            );
        },
        updateData() {
            this.$Progress.start();
            console.log("tes ubah data");

            RoleService.update(this.form).then(
                (response) => {
                    $("#fModal").modal("hide");
                    this.loadData();
                    Toast.fire({
                        icon: "success",
                        title: "Data saved successfully",
                    });

                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.finish();
                },
                (error) => {
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                }
            );
        },
        deleteData(id) {
            Swal.fire({
                title: "Anda Yakin ingin menghapus data ini ?",
                text: "Klik Batal untuk membatalkan penghapusan",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Hapus",
            }).then((result) => {
                if (result.value) {

                    RoleService.delete(id).then(
                        (response) => {
                            this.loadData();

                            Toast.fire({
                                icon: "success",
                                title: "Data deleted successfully",
                            });
                        },
                        (error) => {
                            Swal.fire(
                                "Gagal",
                                error.message,
                                "warning"
                            );
                        }
                    );
                }
            });
        },
        showModalEdit(item) {
            this.editModal = true;
            console.log(item);
            $("#fModal").modal("show");
            this.form.fill(item);
        },
        showModal() {
            this.editModal = false;
            this.form.reset();
            console.log("Show Modal");
            $("#fModal").modal("show");
        },
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        } else {
            this.loadData();
        }
    },
};
</script>
