<template>
    <!-- <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0"> Rekapitulasi Triwulan <strong> {{ triwulan }}</strong></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Survey IKM</a></li>
                        <li class="breadcrumb-item"><a href="#">Rekapitulasi Triwulan</a></li>
                        <li class="breadcrumb-item active">Index</li>
                    </ol>
                </div>
            </div>
        </div>
    </div> -->

    <div class="content pt-5">
        <div class="container">




            <div class="row justify-content-md-center">

                <div class="col-lg">

                    <div class="card">

                        <div class="card-body">

                            <div class="col-12 text-center justify-content-center">
                                <h4 style="text-transform: uppercase; margin: 0 !important;">
                                    <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan Masyarakat</span>
                                    <span v-if="tipe_survey === 'ipk'">Indeks Persepsi Korupsi</span> <br>
                                    Rekapitulasi per Unsur Triwulan {{ quarter }} Tahun {{ year }}<br>

                                </h4>
                                <h4 style="text-transform: uppercase;">
                                    KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN
                                </h4>

                            </div>

                            <div class="col-12">

                                <table class="table table-hover table-bordered well wells dataTable no-footer"
                                    style="font-size: small;">
                                    <thead>
                                        <tr>
                                            <th class="text-center fontsmaller smallfont">No</th>
                                            <th class="text-center fontsmaller smallfont">Unsur</th>
                                            <th class="text-center fontsmaller smallfont">Jumlah Pertanyaan</th>
                                            <th class="text-center fontsmaller smallfont">Total Nilai</th>
                                            <th class="text-center fontsmaller smallfont">Nilai Rerata Unsur</th>
                                            <th class="text-center fontsmaller smallfont">Nilai Rerata Tertimbang Unsur
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr v-for="recap in factored_recapitulation" :key="recap.key">
                                            <td class="text-center">{{ recap.key }}</td>
                                            <td>{{ recap.unsur }}</td>
                                            <td class="text-center">1</td>
                                            <td class="text-center">{{ recap.summed }}</td>
                                            <td class="text-center">{{ recap.average }}</td>
                                            <td class="text-center">{{ recap.weighted_average }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" class="text-right font-weight-bold">Indeks Survey Kepuasan
                                                Masyarakat</td>
                                            <td class="text-center font-weight-bold">{{ nilai_sikm }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" class="text-right font-weight-bold">Konversi</td>
                                            <td class="text-center font-weight-bold">{{ konversi }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" class="text-right font-weight-bold">Mutu Pelayanan</td>
                                            <td class="text-center font-weight-bold">{{ mutu_pelayanan }}</td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                        </div>
                    </div>

                </div>


            </div>

            <!--  -->
            <div class="row justify-content-md-center">

                <div class="col-lg">

                    <div class="card">

                        <div class="card-body">

                            <div class="col-12 text-center justify-content-center">
                                <h4 style="text-transform: uppercase; margin: 0 !important;">
                                    <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan Masyarakat</span>
                                    <span v-if="tipe_survey === 'ipk'">Indeks Persepsi Korupsi</span> <br>
                                    Rangkuman Survey Triwulan {{ quarter }} Tahun {{ year }}<br>

                                </h4>
                                <h4 style="text-transform: uppercase;">
                                    KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN
                                </h4>

                            </div>

                            <div class="col-12">

                                <table class="table table-hover table-bordered well wells dataTable no-footer"
                                    style="font-size: small;">
                                    <thead>
                                        <tr>
                                            <th colspan="4" class="text-center text-uppercase abu-abu-gelap"
                                                style="padding:5px;">
                                                <h4 style="margin:0">Jenis Pelayanan yang dinilai</h4>
                                            </th>
                                            <th colspan="3" class="text-center text-uppercase abu-abu"
                                                style="padding:5px;">
                                                <h4 style="margin:0">Semua Jenis Pelayanan</h4>
                                            </th>

                                        </tr>
                                        <tr>
                                            <th colspan="4" class="text-center text-uppercase abu-abu-gelap"
                                                style="padding:5px;">
                                                <h4 style="margin:0">Tahun Penilaian</h4>
                                            </th>
                                            <th colspan="3" class="text-center text-uppercase abu-abu"
                                                style="padding:5px;">
                                                <h4 style="margin:0">{{ year }}</h4>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th rowspan="9" colspan="4" class="text-center text-uppercase centered"
                                                style="padding:5px;">
                                                <h1 style="margin:0; font-size: 137px !important;">{{ konversi }}</h1>
                                                <h4 style="margin:0">{{ mutu_pelayanan }}</h4>
                                            </th>
                                            <th colspan="3" class="text-center text-uppercase abu-abu-gelap"
                                                style="padding:5px;">
                                                Ringkasan Responden</th>
                                        </tr>
                                        <tr>
                                            <th class="marginpadding-minimal centered abu-abu-gelap">Jumlah Responden
                                            </th>
                                            <th class="marginpadding-minimal centered" colspan="2">{{
                                                rangkuman_responden.total_responden }} orang</th>
                                        </tr>

                                        <tr v-for="(value, name) in gender" :key="name">
                                            <th class="marginpadding-minimal centered abu-abu-gelap" rowspan="2"
                                                v-if="name === 'Laki-laki'">Jenis Kelamin</th>
                                            <th class="marginpadding-minimal abu-abu">{{ name }}</th>
                                            <th class="marginpadding-minimal righted">{{ value }} orang</th>
                                        </tr>


                                        <tr v-for="(value, name) in age" :key="name">
                                            <th class="marginpadding-minimal centered abu-abu-gelap" rowspan="5"
                                                v-if="name === 'Dibawah 20 Tahun'">
                                                Umur</th>
                                            <th class="marginpadding-minimal abu-abu">{{ name }}</th>
                                            <th class="marginpadding-minimal righted">{{ value }} orang</th>
                                        </tr>
                                        <tr>
                                            <th class="centered marginpadding-minimal abu-abu-gelap" rowspan="2">
                                                Pekerjaan
                                            </th>
                                            <th class="centered marginpadding-minimal abu-abu"
                                                v-for="(value, name) in work" :key="name">
                                                {{ name }}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th class="centered marginpadding-minimal" v-for="(value, name) in work"
                                                :key="name">
                                                {{ value }} orang
                                            </th>
                                        </tr>

                                        <tr>
                                            <th class="centered marginpadding-minimal abu-abu-gelap" rowspan="2">
                                                Pendidikan
                                            </th>
                                            <th class="centered marginpadding-minimal abu-abu"
                                                v-for="(value, name) in education" :key="name">
                                                {{ name }}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th class="centered marginpadding-minimal"
                                                v-for="(value, name) in education" :key="name">
                                                {{ value }} orang
                                            </th>
                                        </tr>
                                    </thead>



                                </table>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
            <!--  -->

            <div class="row justify-content-md-center">

                <div class="col-lg">
                    <div class="card">
                        <!-- <div class="card-header">
            <h4 class="card-title m-0">Rekapitulasi Triwulan <strong> {{ triwulan }}</strong></h4>
        </div> -->

                        <div class="card-body" style="overflow-x:auto;">

                            <!-- <div class="col-12 text-center justify-content-center">
                                <h4 style="text-transform: uppercase; margin: 0 !important;">
                                    <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan Masyarakat</span>
                                    <span v-if="tipe_survey === 'ipk'">Indeks Persepsi Korupsi</span> <br>
                                    Rekapitulasi per Layanan Triwulan {{ quarter }} Tahun {{ year }}<br>

                                </h4>
                                <h4 style="text-transform: uppercase;">
                                    KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN
                                </h4>

                            </div> -->

                            <!-- <DataTable :columns="columns" :data="data" class="table table-hover table-bordered"
                                width="100%"
                                :options="{ order: false, sort: false, paging: true, searching: false, info: false }"
                                style="font-size:smaller !important;">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th width="35%">Nama Layanan</th>
                                        <th class="text-center">Nilai Index Pelayanan</th>
                                        <th>Konversi</th>
                                        <th>Mutu Pelayanan</th>
                                        <th>Jumlah Responden</th>
                                        <th width="10%">Aksi</th>
                                    </tr>
                                </thead>
                            </DataTable> -->


                            <!-- <div>
                                <table
                                    class="table table-hover table-bordered dataTable no-footer w-full text-sm leading-tight border border-gray-300">
                                    <thead>
                                        <tr
                                            class="bg-gray-200 text-center text-xs font-semibold uppercase tracking-wider">
                                            <th class="border border-gray-300 px-2 py-1">Nama Layanan</th>
                                            <th class="border border-gray-300 px-2 py-1">Indeks Pelayanan</th>
                                            <th class="border border-gray-300 px-2 py-1">Konversi</th>
                                            <th class="border border-gray-300 px-2 py-1">Mutu Pelayanan</th>
                                            <th class="border border-gray-300 px-2 py-1">Jumlah Responden</th>
                                            <th class="border border-gray-300 px-2 py-1">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-for="(items, unitName) in groupedRekap" :key="unitName">
                                            <tr class="bg-blue-200 text-center text-sm font-bold">
                                                <td :colspan="6" class="border border-blue-300 px-2 py-2">
                                                    UNIT: {{ unitName }}
                                                </td>
                                            </tr>

                                            <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50">
                                                <td class="border border-gray-200 px-2 py-1 text-left">{{
                                                    item.layanan.name }}</td>
                                                <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                    item.index_pelayanan }}</td>
                                                <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                    item.konversi }}</td>
                                                <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                    item.mutu_pelayanan }}</td>
                                                <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                    item.jumlah_responden }}</td>
                                                 <td class="border border-gray-300 text-center">
                                                    <a class="badge badge-primary text-white">detail</a>
                                                </td>
                                            </tr>

                                            <tr class="bg-yellow-100 font-medium text-sm">
                                                <td class="border border-gray-300 px-2 py-1 text-right">Rata-rata</td>
                                                <td class="border border-gray-300 px-2 py-1 text-center">
                                                    {{
                                                        (
                                                            items.reduce((sum, i) => sum + parseFloat(i.index_pelayanan || 0),
                                                                0) / items.length
                                                        ).toFixed(2)
                                                    }}
                                                </td>
                                                <td class="border border-gray-300 px-2 py-1 text-center">
                                                    {{
                                                        (
                                                            items.reduce((sum, i) => sum + parseFloat(i.konversi || 0), 0) /
                                                            items.length
                                                        ).toFixed(2)
                                                    }}
                                                </td>
                                                <td class="border border-gray-300 px-2 py-1 text-center">
                                                    {{getMutuKategori(
                                                        items.reduce((sum, i) => sum + parseFloat(i.index_pelayanan || 0),
                                                            0) / items.length
                                                    )}}
                                                </td>
                                                <td class="border border-gray-300 px-2 py-1 text-center">
                                                    {{
                                                        Math.round(
                                                            items.reduce((sum, i) => sum + parseFloat(i.jumlah_responden || 0),
                                                                0) / items.length
                                                        )
                                                    }}
                                                </td>
                                                <td class="border border-gray-300 text-center">
                                                    <a class="badge badge-primary text-white">detail</a>
                                                </td>
                                            </tr>
                                        </template>
</tbody>
</table>
</div> -->


                            <div class="space-y-4">
                                <div v-for="(items, unitName) in groupedRekap" :key="unitName"
                                    class="border border-gray-300 rounded-md">
                                    <!-- Accordion Header -->
                                    <button @click="toggleUnit(unitName)"
                                        class="w-full text-left px-4 py-2 bg-blue-600 text-dark font-semibold rounded-t-md flex justify-between items-center">
                                        <span>UNIT: {{ unitName }}</span>
                                        <span>{{ expandedUnits.includes(unitName) ? '−' : '+' }}</span>
                                    </button>

                                    <!-- Accordion Content -->
                                    <div v-show="expandedUnits.includes(unitName)" class="p-4 bg-white">


                                        <div class="text-center mb-3">

                                            <h5 style="text-transform: uppercase; margin: 0 !important;">
                                                <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan Masyarakat</span>
                                                <span v-if="tipe_survey === 'ipk'">Indeks Persepsi Korupsi</span>
                                                Triwulan {{ quarter }} Tahun {{ year }}
                                                <br>
                                                <span style="font-size: larger;">{{ unitName }}</span>
                                                <br>
                                                KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN <br>


                                            </h5>
                                            <!-- <h5 style="text-transform: uppercase;">
                                                KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN
                                            </h5> -->
                                        </div>


                                        <table class="w-full text-sm leading-tight border border-gray-300">
                                            <thead>
                                                <tr
                                                    class="bg-gray-200 text-center text-xs font-semibold uppercase tracking-wider">
                                                    <th class="border border-gray-300 px-2 py-1">Nama Layanan</th>
                                                    <th class="border border-gray-300 px-2 py-1">Jumlah Responden
                                                    </th>
                                                    <th class="border border-gray-300 px-2 py-1">Indeks Pelayanan
                                                    </th>
                                                    <th class="border border-gray-300 px-2 py-1">Konversi</th>
                                                    <th class="border border-gray-300 px-2 py-1">Mutu Pelayanan</th>

                                                    <!-- <th class="border border-gray-300 px-2 py-1">Aksi</th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Data Rows -->
                                                <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-2 py-1 text-left">{{
                                                        item.layanan.name }}</td>
                                                    <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                        item.jumlah_responden }}</td>
                                                    <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                        parseFloat(item.index_pelayanan).toFixed(2) }} </td>
                                                    <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                        parseFloat(item.konversi).toFixed(2) }}</td>
                                                    <td class="border border-gray-200 px-2 py-1 text-center">{{
                                                        item.mutu_pelayanan }}</td>

                                                    <!-- <td class="border border-gray-300 text-center">
                                                        <a
                                                            class="badge badge-primary text-white cursor-pointer">detail</a>
                                                    </td> -->
                                                </tr>

                                                <!-- Rata-rata Row -->
                                                <tr class="bg-yellow-100 font-medium text-sm"
                                                    style="background-color: yellow; font-weight: bolder;">
                                                    <td class="border border-gray-300 px-2 py-1 text-right">
                                                        Rata-rata</td>
                                                    <td class="border border-gray-300 px-2 py-1 text-center">
                                                        {{
                                                            Math.round(
                                                                items.reduce((sum, i) => sum + parseFloat(i.jumlah_responden
                                                                    || 0), 0)
                                                            )
                                                        }}
                                                    </td>
                                                    <td class="border border-gray-300 px-2 py-1 text-center">
                                                        {{
                                                            (
                                                                items.reduce((sum, i) => sum + parseFloat(i.index_pelayanan
                                                                    || 0), 0) / items.length
                                                            ).toFixed(2)
                                                        }}
                                                    </td>
                                                    <td class="border border-gray-300 px-2 py-1 text-center">
                                                        {{
                                                            (
                                                                items.reduce((sum, i) => sum + parseFloat(i.konversi || 0),
                                                                    0) / items.length
                                                            ).toFixed(2)
                                                        }}
                                                    </td>
                                                    <td class="border border-gray-300 px-2 py-1 text-center">
                                                        {{
                                                            getMutuKategori(
                                                                items.reduce((sum, i) => sum + parseFloat(i.index_pelayanan
                                                                    || 0), 0) / items.length
                                                            )
                                                        }}
                                                    </td>

                                                    <!-- <td class="border border-gray-300 text-center">
                                                        <a class="badge badge-primary text-white">detail</a>
                                                    </td> -->
                                                </tr>
                                            </tbody>
                                        </table>



                                        <!-- Tombol untuk melihat geografi responden -->
                                        <div class="text-center my-3">
                                            <button class="btn btn-success btn-sm"
                                                @click="fetchRangkumanSurvey(unitName)">
                                                Lihat Rangkuman Survey Unit
                                            </button>

                                            <button type="button" class="btn btn-primary p2 m-2 btn-sm">
                                                <a class="text-white"
                                                    :href="'/api/cetak_tabulasi/' + tipe_survey + '/' + year + '/' + triwulan  + '?unit_name=' + unitName"
                                                    target="_blank" rel="noopener noreferrer">Cetak Tabulasi Data</a>
                                            </button>
                                            <button type="button" class="btn btn-secondary p2 m-2 btn-sm">
                                                <a class="text-white"
                                                    :href="'/api/cetak_hasil/' + tipe_survey + '/' + year + '/' + triwulan  + '?unit_name=' + unitName"
                                                    target="_blank" rel="noopener noreferrer">Cetak Hasil</a>
                                            </button>
                                        </div>

                                        <div class="card mt-3" v-if="rangkuman_unit">
                                            <div class="card-body">

                                                <div class="col-12 text-center justify-content-center">
                                                    <h4 style="text-transform: uppercase; margin: 0 !important;">
                                                        <span v-if="tipe_survey === 'ikm'">Indeks Kepuasan
                                                            Masyarakat</span>
                                                        <span v-if="tipe_survey === 'ipk'">Indeks Persepsi
                                                            Korupsi</span> <br>
                                                        Rangkuman Survey Triwulan {{ quarter }} Tahun {{ year }}
                                                    </h4>
                                                    <h4 style="text-transform: uppercase;">
                                                        KANTOR KEMENTERIAN AGAMA KABUPATEN PESISIR SELATAN
                                                    </h4>
                                                </div>

                                                <div class="col-12">
                                                    <table
                                                        class="table table-hover table-bordered well wells dataTable no-footer"
                                                        style="font-size: small;">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="4"
                                                                    class="text-center text-uppercase abu-abu-gelap"
                                                                    style="padding:5px;">
                                                                    <h4 style="margin:0">Jenis Pelayanan yang dinilai
                                                                    </h4>
                                                                </th>
                                                                <th colspan="3"
                                                                    class="text-center text-uppercase abu-abu"
                                                                    style="padding:5px;">
                                                                    <h6 style="margin:0">{{ rangkuman_unit.unit_name }}
                                                                    </h6>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th colspan="4"
                                                                    class="text-center text-uppercase abu-abu-gelap"
                                                                    style="padding:5px;">
                                                                    <h4 style="margin:0">Waktu Penilaian</h4>
                                                                </th>
                                                                <th colspan="3"
                                                                    class="text-center text-uppercase abu-abu"
                                                                    style="padding:5px;">
                                                                    <h4 style="margin:0">Triwulan {{ quarter }} Tahun {{
                                                                        year }}</h4>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan="9" colspan="4"
                                                                    class="text-center text-uppercase centered"
                                                                    style="padding:5px;">
                                                                    <h1 style="margin:0; font-size: 137px !important;">
                                                                        {{ rangkuman_unit.konversi }}</h1>
                                                                    <h4 style="margin:0">{{
                                                                        rangkuman_unit.mutu_pelayanan }}</h4>
                                                                </th>
                                                                <th colspan="3"
                                                                    class="text-center text-uppercase abu-abu-gelap"
                                                                    style="padding:5px;">
                                                                    Ringkasan Responden
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th
                                                                    class="marginpadding-minimal centered abu-abu-gelap">
                                                                    Jumlah Responden</th>
                                                                <th class="marginpadding-minimal centered" colspan="2">
                                                                    {{
                                                                        rangkuman_unit.rangkuman_responden.total_responden
                                                                    }} orang
                                                                </th>
                                                            </tr>

                                                            <tr v-for="(value, name) in rangkuman_unit.gender"
                                                                :key="name">
                                                                <th class="marginpadding-minimal centered abu-abu-gelap"
                                                                    rowspan="2" v-if="name === 'Laki-laki'">
                                                                    Jenis Kelamin
                                                                </th>
                                                                <th class="marginpadding-minimal abu-abu">{{ name }}
                                                                </th>
                                                                <th class="marginpadding-minimal righted">{{ value }}
                                                                    orang</th>
                                                            </tr>

                                                            <tr v-for="(value, name) in rangkuman_unit.age" :key="name">
                                                                <th class="marginpadding-minimal centered abu-abu-gelap"
                                                                    rowspan="5" v-if="name === 'Dibawah 20 Tahun'">
                                                                    Umur
                                                                </th>
                                                                <th class="marginpadding-minimal abu-abu">{{ name }}
                                                                </th>
                                                                <th class="marginpadding-minimal righted">{{ value }}
                                                                    orang</th>
                                                            </tr>

                                                            <tr>
                                                                <th class="centered marginpadding-minimal abu-abu-gelap"
                                                                    rowspan="2">Pekerjaan</th>
                                                                <th class="centered marginpadding-minimal abu-abu"
                                                                    v-for="(value, name) in rangkuman_unit.work"
                                                                    :key="name">
                                                                    {{ name }}
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th class="centered marginpadding-minimal"
                                                                    v-for="(value, name) in rangkuman_unit.work"
                                                                    :key="name">
                                                                    {{ value }} orang
                                                                </th>
                                                            </tr>

                                                            <tr>
                                                                <th class="centered marginpadding-minimal abu-abu-gelap"
                                                                    rowspan="2">Pendidikan</th>
                                                                <th class="centered marginpadding-minimal abu-abu"
                                                                    v-for="(value, name) in rangkuman_unit.education"
                                                                    :key="name">
                                                                    {{ name }}
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th class="centered marginpadding-minimal"
                                                                    v-for="(value, name) in rangkuman_unit.education"
                                                                    :key="name">
                                                                    {{ value }} orang
                                                                </th>
                                                            </tr>
                                                        </thead>
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

            </div>

            <div class="row justify-content-md-center">
                <div class="col-lg">

                    <div class="card">
                        <div class="card-body">
                            <button type="button" class="btn btn-primary p2 m-2">
                                <a class="text-white"
                                    :href="'/api/cetak_tabulasi/' + tipe_survey + '/' + year + '/' + triwulan"
                                    target="_blank" rel="noopener noreferrer">Cetak Tabulasi Data</a>
                            </button>
                            <button type="button" class="btn btn-secondary p2 m-2">
                                <a class="text-white"
                                    :href="'/api/cetak_hasil/' + tipe_survey + '/' + year + '/' + triwulan"
                                    target="_blank" rel="noopener noreferrer">Cetak Hasil</a>
                            </button>


                        </div>
                    </div>

                </div>
            </div>

            <!-- <div class="row">
                <div class="col-lg">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Rekapitulasi per <strong>Seksi</strong></h4>
                            <a :href="calcurl + year">Sinkronkan</a>
                        </div>
                    </div>


                    <div class="mb-3 text-center row">
                        <div class="col-md-3" v-for="item in dataunit" :key="item.id_unit_rekap_triwulan">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header" style="height: 80px !important;">
                                    <h4 class="my-0 font-weight-normal">{{ item.unit.name }}</h4>
                                </div>
                                <div class="card-body">
                                    <h1>{{ item.konversi }}</h1>
                                    <h3>{{ item.mutu_pelayanan }}</h3>
                                </div>
                            </div>
                        </div>


                    </div>




                </div>
            </div> -->

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
    name: "Rekap Triwulan",
    components: {
        'has-error': HasError,
        'alert-error': AlertError,
        'DataTable': DataTable
    },
    computed: {
        groupedRekap() {
            const groups = {};
            for (const item of this.rekap) {
                const unitName = item.layanan?.unit?.name || 'Unit Tidak Diketahui';
                if (!groups[unitName]) {
                    groups[unitName] = [];
                }
                groups[unitName].push(item);
            }
            return groups;
        }
    },
    data() {
        return {
            expandedUnits: [], // track unit yang sedang terbuka
            data: [],
            rekap: [],
            factored_recapitulation: [],
            ct_url: '/api/cetak_tabulasi/' + this.tipe_survey + '/' + this.year + '/' + this.quarter,
            ch_url: '/api/cetak_hasil/' + this.tipe_survey + '/' + this.year + '/' + this.quarter,
            nilai_sikm: 0,
            konversi: 0,
            mutu_pelayanan: '',
            rangkuman_responden: [],
            gender: [],
            age: [],
            education: [],
            work: [],
            dataunit: [],
            triwulan: 1,
            calcurl: '/api/calc-recap-quarter/',
            year: new Date().getFullYear(),
            loading: false,
            disabled: false,
            editModal: false,
            rangkuman_unit: null,
            columns: [
                { data: 'DT_RowIndex', className: "text-center fontsmaller smallfont" },
                { data: 'layanan.name', className: "fontsmaller smallfont" },
                { data: 'index_pelayanan', className: "text-center fontsmaller smallfont" },
                { data: 'konversi', className: "text-center fontsmaller smallfont" },
                { data: 'mutu_pelayanan', className: "text-center fontsmaller smallfont" },
                { data: 'jumlah_responden', className: "text-center fontsmaller smallfont" },
                { data: 'aksi', className: "text-center fontsmaller smallfont" },
            ]
        };
    },
    methods: {
        toggleUnit(unitName) {
            this.rangkuman_unit = null;
            const i = this.expandedUnits.indexOf(unitName);
            if (i > -1) this.expandedUnits.splice(i, 1);
            else this.expandedUnits.push(unitName);
        },
        getMutuKategori(avg) {
            if (avg >= 3.26) return 'A (Sangat Baik)';
            if (avg > 2.51) return 'B (Baik)';
            if (avg > 1.76) return 'C (Kurang Baik)';
            return 'D (Buruk)';
        },
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        fetchRangkumanSurvey(unitName) {
            const url = `/api/get/rekapitulasi-triwulan-per-unit/${this.tipe_survey}/${this.year}/${this.quarter}?unit_name=${unitName}`;
            axios
                .get(url)
                .then(data => {

                    console.log(' wwkwkwkwkdat:');
                    console.log(data.data);
                    this.rangkuman_unit = [];
                    this.rangkuman_unit.nilai_sikm = data.data.nilai_sikm || '-';
                    this.rangkuman_unit.unit_name = data.data.unit_name;
                    this.rangkuman_unit.konversi = data.data.konversi || '-';
                    this.rangkuman_unit.mutu_pelayanan = data.data.mutu_pelayanan || '-';
                    this.rangkuman_unit.rangkuman_responden = data.data.rangkuman_responden;
                    this.rangkuman_unit.gender = data.data.rangkuman_responden.gender;
                    this.rangkuman_unit.age = data.data.rangkuman_responden.age;
                    this.rangkuman_unit.education = data.data.rangkuman_responden.education;
                    this.rangkuman_unit.work = data.data.rangkuman_responden.work;
                })
                .catch(err => {
                    console.error('Gagal mengambil data rangkuman:', err);
                });
        },
        loadData() {
            this.$Progress.start();
            axios
                .get('/api/get/rekapitulasi-triwulan/' + this.$route.query.tipe_survey + '/' + this.$route.query.year + '/' + this.$route.query.quarter)
                .then((response) => {
                    console.log('response getRekapTahunan');
                    console.log(response.data);
                    this.data = response.data.data;
                    this.rekap = response.data.data;
                    this.factored_recapitulation = response.data.factored_recapitulation;
                    this.nilai_sikm = response.data.nilai_sikm;
                    this.konversi = response.data.konversi;
                    this.mutu_pelayanan = response.data.mutu_pelayanan;
                    this.rangkuman_responden = response.data.rangkuman_responden;
                    this.gender = response.data.rangkuman_responden.gender;
                    this.age = response.data.rangkuman_responden.age;
                    this.education = response.data.rangkuman_responden.education;
                    this.work = response.data.rangkuman_responden.work;
                    // this.$Progress.finish();
                });

            axios
                .get('/api/unit-rekap-triwulan/' + this.$route.query.quarter)
                .then((response) => {

                    console.log('response rekapUnitTriwulan');
                    console.log(response.data);
                    this.dataunit = response.data;
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
        this.triwulan = this.$route.query.quarter;
        this.quarter = this.$route.query.quarter;
        this.tipe_survey = this.$route.query.tipe_survey;
        this.year = this.$route.query.year;

        // alert(this.$route.query.year);
    },
    watch: {
        '$route.query.quarter': {
            handler: function (quarter) {
                console.log('quarter');
                console.log(quarter);
                this.quarter = this.$route.query.quarter;
                this.triwulan = this.$route.query.quarter;
                this.$Progress.start();
                this.loadData();
            },
            deep: true,
            immediate: true
        },
        '$route.query.year': {
            handler: function (year) {
                console.log('year');
                console.log(year);
                this.year = this.$route.query.year;
                this.$Progress.start();
                this.loadData();
            },
            deep: true,
            immediate: true
        },
        '$route.query.tipe_survey': {
            handler: function (tipe_survey) {
                console.log('tipe_survey');
                console.log(tipe_survey);
                this.tipe_survey = this.$route.query.tipe_survey;
                this.$Progress.start();
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

.marginpadding-minimal {
    padding: 5px !important;
    margin: 5px !important;
}

.marginpadding-minimal th {
    padding: 5px !important;
    margin: 5px !important;
}

.centered {
    text-align: center;
    vertical-align: middle;
}

.abu-abu-gelap {
    background-color: silver;
}

.abu-abu {
    background-color: whitesmoke;
}

.righted {
    text-align: right;
    vertical-align: middle;
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

.smallfont {
    font-size: x-small !important;
}

.paginate-button {
    padding: 0 !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0 !important;
}
</style>

<style>
.paginate-button {
    padding: 0 !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0 !important;
}
</style>