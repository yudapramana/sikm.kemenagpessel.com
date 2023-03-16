<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Data User</h1>
                    </div>
                    <div class="col-sm-6 d-none d-sm-block">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data User</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <div class="content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Data User</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-success" @click="showModal()">
                                        Tambah Pengguna
                                    </button>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="form-group">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Nama Pengguna</th>
                                                    <th>Kontak</th>
                                                    <th>Peran User</th>
                                                    <th>Foto Profile</th>
                                                    <th>Block</th>
                                                    <th>Status</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in users" :key="item.id">
                                                    <td>{{ item.name }}</td>
                                                    <td>
                                                        <span v-if="item.no_hp">{{
                                                            item.no_hp
                                                        }}</span>
                                                        <span v-else class="text-muted">not_registered</span>
                                                        <br />
                                                        {{ item.email }}
                                                    </td>
                                                    <td>
                                                        <ul>
                                                            <li v-for="unit in item.roles" :key="unit.id">
                                                                {{ unit.name }}
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div class="show-photo">
                                                            <img class="mb-2" id="show-photo"
                                                                :src="(item.profile_photo_url != null) ? item.profile_photo_url : '//ssl.gstatic.com/accounts/ui/avatar_2x.png'"
                                                                alt="profile_photo" width="100"><br>
                                                        </div>
                                                    </td>
                                                    <td>{{ item.block }}</td>
                                                    <td>{{ item.status }}</td>
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
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel" v-show="!editModal">
                        Tambah Data Pengguna
                    </h5>

                    <h5 class="modal-title" id="staticBackdropLabel" v-show="editModal">
                        Ubah Data Pengguna
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="editModal ? updateData() : saveData()">
                    <div class="modal-body">
                        <div class="row card-body">
                            <div class="col-12">
                                <input type="hidden" name="id_user" id="id_user" v-model="form.id" />

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Pas Foto</label>
                                    <div class="col-sm-9">

                                        <!-- <Upload class="align" /> -->

                                        <div class="photo-container">
                                            <div v-if="form.profile_photo_url" class="show-photo">
                                                <img class="mb-2" id="show-photo" :src="form.profile_photo_url"
                                                    alt="profile_photo" height="100"><br>
                                            </div>

                                            <input type="hidden" id="profile_photo_url" name="profile_photo_url"
                                                v-model="form.profile_photo_url" />
                                            <input type="hidden" id="profile_photo_id" name="profile_photo_id"
                                                v-model="form.profile_photo_id" />
                                        </div>


                                        <button v-show="form.profile_photo_id == ''" type="button"
                                            class="btn btn-sm btn-secondary" @click="openUploadModal()">Upload
                                            Photo</button>
                                        <button v-show="form.profile_photo_id != ''" type="button"
                                            class="btn btn-sm btn-secondary" @click="reuploadPhoto()">Reupload
                                            Photo</button>


                                    </div>
                                </div>


                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Nama Lengkap</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="name" name="name" v-model="form.name"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has('name'),
                                            }" />
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Username /
                                        NIP</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="username" name="username"
                                            v-model="form.username" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'username'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="username"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Email</label>
                                    <div class="col-sm-9">
                                        <input type="email" class="form-control" id="email" name="email"
                                            v-model="form.email" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'email'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">No HP</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="no_hp" name="no_hp" v-model="form.no_hp"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'no_hp'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="no_hp"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Peran Pengguna</label>
                                    <div class="col-sm-9">
                                        <div class="form-check" v-for="item in levels" :key="item.id">
                                            <input class="form-check-input" type="checkbox" name="role_ids" :value="item.id"
                                                v-model="form.role_ids" />
                                            <label class="form-check-label">{{ item.name }}</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" class="form-control" id="password" name="password"
                                            v-model="form.password" :class="{
                                                'is-invalid':
                                                    form.errors.has(
                                                        'password'
                                                    ),
                                            }" />
                                        <has-error :form="form" field="password"></has-error>
                                        <small class="text-muted edit-state">Kosongkan jika tidak ingin ubah
                                            password</small>
                                    </div>
                                </div>

                                <div class="row mb-3 edit-state">
                                    <label for="inputText" class="col-sm-3 col-form-label">Block</label>
                                    <div class="col-sm-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="block" id="block1"
                                                value="yes" checked="" v-model="form.block" :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'block'
                                                        ),
                                                }" />

                                            <label class="form-check-label" for="block1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="block" id="block1" value="no"
                                                checked="true" v-model="form.block" :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'block'
                                                        ),
                                                }" />

                                            <label class="form-check-label" for="block1">
                                                No
                                            </label>
                                        </div>
                                        <has-error :form="form" field="block"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3 edit-state">
                                    <label for="inputText" class="col-sm-3 col-form-label">Status</label>
                                    <div class="col-sm-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="status" id="status1"
                                                value="active" checked="true" v-model="form.status" :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'status'
                                                        ),
                                                }" />
                                            <label class="form-check-label" for="status1">
                                                Aktif
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="status" id="status1"
                                                value="inactive" v-model="form.status" :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'status'
                                                        ),
                                                }" />
                                            <label class="form-check-label" for="status1">
                                                Tidak Aktif
                                            </label>
                                        </div>
                                        <has-error :form="form" field="status"></has-error>
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
import { CldContext, CldImage } from 'cloudinary-vue';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';
import CloudinaryImage from '@teamnovu/vue-cloudinary-image';
import UserService from "../../services/user.service";
import RoleService from "../../services/role.service";




export default {
    name: 'Dashboard',
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
            users: {},
            authenticatedUser: null,
            form: new Form({
                id: "",
                name: "",
                username: "",
                email: "",
                password: "",
                no_hp: "",
                block: "no",
                status: "active",
                profile_photo_url: "",
                profile_photo_id: "",
                role_ids: [],
            }),
            cloudName: "kemenagpessel",
            preset: 'profile_picture_pegawai',
            url: null,
            public_id: '',
            myWidget: null,
        };
    },
    components: {
        'has-error': HasError,
        'alert-error': AlertError
    },
    methods: {
        reuploadPhoto() {
            this.form.profile_photo_id = '';
            this.form.profile_photo_url = '';
        },
        openUploadModal() {
            this.myWidget.open();
        },
        showModal() {
            this.editModal = false;
            this.form.reset();
            console.log("Show Modal");
            $("#fModal").modal("show");
        },
        showModalEdit(item) {
            this.editModal = true;
            console.log(item);
            $("#fModal").modal("show");
            this.form.fill(item);
        },
        loadUsers() {
            UserService.getUsers().then(
                (response) => {
                    console.log('response')
                    console.log(response)
                    this.users = response.data;
                },
                (error) => {
                    alert(error);
                }
            );
        },
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
            this.loadUsers();
            this.$Progress.finish();
        },
        saveData() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            UserService.storeUser(this.form).then(
                (response) => {
                    $("#fModal").modal("hide");
                    this.loadUsers();
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

            UserService.updateUser(this.form).then(
                (response) => {
                    $("#fModal").modal("hide");
                    this.loadUsers();
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

                    UserService.deleteUser(id).then(
                        (response) => {
                            this.loadUsers();

                            Swal.fire(
                                "Terhapus",
                                "Data Anda sudah terhapus",
                                "success"
                            );
                        },
                        (error) => {
                            Swal.fire(
                                "Gagal",
                                error.message,
                                "warning"
                            );
                        }
                    );


                    // this.form
                    //     .delete("api/user/" + id)
                    //     .then(() => {
                    //         this.loadUsers();

                    //         Swal.fire(
                    //             "Terhapus",
                    //             "Data Anda sudah terhapus",
                    //             "success"
                    //         );
                    //     })
                    //     .catch(() => {
                    //         Swal.fire(
                    //             "Gagal",
                    //             "Data Gagal terhapus",
                    //             "warning"
                    //         );
                    //     });
                }
            });
        },
        processResults(error, result) {
            if (!error && result && result.event === "success") {
                console.log(result);
                this.url = result.info.url;
                this.public_id = result.info.public_id;
                this.form.profile_photo_url = result.info.url;
                this.form.profile_photo_id = result.info.public_id;
            }
        }
    },
    created() {
        if (!this.currentUser) {
            return this.$router.push({ name: "Login" });
        } else {
            this.loadData();
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        } else {

            this.myWidget = window.cloudinary.createUploadWidget(
                { cloudName: this.cloudName, uploadPreset: this.preset },
                this.processResults
            );
        }
    },



};
</script>
