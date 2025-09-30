<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-12">
                    <h1 class="m-0">
                        Survey<strong> Kepuasan Pelayanan&nbsp;</strong>
                        <span class="m-0 text-muted" style="font-size:smaller !important;">KemenagPessel</span>

                    </h1>
                </div>
                <!-- <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Kepuasan Pelayanan</a></li>
                        <li class="breadcrumb-item"><a href="#">Survey</a></li>
                        <li class="breadcrumb-item active">Index</li>
                    </ol>
                </div> -->
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container mb-3">

            <!--questionBox-->
            <div class="questionBox">

                <!-- transition -->
                <!-- questionIndex : {{ questionIndex }} <br>
                quiz.questions.length : {{ quiz.questions.length }} <br> -->

                <!--biodataContainer-->
                <div class="questionContainer" v-if="questionIndex == -1" v-bind:key="questionIndex">

                    <header>
                        <h1 style="font-size:x-large !important; margin: 0 !important;">Survey Indeks Kepuasan Masyarakat</h1>

                        <h1 style="font-size:large !important; margin: 0 !important; color: dimgray;">.: Biodata Responden
                            :.</h1>
                    </header>

                    <form id="biodataForm" @submit.prevent="editModal ? updateData() : saveData()">

                        <div class="row m-3">
                            <div class="col-12">
                                <input type="hidden" name="id_user" id="id_user" v-model="form.id" />



                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Unit Pelayanan</label>
                                    <div class="col-sm-9">
                                        <Select2 v-model="form.id_unit_pengolah" :options="myOptions"
                                            :settings="{ theme: 'default', width: '100%', placeholder: 'Pilih Unit Layanan' }"
                                            required></Select2>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Nama Pelayanan</label>

                                    <div class="col-sm-9">
                                        <i v-show="loadingPelayanan" class="fa fa-spinner fa-spin"></i>
                                        <Select2 v-show="!loadingPelayanan" v-model="form.id_layanan" :options="myOptionsLayanan"
                                            :settings="{ theme: 'default', width: '100%', placeholder: 'Pilih Layanan' }"
                                            required></Select2>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Nama Responden</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="name" name="name" v-model="form.name"
                                            required :class="{
                                                'is-invalid':
                                                    form.errors.has('name'),
                                            }" />
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Alamat</label>
                                    <div class="col-sm-9">
                                        <textarea class="form-control" name="address" id="address" cols="30" rows="2"
                                            v-model="form.address"></textarea>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">No Telp / HP</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="no_hp" name="no_hp" required
                                            v-model="form.no_hp" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Usia</label>
                                    <div class="col-sm-9">
                                        <!-- <select name="age" id="age" class="form-control" v-model="form.age" placeholder="-- Pilih Usia --">
                                            <option value="">-- Pilih Usia --</option>
                                            <option selected="selected" value="Dibawah 20 Tahun">Dibawah 20 Tahun</option>
                                            <option value="21 s/d 30 Tahun">21 s/d 30 Tahun</option>
                                            <option value="31 s/d 40 Tahun">31 s/d 40 Tahun</option>
                                            <option value="41 s/d 50 Tahun">41 s/d 50 Tahun</option>
                                            <option value="Diatas 50 Tahun">Diatas 50 Tahun</option>
                                        </select> -->

                                        <Select2 v-model="form.age" :options="ageOptions"
                                            :settings="{ theme: 'default', width: '100%', placeholder: '-- Pilih Usia --' }"
                                            required>
                                        </Select2>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Jenis Kelamin</label>
                                    <div class="col-sm-9">
                                        <!-- <select name="gender" id="gender" class="form-control" v-model="form.gender">
                                            <option value="">-- Pilih Jenis Kelamin --</option>
                                            <option selected="selected" value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select> -->

                                        <Select2 v-model="form.gender" :options="genderOptions"
                                            :settings="{ theme: 'default', width: '100%', placeholder: '-- Pilih Jenis Kelamin --' }"
                                            required>
                                        </Select2>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Pendidikan Terakhir</label>
                                    <div class="col-sm-9">
                                        <!-- <select name="education" id="education" class="form-control"
                                            v-model="form.education">
                                            <option selected="selected" value="">-- Pilih Pendidikan Terakhir --</option>
                                            <option value="SD">SD</option>
                                            <option value="SMP atau Sederajat">SMP atau Sederajat</option>
                                            <option value="SMA atau Sederajat">SMA atau Sederajat</option>
                                            <option value="Strata 1 (S1)">Strata 1 (S1)</option>
                                            <option value="Strata 2 (S2)">Strata 2 (S2)</option>
                                            <option value="Strata 3 (S3)">Strata 3 (S3)</option>
                                        </select> -->

                                        <Select2 v-model="form.education" :options="educationOptions"
                                            :settings="{ theme: 'default', width: '100%', placeholder: '-- Pilih Pendidikan Terakhir --' }"
                                            required>
                                        </Select2>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Pekerjaan</label>
                                    <div class="col-sm-9">
                                        <!-- <select name="work" id="work" class="form-control" v-model="form.work">
                                            <option selected="selected" value="">-- Pilih Pekerjaan --</option>
                                            <option value="ASN / TNI / POLRI">ASN / TNI / POLRI</option>
                                            <option value="Pegawai Swasta">Pegawai Swasta</option>
                                            <option value="Wiraswasta">Wiraswasta</option>
                                            <option value="Tenaga Honor / Ahli / Kontrak">Tenaga Honor / Ahli / Kontrak</option>
                                            <option value="Pelajar / Mahasiswa">Pelajar / Mahasiswa</option>
                                            <option value="Lainnya">Lainnya</option>
                                        </select> -->

                                        <Select2 v-model="form.work" :options="workOptions"
                                            :settings="{ theme: 'default', width: '100%', placeholder: '-- Pilih Pekerjaan --' }"
                                            required>
                                        </Select2>
                                    </div>
                                </div>

                                <!-- <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Perbaikan yang perlu dilakukan</label>
                                    <div class="col-sm-9">
                                        <select name="improvement" id="improvement" class="form-control"
                                            v-model="form.improvement">
                                            <option value="">-- Pilih Pekerjaan --</option>
                                            <option value="Kebijakan Pelayanan">Kebijakan Pelayanan</option>
                                            <option value="Profesionalisme SDM">Profesionalisme SDM</option>
                                            <option value="Kualitas Sarana dan Prasarana">Kualitas Sarana dan Prasarana
                                            </option>
                                            <option value="Sistem Informasi dan Pelayanan Publik">Sistem Informasi dan
                                                Pelayanan Publik</option>
                                            <option value="Konsultasi dan Pengaduan">Konsultasi dan Pengaduan</option>
                                            <option value="Penghilangan Praktek Pungli">Penghilangan Praktek Pungli</option>
                                            <option value="Penghilangan Praktek diluar Prosedur">Penghilangan Praktek diluar
                                                Prosedur</option>
                                            <option value="Penghilangan Praktek Percaloan">Penghilangan Praktek Percaloan
                                            </option>
                                            <option value="Tidak ada yang perlu diperbaiki">Tidak ada yang perlu diperbaiki
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Saran dan Kritik yang
                                        Membangun</label>
                                    <div class="col-sm-9">
                                        <textarea class="form-control" name="feedback" id="feedback" cols="30" rows="2"
                                            v-model="form.feedback"></textarea>
                                    </div>
                                </div> -->


                            </div>
                        </div>

                    </form>

                    <!--quizFooter: navigation and progress-->
                    <footer class="questionFooter">

                        <!--pagination-->
                        <nav class="pagination" role="navigation" aria-label="pagination">

                            <!-- back button -->
                            <a class="button" v-on:click="prev();" :disabled="questionIndex == -1">
                                Back
                            </a>

                            <a class="button is-active" v-on:click="nextBiodata();">
                                {{ 'Next' }}
                            </a>

                        </nav>
                        <!--/pagination-->

                    </footer>
                    <!--/quizFooter-->

                </div>
                <!--/biodataContainer-->

                <!--questionContainer-->
                <div class="questionContainer" v-if="questionIndex < quiz.questions.length && questionIndex != -1"
                    v-bind:key="questionIndex">

                    <header>
                        <h1 class="title is-6">Survey Indeks Kepuasan Masyarakat</h1>
                        <!--progress-->
                        <div class="progressContainer">
                            <progress class="progress is-info is-small"
                                :value="(questionIndex / quiz.questions.length) * 100" max="100">{{ (questionIndex /
                                    quiz.questions.length) * 100 }}%</progress>
                            <p>{{ 'Survey Ke-' + (questionIndex + 1) + ' dari ' + quiz.questions.length }} Total</p>
                        </div>
                        <!--/progress-->
                    </header>

                    <!-- questionTitle -->
                    <h2 class="titleContainer title">{{ quiz.questions[questionIndex].text }}</h2>

                    <!-- quizOptions -->
                    <div class="optionContainer">
                        <div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses"
                            @click="selectOption(index + 1)"
                            :class="{ 'is-selected': userResponses[questionIndex] == (index + 1) }" :key="index">
                            {{ charIndex(index) }}. {{ response.text }}
                        </div>
                    </div>

                    <!--quizFooter: navigation and progress-->
                    <footer class="questionFooter">

                        <!--pagination-->
                        <nav class="pagination" role="navigation" aria-label="pagination">

                            <!-- back button -->
                            <a class="button" v-on:click="prev();" :disabled="questionIndex < 1">
                                Back
                            </a>

                            <!-- next button -->
                            <!-- <a class="button" :class="(userResponses[questionIndex] == null) ? '' : 'is-active'"
                                v-on:click="next();" :disabled="questionIndex >= quiz.questions.length">
                                {{ (userResponses[questionIndex] == null) ? 'Skip' : 'Next' }}
                            </a> -->

                            <a v-if="userResponses[questionIndex] != null" class="button is-active" v-on:click="next();">
                                {{ 'Next' }}
                            </a>
                            <!--                             
                            <a class="button is-active"
                                v-if="(userResponses[questionIndex] != null && questionIndex != quiz.questions.length - 1)"
                                v-on:click="next();" :disabled="questionIndex >= quiz.questions.length">
                                {{ 'Next' }}
                            </a>

                            <button class="button is-active"
                                v-if="(userResponses[questionIndex] != null && questionIndex == quiz.questions.length - 1)"
                                v-on:click="submitSurvey();" :disabled="disabled">
                                <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                                {{ 'Submit & Finish' }}
                            </button> -->

                            <!-- <a class="button" :class="(userResponses[questionIndex] == null) ? '' : 'is-active'"
                                v-on:click="next();" :disabled="questionIndex >= quiz.questions.length">
                                {{ (userResponses[questionIndex] == null) ? 'Skip' : 'Next' }}
                            </a> -->

                        </nav>
                        <!--/pagination-->

                    </footer>
                    <!--/quizFooter-->

                </div>
                <!--/questionContainer-->

                <!--biodataContainer-->
                <div class="questionContainer" v-if="questionIndex == quiz.questions.length && questionIndex != -1"
                    v-bind:key="questionIndex">

                    <header>
                        <h1 class="title is-6">Survey Indeks Kepuasan Masyarakat</h1>

                        <h1 style="font-size:large !important; margin: 0 !important; color: dimgray;">.: Feedback Responden
                            :.</h1>
                    </header>

                    <form id="feedbackForm" @submit.prevent="editModal ? updateData() : saveData()">

                        <div class="row m-3">
                            <div class="col-12">
                                <input type="hidden" name="id_user" id="id_user" v-model="form.id" />

                                <div class="row mb-3">
                                    <label class="col-sm-3 col-form-label">Perbaikan yang perlu dilakukan</label>
                                    <div class="col-sm-9">
                                        <select name="improvement" id="improvement" class="form-control"
                                            v-model="form.improvement">
                                            <option selected="selected" value="Tidak ada yang perlu diperbaiki">Tidak ada
                                                yang perlu diperbaiki
                                            </option>
                                            <option value="Kebijakan Pelayanan">Kebijakan Pelayanan</option>
                                            <option value="Profesionalisme SDM">Profesionalisme SDM</option>
                                            <option value="Kualitas Sarana dan Prasarana">Kualitas Sarana dan Prasarana
                                            </option>
                                            <option value="Sistem Informasi dan Pelayanan Publik">Sistem Informasi dan
                                                Pelayanan Publik</option>
                                            <option value="Konsultasi dan Pengaduan">Konsultasi dan Pengaduan</option>
                                            <option value="Penghilangan Praktek Pungli">Penghilangan Praktek Pungli</option>
                                            <option value="Penghilangan Praktek diluar Prosedur">Penghilangan Praktek diluar
                                                Prosedur</option>
                                            <option value="Penghilangan Praktek Percaloan">Penghilangan Praktek Percaloan
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-3 col-form-label">Saran dan Kritik yang
                                        Membangun</label>
                                    <div class="col-sm-9">
                                        <textarea class="form-control" name="feedback" id="feedback" cols="30" rows="10"
                                            v-model="form.feedback"></textarea>
                                    </div>
                                </div>

                                <br>


                            </div>
                        </div>

                    </form>

                    <!--quizFooter: navigation and progress-->
                    <footer class="questionFooter">

                        <!--pagination-->
                        <nav class="pagination" role="navigation" aria-label="pagination">

                            <!-- back button -->
                            <a class="button" v-on:click="prev();" :disabled="questionIndex == -1">
                                Back
                            </a>

                            <!-- <a class="button is-active" v-on:click="next();">
                                {{ 'Next' }}
                            </a> -->

                            <button class="button is-active" v-on:click="submitSurvey();" :disabled="disabled">
                                <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                                {{ 'Submit & Finish' }}
                            </button>

                        </nav>
                        <!--/pagination-->

                    </footer>
                    <!--/quizFooter-->

                </div>
                <!--/biodataContainer-->



                <!--quizCompletedResult-->
                <div v-if="questionIndex == quiz.questions.length + 1 && questionIndex != -1" v-bind:key="questionIndex"
                    class="quizCompleted has-text-centered">

                    <span class="icon">
                        <i class="fa fa-check-circle is-active"></i>
                    </span>

                    <h2 style="font-size:x-large">Terima Kasih telah mengisi Survey / Kuesioner</h2>
                    <!-- <h2 style="font-size:large"><a href="#" style="color:cadetblue !important;">Klik Disini</a> untuk kembali ke halaman beranda </h2> -->
                    <br><br>
                    <router-link class="button" to="landing"><i class="fa fa-home"></i>&nbsp; Beranda </router-link>
                    <a class="button" @click="restart()"><i class="fa fa-refresh"></i>&nbsp; Isi Ulang Survey</a>
                </div>
                <!--/quizCompetedResult-->


                <!--lastForm-->
                <!-- <div v-if="questionIndex == quiz.questions.length && questionIndex != -1" v-bind:key="questionIndex"> -->
                <!--/lastForm-->

            </div>
            <!--/questionBox-->

        </div>

        <div class="qr-code mb-3" style="justify-content: center; text-align: center;">
                <div class="box">
                    Atau
                </div>
                <div class="box mb-3">
                    Anda dapat mengisi survey dengan Perangkat HP Anda dengan scan QR CODE dibawah ini:
                </div>

                <div class="image-box mb-3">
                    <center>
                    <img src="http://res.cloudinary.com/kemenagpessel/image/upload/v1685517991/arsip_masuk/gn3bzggmztxmtndmrobc.png" alt="AdminLTE Logo">
                    </center>
                </div>

                <div class="box">
                    Aplikasi QRCODE dapat di download di PlayStore dengan mencari "QRCODE" di Smartphone Anda
                </div>
                
            </div>
    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import Select2 from 'vue3-select2-component';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';
import { timeouts } from 'retry';

var quiz = {
    user: "Dave",
    questions: [
        {
            text: "What is the full form of HTTP?",
            responses: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol", correct: true },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
        {
            text: "HTML document start and end with which tag pairs?",
            responses: [
                { text: "HTML", correct: true },
                { text: "WEB" },
                { text: "HEAD" },
                { text: "BODY" }
            ]
        },
        {
            text: "Which tag is used to create body text in HTML?",
            responses: [
                { text: "HEAD" },
                { text: "BODY", correct: true },
                { text: "TITLE" },
                { text: "TEXT" }
            ]
        },
        {
            text: "Outlook Express is _________",
            responses: [
                { text: "E-Mail Client", correct: true },
                { text: "Browser" },
                {
                    text: "Search Engine"
                },
                { text: "None of the above" }
            ]
        },
        {
            text: "What is a search engine?",
            responses: [
                { text: "A hardware component " },
                {
                    text: "A machinery engine that search data"
                },
                { text: "A web site that searches anything", correct: true },
                { text: "A program that searches engines" }
            ]
        },
        {
            text:
                "What does the .com domain represents?",
            responses: [
                { text: "Network" },
                { text: "Education" },
                { text: "Commercial", correct: true },
                { text: "None of the above" }
            ]
        },
        {
            text: "In Satellite based communication, VSAT stands for? ",
            responses: [
                { text: " Very Small Aperture Terminal", correct: true },
                { text: "Varying Size Aperture Terminal " },
                {
                    text: "Very Small Analog Terminal"
                },
                { text: "None of the above" }
            ]
        },
        {
            text: "What is the full form of TCP/IP? ",
            responses: [
                { text: "Telephone call protocol / international protocol" },
                { text: "Transmission control protocol / internet protocol", correct: true },
                { text: "Transport control protocol / internet protocol " },
                { text: "None of the above" }
            ]
        },
        {
            text:
                "What is the full form of HTML?",
            responses: [
                {
                    text: "Hyper text marking language"
                },
                { text: "Hyphenation text markup language " },
                { text: "Hyper text markup language", correct: true },
                { text: "Hyphenation test marking language" }
            ]
        },
        {
            text: "\"Yahoo\", \"Infoseek\" and \"Lycos\" are _________?",
            responses: [
                { text: "Browsers " },
                { text: "Search Engines", correct: true },
                { text: "News Group" },
                { text: "None of the above" }
            ]
        }
    ]
},
    userResponseSkelaton = Array(quiz.questions.length).fill(null);

export default {
    name: "Landing",
    data() {
        return {
            loading: false,
            loadingPelayanan: false,
            disabled: false,
            quiz: quiz,
            questionIndex: -1,
            userResponses: userResponseSkelaton,
            isActive: false,
            form: new Form({
                id_unit_pengolah: null,
                id_layanan: null,
                name: null,
                address: null,
                no_hp: null,
                age: null,
                gender: null,
                education: null,
                work: null,
                answers: [],
                feedback: null,
                improvement: 'Tidak ada yang perlu diperbaiki',
            }),
            myValue: '',
            myOptions: [],
            myOptionsLayanan: [],
            genderOptions: ['Laki-laki', 'Perempuan'],
            educationOptions: [
                'SD',
                'SMP atau Sederajat',
                'SMA atau Sederajat',
                'Strata 1 (S1)',
                'Strata 2 (S2)',
                'Strata 3 (S3)',
            ],
            workOptions: [
                'ASN / TNI / POLRI',
                'Pegawai Swasta',
                'Wiraswasta',
                'Tenaga Honor / Ahli / Kontrak',
                'Pelajar / Mahasiswa',
                'Lainnya',
            ],
            ageOptions: ['Dibawah 20 Tahun', '21 s/d 30 Tahun', '31 s/d 40 Tahun', '41 s/d 50 Tahun', 'Diatas 50 Tahun'],
        };
    },
    computed: {
        charIndex() {
            return (i) => {
                return String.fromCharCode(97 + i);
            }
        },
    },
    components: {
        Select2,
        'has-error': HasError
    },
    methods: {
        loadUnit: function () {
            axios
                .get('/api/get/unit')
                .then((response) => {
                    console.log(response);
                    this.myOptions = response.data;
                });
        },
        loadLayanan: function (id_unit_pengolah) {
            this.loadingPelayanan = true;
            axios
                .get('/api/get/layanan/' + id_unit_pengolah)
                .then((response) => {
                    console.log(response);
                    this.myOptionsLayanan = response.data;
                    this.loadingPelayanan = false;
                });
        },
        loadQuestion: function () {
            axios
                .get('/api/get/questions')
                .then((response) => {
                    // console.log(response);
                    this.quiz.questions = response.data;
                    this.userResponses = Array(this.quiz.questions.length).fill(null);
                });
        },
        restart: function () {
            this.questionIndex = -1;
            this.userResponses = Array(this.quiz.questions.length).fill(null);
            this.form.reset();
        },
        selectOption: function (index) {
            // Vue.set(this.userResponses, this.questionIndex, index);
            this.userResponses[this.questionIndex] = index;
            console.log(this.userResponses);
            this.form.answers = this.userResponses;
        },
        next: function () {
            if (this.questionIndex < this.quiz.questions.length + 1)
                this.questionIndex++;
        },
        nextBiodata: function () {


            let validForm = false;
            if (this.form.id_layanan != null && this.form.name != null && this.form.no_hp != null && this.form.address != null &&
                this.form.gender != null && this.form.age != null && this.form.education != null && this.form.work != null) {
                validForm = true;
            }
            console.log('validForm');
            console.log(validForm);

            if (this.questionIndex < this.quiz.questions.length + 1 && validForm == true) {
                this.questionIndex++;
            } else {
                Swal.fire(
                    "Failed",
                    'Silahkan Lengkapi Biodata terlebih dahulu',
                    "warning"
                );
            }

        },

        prev: function () {
            if (this.quiz.questions.length > 0) this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function () {
            var score = 0;
            for (let i = 0; i < this.userResponses.length; i++) {
                if (
                    typeof this.quiz.questions[i].responses[
                    this.userResponses[i]
                    ] !== "undefined" &&
                    this.quiz.questions[i].responses[this.userResponses[i]].correct
                ) {
                    score = score + 1;
                }
            }
            return score;

            //return this.userResponses.filter(function(val) { return val }).length;
        },
        submitSurvey() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            console.log(this.form);
            this.form.post("api/store/survey")
                .then((response) => {
                    console.log('response storeSurvey');
                    console.log(response);

                    setTimeout(() => {

                        this.loading = false;
                        this.disabled = false;
                        this.$Progress.finish();

                        Toast.fire({
                            icon: "success",
                            title: "Data saved successfully",
                        });

                        if (this.questionIndex < this.quiz.questions.length + 1)
                            this.questionIndex++;
                    }, 1000)


                }).catch(error => {
                    console.log(error);
                    Swal.fire(
                        "Failed",
                        error,
                        "warning"
                    );
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.finish();
                })
        }
    },
    mounted() {
        this.loadUnit();
        this.loadQuestion();
    },
    watch: {
        'form.id_unit_pengolah': {
            handler: function (id_unit_pengolah) {
                console.log('id_unit_pengolah');
                console.log(id_unit_pengolah);
                this.loadLayanan(id_unit_pengolah);
            },
            deep: true,
            immediate: true
        }
    }

};
</script>
  
<!-- <style scoped> -->
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

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: #cfd8dc;
    /* mocking native UI */
    cursor: default !important;
    /* remove text selection cursor */
    user-select: none;
    /* remove text selection */
    user-drag: none;
    /* disbale element dragging */
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    transition: 0.3s;
}

.title,
.subtitle {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
}

.animated {
    transition-duration: 0.15s;
}

/* .container {
    margin: 0 0.5rem;
} */

.questionBox {
    /* max-width: 30rem; */
    /* width: 30rem; */
    min-height: 30rem;
    background: #fafafa;
    position: relative;
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin: 0 auto !important;
}

.questionBox header {
    background: rgba(0, 0, 0, 0.025);
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.questionBox header h1 {
    font-weight: bold;
    margin-bottom: 1rem !important;
}

.questionBox header .progressContainer {
    width: 60%;
    margin: 0 auto;
}

.questionBox header .progressContainer>progress {
    margin: 0 auto;
    border-radius: 5rem;
    overflow: hidden;
    border: none;
    color: #3d5afe;
}

.questionBox header .progressContainer>progress::-moz-progress-bar {
    background: #3d5afe;
}

.questionBox header .progressContainer>progress::-webkit-progress-value {
    background: #3d5afe;
}

.questionBox header .progressContainer>p {
    margin: 0;
    margin-top: 0.5rem;
}

.questionBox .titleContainer {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
    font-size: large;
    font-weight: bold;
}

.questionBox .quizForm {
    display: block;
    white-space: normal;
    height: 100%;
    width: 100%;
}

.questionBox .quizForm .quizFormContainer {
    height: 100%;
    margin: 15px 18px;
}

.questionBox .quizForm .quizFormContainer .field-label {
    text-align: left;
    margin-bottom: 0.5rem;
}

.questionBox .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;
}

.questionBox .quizCompleted>.icon {
    color: #ff5252;
    font-size: 5rem;
}

.questionBox .quizCompleted>.icon .is-active {
    color: #00e676;
}

.questionBox .questionContainer {
    white-space: normal;
    height: 100%;
    width: 100%;
}

.questionBox .questionContainer .optionContainer {
    margin-top: 12px;
    flex-grow: 1;
}

.questionBox .questionContainer .optionContainer .option {
    border-radius: 290486px;
    padding: 9px 18px;
    margin: 0 18px;
    margin-bottom: 12px;
    transition: 0.3s;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.85);
    border: transparent 1px solid;
}

.questionBox .questionContainer .optionContainer .option.is-selected {
    border-color: rgba(0, 0, 0, 0.25);
    /* background-color: white; */
    background-color: greenyellow;
}

.questionBox .questionContainer .optionContainer .option:hover {
    /* background-color: rgba(0, 0, 0, 0.1); */
    background-color: green;
}

.questionBox .questionContainer .optionContainer .option:active {
    transform: scaleX(0.9);
}

.questionBox .questionContainer .questionFooter {
    background: rgba(0, 0, 0, 0.025);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    align-self: flex-end;
}

.questionBox .questionContainer .questionFooter .pagination {
    margin: 15px 25px;
}

.pagination {
    display: flex;
    justify-content: space-between;
}

.button {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5rem;
    margin: 0 0.25rem;
    transition: 0.3s;
}

.button:hover {
    cursor: pointer;
    background: #eceff1;
    border-color: rgba(0, 0, 0, 0.25);
}

.button.is-active {
    background: #3d5afe;
    color: white;
    border-color: transparent;
}

.button.is-active:hover {
    background: #0a2ffe;
}

@media screen and (min-width: 769px) {
    .questionBox {
        align-items: center;
        justify-content: center;
    }

    .questionBox .questionContainer {
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 768px) {
    .sidebar {
        height: auto !important;
        border-radius: 6px 6px 0px 0px;
    }
}

/* 
.select2-container .select2-selection {
    line-height: 1.6 !important;
    height: 2.375rem !important;
    border-radius: 3px !important;
}

.select2-selection .select2-selection--single {
    line-height: 1.6 !important;
    height: 2.275rem !important;
    border-radius: 7px !important;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 2.275rem !important;
}

.select2-selection--multiple {
    overflow: hidden !important;
    height: auto !important;
}

.select2-selection--single {
    overflow: hidden !important;
    height: auto !important;
} */

/* .select2-selection .select2-selection--single {
    display: block !important;
    width: 100% !important;
    height: calc(1.6em + 0.75rem + 2px) !important;
    padding: 0.375rem 0.75rem !important;
    font-size: 0.9rem !important;
    font-weight: 400 !important;
    line-height: 1.6 !important;
    color: #495057 !important;
    background-color: #fff !important;
    background-clip: padding-box !important;
    border: 1px solid #ced4da !important;
    border-radius: 0.25rem !important;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
}

.select2-selection__rendered {
    line-height: 31px !important;
} */

/* .select2-container .select2-selection--single {
    height: 35px !important;
} */

/* .select2-container .select2-selection--single {
    height: 38px !important;
}

.select2-selection__arrow {
    height: 34px !important;
} */

.select2-container .select2-selection--single {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 38px !important;
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
} 
button:disabled,
button[disabled] {
    background-color: grey !important;
    background: gray !important;
}</style>